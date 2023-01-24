import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-text">Loading<span className="loading-dots"> . . .</span></div>
    </div>
  );
};

export default LoadingScreen;