"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

export const LanguageSwitch: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-2 py-1 border ${
          locale === 'en'
            ? 'border-[var(--terminal-green)] text-[var(--terminal-green)]'
            : 'border-[var(--terminal-dark-gray)] text-[var(--terminal-gray)]'
        } hover:border-[var(--terminal-green)] hover:text-[var(--terminal-green)] transition-colors`}
      >
        EN
      </button>
      <span className="text-[var(--terminal-gray)]">/</span>
      <button
        onClick={() => switchLanguage('zh')}
        className={`px-2 py-1 border ${
          locale === 'zh'
            ? 'border-[var(--terminal-green)] text-[var(--terminal-green)]'
            : 'border-[var(--terminal-dark-gray)] text-[var(--terminal-gray)]'
        } hover:border-[var(--terminal-green)] hover:text-[var(--terminal-green)] transition-colors`}
      >
        中文
      </button>
    </div>
  );
};