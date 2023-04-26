import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Booking from './components/booking/Booking';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
