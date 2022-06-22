import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ShopProvider } from './context/ShopContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <ShopProvider>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<App />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  </React.StrictMode>,
  document.getElementById('root') 
);