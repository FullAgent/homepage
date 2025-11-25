import React, { useRef } from 'react';
import { Cpu, Database, Layout, Server, Code } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

interface TechCardProps {
  icon: any;
  title: string;
  desc: string;
  color?: string;
}

const TechCard: React.FC<TechCardProps> = ({ icon: Icon, title, desc, color }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="h-full preserve-3d"
    >
      <div
        className="terminal-box flex-col flex h-full"
        style={{
          transform: "translateZ(20px)",
          background: "rgba(10, 10, 10, 0.8)", // Make semi-transparent for matrix effect
          backdropFilter: "blur(5px)"
        }}
      >
        <div
          style={{
            transform: "translateZ(30px)",
          }}
          className="mb-6"
        >
          <Icon size={32} color={color || 'var(--fg)'} />
        </div>
        <h3
          className="mb-4"
          style={{
            fontSize: '1.5rem',
            transform: "translateZ(25px)",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: '#888',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            transform: "translateZ(20px)",
          }}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export const TechStack = () => {
  const { t } = useLanguage();
  const icons = [Cpu, Layout, Database, Code, Server];

  return (
    <section className="section" style={{ overflow: 'visible', perspective: '2000px' }}>
      <div className="container-custom">
        <div className="section-header">
           <h2 className="section-title">{t.stack.header}</h2>
           <p className="section-desc">
             {t.stack.subtitle}
           </p>
        </div>

        <div className="grid-3">
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
