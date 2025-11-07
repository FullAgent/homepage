"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const Community: React.FC = () => {
  const t = useTranslations('community');

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 terminal-text">
            {t('title')}
          </h2>
          <p className="text-xl md:text-2xl text-[var(--terminal-amber)] mb-6">
            {t('subtitle')}
          </p>
          <p className="text-lg text-[var(--terminal-gray)] max-w-3xl mx-auto mb-12">
            {t('description')}
          </p>
        </div>

        {/* Terminal-style Info Box */}
        <div className="max-w-4xl mx-auto mb-12 border border-[var(--terminal-green)] bg-[var(--terminal-bg)] p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📜</span>
              <div>
                <h3 className="text-lg font-bold text-[var(--terminal-green)] mb-2">
                  MIT License
                </h3>
                <p className="text-[var(--terminal-gray)] text-sm">
                  Free and open source. Use it, modify it, distribute it.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">🤖</span>
              <div>
                <h3 className="text-lg font-bold text-[var(--terminal-green)] mb-2">
                  Built by Claude Code
                </h3>
                <p className="text-[var(--terminal-gray)] text-sm">
                  This entire platform was created using the same AI engineer you'll be working with.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">🌟</span>
              <div>
                <h3 className="text-lg font-bold text-[var(--terminal-green)] mb-2">
                  Join the Movement
                </h3>
                <p className="text-[var(--terminal-gray)] text-sm">
                  Star us on GitHub, report issues, submit PRs, or just share your experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link
            href="https://github.com/FullstackAgent/FullstackAgent"
            target="_blank"
            className="terminal-btn flex items-center gap-2 min-w-[200px] justify-center"
          >
            <span>⭐</span> {t('cta.github')}
          </Link>
          <Link
            href="https://os.sealos.io"
            target="_blank"
            className="terminal-btn primary flex items-center gap-2 min-w-[200px] justify-center"
          >
            <span>🚀</span> {t('cta.start')}
          </Link>
          <Link
            href="https://github.com/FullstackAgent/FullstackAgent/blob/main/CONTRIBUTING.md"
            target="_blank"
            className="terminal-btn flex items-center gap-2 min-w-[200px] justify-center"
          >
            <span>💻</span> {t('cta.contribute')}
          </Link>
        </div>

        {/* Terminal Command Example */}
        <div className="max-w-2xl mx-auto">
          <div className="border border-[var(--terminal-green)] bg-[var(--terminal-bg)] p-6">
            <div className="text-[var(--terminal-gray)] text-sm mb-2">
              # Quick Start
            </div>
            <div className="flex items-center gap-2 font-mono text-sm">
              <span className="text-[var(--terminal-amber)]">$</span>
              <span className="text-[var(--terminal-green)]">
                git clone https://github.com/FullstackAgent/FullstackAgent.git
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-[var(--terminal-dark-gray)] text-center">
          <p className="text-[var(--terminal-gray)] text-sm">
            © 2024 FullstackAgent | Built with{' '}
            <span className="text-[var(--terminal-amber)]">❤️</span> by Claude Code
          </p>
          <p className="text-[var(--terminal-dark-gray)] text-xs mt-2">
            Powered by{' '}
            <a
              href="https://www.anthropic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--terminal-amber)] hover:underline"
            >
              Anthropic Claude
            </a>
            {' '}and{' '}
            <a
              href="https://sealos.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--terminal-amber)] hover:underline"
            >
              Sealos
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
};
