import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Workflow } from './components/Workflow';
import { Production } from './components/Production';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { LanguageProvider } from './LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <div className="scanline"></div>
        <Navigation />
        <main>
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
