"use client";

import { motion } from "framer-motion";
import { loveBookContent } from "@/data/loveBookContent";

const BookFinale = () => {
  const { auntyFad, finale } = loveBookContent;

  return (
    <section className="min-h-screen flex items-center justify-center bg-stone-50 px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-24">
        
        {/* Message pour Aunty Fad */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 pb-16 border-b border-gray-200"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
            {auntyFad.title}
          </p>
          
          <p className="text-lg font-light text-gray-800">
            {auntyFad.greeting}
          </p>

          <div className="space-y-4 text-left max-w-2xl mx-auto">
            {auntyFad.paragraphs.map((para, i) => (
              <p key={i} className="text-base text-gray-700 font-light leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="pt-4">
            <span className="text-3xl">♥</span>
          </div>
        </motion.div>

        {/* Finale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center space-y-8"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 font-light">
            {finale.title}
          </p>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-[1.2]">
            {finale.subtitle}
          </h2>

          <div className="space-y-4">
            <p className="text-lg text-gray-700 font-light">
              {finale.message}
            </p>
            <p className="text-xl font-display italic text-gray-800">
              {finale.promise}
            </p>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="py-8"
          >
            <motion.span
              className="inline-block text-6xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ♥
            </motion.span>
          </motion.div>

          <p className="text-2xl sm:text-3xl md:text-4xl font-display font-light text-gray-900">
            {finale.ending}
          </p>

          <p className="text-sm tracking-[0.4em] uppercase text-gray-400 font-light pt-8">
            {finale.signature}
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default BookFinale;
