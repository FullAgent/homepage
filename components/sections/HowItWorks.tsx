"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

interface StepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, title, description, isLast = false }) => {
  return (
    <div className="flex flex-col items-center text-center relative">
      {/* Step Number Circle */}
      <div className="w-20 h-20 rounded-full border-2 border-[var(--terminal-green)] bg-[var(--terminal-bg)] flex items-center justify-center mb-6 relative z-10 group-hover:shadow-lg group-hover:shadow-[var(--terminal-green)]/50 transition-all duration-300">
        <span className="text-2xl font-bold text-[var(--terminal-green)]">{number}</span>
      </div>

      {/* Connecting Arrow for Desktop */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-[var(--terminal-green)] opacity-30">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-[var(--terminal-green)]"></div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-xs">
        <h3 className="text-xl font-bold mb-3 text-[var(--terminal-amber)]">
          {title}
        </h3>
        <p className="text-[var(--terminal-gray)] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export const HowItWorks: React.FC = () => {
  const t = useTranslations('howItWorks');

  const steps = [
    {
      number: '1',
      titleKey: 'steps.1.title',
      descKey: 'steps.1.description',
    },
    {
      number: '2',
      titleKey: 'steps.2.title',
      descKey: 'steps.2.description',
    },
    {
      number: '3',
      titleKey: 'steps.3.title',
      descKey: 'steps.3.description',
    },
    {
      number: '4',
      titleKey: 'steps.4.title',
      descKey: 'steps.4.description',
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative z-10 bg-[var(--terminal-bg-secondary)]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 terminal-text">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-[var(--terminal-gray)] max-w-3xl mx-auto mb-12">
            {t('subtitle')}
          </p>
        </div>

        {/* Steps Flowchart */}
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16 group">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={t(step.titleKey as any)}
              description={t(step.descKey as any)}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Tech Stack */}
        <div className="border-t border-[var(--terminal-dark-gray)] pt-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-[var(--terminal-amber)] mb-4">
              🏗️ Technology Stack
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {['Kubernetes', 'Next.js', 'PostgreSQL', 'Sealos', 'Anthropic Claude', 'shadcn/ui', 'ttyd'].map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 border border-[var(--terminal-green)] bg-[var(--terminal-bg)] text-[var(--terminal-green)] text-sm font-mono hover:bg-[var(--terminal-green)] hover:text-[var(--terminal-bg)] transition-all duration-300 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-[var(--terminal-gray)] text-sm font-mono">
              {t('techStack')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
