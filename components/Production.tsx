import React from 'react';
import { ShieldCheck, CreditCard } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Production = () => {
  const { t } = useLanguage();

  return (
    <section className="section production-section">
      <div className="container-custom">
        <div className="section-header">
           <h2 className="section-title">{t.production.header}</h2>
           <p className="section-desc">{t.production.subtitle}</p>
        </div>

        <div className="grid-2">
           <div className="terminal-box w-full">
             <div className="flex items-center gap-4 mb-6">
                <div className="production-icon-box">
                  <ShieldCheck size={32} color="var(--primary)" />
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>{t.production.items[0].title}</h3>
             </div>
             <p className="production-desc">
               {t.production.items[0].desc}
             </p>
           </div>

           <div className="terminal-box w-full">
             <div className="flex items-center gap-4 mb-6">
                <div className="production-icon-box">
                  <CreditCard size={32} color="var(--primary)" />
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>{t.production.items[1].title}</h3>
             </div>
             <p className="production-desc">
               {t.production.items[1].desc}
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};
