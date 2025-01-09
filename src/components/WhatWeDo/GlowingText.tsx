import React, { useEffect, useState } from 'react';

interface GlowingTextProps {
  text: string;
  isActive: boolean;
}

export function GlowingText({ text, isActive }: GlowingTextProps) {
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const words = text.split(' ');

  useEffect(() => {
    if (isActive) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= words.length) {
          setActiveWordIndex(currentIndex);
          currentIndex++;
          if (currentIndex > words.length) {
            setTimeout(() => setActiveWordIndex(-1), 500);
            clearInterval(interval);
          }
        }
      }, 400); // Increased from 200 to 400ms for slower animation

      return () => clearInterval(interval);
    } else {
      setActiveWordIndex(-1);
    }
  }, [isActive, words.length]);

  return (
    <span>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span
            className={`transition-colors duration-300 ${
              index === activeWordIndex ? 'text-[#f9c000]' : ''
            }`}
          >
            {word}
          </span>
          {index < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </span>
  );
}