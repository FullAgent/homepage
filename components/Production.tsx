import React from 'react';
import { ShieldCheck, CreditCard } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Production = () => {
  const { t } = useLanguage();

  return (
    <section className="section" style={{ background: '#080808' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
           <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{t.production.header}</h2>
           <p style={{ color: '#888', fontSize: '1.2rem' }}>{t.production.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
           <div className="terminal-box">
             <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)' }}>
                  <ShieldCheck size={32} color="var(--primary)" />
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>{t.production.items[0].title}</h3>
             </div>
             <p style={{ color: '#aaa', lineHeight: '1.6', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
               {t.production.items[0].desc}
             </p>
           </div>

           <div className="terminal-box">
             <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)' }}>
                  <CreditCard size={32} color="var(--primary)" />
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>{t.production.items[1].title}</h3>
             </div>
             <p style={{ color: '#aaa', lineHeight: '1.6', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
               {t.production.items[1].desc}
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};
