import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onContinue }) => {
  return (
    <div className="loading-screen" onClick={onContinue}>
      <img src="/images/XPscreen.png" alt="App Logo" className="loading-logo" />
      <p className="loading-text">Tap anywhere to continue</p>
    </div>
  );
};

export default LoadingScreen;