import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx'

import { CartProvider } from './context/CartContext.tsx';

import RouterProvider from "./routers";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <CartProvider>
        <RouterProvider />
        <App />
      </CartProvider>
  </StrictMode>,
)
