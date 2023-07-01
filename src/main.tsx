import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from './containers/Body.tsx'

import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>,
)
