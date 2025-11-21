import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Navigation = () => {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 50,
      background: 'rgba(5, 5, 5, 0.8)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container-custom" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
           <img src="https://fulling.sealosbja.site/icon.svg" alt="Fulling Logo" style={{ height: '32px', width: '32px' }} />
           <span style={{ fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '-0.05em' }}>FULLING</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button 
            onClick={toggleLanguage}
            className="nav-link"
            style={{ 
              background: 'transparent', 
              border: 'none', 
              cursor: 'pointer', 
              fontFamily: 'inherit',
              marginRight: '16px'
            }}
          >
            [{language === 'en' ? 'CN' : 'EN'}]
          </button>
          <a href="https://github.com/fullstackagent/fulling" className="nav-link" target="_blank" rel="noreferrer" style={{ display: 'none', '@media (min-width: 640px)': { display: 'inline' } } as any}>
             {t.nav.github}
          </a>
          <a href="https://bja.sealos.run/?openapp=system-fulling" className="btn-primary" style={{ marginLeft: '32px', padding: '10px 20px' }} target="_blank" rel="noreferrer">
            {t.nav.startCoding}
          </a>
        </div>
      </div>
    </nav>
  );
};
