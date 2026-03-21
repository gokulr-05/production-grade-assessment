import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './app/queryClient.ts';
import { store } from './app/store.ts';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './shared/styles/global.css';
import { setAuth } from './core/auth/authSlice.ts';

// 🔐 Restore auth on app load
const savedAuth = localStorage.getItem('auth');
if (savedAuth) {
  store.dispatch(setAuth(JSON.parse(savedAuth)));
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
