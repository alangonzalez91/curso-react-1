import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; /// Tellwind aplicado 2025-10-30
import App from './App.jsx';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>  
  ,
)
