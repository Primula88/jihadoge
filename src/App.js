// src/App.js
import React from 'react';
import Gallery from './components/Gallery';
import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
import './App.css';

const App = () => {
  const isMobile = window.innerWidth <= 768; // Example: Adjust this based on your mobile breakpoint

  return (
    <div className="App">
      {isMobile ? <MobileHeader /> : <Header />}
      <Gallery />
    </div>
  );
};

export default App;
