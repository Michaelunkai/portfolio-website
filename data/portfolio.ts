export const portfolio = {
  personal: {
    name: "Till Thelet",
    title: "Full-Stack Developer & AI Specialist",
    yearsExperience: 5,
    brand: "TillDev",
    tagline: "Building Digital Experiences That Matter",
    bio: "I craft modern web applications with cutting-edge technologies. Specializing in React, Next.js, and AI integration to deliver exceptional user experiences.",
    journeyBio: `My journey into software development began with a fascination for how technology can solve real-world problems. Over the years, I've honed my skills across the full stack, from crafting pixel-perfect frontends to architecting robust backend systems.

Today, I specialize in building scalable web applications using modern frameworks like Next.js and React, integrated with AI capabilities. I believe in writing clean, maintainable code and creating intuitive user experiences that make a difference.`,
    email: "till@tilldev.com",
    resumeUrl: "/resume.pdf",
    avatar: "/images/avatar.svg",
  },
  socials: {
    github: "https://github.com/tillthelet",
    twitter: "https://twitter.com/tillthelet",
    linkedin: "https://linkedin.com/in/tillthelet",
    youtube: "https://youtube.com/@tillthelet",
    tiktok: "https://tiktok.com/@tillthelet",
    discord: "https://discord.gg/tilldev",
  },
  stats: [
    { value: "25+", label: "Personal Projects" },
    { value: "5+", label: "Years Experience" },
    { value: "24/7", label: "Support Available" },
    { value: "100%", label: "Code Quality" },
  ],
  techStack: [
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "React", icon: "SiReact" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Python", icon: "SiPython" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Framer Motion", icon: "SiFramer" },
    { name: "Google Firebase", icon: "SiFirebase" },
    { name: "Stripe", icon: "SiStripe" },
    { name: "HTML", icon: "SiHtml5" },
    { name: "CSS", icon: "SiCss3" },
    { name: "Shadcn/UI", icon: "SiRadixui" },
    { name: "Flask", icon: "SiFlask" },
    { name: "Electron", icon: "SiElectron" },
    { name: "ESLint", icon: "SiEslint" },
    { name: "Artificial Intelligence", icon: null },
    { name: "UI Design", icon: null },
    { name: "UX Design", icon: null },
    { name: "Full-Stack Dev", icon: null },
  ],
  projects: [
    {
      id: "project-1",
      name: "AI Dashboard Pro",
      tagline: "Intelligent Analytics Platform",
      description:
        "A comprehensive dashboard for visualizing AI model performance, featuring real-time metrics, automated reporting, and predictive analytics powered by machine learning.",
      image: "/images/projects/project1.svg",
      tech: ["Next.js", "React", "Tailwind CSS", "Python", "TensorFlow"],
      links: {
        website: "https://ai-dashboard-pro.com",
        source: "https://github.com/tillthelet/ai-dashboard-pro",
        app: null,
      },
      featured: true,
    },
    {
      id: "project-2",
      name: "CloudSync",
      tagline: "Seamless File Synchronization",
      description:
        "A modern file synchronization application with end-to-end encryption, real-time collaboration features, and cross-platform support for teams of all sizes.",
      image: "/images/projects/project2.svg",
      tech: ["React", "Firebase", "Framer Motion", "Node.js"],
      links: {
        website: "https://cloudsync.app",
        source: "https://github.com/tillthelet/cloudsync",
        app: "https://apps.apple.com/cloudsync",
      },
      featured: false,
    },
    {
      id: "project-3",
      name: "DevFlow",
      tagline: "Developer Workflow Automation",
      description:
        "Streamline your development workflow with automated CI/CD pipelines, code review tools, and project management features all in one integrated platform.",
      image: "/images/projects/project3.svg",
      tech: ["TypeScript", "Next.js", "PostgreSQL", "Docker"],
      links: {
        website: "https://devflow.io",
        source: "https://github.com/tillthelet/devflow",
        app: null,
      },
      featured: false,
    },
    {
      id: "project-4",
      name: "TaskMaster",
      tagline: "Smart Task Management",
      description:
        "An AI-powered task management app that learns your work patterns and suggests optimal scheduling, priority adjustments, and productivity improvements.",
      image: "/images/projects/project4.svg",
      tech: ["React Native", "Firebase", "OpenAI", "Node.js"],
      links: {
        website: "https://taskmaster.app",
        source: "https://github.com/tillthelet/taskmaster",
        app: "https://play.google.com/store/apps/taskmaster",
      },
      featured: false,
    },
  ],
  templates: [
    {
      name: "SaaS Starter Kit",
      description:
        "A complete SaaS boilerplate with authentication, billing, and dashboard components ready to customize.",
      logo: "/images/templates/logo1.svg",
      preview: "/images/templates/preview1.svg",
      githubUrl: "https://github.com/tillthelet/saas-starter",
    },
    {
      name: "Portfolio Pro",
      description:
        "A stunning portfolio template for developers and designers with dark mode and animations.",
      logo: "/images/templates/logo2.svg",
      preview: "/images/templates/preview2.svg",
      githubUrl: "https://github.com/tillthelet/portfolio-pro",
    },
    {
      name: "E-Commerce Starter",
      description:
        "Full-featured e-commerce template with product pages, cart, and Stripe integration.",
      logo: "/images/templates/logo3.svg",
      preview: "/images/templates/preview3.svg",
      githubUrl: "https://github.com/tillthelet/ecommerce-starter",
    },
  ],
  services: [
    {
      id: "contract",
      name: "Contract Development",
      description:
        "Need a skilled developer for your project? I offer contract-based development services for larger projects and ongoing needs.",
      icon: "Wrench",
      accentColor: "blue",
      price: "Custom Quote",
      features: [
        "Full-Stack Development",
        "Project Planning",
        "Code Reviews",
        "Technical Architecture",
        "Regular Updates",
      ],
      popular: false,
    },
    {
      id: "website",
      name: "Custom Website Development",
      description:
        "Modern, responsive websites built with Next.js and React. Perfect for businesses and personal brands.",
      icon: "Code2",
      accentColor: "purple",
      price: "Starting at $95",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Performance",
        "Modern UI/UX",
        "Content Management",
      ],
      popular: true,
    },
    {
      id: "api",
      name: "API Development",
      description:
        "Custom API solutions for your applications. Scalable and secure REST APIs that power your products.",
      icon: "Database",
      accentColor: "green",
      price: "Starting at $199",
      features: [
        "REST APIs",
        "Database Design",
        "Authentication",
        "Documentation",
        "Performance Testing",
      ],
      popular: false,
    },
  ],
  process: [
    {
      step: 1,
      name: "Discussion",
      description:
        "We start by understanding your vision, requirements, and goals to align our solutions with your business needs.",
      icon: "MessageSquare",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      step: 2,
      name: "Planning",
      description:
        "Creating detailed technical specifications, project timeline, and architecture to ensure smooth development.",
      icon: "Code2",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      step: 3,
      name: "Development",
      description:
        "Building your solution using modern technologies and best practices, with regular updates and feedback.",
      icon: "Server",
      gradient: "from-orange-500 to-pink-500",
    },
    {
      step: 4,
      name: "Delivery",
      description:
        "Thorough testing, deployment, and handover of your project, including documentation and support.",
      icon: "Rocket",
      gradient: "from-red-500 to-orange-500",
    },
  ],
};

export type Portfolio = typeof portfolio;
export type Project = (typeof portfolio.projects)[number];
export type Template = (typeof portfolio.templates)[number];
export type Service = (typeof portfolio.services)[number];
export type ProcessStep = (typeof portfolio.process)[number];
export type TechItem = (typeof portfolio.techStack)[number];
export type Stat = (typeof portfolio.stats)[number];
