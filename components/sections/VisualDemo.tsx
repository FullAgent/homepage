"use client";

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatedTerminal } from '../ui/AnimatedTerminal';

export const VisualDemo: React.FC = () => {
  const t = useTranslations('demo');
  const [demoStep, setDemoStep] = useState(0);

  const demoLines = [
    { type: 'prompt' as const, text: 'claude', delay: 1000 },
    { type: 'output' as const, text: '🤖 Claude Code AI Engineer ready. How can I help you today?', delay: 800 },
    { type: 'prompt' as const, text: 'Implement GitHub login using NextAuth', delay: 1500 },
    { type: 'output' as const, text: '📁 Creating /app/api/auth/[...nextauth]/route.ts', delay: 600 },
    { type: 'output' as const, text: '📁 Creating /lib/auth.ts', delay: 600 },
    { type: 'output' as const, text: '📁 Updating /app/layout.tsx with SessionProvider', delay: 600 },
    { type: 'output' as const, text: '📁 Creating /components/LoginButton.tsx', delay: 600 },
    { type: 'output' as const, text: '🔐 Configuring GitHub OAuth provider with your credentials', delay: 800 },
    { type: 'output' as const, text: '✅ GitHub authentication successfully implemented!', delay: 1000 },
    { type: 'prompt' as const, text: 'npm run dev', delay: 1500 },
    { type: 'output' as const, text: '▲ Next.js 14.0.0', delay: 400 },
    { type: 'output' as const, text: '- Local:        http://localhost:3000', delay: 400 },
    { type: 'output' as const, text: '- Network:      https://app-xyz.sealos.dev', delay: 600 },
    { type: 'output' as const, text: '✓ Ready in 1.2s', delay: 800 },
  ];

  const steps = [
    { step: '1', description: t('steps.1'), range: [0, 2] },
    { step: '2', description: t('steps.2'), range: [3, 8] },
    { step: '3', description: t('steps.3'), range: [9, 9] },
    { step: '4', description: t('steps.4'), range: [10, 13] },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative z-10 bg-[var(--terminal-bg-secondary)]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 terminal-text">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-[var(--terminal-gray)] max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Visual Demo Steps */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {steps.map((stepInfo, index) => (
            <div
              key={index}
              className={`p-4 border rounded transition-all duration-500 ${
                demoStep >= index
                  ? 'border-[var(--terminal-green)] bg-[var(--terminal-bg)]'
                  : 'border-[var(--terminal-dark-gray)] opacity-50'
              }`}
            >
              <div className="text-2xl font-bold text-[var(--terminal-amber)] mb-2">
                {stepInfo.step}
              </div>
              <div className="text-sm text-[var(--terminal-gray)]">
                {stepInfo.description}
              </div>
            </div>
          ))}
        </div>

        {/* Animated Terminal Demo */}
        <div className="max-w-5xl mx-auto">
          <AnimatedTerminal
            lines={demoLines}
            title="fullstackagent@cloud:~/my-app"
            className="shadow-2xl"
            autoPlay={true}
            loop={true}
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-[var(--terminal-amber)] text-sm">
            ⚡ From idea to deployed app in minutes, not days
          </p>
        </div>
      </div>
    </section>
  );
};
