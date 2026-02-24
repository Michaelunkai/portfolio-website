"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Youtube, Download } from "lucide-react";
import { fadeUp, fadeUpProps } from "@/lib/animations";
import { portfolio } from "@/data/portfolio";

export default function TeamSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0b14]">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={fadeUp} {...fadeUpProps} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Team
          </h2>
          <p className="text-gray-400">
            The person behind the code and creativity.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          {...fadeUpProps}
          className="bg-[#0f1020] rounded-3xl border border-white/[0.07] p-8 text-center"
        >
          {/* Avatar */}
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent-purple/30">
            <Image
              src={portfolio.personal.avatar}
              alt={portfolio.personal.name}
              fill
              className="object-cover"
              sizes="128px"
              priority
            />
          </div>

          {/* Name & Role */}
          <h3 className="text-2xl font-bold text-white mb-1">
            {portfolio.personal.name}
          </h3>
          <p className="text-accent-purpleLight mb-4">
            {portfolio.personal.title}
          </p>

          {/* Bio */}
          <p className="text-gray-400 max-w-lg mx-auto mb-6">
            {portfolio.personal.bio}
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Link
              href={portfolio.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href={portfolio.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href={portfolio.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href={portfolio.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </Link>
          </div>

          {/* Resume Button */}
          <Link
            href={portfolio.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-purple text-white rounded-xl font-medium hover:bg-accent-purpleLight transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Résumé
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
