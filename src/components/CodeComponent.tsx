import React, { useContext } from 'react';
import { GPTContext } from '../utils/providers/GPTContext';

interface CodeComponentProps {
  setToastType: React.Dispatch<React.SetStateAction<string>>;
  setToastMessage: React.Dispatch<React.SetStateAction<string>>;
}

const CodeComponent: React.FC<CodeComponentProps> = ({setToastType, setToastMessage}) => {
  const { messages, setContent } = useContext(GPTContext);
  const filteredMessages = messages.filter( (message) => message.role !== 'system');
  const parseMessage = (message: string) => {
    // filter the message looking for code inside triplebackticks
    const tripleQuoteRegex = /```([\s\S]*?)```/;
    const match = message.match(tripleQuoteRegex);
    const content = match ? match[1] : "";

    return content;
  };

  const handleRender = (content: string) => {
    setContent(content)
  };

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    setToastType('success');
    setToastMessage('Copied to clipboard');
  };

  const messagesContent = filteredMessages.map( (message, index) => {
    const parsedMessage = parseMessage(message.content);
    let content = ""
    if(parsedMessage !== "") {
      content = message.content.replace(parsedMessage, `<pre><code>${parsedMessage}</code></pre>`);
    }else{
      content = message.content;
    }
    return (
      <div key={index} className={`flex flex-row ${(message.role === 'system' || message.role === 'assistant') ? 'justify-start' : 'justify-end'}`}>
        <div className={`bg-gray-600 text-white m-1 p-1 rounded ${message.role === 'system' ? 'w-1/2' : 'w-3/4'}`}>
          { content }
          <br />
          { parsedMessage !== "" && (
            <div className='flex flex-row justify-between'>
              <button className="text-gray-400" onClick={() => handleRender(parsedMessage)}>Render snippet</button>
              {' '}
              <button className="text-gray-400" onClick={() => handleCopy(parsedMessage)}>Copy</button>
            </div>
          )}
          {' '}
        </div>
      </div>
    );
  }
  );

  return (
    <div className="bg-gray-800 text-white rounded h-full break-words overflow-auto max-h-400 max-w-full">
      { messagesContent }
    </div>
  );
};

export default CodeComponent;