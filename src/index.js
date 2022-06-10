import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { FlashProvider } from './providers/FlashProvider';
import { FlashMessage } from './components/FlashMessage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <FlashProvider>
      <FlashMessage />
      <App />
    </FlashProvider>
  </>
);

reportWebVitals();
