import React from 'react';
import { useLanguage } from '../LanguageContext';

export const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container-custom text-center">
        <h2 className="section-title mb-6">{t.howItWorks.header}</h2>
        <div className="mb-12 max-w-3xl mx-auto">
            <h3 className="mb-4 text-fg text-xl" style={{ fontSize: '1.2rem', color: 'var(--fg)' }}>{t.howItWorks.title}</h3>
            <p style={{ color: '#888', lineHeight: '1.6' }}>
              {t.howItWorks.desc}
            </p>
        </div>

        <div className="how-it-works-img-container">
          <img
            src="/fulling-frame.jpg"
            alt="Fulling System Architecture"
            className="how-it-works-img"
          />
        </div>
      </div>
    </section>
  );
};
