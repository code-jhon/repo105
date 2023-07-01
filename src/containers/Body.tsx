import React from 'react';

const Body: React.FC = () => {
  return (
    <div className="bg-gray-900 p-4">
      <div className="flex">
        <div className="w-1/2 bg-gray-600 border border-gray-700 rounded-md p-4 mr-2">
          {/* Content for the first section */}
        </div>
        <div className="w-1/2 bg-gray-600 border border-gray-700 rounded-md p-4 ml-2">
          {/* Content for the second section */}
        </div>
      </div>
    </div>
  );
};

export default Body;
