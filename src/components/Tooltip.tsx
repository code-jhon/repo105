import React from 'react';

const Tooltip: React.FC<{ text: string, children: React.ReactNode }> = ({ text, children }) => {
  return (
    <div className="relative inline-block">
      <div className="group inline-block">
        {children}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-sm rounded py-1 px-2 absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 pointer-events-none whitespace-nowrap">
          {text}
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
