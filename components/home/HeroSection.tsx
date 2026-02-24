"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-purple/10 border border-accent-purple/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent-purple" />
          <span className="text-sm text-accent-purpleLight">
            Available for freelance work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
        >
          {portfolio.personal.name}
        </motion.h1>

        {/* Title with gradient */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-6"
        >
          {portfolio.personal.title} with{" "}
          <span className="bg-gradient-to-r from-accent-purple to-accent-purpleLight bg-clip-text text-transparent font-semibold">
            {portfolio.personal.yearsExperience}+ Years
          </span>{" "}
          of Experience
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
        >
          {portfolio.personal.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-4 bg-accent-purple text-white rounded-xl font-medium hover:bg-accent-purpleLight transition-colors flex items-center justify-center gap-2 group"
          >
            Work with me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white rounded-xl font-medium hover:bg-white/5 transition-colors"
          >
            View Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
