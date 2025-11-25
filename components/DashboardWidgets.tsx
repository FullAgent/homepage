import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Cpu, Database, Layout, Server, Code, ShieldCheck, CreditCard, ArrowRight, Terminal } from 'lucide-react';
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
                <div className="text-xs text-gray-500 leading-tight mt-0.5">{item.desc}</div>
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
        <div className="flex gap-3 items-start">
          <ShieldCheck size={20} className="text-primary mt-1" />
          <div>
            <div className="text-sm font-bold text-fg">{t.production.items[0].title.replace('[ ', '').replace(' ]', '')}</div>
            <div className="text-xs text-gray-500 mt-1">{t.production.items[0].desc}</div>
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <CreditCard size={20} className="text-primary mt-1" />
          <div>
            <div className="text-sm font-bold text-fg">{t.production.items[1].title.replace('[ ', '').replace(' ]', '')}</div>
            <div className="text-xs text-gray-500 mt-1">{t.production.items[1].desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkflowWidget = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full flex flex-col">
      <PanelHeader title={t.workflow.header.replace('## ', '')} />
      <div className="flex-1 p-4 flex flex-col justify-center space-y-6">
        {t.workflow.steps.map((step, index) => (
          <div key={index} className="relative pl-6 border-l border-border hover:border-primary transition-colors group">
            <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-surface border border-border group-hover:border-primary rounded-full transition-colors"></div>
            <div className="text-xs font-mono text-primary mb-1">0{index + 1}</div>
            <div className="text-sm font-bold text-fg group-hover:text-white transition-colors">{step.title}</div>
            <div className="text-xs text-gray-500 mt-1 line-clamp-2">{step.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const HowItWorksWidget = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full flex flex-col border-t border-border">
      <PanelHeader title={t.howItWorks.header.replace('## ', '')} />
      <div className="flex-1 p-4 flex flex-col">
        <div className="flex-1 relative overflow-hidden group border border-border bg-black/40">
          <img
            src="/fulling-frame.jpg"
            alt="Architecture"
            className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-3 w-full">
            <div className="text-xs font-bold text-white mb-1">System Architecture</div>
            <div className="text-[10px] text-gray-400 leading-tight line-clamp-3">
              {t.howItWorks.desc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
