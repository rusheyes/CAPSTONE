import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Replace 'App' with the root component of your application

const rootElement = document.getElementById('root'); // Replace 'root' with the ID of your root DOM element

const reactRoot = createRoot(rootElement);

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
