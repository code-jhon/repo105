import React, { useRef, useState } from 'react';
import CodeComponent from '../components/CodeComponent';
import CodeRenderer from '../components/CodeRenderer';
import Tooltip from '../components/Tooltip';

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
        <div className={`${show ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 absolute h-screen right-0 w-full sm:w-1/3 top-0 bg-gray-600 bg-opacity-80 border border-gray-700 rounded-md p-4`}>
          {/* Content for the floating div */}
          <div className="flex flex-col">CHATBOT</div>
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
      <Tooltip text="This is a tooltip">      
        <button 
          ref={buttonRef} 
          onClick={handleClick} 
          className={`absolute bg-black right-0 bottom-0 w-20 h-20 transition-transform duration-1000 rounded-full m-3`}
          style={{ transform: show ? 'translateX(0)' : 'translateX(-50%)' }}
        >
            <img src={asist} alt="loader" className='rounded-full' />
        </button>
      </Tooltip>
    </div>
  );
};

export default Body;
