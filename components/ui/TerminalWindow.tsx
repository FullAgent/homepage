"use client";

import React from 'react';

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
  title = "terminal",
  children,
  className = ""
}) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="flex gap-2">
          <span className="terminal-button red"></span>
          <span className="terminal-button yellow"></span>
          <span className="terminal-button green"></span>
        </div>
        <span className="text-xs text-gray-400 ml-4">{title}</span>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  );
};