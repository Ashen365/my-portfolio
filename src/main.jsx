import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './AppEnhanced.jsx' // ✨ ENHANCED VERSION ACTIVATED!
import './index.css' // ✅ Tailwind CSS here
import './animations.css' // ✨ New animations CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
