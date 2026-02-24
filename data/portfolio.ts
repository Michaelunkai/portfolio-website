export const portfolio = {
  personal: {
    name: "Michael Fedorovsky",
    title: "DevOps Engineer | System Administrator | AI Automation Specialist",
    yearsExperience: 3,
    brand: "MichaelDev",
    tagline: "Building Scalable Infrastructure & Automation Solutions",
    bio: "Results-driven DevOps Engineer with expertise in cloud infrastructure, CI/CD automation, container orchestration, and monitoring systems. Built 50+ automation tools and production systems. Expert in AWS, Docker, Prometheus/Grafana stack, and Python/Bash scripting.",
    journeyBio: `My journey into DevOps and system administration started with a deep curiosity about how complex systems work together. I've always been fascinated by automation and finding ways to make infrastructure more reliable and efficient.

Over the years, I've built expertise across the entire DevOps stack - from cloud platforms like AWS and Azure, to container orchestration with Docker and Kubernetes, to comprehensive monitoring with Prometheus and Grafana. I've developed over 50 automation tools and production systems.

At TovTech, I architected production environments with Cloudflare CDN, designed CI/CD pipelines with GitHub Actions, and built monitoring stacks that achieved 99.9% uptime. I'm passionate about infrastructure as code, security best practices, and creating systems that scale.

Today, I focus on helping organizations modernize their infrastructure, implement DevOps best practices, and leverage AI for automation. Whether it's building robust CI/CD pipelines, containerizing applications, or setting up comprehensive monitoring - I deliver solutions that work.`,
    email: "michaelovsky5@gmail.com",
    phone: "054-763-2418",
    location: "Bat Yam, Israel",
    avatar: "/images/avatar.jpg",
  },
  socials: {
    github: "https://github.com/Michaelunkai",
    linkedin: "https://linkedin.com/in/michael-fedorovsky-b26099278",
  },
  resumes: [
    { name: "DevOps Engineer", file: "/resumes/Michael_Fedorovsky_DevOps.pdf" },
    { name: "System Administrator", file: "/resumes/Michael_Fedorovsky_SysAdmin.pdf" },
    { name: "Cloud Engineer", file: "/resumes/Michael_Fedorovsky_Cloud_Engineer.pdf" },
    { name: "DevSecOps Engineer", file: "/resumes/Michael_Fedorovsky_DevSecOps.pdf" },
    { name: "Computer Technician", file: "/resumes/Michael_Fedorovsky_Computer_Technician.pdf" },
  ],
  stats: [
    { value: "50+", label: "Automation Tools Built" },
    { value: "99.9%", label: "Uptime Achieved" },
    { value: "3+", label: "Years Experience" },
    { value: "50+", label: "GitHub Repositories" },
  ],
  techStack: [
    { name: "AWS", icon: "SiAmazonwebservices" },
    { name: "Docker", icon: "SiDocker" },
    { name: "Kubernetes", icon: "SiKubernetes" },
    { name: "Terraform", icon: "SiTerraform" },
    { name: "Ansible", icon: "SiAnsible" },
    { name: "GitHub Actions", icon: "SiGithubactions" },
    { name: "Prometheus", icon: "SiPrometheus" },
    { name: "Grafana", icon: "SiGrafana" },
    { name: "Python", icon: "SiPython" },
    { name: "Bash", icon: "SiGnubash" },
    { name: "PowerShell", icon: "SiPowershell" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "Redis", icon: "SiRedis" },
    { name: "Nginx", icon: "SiNginx" },
    { name: "Linux", icon: "SiLinux" },
    { name: "Git", icon: "SiGit" },
    { name: "Azure", icon: "SiMicrosoftazure" },
    { name: "ArgoCD", icon: "SiArgo" },
    { name: "Elasticsearch", icon: "SiElasticsearch" },
  ],
  projects: [
    {
      id: "project-1",
      name: "TovPlay Platform",
      tagline: "Full-Stack Gaming Backend",
      description:
        "Production gaming backend with Flask, PostgreSQL, Socket.IO, and Docker. Features JWT authentication, Discord OAuth integration, real-time features, and complete CI/CD pipeline with GitHub Actions.",
      image: "/images/projects/project1.svg",
      tech: ["Flask", "PostgreSQL", "Socket.IO", "Docker", "GitHub Actions"],
      links: {
        website: null,
        source: "https://github.com/Michaelunkai",
        app: null,
      },
      featured: true,
    },
    {
      id: "project-2",
      name: "Container Security Scanner",
      tagline: "Automated Vulnerability Detection",
      description:
        "Automated vulnerability scanning tool for Docker images using Trivy. Provides severity reporting, CVSS scores, and integrates with CI/CD pipelines for shift-left security.",
      image: "/images/projects/project2.svg",
      tech: ["Trivy", "Docker", "Python", "GitHub Actions"],
      links: {
        website: null,
        source: "https://github.com/Michaelunkai",
        app: null,
      },
      featured: false,
    },
    {
      id: "project-3",
      name: "Monitoring Stack",
      tagline: "Prometheus + Grafana + ELK",
      description:
        "Complete monitoring solution with Prometheus metrics collection, Grafana dashboards, ELK log aggregation, and PagerDuty alerting. Deployed across multiple production environments.",
      image: "/images/projects/project3.svg",
      tech: ["Prometheus", "Grafana", "Elasticsearch", "Docker"],
      links: {
        website: null,
        source: "https://github.com/Michaelunkai",
        app: null,
      },
      featured: false,
    },
    {
      id: "project-4",
      name: "ArgoCD GitOps Infrastructure",
      tagline: "Kubernetes Continuous Delivery",
      description:
        "GitOps-based infrastructure with ArgoCD for Kubernetes deployments. Features automated sync, rollback capabilities, Helm chart management, and multi-environment support.",
      image: "/images/projects/project4.svg",
      tech: ["Kubernetes", "ArgoCD", "Helm", "Terraform"],
      links: {
        website: null,
        source: "https://github.com/Michaelunkai",
        app: null,
      },
      featured: false,
    },
    {
      id: "project-5",
      name: "API Gateway Platform",
      tagline: "High-Performance API Management",
      description:
        "Custom API gateway with routing, rate limiting, caching with Redis, JWT authentication, and comprehensive request/response logging for microservices architecture.",
      image: "/images/projects/project1.svg",
      tech: ["TypeScript", "Node.js", "Redis", "Docker"],
      links: {
        website: null,
        source: "https://github.com/Michaelunkai",
        app: null,
      },
      featured: false,
    },
    {
      id: "project-6",
      name: "Log Analysis AI",
      tagline: "Intelligent Log Processing",
      description:
        "AI-powered log analysis system with anomaly detection, pattern recognition, and automated alerting. Integrates with ELK stack for comprehensive observability.",
      image: "/images/projects/project2.svg",
      tech: ["Python", "ELK", "AI/ML", "Docker"],
      links: {
        website: null,
        source: "https://github.com/Michaelunkai",
        app: null,
      },
      featured: false,
    },
  ],
  templates: [
    {
      name: "Docker CI/CD Starter",
      description:
        "Production-ready CI/CD pipeline template with multi-stage Docker builds, GitHub Actions workflows, and automated deployments.",
      logo: "/images/templates/logo1.svg",
      preview: "/images/templates/preview1.svg",
      githubUrl: "https://github.com/Michaelunkai",
    },
    {
      name: "Prometheus Monitoring Kit",
      description:
        "Complete Prometheus + Grafana monitoring setup with pre-configured dashboards, alerting rules, and Docker Compose deployment.",
      logo: "/images/templates/logo2.svg",
      preview: "/images/templates/preview2.svg",
      githubUrl: "https://github.com/Michaelunkai",
    },
    {
      name: "Kubernetes Helm Charts",
      description:
        "Collection of production-ready Helm charts for common services including PostgreSQL, Redis, Nginx, and monitoring stack.",
      logo: "/images/templates/logo3.svg",
      preview: "/images/templates/preview3.svg",
      githubUrl: "https://github.com/Michaelunkai",
    },
  ],
  services: [
    {
      id: "devops-consulting",
      name: "DevOps Consulting",
      description:
        "Expert guidance on DevOps transformation, CI/CD implementation, and infrastructure modernization. I'll analyze your current setup and create a roadmap for improvement.",
      icon: "MessageSquare",
      accentColor: "blue",
      price: "$75/hour",
      features: [
        "Infrastructure Assessment",
        "CI/CD Pipeline Design",
        "Cloud Architecture Review",
        "Security Best Practices",
        "Documentation & Training",
      ],
      popular: false,
    },
    {
      id: "cicd-setup",
      name: "CI/CD Pipeline Setup",
      description:
        "Complete CI/CD pipeline implementation with GitHub Actions, automated testing, Docker builds, and deployment to your cloud provider of choice.",
      icon: "Rocket",
      accentColor: "purple",
      price: "$450",
      features: [
        "GitHub Actions Workflows",
        "Multi-stage Docker Builds",
        "Automated Testing Integration",
        "Staging & Production Deploys",
        "Slack/Discord Notifications",
      ],
      popular: true,
    },
    {
      id: "monitoring-stack",
      name: "Monitoring & Alerting",
      description:
        "Full observability stack setup with Prometheus, Grafana, and log aggregation. Custom dashboards, alerts, and on-call integration included.",
      icon: "Activity",
      accentColor: "green",
      price: "$650",
      features: [
        "Prometheus Metrics Setup",
        "Custom Grafana Dashboards",
        "ELK/Loki Log Aggregation",
        "Alert Rules & Escalation",
        "Uptime Monitoring",
      ],
      popular: false,
    },
    {
      id: "infrastructure-automation",
      name: "Infrastructure Automation",
      description:
        "Infrastructure as Code implementation with Terraform/Ansible. Automate your cloud resources, server provisioning, and configuration management.",
      icon: "Server",
      accentColor: "orange",
      price: "$850",
      features: [
        "Terraform IaC Setup",
        "Ansible Playbooks",
        "AWS/Azure/GCP Automation",
        "Kubernetes Deployment",
        "Disaster Recovery Plan",
      ],
      popular: false,
    },
  ],
  process: [
    {
      step: 1,
      name: "Discovery",
      description:
        "We start by understanding your current infrastructure, pain points, and goals. I'll audit your systems and identify improvement opportunities.",
      icon: "MessageSquare",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      step: 2,
      name: "Architecture",
      description:
        "I design a tailored solution with detailed specifications, technology choices, and implementation roadmap aligned with your budget.",
      icon: "Code2",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      step: 3,
      name: "Implementation",
      description:
        "Building your infrastructure using best practices - Infrastructure as Code, containerization, CI/CD, monitoring, and security hardening.",
      icon: "Server",
      gradient: "from-orange-500 to-red-500",
    },
    {
      step: 4,
      name: "Handoff",
      description:
        "Complete documentation, team training, and knowledge transfer. I ensure your team can maintain and extend the infrastructure confidently.",
      icon: "Rocket",
      gradient: "from-green-500 to-emerald-500",
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
export type Resume = (typeof portfolio.resumes)[number];
