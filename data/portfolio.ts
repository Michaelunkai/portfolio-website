export const portfolio = {
  personal: {
    name: "Michael Fedorovsky",
    title: "DevOps Engineer | System Administrator | AI Automation Specialist",
    yearsExperience: 3,
    brand: "MichaelDev",
    tagline: "Infrastructure That Never Fails",
    bio: "Expert in cloud infrastructure, CI/CD pipelines, containerization, and monitoring. Built 50+ production-grade automation tools achieving 99.9% uptime across multi-cloud environments.",
    journeyBio: `My journey into DevOps began with a fascination for system automation and infrastructure reliability. Over three years, I've architected production environments, built robust CI/CD pipelines, and implemented comprehensive monitoring solutions that have achieved 99.9% uptime.

At TovTech, I designed cloud infrastructure with Cloudflare CDN integration, automated deployment workflows with GitHub Actions, and deployed full observability stacks using Prometheus, Grafana, and ELK. I specialize in Infrastructure as Code, container orchestration, and building systems that scale.`,
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
      name: "TovPlay Gaming Platform",
      tagline: "Full-Stack Gaming Backend with Real-Time Features",
      description:
        "Production gaming backend built with Flask, PostgreSQL, Socket.IO, and Docker. Features JWT authentication, Discord OAuth integration, real-time multiplayer capabilities, and complete CI/CD pipeline. Handles 1000+ concurrent users with automated testing and deployment workflows.",
      image: "/images/projects/tovplay.svg",
      tech: ["Flask", "PostgreSQL", "Socket.IO", "Docker", "GitHub Actions", "JWT"],
      links: {
        website: null,
        source: "https://github.com/Michaelunkai/TovPlay",
        app: null,
      },
      featured: true,
    },
    {
      id: "project-2",
      name: "Container Security Scanner",
      tagline: "Automated CVE Detection & CVSS Scoring",
      description:
        "Automated vulnerability scanning tool for Docker images using Trivy. Provides severity reporting with CVSS scores, integrates with CI/CD pipelines for shift-left security, and generates detailed reports for compliance tracking.",
      image: "/images/projects/security-scanner.svg",
      tech: ["Trivy", "Docker", "Python", "GitHub Actions", "Shell"],
      links: {
        website: null,
        source: "https://github.com/Michaelunkai/container-security-scanner",
        app: null,
      },
      featured: false,
    },
    {
      id: "project-3",
      name: "Prometheus Monitoring Stack",
      tagline: "Full Observability with Grafana & ELK",
      description:
        "Complete monitoring solution with Prometheus metrics collection, custom Grafana dashboards, ELK log aggregation, and PagerDuty alerting. Deployed across multiple production environments with 99.9% uptime SLA.",
      image: "/images/projects/monitoring.svg",
      tech: ["Prometheus", "Grafana", "Elasticsearch", "Docker", "AlertManager"],
      links: {
        website: null,
        source: "https://github.com/Michaelunkai/prometheus-stack",
        app: null,
      },
      featured: false,
    },
    {
      id: "project-4",
      name: "ArgoCD GitOps Infrastructure",
      tagline: "Kubernetes CD with Automated Rollbacks",
      description:
        "GitOps-based infrastructure with ArgoCD for Kubernetes deployments. Features automated sync, one-click rollback capabilities, Helm chart management, multi-environment support, and Slack notifications for deployment status.",
      image: "/images/projects/argocd.svg",
      tech: ["Kubernetes", "ArgoCD", "Helm", "Terraform", "GitOps"],
      links: {
        website: null,
        source: "https://github.com/Michaelunkai/argocd-gitops",
        app: null,
      },
      featured: false,
    },
    {
      id: "project-5",
      name: "API Gateway Platform",
      tagline: "High-Performance Request Router & Rate Limiter",
      description:
        "Custom API gateway with intelligent routing, Redis-backed rate limiting, response caching, JWT authentication, and comprehensive request/response logging for microservices architecture.",
      image: "/images/projects/api-gateway.svg",
      tech: ["TypeScript", "Node.js", "Redis", "Docker", "Express"],
      links: {
        website: null,
        source: "https://github.com/Michaelunkai/api-gateway-platform",
        app: null,
      },
      featured: false,
    },
    {
      id: "project-6",
      name: "Log Analysis AI",
      tagline: "ML-Powered Anomaly Detection",
      description:
        "AI-powered log analysis system with machine learning anomaly detection, pattern recognition, and automated alerting. Integrates with ELK stack for comprehensive observability and reduces MTTR by 60%.",
      image: "/images/projects/log-ai.svg",
      tech: ["Python", "ELK", "scikit-learn", "Docker", "Pandas"],
      links: {
        website: null,
        source: "https://github.com/Michaelunkai/log-analysis-ai",
        app: null,
      },
      featured: false,
    },
  ],
  templates: [
    {
      name: "Docker CI/CD Starter",
      description:
        "Production-ready CI/CD pipeline template with multi-stage Docker builds, GitHub Actions workflows, automated testing, and one-command deployment.",
      logo: "/images/templates/docker-logo.svg",
      preview: "/images/templates/docker-preview.svg",
      githubUrl: "https://github.com/Michaelunkai/docker-cicd-starter",
    },
    {
      name: "Prometheus Monitoring Kit",
      description:
        "Complete Prometheus + Grafana monitoring setup with pre-configured dashboards for CPU, memory, disk, network, and custom application metrics.",
      logo: "/images/templates/prometheus-logo.svg",
      preview: "/images/templates/prometheus-preview.svg",
      githubUrl: "https://github.com/Michaelunkai/prometheus-monitoring-kit",
    },
    {
      name: "Kubernetes Helm Charts",
      description:
        "Collection of production-ready Helm charts for PostgreSQL, Redis, Nginx, monitoring stack, and common microservices patterns.",
      logo: "/images/templates/k8s-logo.svg",
      preview: "/images/templates/k8s-preview.svg",
      githubUrl: "https://github.com/Michaelunkai/kubernetes-helm-charts",
    },
  ],
  services: [
    {
      id: "devops-consulting",
      name: "DevOps Consulting",
      description:
        "Expert guidance on DevOps transformation, CI/CD implementation, cloud migration strategy, and infrastructure modernization. I'll analyze your current setup and create a roadmap for improvement.",
      icon: "MessageSquare",
      accentColor: "blue",
      price: "$75/hour",
      features: [
        "Infrastructure Assessment & Audit",
        "CI/CD Pipeline Architecture",
        "Cloud Migration Planning",
        "Security & Compliance Review",
        "Team Training & Documentation",
      ],
      popular: false,
    },
    {
      id: "cicd-setup",
      name: "CI/CD Pipeline Setup",
      description:
        "Complete CI/CD pipeline implementation with GitHub Actions or Jenkins. Includes automated testing, Docker builds, deployment automation, and Slack/Discord notifications.",
      icon: "Rocket",
      accentColor: "purple",
      price: "$450",
      features: [
        "GitHub Actions / Jenkins Setup",
        "Multi-stage Docker Builds",
        "Automated Testing Integration",
        "Staging & Production Deploys",
        "Rollback Strategies & Monitoring",
      ],
      popular: true,
    },
    {
      id: "monitoring-stack",
      name: "Monitoring & Alerting",
      description:
        "Full observability stack setup with Prometheus, Grafana, and log aggregation (ELK/Loki). Custom dashboards, smart alerts, on-call integration, and SLA tracking.",
      icon: "Activity",
      accentColor: "green",
      price: "$650",
      features: [
        "Prometheus Metrics Collection",
        "Custom Grafana Dashboards",
        "ELK/Loki Log Aggregation",
        "Smart Alert Rules & PagerDuty",
        "SLA/SLO Monitoring & Reports",
      ],
      popular: false,
    },
    {
      id: "infrastructure-automation",
      name: "Infrastructure Automation",
      description:
        "Infrastructure as Code implementation with Terraform and Ansible. Automate cloud resources, server provisioning, configuration management, and disaster recovery.",
      icon: "Server",
      accentColor: "orange",
      price: "$850",
      features: [
        "Terraform IaC Setup (AWS/Azure/GCP)",
        "Ansible Playbooks & Roles",
        "Multi-Cloud Automation",
        "Kubernetes Deployment Automation",
        "Disaster Recovery & Backup Plans",
      ],
      popular: false,
    },
  ],
  process: [
    {
      step: 1,
      name: "Discovery",
      description:
        "Deep dive into your infrastructure, tech stack, pain points, and business goals. I audit your systems and identify improvement opportunities.",
      icon: "MessageSquare",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      step: 2,
      name: "Architecture",
      description:
        "Design a tailored solution with technical specifications, technology choices, implementation roadmap, and cost estimates aligned with your budget.",
      icon: "Code2",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      step: 3,
      name: "Implementation",
      description:
        "Build your infrastructure using best practices: Infrastructure as Code, containerization, CI/CD automation, security hardening, and monitoring.",
      icon: "Server",
      gradient: "from-orange-500 to-red-500",
    },
    {
      step: 4,
      name: "Handoff",
      description:
        "Complete documentation, team training, knowledge transfer, and post-launch support. Your team will be confident to maintain and extend the infrastructure.",
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
