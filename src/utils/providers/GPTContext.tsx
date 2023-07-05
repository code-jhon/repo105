/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react';
import { ChatContextProviderInterface, GPTContextType, Message } from '../types/';
import API from '../../services/api';

export const GPTContext = createContext({} as GPTContextType);

export const GPTProvider: React.FC<ChatContextProviderInterface>= ({ children }) => {
  const [prompt, setPrompt] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    { role: "system", content: import.meta.env.VITE_OPENAI_PROMPT }
  ]);
  const [fetched, setFetched] = useState<boolean>(false);

  // update messages when prompt changes
  const clickHandler = () => {
    setFetched(false);
    setMessages([...messages, { role: "user", content: prompt }]);
    setPrompt('');
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
    <GPTContext.Provider value={{ prompt, setPrompt, messages, setMessages, clickHandler }}>
      {children}
    </GPTContext.Provider>
  );
};

