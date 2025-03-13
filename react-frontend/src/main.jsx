import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import './index.css'
// import reportWebVitals from './reportWebVitals'
import './bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
