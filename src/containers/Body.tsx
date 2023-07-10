import React, { useRef, useState, useEffect } from 'react';
import { CodeComponent, CodeRenderer, PromptInput } from '../components';

import asist from '../assets/asist.gif';
import ToastMessage from '../components/ToastMessage';

const Body: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [show, setShow] = useState(true);
  const [toastType, setToastType] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (toastType && toastMessage) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }
  , [toastType, toastMessage]);

  const handleClick = () => {
    setShow(!show);
    if (buttonRef.current) {
      buttonRef.current.blur();
    }
  };

  return (
    <div className="bg-gray-900 p-4 h-screen">
      <div className="flex h-full">
        { show && <div className={`absolute transition-opacity duration-500 bottom-0 right-0 w-screen h-40 bg-gray-600 bg-opacity-80 border border-gray-700 rounded-md p-4`}>
            <div className="flex flex-col text-white font-semibold">
              <PromptInput />
            </div>
          </div>
        }
        
        <div className="w-1/2 bg-gray-600 border border-gray-700 rounded-md p-4 mr-2">
          {/* Content for the first section */}
          <div className="flex flex-col h-full">
            <CodeComponent setToastType={setToastType} setToastMessage={setToastMessage}/>
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
      {
        showToast && <ToastMessage
          toastType={toastType}
          toastMessage={toastMessage}
          show={showToast}
          setShow={setShowToast}
        />
      }
    </div>
  );
};

export default Body;
