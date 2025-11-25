import React from 'react';
import { useLanguage } from '../LanguageContext';

interface StepProps {
  number: string;
  title: string;
  desc: string;
}

const Step: React.FC<StepProps> = ({ number, title, desc }) => (
  <div className="workflow-step">
    <div className="step-number">
      {number}
    </div>
    <div>
      <h3 className="step-title">&gt; {title}</h3>
      <p style={{ color: '#bbb', lineHeight: '1.6' }}>{desc}</p>
    </div>
  </div>
);

export const Workflow = () => {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container-custom">
        <div className="flex-col flex items-center text-center gap-12">
           <div className="w-full max-w-4xl" style={{ margin: '0 auto' }}>
             <h2 className="section-title" style={{ textAlign: 'center' }}>{t.workflow.header}</h2>
             <p className="section-desc" style={{ margin: '0 auto', textAlign: 'center', maxWidth: '600px', color: '#888' }}>{t.workflow.subtitle}</p>
           </div>

           <div className="grid-3 w-full text-left" style={{ marginTop: '60px' }}>
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
