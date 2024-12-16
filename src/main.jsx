import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HUD } from './HUD'
import { Landing } from './Landing'
import { useStore } from './components/store'
import UserInterface from './UI'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserInterface />
  </React.StrictMode>,
)
