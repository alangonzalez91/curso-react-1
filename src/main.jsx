import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; /// Tellwind aplicado 2025-10-30
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
