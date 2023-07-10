export interface GPTResponse {
  created: number;
  id: string;
  object: string;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: {
    index: number;
    finish_reason: string;
    message: {
      content: string;
      role: string;
    }
  }[];
}

export interface Message {
  role: string;
  content: string;
}

export interface ChatContextProviderInterface {
  children: React.ReactNode;
}

export interface GPTContextType {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  clickHandler: () => void;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  handleClearHistory: () => void;
}

export interface USEGPTInterface {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

export interface GPTProviderProps {
  children: React.ReactNode;
}