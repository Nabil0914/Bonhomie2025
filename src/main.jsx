import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Import the main App component
import './index.css'; // Include any global styles

// Create the root element where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root element and wrap it in the Router
root.render(
  <Router>
    <App />
  </Router>
);
