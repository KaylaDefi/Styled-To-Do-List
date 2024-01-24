// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 

// Using the new root API for React 18+
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
