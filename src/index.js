import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './test';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById("root"));
root.render (<App />);

const test = createRoot(document.getElementById("test"));
test.render (<Test />);

reportWebVitals();
