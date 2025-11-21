import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Zap, Layers } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const FeatureItem = ({ icon: Icon, title, delay }: { icon: any, title: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    style={{ display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid var(--border)', padding: '12px 20px', background: 'var(--surface)' }}
  >
    <Icon size={16} color="var(--primary)" />
    <span style={{ fontSize: '0.9rem', textTransform: 'uppercase' }}>{title}</span>
  </motion.div>
);

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="section" style={{ paddingTop: '180px', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="grid-bg"></div>
      <div className="container-custom">
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
           <div style={{ color: 'var(--primary)', marginBottom: '24px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
             <span className="blink">&gt;</span> {t.hero.slogan}
           </div>
        </motion.div>

        <motion.h1 
          className="display-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', marginBottom: '32px' }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{ 
                borderLeft: '2px solid var(--primary)', 
                paddingLeft: '20px', 
                marginBottom: '40px',
                color: '#888',
                fontFamily: 'var(--font-mono)'
            }}
        >
            <p style={{ margin: '0 0 8px 0', color: 'var(--fg)', fontWeight: 'bold' }}>{t.hero.ifYou}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {t.hero.ifList.map((item, i) => (
                    <li key={i} style={{ marginBottom: '4px' }}>{item}</li>
                ))}
            </ul>
        </motion.div>

        <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--fg)' }}
        >
            {t.hero.subtitle}
        </motion.h2>

        <motion.p 
          className="subtitle"
          style={{ marginBottom: '48px', maxWidth: '700px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {t.hero.description}
        </motion.p>

        <motion.div 
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '64px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <FeatureItem icon={Terminal} title={t.hero.philosophy[0]} delay={0.8} />
          <FeatureItem icon={Zap} title={t.hero.philosophy[1]} delay={0.9} />
          <FeatureItem icon={Layers} title={t.hero.philosophy[2]} delay={1.0} />
        </motion.div>

        <motion.div 
          style={{ display: 'flex', gap: '24px' }}
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
