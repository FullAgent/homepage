"use client";

import React, { useState, useEffect } from 'react';
import { TerminalWindow } from './TerminalWindow';
import { TypewriterText } from './TypewriterText';

interface TerminalLine {
  type: 'prompt' | 'output' | 'comment';
  text: string;
  delay?: number;
}

interface AnimatedTerminalProps {
  lines: TerminalLine[];
  title?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
}

export const AnimatedTerminal: React.FC<AnimatedTerminalProps> = ({
  lines,
  title = "fullstackagent@localhost",
  className = "",
  autoPlay = true,
  loop = false
}) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (autoPlay && currentLineIndex < lines.length && !isTyping) {
      setIsTyping(true);
      setDisplayedLines(prev => [...prev, lines[currentLineIndex]]);
    }
  }, [currentLineIndex, lines, autoPlay, isTyping]);

  const handleLineComplete = () => {
    setIsTyping(false);
    if (currentLineIndex < lines.length - 1) {
      setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
      }, lines[currentLineIndex].delay || 500);
    } else if (loop) {
      setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
      }, 2000);
    }
  };

  const renderLine = (line: TerminalLine, index: number) => {
    const isLastLine = index === displayedLines.length - 1;
    const className = line.type === 'comment' ? 'text-gray-500' :
                     line.type === 'prompt' ? 'terminal-prompt' : '';

    if (isLastLine && isTyping) {
      return (
        <div key={index} className={className}>
          <TypewriterText
            text={line.text}
            delay={30}
            onComplete={handleLineComplete}
            cursor={true}
          />
        </div>
      );
    }

    return (
      <div key={index} className={className}>
        {line.text}
      </div>
    );
  };

  return (
    <TerminalWindow title={title} className={className}>
      <div className="space-y-1">
        {displayedLines.map((line, index) => renderLine(line, index))}
      </div>
    </TerminalWindow>
  );
};