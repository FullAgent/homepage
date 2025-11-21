import React from 'react';
import { useLanguage } from '../LanguageContext';

export const HowItWorks = () => {
  const { t } = useLanguage();
  const diagram = `
                                                                ┌─────────────────┐
                                                                │ Ingress Domain  │
                                                                └─────────────────┘
                                                                        │
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │     │  Sandbox Pods   │
│   Web Browser   │────▶│     Fulling     │────▶│    Kubernetes   │────▶│  (with Claude)  │
│                 │     │                 │     │     Cluster     │     └─────────────────┘
└─────────────────┘     └─────────────────┘     └─────────────────┘             │
                               │                         │                      │
                               │                         ▼                      │
                               │                 ┌─────────────────┐            │
                               │                 │    PostgreSQL   │────────────┘
                               │                 └─────────────────┘
                               ▼
                        ┌─────────────────┐
                        │      GitHub     │
                        │   Repositories  │
                        └─────────────────┘
  `;

  return (
    <section className="section">
      <div className="container-custom">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{t.howItWorks.header}</h2>
        <div style={{ marginBottom: '40px', maxWidth: '800px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--fg)' }}>{t.howItWorks.title}</h3>
            <p style={{ color: '#888', lineHeight: '1.6' }}>
              {t.howItWorks.desc}
            </p>
        </div>
        
        <div className="code-block">
          <pre style={{ margin: 0, fontFamily: 'inherit', whiteSpace: 'pre', overflowX: 'auto', fontSize: '12px', lineHeight: '1.2' }}>
            {diagram}
          </pre>
        </div>
      </div>
    </section>
  );
};
