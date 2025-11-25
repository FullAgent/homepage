import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Navigation = () => {
  const { t } = useLanguage();

  return (
    <nav className="nav-container">
      <div className="container-custom nav-content">
        <div className="logo-container">
           <img src="https://fulling.sealosbja.site/icon.svg" alt="Fulling Logo" style={{ height: '32px', width: '32px' }} />
           <span className="logo-text">FULLING</span>
        </div>

        <div className="flex-center">
          <a
            href="https://github.com/fullstackagent/fulling"
            className="nav-link"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'none', '@media (min-width: 640px)': { display: 'inline' } } as any}
          >
             {t.nav.github}
          </a>
          <a
            href="https://bja.sealos.run/?openapp=system-fulling"
            className="btn-primary"
            style={{ marginLeft: '32px', padding: '10px 20px' }}
            target="_blank"
            rel="noreferrer"
          >
            {t.nav.startCoding}
          </a>
        </div>
      </div>
    </nav>
  );
};
