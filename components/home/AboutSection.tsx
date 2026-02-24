"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Award, Briefcase, Code } from "lucide-react";
import { fadeUpFast, expandHeight } from "@/lib/animations";
import { portfolio } from "@/data/portfolio";

const skillCategories = [
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    icon: Code,
  },
  {
    category: "CI/CD & Automation",
    skills: ["GitHub Actions", "Jenkins", "Ansible", "ArgoCD"],
    icon: Briefcase,
  },
  {
    category: "Monitoring & Security",
    skills: ["Prometheus", "Grafana", "ELK Stack", "Trivy", "Vault"],
    icon: Award,
  },
];

const timeline = [
  {
    year: "2023 - Present",
    role: "DevOps Engineer",
    company: "TovTech",
    achievements: [
      "Architected production & staging environments on Webdock with Cloudflare CDN",
      "Built CI/CD pipelines achieving 60% faster deployment times",
      "Deployed monitoring stack (Prometheus/Grafana/ELK) achieving 99.9% uptime",
      "Managed PostgreSQL with automated backups and replication",
    ],
  },
  {
    year: "2022 - 2023",
    role: "System Administrator & AI Specialist",
    company: "Self-Employed / Open Source",
    achievements: [
      "Built 50+ automation tools and scripts (Python, Bash, PowerShell)",
      "Created container security scanner with Trivy integration",
      "Developed API gateway platform with rate limiting and caching",
      "Contributed to multiple open-source DevOps projects",
    ],
  },
];

export default function AboutSection() {
  const [showJourney, setShowJourney] = useState(false);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0b14]">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Results-driven DevOps Engineer specializing in cloud infrastructure automation,
            CI/CD pipelines, and production-grade monitoring systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-gradient-to-br from-[#0f1020] to-[#141528] rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-all"
            >
              <cat.icon className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Journey Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-8"
        >
          <button
            onClick={() => setShowJourney(!showJourney)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 rounded-xl font-medium hover:bg-cyan-500/30 transition-all"
          >
            {showJourney ? (
              <>
                Hide Career Timeline
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View Career Timeline
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </motion.div>

        {/* Timeline */}
        <AnimatePresence>
          {showJourney && (
            <motion.div
              {...expandHeight}
              className="overflow-hidden"
            >
              <div className="space-y-8 pt-8">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-cyan-500/30"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0a0b14]" />
                    
                    <div className="bg-gradient-to-br from-[#0f1020] to-[#141528] rounded-xl border border-white/[0.07] p-6">
                      <div className="text-sm text-cyan-400 font-medium mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.role}
                      </h3>
                      <div className="text-gray-400 mb-4">{item.company}</div>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
