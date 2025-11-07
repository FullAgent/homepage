"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 border border-[var(--terminal-green)] bg-[var(--terminal-bg)] hover:shadow-lg hover:shadow-[var(--terminal-green)]/20 transition-all duration-300 group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-[var(--terminal-amber)]">
        {title}
      </h3>
      <p className="text-[var(--terminal-gray)] leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};

export const CoreFeatures: React.FC = () => {
  const t = useTranslations('features');

  const features = [
    {
      icon: '🗄️',
      titleKey: 'items.database.title',
      descKey: 'items.database.description',
    },
    {
      icon: '🔒',
      titleKey: 'items.https.title',
      descKey: 'items.https.description',
    },
    {
      icon: '🧠',
      titleKey: 'items.aiAware.title',
      descKey: 'items.aiAware.description',
    },
    {
      icon: '🛠️',
      titleKey: 'items.preConfigured.title',
      descKey: 'items.preConfigured.description',
    },
    {
      icon: '🐙',
      titleKey: 'items.github.title',
      descKey: 'items.github.description',
    },
    {
      icon: '🚀',
      titleKey: 'items.k8s.title',
      descKey: 'items.k8s.description',
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 terminal-text">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-[var(--terminal-gray)] max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={t(feature.titleKey as any)}
              description={t(feature.descKey as any)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 border border-[var(--terminal-amber)] bg-[var(--terminal-bg)] max-w-3xl">
            <div className="text-[var(--terminal-amber)] mb-2 font-bold">
              💡 Secret Weapon
            </div>
            <p className="text-[var(--terminal-gray)] text-sm leading-relaxed">
              {t('items.aiAware.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
