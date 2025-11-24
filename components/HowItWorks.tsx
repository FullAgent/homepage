import React from 'react';
import { useLanguage } from '../LanguageContext';

export const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container-custom" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{t.howItWorks.header}</h2>
        <div style={{ marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--fg)' }}>{t.howItWorks.title}</h3>
            <p style={{ color: '#888', lineHeight: '1.6' }}>
              {t.howItWorks.desc}
            </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <img
            src="/fulling-frame.jpg"
            alt="Fulling System Architecture"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
      </div>
    </section>
  );
};
