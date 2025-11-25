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
        margin: compact ? '10px auto' : '40px auto',
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
           {!compact && (
             <div className="hero-tagline" style={{ justifyContent: 'center', marginBottom: '32px' }}>
               <span className="blink">&gt;</span> {t.hero.slogan}
             </div>
           )}
           {!compact && (
            <h1 className="display-text" style={{ maxWidth: '900px', lineHeight: '1', marginBottom: '32px' }}>
              {t.hero.title}
            </h1>
           )}
        </motion.div>

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

        {compact && (
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.7 }}
             style={{
               width: '100%',
               maxWidth: '90%',
               marginTop: '4px'
             }}
           >
             <div className="flex items-start justify-between mb-1 border-b border-border pb-1 pl-6 pr-6">
               <div>
                 <div className="text-base font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                   <span className="w-2 h-2 bg-primary rounded-full"></span>
                   System Architecture
                 </div>
                 <div className="text-xs text-dim mt-0.5">Kubernetes-native implementation with isolated sandboxes</div>
               </div>
               <div className="text-[10px] font-mono text-dim pt-1">ARCH_V2.0</div>
             </div>

             <div style={{
               border: '1px solid var(--border)',
               padding: '2px',
               background: 'rgba(255,255,255,0.03)'
             }}>
               <img src="/fulling-frame.jpg" alt="Architecture" style={{ width: '100%', height: 'auto', display: 'block' }} />
             </div>
           </motion.div>
        )}

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

      </div>
    </section>
  );
};
