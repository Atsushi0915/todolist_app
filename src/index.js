import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { FlashMessage } from './components/FlashMessage/FlashMessage';

import { FlashProvider } from './providers/FlashProvider';
import { ConpleteTodoProvider } from './providers/ConpleteTodoProvider';
import { InconpleteTodoProvider } from './providers/InconpleteTodoProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <FlashProvider>
      <ConpleteTodoProvider>
        <InconpleteTodoProvider>
          <FlashMessage />
          <App />
          {console.log('aaa')}
        </InconpleteTodoProvider>
      </ConpleteTodoProvider>
    </FlashProvider>
  </>
);

reportWebVitals();
