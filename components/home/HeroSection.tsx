"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Github, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-purple/10 border border-accent-purple/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent-purple" />
              <span className="text-sm text-accent-purpleLight">
                Open to new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            >
              {portfolio.personal.name}
            </motion.h1>

            {/* Title with gradient */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4"
            >
              <span className="bg-gradient-to-r from-accent-purple to-accent-purpleLight bg-clip-text text-transparent font-semibold">
                {portfolio.personal.title}
              </span>
            </motion.h2>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.25 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-400 mb-6"
            >
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-accent-purple" />
                {portfolio.personal.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4 text-accent-purple" />
                {portfolio.personal.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4 text-accent-purple" />
                {portfolio.personal.phone}
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
              className="text-gray-400 text-base max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {portfolio.personal.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <Link
                href="/services#contact"
                className="w-full sm:w-auto px-8 py-4 bg-accent-purple text-white rounded-xl font-medium hover:bg-accent-purpleLight transition-colors flex items-center justify-center gap-2 group"
              >
                Hire Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white rounded-xl font-medium hover:bg-white/5 transition-colors"
              >
                View My Work
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href={portfolio.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href={portfolio.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>

          {/* Right side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-purpleLight rounded-full blur-3xl opacity-20 scale-110" />
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-accent-purple/30 shadow-[0_0_60px_-15px_rgba(124,58,237,0.5)]">
                <Image
                  src={portfolio.personal.avatar}
                  alt={portfolio.personal.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, 320px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {portfolio.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0f1020] rounded-xl border border-white/[0.07] p-4 text-center hover:border-accent-purple/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-accent-purple mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
