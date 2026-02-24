"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";
import { fadeUp, fadeUpProps, staggerContainer, staggerChild, staggerChildTransition } from "@/lib/animations";
import { portfolio } from "@/data/portfolio";
import TechBadge from "@/components/ui/TechBadge";

const focusAreas = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building fast, scalable web applications with modern frameworks like Next.js, React, and Node.js.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces that provide exceptional user experiences.",
  },
  {
    icon: Zap,
    title: "AI Integration",
    description:
      "Integrating AI capabilities into applications to automate tasks and enhance functionality.",
  },
];

export default function FocusSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div variants={fadeUp} {...fadeUpProps} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What I Focus On
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specializing in modern web technologies and AI to deliver
            cutting-edge solutions.
          </p>
        </motion.div>

        {/* Focus Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              variants={staggerChild}
              transition={{ ...staggerChildTransition, delay: index * 0.1 }}
              className="p-6 bg-[#0f1020] rounded-2xl border border-white/[0.07] hover:border-accent-purple/30 transition-all hover:-translate-y-1"
            >
              <area.icon className="w-12 h-12 text-accent-purple mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {area.title}
              </h3>
              <p className="text-gray-400">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={fadeUp} {...fadeUpProps} className="text-center">
          <h3 className="text-xl font-semibold text-white mb-6">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {portfolio.techStack.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
