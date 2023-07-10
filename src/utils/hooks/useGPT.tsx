import { Dispatch, SetStateAction, useEffect } from 'react'
import API from '../../services/api';
import { Message } from '../types';

type useGPTType = (
  prompt: string, messages: Message[], setMessages: Dispatch<SetStateAction<Message[]>>
  ) => { 
    messages: Message[]; 
    setMessages: Dispatch<SetStateAction<Message[]>> 
  }

const useGPT: useGPTType = (prompt, messages, setMessages) => {
  useEffect( () => {
    API.getChatCompletion(messages).then( (response) => {
      setMessages([...messages, { role: "system", content: response.toString() }]);
    });

  }, [messages]);

  return { messages, setMessages };
}

export default useGPT;
