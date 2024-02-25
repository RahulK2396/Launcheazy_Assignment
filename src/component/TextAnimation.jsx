import React, { useEffect, useState } from 'react';
import '../assets/SCSS/TextAnimation.scss';

function TextAnimation() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ['Generate leads', 'Convert prospects', 'Retain customers'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="text-animation-container">
      <div className="text-animation">
        <h1 className="text" key={currentTextIndex}>
          {texts[currentTextIndex]}
        </h1>
      </div>
     
    </div>
  );
}

export default TextAnimation;
