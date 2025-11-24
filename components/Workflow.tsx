import React from 'react';
import { useLanguage } from '../LanguageContext';

interface StepProps {
  number: string;
  title: string;
  desc: string;
}

const Step: React.FC<StepProps> = ({ number, title, desc }) => (
  <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
    <div style={{ 
      fontSize: '4rem', 
      fontWeight: 'bold', 
      color: 'var(--border)', 
      lineHeight: '1',
      fontFamily: 'var(--font-mono)'
    }}>
      {number}
    </div>
    <div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--primary)' }}>&gt; {title}</h3>
      <p style={{ color: '#bbb', lineHeight: '1.6' }}>{desc}</p>
    </div>
  </div>
);

export const Workflow = () => {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container-custom">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', alignItems: 'center', textAlign: 'center' }}>
           <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '24px', width: '100%', maxWidth: '800px' }}>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{t.workflow.header}</h2>
             <p style={{ color: '#888', fontSize: '1.2rem' }}>{t.workflow.subtitle}</p>
           </div>

           <div style={{
             display: 'grid',
             gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
             gap: '48px',
             width: '100%'
           }}>
             {t.workflow.steps.map((step, index) => (
               <Step 
                 key={index}
                 number={`0${index + 1}`}
                 title={step.title}
                 desc={step.desc}
               />
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};