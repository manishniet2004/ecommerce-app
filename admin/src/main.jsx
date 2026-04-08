import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// If you have index.css, keep this. If not, delete it:
// import './index.css' 
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <App />
    </BrowserRouter>,
)