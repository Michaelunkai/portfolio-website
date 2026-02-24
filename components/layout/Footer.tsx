"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0b14] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © {currentYear} {portfolio.personal.name}. All rights reserved.
          </div>

          {/* GitHub Link */}
          <Link
            href="https://github.com/Michaelunkai/portfolio-website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            View Source Code
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href={portfolio.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent-purple transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href={portfolio.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent-purple transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
