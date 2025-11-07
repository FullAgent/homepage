import { Hero } from '@/components/sections/Hero';
import { ProblemSolution } from '@/components/sections/ProblemSolution';
import { VisualDemo } from '@/components/sections/VisualDemo';
import { CoreFeatures } from '@/components/sections/CoreFeatures';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Community } from '@/components/sections/Community';
import { LanguageSwitch } from '@/components/ui/LanguageSwitch';

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold terminal-text">
            <span className="text-[var(--terminal-amber)]">$</span> FullstackAgent
          </div>
          <LanguageSwitch />
        </div>
      </header>

      <main className="relative">
        <Hero />
        <ProblemSolution />
        <VisualDemo />
        <CoreFeatures />
        <HowItWorks />
        <Community />
      </main>
    </>
  );
}
