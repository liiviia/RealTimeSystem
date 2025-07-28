import React from 'react';
import ReactDOM from 'react-dom/client';
import Send from './Send';
import DisplayPage from './DisplayPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Send />
    <DisplayPage />
  </React.StrictMode>
);

