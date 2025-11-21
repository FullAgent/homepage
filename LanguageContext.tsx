import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface Translations {
  nav: {
    startCoding: string;
    github: string;
  };
  hero: {
    slogan: string;
    title: ReactNode;
    ifYou: string;
    ifList: string[];
    subtitle: string;
    description: string;
    philosophy: string[];
    ctaStart: string;
    ctaGithub: string;
  };
  stack: {
    header: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  workflow: {
    header: string;
    subtitle: string;
    steps: {
      title: string;
      desc: string;
    }[];
  };
  production: {
    header: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  howItWorks: {
    header: string;
    title: string;
    desc: string;
  };
  footer: {
    rights: string;
    startNow: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      startCoding: "[ Start_Coding ]",
      github: "[ GitHub ]"
    },
    hero: {
      slogan: "> VIBE CODING_",
      title: <>The Cloud Development <br /> Platform for Purists.</>,
      ifYou: "IF (YOU):",
      ifList: [
        "> Live in the terminal",
        "> Crave minimalism",
        "> Demand ruthless efficiency"
      ],
      subtitle: "Fulling is the AI-native full-stack platform built for shipping.",
      description: "We provide a production-grade environment with Claude Code, PostgreSQL, Next.js, and shadcn/ui pre-wired. Auth and Payments are baked in—not bolted on.",
      philosophy: [
        "Terminal is all you need",
        "Production-grade architecture",
        "Full-stack focus"
      ],
      ctaStart: "[ Start_Coding ]",
      ctaGithub: "[ GitHub ]"
    },
    stack: {
      header: "## THE_GOLDEN_STACK",
      subtitle: "Zero Config. 100% Modern. Powered by SOTA AI.",
      items: [
        {
          title: "Claude Opus / Kimi k2-thinking",
          desc: "Intelligence at the core. Switch models effortlessly. No manual configuration required."
        },
        {
          title: "Next.js",
          desc: "The React Framework for the web. Handles your frontend and API routes seamlessly."
        },
        {
          title: "PostgreSQL",
          desc: "A fully managed, feature-complete SQL database. You own the data; we manage the ops."
        },
        {
          title: "shadcn/ui",
          desc: "Beautifully designed, composable components. Copy, paste, and ship accessible UI."
        },
        {
          title: "Sealos",
          desc: "The underlying operating system. From first line of code to production deployment instantly."
        }
      ]
    },
    workflow: {
      header: "## EXECUTION_PLAN",
      subtitle: "From init to production in three steps.",
      steps: [
        {
          title: "Initiate",
          desc: "AI bootstraps your entire environment: Next.js app, shadcn/ui library, and PostgreSQL instance are ready in seconds."
        },
        {
          title: "Code",
          desc: "Collaborate with AI directly inside the web terminal. Build, debug, and refactor without context switching."
        },
        {
          title: "Ship",
          desc: "Instant deployment. Your app gets a global, public-facing URL automatically."
        }
      ]
    },
    production: {
      header: "## BEYOND_LOCALHOST",
      subtitle: "Not just a playground. We build for the real world.",
      items: [
        {
          title: "[ Automated Authentication ]",
          desc: "Stop fighting with passport or next-auth. Full integration with Google, GitHub, and Email login is standard."
        },
        {
          title: "[ One-Click Payments ]",
          desc: "Monetize instantly. Seamless integration with Stripe and PayPal."
        }
      ]
    },
    howItWorks: {
      header: "## UNDER_THE_HOOD",
      title: "How Fulling Works:",
      desc: "We provision a dedicated development environment and database on Sealos for every project. Your sandbox mounts a stateful working directory—ensuring your code is safe, persistent, and always accessible via a public domain."
    },
    footer: {
      rights: "© 2024 FullStackAgent. Built for Geeks.",
      startNow: "Start Now"
    }
  },
  zh: {
    nav: {
      startCoding: "[ 快速开始 ]",
      github: "[ GitHub ]"
    },
    hero: {
      slogan: "> VIBE CODING_",
      title: <>专为极客打造的 <br /> vibe coding 云开发平台</>,
      ifYou: "如果你:",
      ifList: [
        "> 热爱终端",
        "> 喜欢极简风",
        "> 追求极致高效"
      ],
      subtitle: "Fulling 是一个专为构建生产级别 Web 应用而设计的 AI 全栈编码平台。",
      description: "内置 claude code/pgsql/next.js/shadcn 开箱即用，自动处理鉴权与支付。",
      philosophy: [
        "terminal is all you need",
        "为生产级别业务打造",
        "聚焦全栈开发场景"
      ],
      ctaStart: "[ 快速开始 ]",
      ctaGithub: "[ GitHub ]"
    },
    stack: {
      header: "## 核心技术栈",
      subtitle: "无需配置。我们为您准备好了一切，由最先进的 AI 驱动。",
      items: [
        {
          title: "Claude Opus/Kimi k2-thinking 模型",
          desc: "强力驱动的 AI 模型驱动，无需人工配置，自由切换。"
        },
        {
          title: "Next.js",
          desc: "业界领先的全栈框架，负责前端与 API。"
        },
        {
          title: "PostgreSQL",
          desc: "您无需管理的、功能完备的 SQL 数据库。"
        },
        {
          title: "shadcn/ui",
          desc: "优雅、可组合的 UI 组件库，开箱即用。"
        },
        {
          title: "Sealos",
          desc: "代码编写完直接 Production 级别提供在线服务。"
        }
      ]
    },
    workflow: {
      header: "## 极简工作流",
      subtitle: "三步，从灵感到上线",
      steps: [
        {
          title: "启动 (Initiate)",
          desc: "AI 将自动初始化 Next.js + PGSQL + shadcn/ui 的环境构建和 pgsql 数据库。"
        },
        {
          title: "编码 (Code)",
          desc: "在 web 终端内与 AI 协作，完成所有编码、调试和重构。"
        },
        {
          title: "上线 (Deploy)",
          desc: "自动提供一个全球可访问的域名地址。"
        }
      ]
    },
    production: {
      header: "## 专为生产环境设计",
      subtitle: "不止是 Demo，我们为生产环境而生",
      items: [
        {
          title: "自动鉴权 (Automated Authentication)",
          desc: "告别繁琐的 passport 或 next-auth 配置。集成 Google, GitHub 或邮箱登录。"
        },
        {
          title: "一键支付 (One-Click Payments)",
          desc: "轻松对接 Stripe 或 paypal。"
        }
      ]
    },
    howItWorks: {
      header: "## 工作原理",
      title: "Fulling 工作原理:",
      desc: "Fulling 为每个项目在 Sealos 上创建开发环境和数据库，并提供一个公网可以访问的域名，开发沙箱挂载一个有状态的工作目录，保证代码不丢失。"
    },
    footer: {
      rights: "© 2024 FullStackAgent. Built for Geeks.",
      startNow: "立即开始"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en'); 
  
  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
