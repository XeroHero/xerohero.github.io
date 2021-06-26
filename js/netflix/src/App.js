/* eslint-disable eol-last */
import React from 'react';
import { FaqsContainer } from './containers/faqs';
import { FooterContainer } from './containers/footer';
import { JumbotronContainer } from './containers/jumbotron';

// eslint-disable-next-line react/jsx-filename-extension
export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer/>
      <FooterContainer />
    </>
  );
}
