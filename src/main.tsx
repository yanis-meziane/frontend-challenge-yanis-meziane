import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Hook from './Hook/hook.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hook />
    <App />
  </StrictMode>,
)
