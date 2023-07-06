import React, { useContext, memo } from 'react';
import { GPTContext } from '../utils/providers/GPTContext';

const CodeRenderer: React.FC = memo (() => {
  const { content } = useContext(GPTContext);

  return (
    <div className='h-full bg-yellow-50 p-4 rounded'>
      <iframe srcDoc={content} className='w-full h-full bg-white' />
    </div>
  )
});

export default CodeRenderer