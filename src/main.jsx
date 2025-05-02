import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DecisionProvider } from './context/DecisionContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DecisionProvider>
    <App />
    </DecisionProvider>
  </StrictMode>,
)
