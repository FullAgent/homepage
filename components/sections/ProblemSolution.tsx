"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { TerminalWindow } from '../ui/TerminalWindow';

export const ProblemSolution: React.FC = () => {
  const t = useTranslations('problem');

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 terminal-text">
            {t('title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Problem Side */}
          <div className="space-y-6">
            <div className="text-xl text-[var(--terminal-red)] font-bold mb-4">
              ❌ Traditional Workflow
            </div>
            <TerminalWindow title="traditional-setup">
              <div className="space-y-2 text-sm">
                <div className="text-[var(--terminal-gray)]"># Day 1: Setup</div>
                <div className="terminal-prompt">npm create next-app</div>
                <div className="terminal-prompt">npm install dependencies...</div>
                <div className="text-[var(--terminal-gray)]"># Configure database</div>
                <div className="terminal-prompt">docker run postgres...</div>
                <div className="text-[var(--terminal-gray)]"># Setup environment</div>
                <div className="terminal-prompt">vim .env</div>
                <div className="text-[var(--terminal-gray)]"># Configure auth...</div>
                <div className="terminal-prompt">npm install next-auth...</div>
                <div className="text-[var(--terminal-gray)]"># Read docs...</div>
                <div className="text-[var(--terminal-gray)]"># Copy boilerplate...</div>
                <div className="text-[var(--terminal-gray)]"># Debug config...</div>
                <div className="text-[var(--terminal-red)]">Error: Connection refused</div>
                <div className="text-[var(--terminal-gray)]"># ...hours later...</div>
              </div>
            </TerminalWindow>
            <p className="text-[var(--terminal-gray)] text-sm leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Solution Side */}
          <div className="space-y-6">
            <div className="text-xl text-[var(--terminal-green)] font-bold mb-4">
              ✅ FullstackAgent
            </div>
            <TerminalWindow title="fullstackagent@cloud">
              <div className="space-y-2 text-sm">
                <div className="text-[var(--terminal-gray)]"># One click launch</div>
                <div className="text-[var(--terminal-green)]">✓ Next.js environment ready</div>
                <div className="text-[var(--terminal-green)]">✓ PostgreSQL configured</div>
                <div className="text-[var(--terminal-green)]">✓ DATABASE_URL injected</div>
                <div className="text-[var(--terminal-green)]">✓ Claude Code CLI ready</div>
                <div className="text-[var(--terminal-green)]">✓ HTTPS endpoint active</div>
                <div className="terminal-prompt">Build a user auth system</div>
                <div className="text-[var(--terminal-amber)]">🤖 AI: Creating authentication...</div>
                <div className="text-[var(--terminal-green)]">✅ Done! Run: npm run dev</div>
                <div className="terminal-prompt">npm run dev</div>
                <div className="text-[var(--terminal-blue)]">→ https://your-app.sealos.dev</div>
                <div className="text-[var(--terminal-green)]">🚀 Ready in 3 minutes!</div>
              </div>
            </TerminalWindow>
            <p className="text-[var(--terminal-gray)] text-sm leading-relaxed">
              {t('solution')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
