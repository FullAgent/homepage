"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { AnimatedTerminal } from '../ui/AnimatedTerminal';
import Link from 'next/link';

export const Hero: React.FC = () => {
  const t = useTranslations('hero');

  const terminalLines = [
    { type: 'comment' as const, text: '# Welcome to FullstackAgent', delay: 1000 },
    { type: 'prompt' as const, text: 'Create a user authentication system with GitHub OAuth', delay: 1500 },
    { type: 'output' as const, text: '🔧 Setting up NextAuth configuration...', delay: 800 },
    { type: 'output' as const, text: '📝 Creating authentication pages...', delay: 800 },
    { type: 'output' as const, text: '🔐 Configuring GitHub OAuth provider...', delay: 800 },
    { type: 'output' as const, text: '✅ Authentication system ready!', delay: 1000 },
    { type: 'prompt' as const, text: 'npm run dev', delay: 1500 },
    { type: 'output' as const, text: 'Server running at https://your-app.fullstackagent.dev', delay: 500 },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 terminal-text">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-[var(--terminal-amber)] mb-4">
            {t('subtitle')}
          </p>
          <p className="text-base md:text-lg text-[var(--terminal-gray)] max-w-3xl mx-auto mb-8">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://os.sealos.io"
              target="_blank"
              className="terminal-btn primary"
            >
              {t('cta.primary')}
            </Link>
            <Link
              href="https://github.com/FullstackAgent/FullstackAgent"
              target="_blank"
              className="terminal-btn"
            >
              {t('cta.secondary')}
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <AnimatedTerminal
            lines={terminalLines}
            title="fullstackagent@cloud"
            className="max-w-4xl mx-auto"
            autoPlay={true}
            loop={true}
          />
        </div>
      </div>
    </section>
  );
};