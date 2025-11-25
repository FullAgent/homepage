import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Workflow } from './components/Workflow';
import { Production } from './components/Production';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { LanguageProvider } from './LanguageContext';
import { MatrixBackground } from './components/MatrixBackground';

export default function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        {/* Visual Effects Layer */}
        <div className="scanline-overlay crt-flicker"></div>
        <MatrixBackground />

        <Navigation />
        <main style={{ position: 'relative', zIndex: 1 }}>
          <Hero />
          <HowItWorks />
          <TechStack />
          <Workflow />
          <Production />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
