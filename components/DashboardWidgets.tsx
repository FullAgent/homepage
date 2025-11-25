import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Cpu, Database, Layout, Server, Code, ShieldCheck, CreditCard, ArrowRight, Terminal, GitBranch, Package, Rocket, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

// Shared Panel Styles
const PanelHeader = ({ title }: { title: string }) => (
  <div className="border-b border-border p-3 bg-surface/50 backdrop-blur-sm flex items-center justify-between">
    <h3 className="text-sm font-bold uppercase text-primary tracking-wider flex items-center gap-2">
      <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
      {title}
    </h3>
    <div className="flex gap-1">
      <div className="w-1 h-1 bg-border"></div>
      <div className="w-1 h-1 bg-border"></div>
      <div className="w-1 h-1 bg-border"></div>
    </div>
  </div>
);

export const TechStackWidget = () => {
  const { t } = useLanguage();
  const icons = [Cpu, Layout, Database, Code, Server];

  return (
    <div className="h-full flex flex-col">
      <PanelHeader title={t.stack.header.replace('## ', '')} />
      <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
        {t.stack.items.map((item, index) => {
          const Icon = icons[index];
          return (
            <div key={index} className="group flex items-start gap-3 p-2 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all">
              <div className="mt-1 text-primary opacity-70 group-hover:opacity-100">
                <Icon size={16} />
              </div>
              <div>
                <div className="text-sm font-bold text-fg group-hover:text-primary transition-colors">{item.title}</div>
                <div className="text-xs text-gray-500 group-hover:text-white transition-colors leading-tight mt-0.5">{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ProductionWidget = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full flex flex-col border-t border-border">
      <PanelHeader title={t.production.header.replace('## ', '')} />
      <div className="flex-1 p-4 space-y-4">
        <div className="group flex gap-3 items-start p-2 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all">
          <ShieldCheck size={20} className="text-primary mt-1 group-hover:scale-110 transition-transform" />
          <div>
            <div className="text-sm font-bold text-fg group-hover:text-primary transition-colors">{t.production.items[0].title.replace('[ ', '').replace(' ]', '')}</div>
            <div className="text-xs text-gray-500 group-hover:text-white transition-colors mt-1">{t.production.items[0].desc}</div>
          </div>
        </div>
        <div className="group flex gap-3 items-start p-2 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all">
          <CreditCard size={20} className="text-primary mt-1 group-hover:scale-110 transition-transform" />
          <div>
            <div className="text-sm font-bold text-fg group-hover:text-primary transition-colors">{t.production.items[1].title.replace('[ ', '').replace(' ]', '')}</div>
            <div className="text-xs text-gray-500 group-hover:text-white transition-colors mt-1">{t.production.items[1].desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkflowWidget = () => {
  const { t } = useLanguage();
  const stepIcons = [GitBranch, Package, Rocket];

  return (
    <div className="h-full flex flex-col">
      <PanelHeader title={t.workflow.header.replace('## ', '')} />
      <div className="flex-1 p-4 pt-8 relative overflow-hidden flex flex-col justify-center">
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
             style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        <div className="relative space-y-0">
          {t.workflow.steps.map((step, index) => {
            const StepIcon = stepIcons[index] || Zap;
            const isLast = index === t.workflow.steps.length - 1;

            return (
              <div key={index} className="group relative flex gap-4">
                {/* Connector Line (behind everything) */}
                {!isLast && (
                  <div className="absolute left-[19px] top-[40px] bottom-[-16px] w-[2px] bg-border group-hover:bg-primary/50 transition-colors z-0"></div>
                )}

                {/* Icon Node */}
                <div className="relative z-10 flex-shrink-0">
                   <div className="w-10 h-10 rounded-none border border-primary bg-surface shadow-[0_0_10px_rgba(0,255,65,0.15)] transition-all duration-300 flex items-center justify-center">
                     <StepIcon size={18} className="text-primary" />
                   </div>
                   {/* Pulse effect for active look */}
                   <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 animate-ping pointer-events-none" style={{ animationDuration: '2s' }}></div>
                </div>

                {/* Content Card */}
                <div className="flex-1 pb-6 min-w-0">
                  <div className="bg-surface/50 border border-transparent group-hover:border-primary/30 group-hover:bg-surface/80 p-3 -mt-1 transition-all duration-300 relative overflow-hidden">
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-transparent group-hover:border-primary/50 transition-all"></div>

                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-sm text-primary transition-colors tracking-wide uppercase">
                        {step.title}
                      </h4>
                      <span className="text-[10px] font-mono text-dim/50 group-hover:text-primary group-hover:opacity-100 opacity-0 transition-all">
                        // STEP_0{index + 1}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 group-hover:text-white transition-colors leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const FeaturesWidget = () => {
  const { t } = useLanguage();
  const features = [
    { icon: Terminal, text: "Terminal is all you need", color: "#00ff41" },
    { icon: Layout, text: "Production-grade architecture", color: "#00ff41" },
    { icon: Server, text: "Full-stack focus", color: "#00ff41" }
  ];

  return (
    <div className="h-full flex flex-col border-t border-border">
      <PanelHeader title="CORE_PHILOSOPHY" />
      <div className="flex-1 p-4 flex flex-col justify-center space-y-4">
        {features.map((feat, index) => (
          <div key={index} className="flex items-center gap-3 p-2 border border-transparent hover:border-primary/20 bg-surface hover:bg-primary/5 transition-all">
            <div className="p-2 bg-primary/10 rounded-none">
              <feat.icon size={18} className="text-primary" />
            </div>
            <span className="font-bold text-sm text-fg tracking-wide uppercase">{feat.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
