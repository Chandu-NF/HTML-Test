import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// const rootElement = document.getElementById('root');

// if(rootElement){
//   createRoot(rootElement).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );
// }else{
//   console.error('Root Element not found')
// }


  createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

