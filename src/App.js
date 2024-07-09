// src/App.js
import React from 'react';
import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
import './App.css';

const App = () => {
  const isMobile = window.innerWidth <= 768; // Example: Adjust this based on your mobile breakpoint

  return (
    <div className="App">
      {isMobile ? <MobileHeader /> : <Header />}
      {/* Render MobileHeader for mobile devices, Header for desktop */}
      {/* Other content */}
    </div>
  );
};

export default App;
