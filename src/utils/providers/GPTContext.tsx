/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react';
import { ChatContextProviderInterface, GPTContextType, Message } from '../types/';
import API from '../../services/api';

export const GPTContext = createContext({} as GPTContextType);

export const GPTProvider: React.FC<ChatContextProviderInterface>= ({ children }) => {
  const [prompt, setPrompt] = useState<string>('');
  /*
    You are a software developer specializing in web technologies. 
    As an AI, your task is to generate code snippets that align with clean code principles. 
    Your goal is to provide the right code without any explanations or additional output. 
    However, you should include useful comments within the code to improve readability and understanding. 
    Finally, remember to add comments at the end of the code to provide any necessary considerations or notes. 
    Please provide specific requirements or prompts for each code snippet you would like me to generate.
  */
  const [messages, setMessages] = useState<Message[]>([
    { role: "system", content: import.meta.env.VITE_OPENAI_PROMPT }
  ]);
  const [fetched, setFetched] = useState<boolean>(true);
  const [content, setContent] = useState<string>(''); // for code renderer

  // update messages when prompt changes
  const clickHandler = () => {
    setFetched(false);
    setMessages([...messages, { role: "user", content: prompt }]);
    setPrompt('');
  }

  const handleClearHistory = () => {
    setMessages([{ role: "system", content: import.meta.env.VITE_OPENAI_PROMPT }]);
  }

  useEffect( () => {
    const retreiveMessages = async () => {
      const response = await API.getChatCompletion(messages);
      setMessages([...messages, response]);
      setFetched(true);
    }
    !fetched && retreiveMessages();
  }, [messages]);

  return (
    <GPTContext.Provider value={{ prompt, setPrompt, messages, setMessages, clickHandler, content, setContent, handleClearHistory }}>
      {children}
    </GPTContext.Provider>
  );
};

