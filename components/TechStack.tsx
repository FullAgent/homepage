import React from 'react';
import { Cpu, Database, Layout, Server, Code } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface TechCardProps {
  icon: any;
  title: string;
  desc: string;
  color?: string;
}

const TechCard: React.FC<TechCardProps> = ({ icon: Icon, title, desc, color }) => (
  <div className="terminal-box" style={{ height: '100%' }}>
    <div style={{ marginBottom: '24px', color: color || 'var(--fg)' }}>
      <Icon size={32} />
    </div>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{title}</h3>
    <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.6' }}>{desc}</p>
  </div>
);

export const TechStack = () => {
  const { t } = useLanguage();
  const icons = [Cpu, Layout, Database, Code, Server];
  // Icons correspond to: Claude, Next.js, Postgres, Shadcn, Sealos
  
  return (
    <section className="section">
      <div className="container-custom">
        <div style={{ marginBottom: '80px' }}>
           <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>{t.stack.header}</h2>
           <p style={{ color: '#888', maxWidth: '600px', fontSize: '1.2rem' }}>
             {t.stack.subtitle}
           </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px' 
        }}>
          {t.stack.items.map((item, index) => (
            <TechCard 
              key={index}
              icon={icons[index]} 
              title={item.title}
              desc={item.desc}
              color={index === 0 ? 'var(--primary)' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};