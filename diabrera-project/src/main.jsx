<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ImageSlider from './Components/ImageSlider/ImageSlider.jsx'

createRoot(document.getElementById('root')).render(
  <ImageSlider />
)
console.log("React carregou");
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
>>>>>>> main
