import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Zap, Layers } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const FeatureItem = ({ icon: Icon, title, delay }: { icon: any, title: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="flex-center gap-2 border-light bg-surface"
    style={{ padding: '12px 20px', background: 'rgba(10, 10, 10, 0.8)' }}
  >
    <Icon size={16} className="text-primary" />
    <span style={{ fontSize: '0.9rem', textTransform: 'uppercase' }}>{title}</span>
  </motion.div>
);

const TerminalSimulator = ({ compact = false }: { compact?: boolean }) => {
  const [lines, setLines] = useState<string[]>([]);
  const commands = [
    { text: '> IF you Live in the terminal,', delay: 500 },
    { text: '> Hate deploy', delay: 1500, color: 'var(--primary)' }
  ];

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];

    commands.forEach(({ text, delay, color }) => {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev.slice(-4), text]);
      }, delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div
      className="terminal-box"
      style={{
        width: '100%',
        maxWidth: compact ? '100%' : '500px',
        height: compact ? '140px' : '200px',
        margin: compact ? '20px auto' : '40px auto',
        textAlign: 'left',
        fontFamily: 'monospace',
        fontSize: compact ? '0.8rem' : '0.9rem',
        overflow: 'hidden',
        background: 'rgba(5, 5, 5, 0.9)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
      }}
    >
      <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '8px', marginBottom: '12px', display: 'flex', gap: '6px' }}>
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }}></div>
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }}></div>
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }}></div>
      </div>
      {lines.map((line, i) => (
        <div key={i} style={{ marginBottom: '4px', color: line.includes('Hate') ? 'var(--primary)' : '#888' }}>
          {line}
        </div>
      ))}
      <div className="blink" style={{ color: 'var(--primary)' }}>_</div>
    </div>
  );
};

export const Hero = ({ compact = false }: { compact?: boolean }) => {
  const { t } = useLanguage();

  return (
    <section className={`section hero-section ${compact ? 'dashboard-hero' : ''}`} style={{
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: compact ? '0' : '160px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderBottom: 'none'
    }}>
      <div className={`container-custom ${compact ? 'p-0' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%', justifyContent: 'center' }}>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
           <div className="hero-tagline" style={{ justifyContent: 'center', marginBottom: compact ? '16px' : '32px' }}>
             <span className="blink">&gt;</span> {t.hero.slogan}
           </div>
        </motion.div>

        <motion.h1
          className="display-text glitch-text"
          data-text={t.hero.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            maxWidth: '900px',
            lineHeight: '1',
            fontSize: compact ? 'clamp(2rem, 4vw, 3.5rem)' : undefined,
            marginBottom: compact ? '16px' : '32px'
          }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            maxWidth: '700px',
            margin: compact ? '0 auto 16px' : '0 auto 32px',
            fontSize: compact ? '0.95rem' : '1.25rem'
          }}
        >
          {t.hero.description}
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ width: '100%', marginBottom: compact ? '16px' : '0' }}
        >
            <TerminalSimulator compact={compact} />
        </motion.div>

        {!compact && (
          <motion.div
            className="mb-12"
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '48px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <FeatureItem icon={Terminal} title={t.hero.philosophy[0]} delay={0.8} />
            <FeatureItem icon={Zap} title={t.hero.philosophy[1]} delay={0.9} />
            <FeatureItem icon={Layers} title={t.hero.philosophy[2]} delay={1.0} />
          </motion.div>
        )}

        <motion.div
          className="gap-6"
          style={{ display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <a href="https://bja.sealos.run/?openapp=system-fulling" className="btn-primary">
            {t.hero.ctaStart} <ArrowRight size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }}/>
          </a>
          <a href="https://github.com/fullstackagent/fulling" className="btn-secondary">
            {t.hero.ctaGithub}
          </a>
        </motion.div>

      </div>
    </section>
  );
};
