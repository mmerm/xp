import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onContinue }) => {
  return (
    <div className="loading-screen" onClick={onContinue}>
      <img src={`${process.env.PUBLIC_URL}/images/logow.png`} alt="Loading" className="loading-logo" />
      <p className="loading-text">Tap anywhere to continue</p>
    </div>
  );
};

export default LoadingScreen;