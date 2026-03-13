import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import MemoryGame from './MemoryGame.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemoryGame />
  </StrictMode>,
)
