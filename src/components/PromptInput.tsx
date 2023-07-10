/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext } from 'react'
import { GPTContext } from '../utils/providers/GPTContext';

const PromptInput: React.FC = () => {
  const { prompt, setPrompt, clickHandler, handleClearHistory } = useContext(GPTContext);
  const [charCount, setCharCount] = useState(0);
  const [inputError, setInputError] = useState(false);
  const limit = 500;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key === 's') {
      // Perform the desired action when CMD+S (or Ctrl+S) is pressed
      event.preventDefault(); // Prevent the default browser behavior (e.g., saving the page)
      console.log('CMD+S (or Ctrl+S) pressed');
      // Add your code here
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(e.target.value.length <= limit){
      setCharCount(e.target.value.length);
      setPrompt(e.target.value);
      setInputError(false);
    }else{
      setInputError(true);
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
        placeholder='Type your prompt here...'
        onChange={handleChange}
        value={prompt}
      ></textarea>
      <span className={`${inputError ? 'text-red-400' : 'text-gray-400'}`}>{`${limit - charCount}`}</span>
      <button onClick={clickHandler} onKeyDown={handleKeyDown} className="pl-5">Send</button>
      <button onClick={handleClear} className="pl-5">Clear</button>
      <button onClick={handleClearHistory} className="pl-5">Clear History</button>
    </div>
  )
}

export default PromptInput;