import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {firebaseConnect} from './firebase/config.js'

firebaseConnect();

//App() -> seria en JavaScript puro
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
