"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Photo plein écran en background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/photos/hero-bg.jpg"
          alt="Mounira"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Contenu avec glassmorphisme */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-md bg-white/5 border border-white/20 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl"
        >
          {/* Petit texte en haut - BLANC */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-base tracking-[0.3em] uppercase font-light" style={{ color: '#FFFFFF' }}>
              ✨ Pour Toi Mon Amour ✨
            </span>
          </motion.div>

          {/* Titre principal - BLANC PUR */}
          <motion.h1
            className="mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold leading-[1.1]" style={{ 
              color: '#FFFFFF',
              textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.3)'
            }}>
              Pour <span className="italic">Mounira</span>
            </span>
          </motion.h1>

          {/* Message romantique - BLANC */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-3"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed" style={{ 
              color: '#FFFFFF',
              textShadow: '0 4px 12px rgba(0,0,0,0.9)'
            }}>
              Chaque instant à tes côtés
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed" style={{ 
              color: '#FFFFFF',
              textShadow: '0 4px 12px rgba(0,0,0,0.9)'
            }}>
              est un cadeau précieux,
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed" style={{ 
              color: '#FFFFFF',
              textShadow: '0 4px 12px rgba(0,0,0,0.9)'
            }}>
              un trésor que je chéris pour l'éternité
            </p>
          </motion.div>

          {/* Coeur animé */}
          <motion.div
            className="mt-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.span
              className="inline-block text-6xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ❤️
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator - BLANC */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm font-light" style={{ color: '#FFFFFF' }}>Scroll</span>
            <svg className="w-6 h-6" fill="none" stroke="#FFFFFF" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
