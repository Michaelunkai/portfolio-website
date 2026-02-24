"use client";

import { motion } from "framer-motion";
import { MessageSquare, Code2, Server, Rocket } from "lucide-react";
import type { ProcessStep } from "@/data/portfolio";

interface ProcessCardProps {
  step: ProcessStep;
  index: number;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  Code2,
  Server,
  Rocket,
};

export default function ProcessCard({ step, index }: ProcessCardProps) {
  const Icon = iconMap[step.icon] || MessageSquare;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      className="relative bg-[#0f1020] rounded-2xl border border-white/[0.07] p-6 hover:border-accent-purple/30 transition-all"
    >
      {/* Step Number Badge */}
      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent-purple flex items-center justify-center text-white text-sm font-bold">
        {step.step}
      </div>

      {/* Gradient Icon Container */}
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-4`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Step Name */}
      <h3 className="text-xl font-semibold text-white mb-2">{step.name}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm">{step.description}</p>
    </motion.div>
  );
}
