/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react'
import { GPTContext } from '../utils/providers/GPTContext';

const PromptInput: React.FC = () => {
  const { prompt, setPrompt, clickHandler, handleClearHistory } = useContext(GPTContext);
  const [charCount, setCharCount] = useState(0);
  const [inputError, setInputError] = useState(false);
  const [placeHolder, setPlaceHolder] = useState('Type your prompt here...');
  const limit = 500;

  useEffect(() => {
    const OS = getOperativeSystem();
    if(OS === 'Windows'){
      setPlaceHolder('Type your prompt here... (Ctrl + Enter to send)');
    }else if(OS === 'Mac'){
      setPlaceHolder('Type your prompt here... (Cmd + Enter to send)');
    }else{
      setPlaceHolder('Type your prompt here...');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(e.target.value.length <= limit){
      setCharCount(e.target.value.length);
      setPrompt(e.target.value);
      setInputError(false);
    }else{
      setInputError(true);
    }
  }

  const getOperativeSystem = () => {
    const userAgent = window.navigator.userAgent;
    console.log(userAgent);
    if(userAgent.includes('Windows')){
      return 'Windows';
    }else if(userAgent.includes('Mac')){
      return 'Mac';
    }else if(userAgent.includes('Linux')){
      return 'Linux';
    }else{
      return 'Unknown';
    }
  }

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const OS = getOperativeSystem();
    if(OS === 'Windows'){
      if(e.ctrlKey && e.key === 'Enter'){
        clickHandler();
      }
    }else if(OS === 'Mac'){
      if(e.metaKey && e.key === 'Enter'){
        clickHandler();
      }
    }
  }

  const handleClear = () => {
    setPrompt('');
    setCharCount(0);
    setInputError(false);
  }

  return (
    <div>
      <textarea 
        className={`bg-gray-800 text-white p-4 rounded h-full w-full pr-10 ${inputError ? 'text-red-400' : ''}`} 
        name="" id="" 
        rows={3}
        placeholder={placeHolder}
        onChange={handleChange}
        value={prompt}
        onKeyDown={handleOnKeyDown}
      ></textarea>
      <span className={`${inputError ? 'text-red-400' : 'text-gray-400'}`}>{`${limit - charCount}`}</span>
      { charCount > 0 && <button onClick={clickHandler} className="pl-5">Send</button> }
      <button onClick={handleClear} className="pl-5">Clear</button>
      <button onClick={handleClearHistory} className="pl-5">Clear History</button>
    </div>
  )
}

export default PromptInput;