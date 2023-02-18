import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 자식까지 rendering 확인하므로 2번 rendering
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
