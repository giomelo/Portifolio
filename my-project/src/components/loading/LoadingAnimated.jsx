import React, { useState, useEffect } from 'react';
import useTexts from '../../hooks/useTexts';
import './LoadingAnimated.css';

const LoadingAnimated = ({ onFinish }) => {
  const texts = useTexts();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30); //Ajuste de velocidade

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loading-container">
      <div className="scanline"></div>
      
      <div className="loading-content">
        <h1 className="loading-title">{texts.Title_Loading}</h1>
        
        <div className="progress-wrapper">
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-number">{progress}%</span>
        </div>

        <div className="loading-footer">
          <p className="glitch-text">{texts.Text_Loading}</p>
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimated;