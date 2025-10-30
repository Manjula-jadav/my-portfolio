import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './index.css'; // your own styles
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(<App />);
