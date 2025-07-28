import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Send from './Send';
import DisplayPage from './DisplayPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/send" element={<Send />} />
        <Route path="/display" element={<DisplayPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
