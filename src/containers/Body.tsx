import React, { useRef, useState } from 'react';
import { CodeComponent, CodeRenderer, PromptInput } from '../components';

import asist from '../assets/asist.gif';

const Body: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    if (buttonRef.current) {
      buttonRef.current.blur();
    }
  };

  return (
    <div className="bg-gray-900 p-4 h-screen">
      <div className="flex h-full">
        <div className={`${show ? 'opacity-0' : 'opacity-100'} absolute transition-opacity duration-500 bottom-0 right-0 w-screen h-40 bg-gray-600 bg-opacity-80 border border-gray-700 rounded-md p-4`}>
          {/* Content for the floating div */}
          <div className="flex flex-col text-white font-semibold">
            <PromptInput />
          </div>
        </div>
        <div className="w-1/2 bg-gray-600 border border-gray-700 rounded-md p-4 mr-2">
          {/* Content for the first section */}
          <div className="flex flex-col h-full">
            <CodeComponent />
          </div>
        </div>
        <div className="w-1/2 bg-gray-600 border border-gray-700 rounded-md p-4 ml-2">
          {/* Content for the second section */}
          <div className="flex flex-col h-full">
            <CodeRenderer />
          </div>
        </div>
      </div>     
      <button 
        ref={buttonRef} 
        onClick={handleClick} 
        className={`absolute bg-black right-0 bottom-0 w-20 h-20 rounded-full m-3 bg-center bg-cover shadow scale-100 transition duration-1300 ease-in-out hover:scale-125`}
        style={{ backgroundImage: `url(${asist})` }}
      >
      </button>
    </div>
  );
};

export default Body;
