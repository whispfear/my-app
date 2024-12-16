import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './test';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const containerTest = document.getElementById("test");
const test = createRoot(containerTest);
test.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
)

reportWebVitals();
