import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'; // Import the custom CSS
import App from './components/App';
import pets from './data/dogs.json'; // Import the JSON data

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App pets={pets} />);
