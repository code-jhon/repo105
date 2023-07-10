import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from './containers/Body.tsx'
import { GPTProvider } from './utils/providers/GPTContext.js';

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GPTProvider>
      <Body />
    </GPTProvider>
  </React.StrictMode>,
)
