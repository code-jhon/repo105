import React from 'react';

interface CodeExportProps {
  code: string;
}

const CodeExport: React.FC<CodeExportProps> = ({ code }) => {
  const handleExport = () => {
    // Logic to export the code
  };

  return (
    <div>
      <pre>{code}</pre>
      <button onClick={handleExport}>Export Code</button>
    </div>
  );
};

export default CodeExport;
