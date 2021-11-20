import React from 'react';
import ReactDOM from 'react-dom';
/* Contexts */
import { GiphyProvider } from './contexts/GiphyContext';
/* Components */
import { GiphyApp } from './GiphyApp';
/* Sources */
import './scss/index.scss';

ReactDOM.render(
   <GiphyProvider>
      <GiphyApp />
   </GiphyProvider>,
   document.getElementById('root')
);