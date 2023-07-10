import axios from 'axios';
import { Message } from '../utils/types';

type fetchDataType = (messages: Message[]) => Promise<Message>;


const fetchData: fetchDataType = async (messages: Message[]) => {
  try{
    const data = await axios.post(
      import.meta.env.VITE_OPENAI_URL,
      {
        model: 'gpt-3.5-turbo',
        messages,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
        },
      },
    )
    return data.data.choices[0].message;
  } catch (error) {
    console.log(error);
  }
};

const API = {
  getChatCompletion: (messages: Message[]) => fetchData(messages)
};

export default API