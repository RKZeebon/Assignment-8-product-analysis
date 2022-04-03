import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,

);


