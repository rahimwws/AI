import React from 'react';

import { Footer, Blog,   WhatGPT3, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>

    <WhatGPT3 />
 
   
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
