import React from 'react';

const CodeComponent: React.FC = () => {
  return (
    <pre className="bg-gray-800 text-white p-4 rounded h-full">
      <code>
{`
  const greeting = 'Hello, world!';
  console.log(greeting);
`}
      </code>
    </pre>
  );
};

export default CodeComponent;