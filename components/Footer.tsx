import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-content">
          <div>
             <div className="footer-logo">
               <img src="https://fulling.sealosbja.site/icon.svg" alt="Logo" style={{ width: '24px', opacity: 0.8 }} />
               <span style={{ fontWeight: 'bold', letterSpacing: '-0.02em' }}>FULLING</span>
             </div>
             <p style={{ color: '#666', fontSize: '0.9rem' }}>{t.footer.rights}</p>
          </div>

          <div className="footer-links">
             <a href="https://github.com/fullstackagent/fulling" className="nav-link" style={{ margin: 0 }}>GitHub</a>
             <a href="https://bja.sealos.run/?openapp=system-fulling" className="nav-link text-primary" style={{ margin: 0 }}>{t.footer.startNow}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
