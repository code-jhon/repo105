import React from 'react';

interface CodeExportProps {
  code: string;
}

const CodeExport: React.FC<CodeExportProps> = ({ code }) => {
  const handleExport = () => {
    //here we can export the code to a file
  };

  return (
    <div>
      <pre>{code}</pre>
      <button onClick={handleExport}>Export Code</button>
    </div>
  );
};

export default CodeExport;
