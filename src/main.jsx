import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  HashRouter } from 'react-router-dom'
import './styles/main.scss'
import App from './App.jsx'
import { CheckLoginProvider } from './context/LoginContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <CheckLoginProvider>
        <App />
      </CheckLoginProvider>
    </HashRouter>
  </StrictMode>,
)
