import React from 'react';
import { Hero } from './components/Hero';
import { TechStackWidget, ProductionWidget, WorkflowWidget, FeaturesWidget } from './components/DashboardWidgets';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { MatrixBackground } from './components/MatrixBackground';
import { Github, Terminal } from 'lucide-react';

const DashboardHeader = () => {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <header className="dashboard-header justify-between">
      <div className="flex items-center gap-3">
        <img src="https://fulling.sealosbja.site/icon.svg" alt="Logo" className="w-6 h-6" />
        <span className="font-bold tracking-tight text-lg">FULLING</span>
        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 border border-primary/20 ml-2 hidden sm:inline-block">
          v2.0.0-alpha
        </span>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 font-bold tracking-tight text-xl hidden md:block text-fg whitespace-nowrap">
        {t.hero.title}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleLanguage}
          className="text-sm font-mono text-dim hover:text-primary transition-colors"
        >
          [{language === 'en' ? 'CN' : 'EN'}]
        </button>

        <a
          href="https://github.com/fullstackagent/fulling"
          target="_blank"
          rel="noreferrer"
          className="text-dim hover:text-white transition-colors"
        >
          <Github size={18} />
        </a>

        <a
          href="https://bja.sealos.run/?openapp=system-fulling"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-3 py-1.5 text-xs font-bold uppercase transition-all"
        >
          <Terminal size={14} />
          <span className="hidden sm:inline">{t.nav.startCoding.replace('[ ', '').replace(' ]', '')}</span>
        </a>
      </div>
    </header>
  );
};

const DashboardFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="dashboard-footer">
      <div className="flex items-center gap-4">
        <span>{t.footer.rights}</span>
      </div>
      <div className="flex items-center gap-4 font-mono text-xs">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          SYSTEM: ONLINE
        </span>
        <span className="hidden sm:inline text-dim">|</span>
        <span className="hidden sm:inline text-dim">LATENCY: 12ms</span>
      </div>
    </footer>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard-grid">
      {/* Visual Effects Layer */}
      <div className="scanline-overlay crt-flicker"></div>

      <DashboardHeader />

      {/* Left Panel: System Specs */}
      <div className="dashboard-panel flex flex-col border-r border-border">
        <div className="h-3/5 border-b border-border relative overflow-hidden">
          <TechStackWidget />
        </div>
        <div className="h-2/5 relative overflow-hidden">
          <ProductionWidget />
        </div>
      </div>

      {/* Center Panel: Main Terminal */}
      <div className="dashboard-panel relative flex flex-col">
        <div className="absolute inset-0 z-0">
          <MatrixBackground />
        </div>
        {/* Grid overlay for the center panel */}
        <div className="grid-bg opacity-30"></div>

        <div className="relative z-10 flex flex-col h-full w-full overflow-y-auto custom-scrollbar">
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Hero compact={true} />
          </div>
        </div>
      </div>

      {/* Right Panel: Operations */}
      <div className="dashboard-panel flex flex-col border-l border-border">
        <div className="h-3/5 border-b border-border relative overflow-hidden">
          <WorkflowWidget />
        </div>
        <div className="h-2/5 relative overflow-hidden">
          <FeaturesWidget />
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <Dashboard />
    </LanguageProvider>
  );
}
