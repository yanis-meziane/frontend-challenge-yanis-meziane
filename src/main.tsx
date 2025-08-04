import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Hook from './Hook/hook.tsx'
import Alert from './Alert/alert.tsx'
import Organisation from './organisation/organisation.tsx'
import GameChoice from './GameChoice/GameChoice.tsx'
import Personalize from './personalizeGame/personalize.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hook />
    <Alert />
    <Organisation />
    <App />
    <GameChoice />
    <Personalize />
  </StrictMode>,
)
