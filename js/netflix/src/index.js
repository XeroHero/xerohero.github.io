/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './App';
import { GlobalStyles } from './global-styles';

render(<>
  <GlobalStyles />
  <App />
       </>,
document.getElementById('root'));
