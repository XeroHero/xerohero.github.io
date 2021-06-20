/* eslint-disable eol-last */
import React from 'react';
import { FooterContainer } from './containers/footer';
import { JumbotronContainer } from './containers/jumbotron';

// eslint-disable-next-line react/jsx-filename-extension
export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FooterContainer />
    </>
  );
}