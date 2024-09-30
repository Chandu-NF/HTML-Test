import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import To_Do_List from './To_Do_List.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <To_Do_List />
  </StrictMode>,
)
