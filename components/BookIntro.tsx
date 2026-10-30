"use client";

import { motion } from "framer-motion";
import { loveBookContent } from "@/data/loveBookContent";

const BookIntro = () => {
  const { intro, preface } = loveBookContent;

  return (
    <section className="min-h-screen flex items-center justify-center bg-stone-50 px-6 py-20">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        
        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gray-400 font-light">
            {intro.title}
          </p>
          
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-gray-900">
            MA <span className="italic font-normal">SARAUNIYATA</span>
          </h1>

          <div className="flex items-center justify-center gap-4 text-sm text-gray-600 font-light">
            {intro.tags.map((tag, i) => (
              <span key={i}>
                {tag}
                {i < intro.tags.length - 1 && <span className="mx-3">•</span>}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          <p className="text-lg text-gray-700 font-light">
            {intro.description}
          </p>
          <p className="text-base text-gray-600 font-light italic">
            {intro.subtitle2}
          </p>
        </motion.div>

        {/* Coeur animé */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.span
            className="inline-block text-5xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ♥
          </motion.span>
        </motion.div>

        {/* Préface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="pt-12 space-y-6 border-t border-gray-200"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
            {preface.title}
          </p>
          
          <p className="text-lg font-light text-gray-800">
            {preface.greeting}
          </p>

          <div className="space-y-4 text-left">
            {preface.paragraphs.map((para, i) => (
              <p key={i} className="text-base text-gray-700 font-light leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="pt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-gray-500 text-sm font-light">Continue</span>
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default BookIntro;
