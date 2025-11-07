"use client";

import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
  className?: string;
  cursor?: boolean;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  delay = 50,
  onComplete,
  className = "",
  cursor = true
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return (
    <span className={`${className} ${cursor ? 'terminal-cursor' : ''}`}>
      {displayedText}
    </span>
  );
};