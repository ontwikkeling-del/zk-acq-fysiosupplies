import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LandingPage } from './LandingPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Simple path-based routing (no React Router needed)
const path = window.location.pathname;
const isAcquisitie = path.startsWith('/acquisitie');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {isAcquisitie ? <App /> : <LandingPage />}
  </React.StrictMode>
);
