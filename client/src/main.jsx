import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/app/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
) 
