"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { fadeUp, fadeUpProps, expandHeight } from "@/lib/animations";
import { portfolio } from "@/data/portfolio";
import SectionDivider from "@/components/ui/SectionDivider";

export default function AboutSection() {
  const [showJourney, setShowJourney] = useState(false);

  const journeyParagraphs = portfolio.personal.journeyBio.split("\n\n");

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Brand About */}
        <motion.div variants={fadeUp} {...fadeUpProps} className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            About {portfolio.personal.brand}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {portfolio.personal.brand} is a creative development studio focused on
            building exceptional digital experiences. We combine cutting-edge
            technology with thoughtful design to create products that users love.
            Our mission is to help businesses and individuals bring their ideas to
            life through modern web development and AI integration.
          </p>
        </motion.div>

        <SectionDivider />

        {/* Personal Bio */}
        <motion.div variants={fadeUp} {...fadeUpProps} className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Meet {portfolio.personal.name.split(" ")[0]}
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            {portfolio.personal.bio}
          </p>

          {/* View My Journey Button */}
          <button
            onClick={() => setShowJourney(!showJourney)}
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent-purple/30 text-accent-purpleLight rounded-xl font-medium hover:bg-accent-purple/10 transition-colors"
          >
            {showJourney ? (
              <>
                Hide My Journey
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View My Journey
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Expandable Journey Content */}
          <AnimatePresence>
            {showJourney && (
              <motion.div
                {...expandHeight}
                className="overflow-hidden"
              >
                <div className="mt-8 text-left space-y-4">
                  {journeyParagraphs.map((paragraph, index) => (
                    <p key={index} className="text-gray-400 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
