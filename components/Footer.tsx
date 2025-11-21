import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer style={{ padding: '60px 0', borderTop: '1px solid var(--border)', background: '#020202' }}>
      <div className="container-custom">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
               <img src="https://fulling.sealosbja.site/icon.svg" alt="Logo" style={{ width: '24px', opacity: 0.8 }} />
               <span style={{ fontWeight: 'bold', letterSpacing: '-0.02em' }}>FULLING</span>
             </div>
             <p style={{ color: '#666', fontSize: '0.9rem' }}>{t.footer.rights}</p>
          </div>
          
          <div style={{ display: 'flex', gap: '32px' }}>
             <a href="#" className="nav-link" style={{ margin: 0 }}>Twitter</a>
             <a href="https://github.com/fullstackagent/fulling" className="nav-link" style={{ margin: 0 }}>GitHub</a>
             <a href="https://bja.sealos.run/?openapp=system-fulling" className="nav-link" style={{ margin: 0, color: 'var(--primary)' }}>{t.footer.startNow}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
