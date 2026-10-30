"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { siteContent } from "@/data/content";

const Surprise = () => {
  const { surprise } = siteContent;
  const [isRevealed, setIsRevealed] = useState(false);

  // Confettis élégants - exécuté côté client uniquement
  useEffect(() => {
    if (isRevealed) {
      const duration = 2500;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 100 };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval: NodeJS.Timeout = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 40 * (timeLeft / duration);

        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ["#f5f5f4", "#e7e5e4", "#d6d3d1"],
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ["#f5f5f4", "#e7e5e4", "#d6d3d1"],
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isRevealed]);

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true);
    }
  };

  return (
    <section className="py-24 sm:py-32 md:py-40 lg:py-48 px-6 sm:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="button"
              className="space-y-12 sm:space-y-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-400 font-light text-center">
                Une dernière chose
              </div>

              <div className="text-center">
                <button
                  onClick={handleReveal}
                  className="group inline-flex items-center gap-4 text-gray-900 hover:text-gray-600 transition-colors duration-300"
                >
                  <span className="font-display text-2xl sm:text-3xl md:text-4xl font-light">
                    Découvrir la surprise
                  </span>
                  <svg className="w-8 h-8 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12 sm:space-y-16"
            >
              <div className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-400 font-light text-center">
                {surprise.title}
              </div>

              <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-[1.2] text-center">
                {surprise.message}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Surprise;
