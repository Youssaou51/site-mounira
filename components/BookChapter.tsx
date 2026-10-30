"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface BookChapterProps {
  number: string;
  title: string;
  text: string;
  photo: string;
  index: number;
}

const BookChapter = ({ number, title, text, photo, index }: BookChapterProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animations basées sur le scroll
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Alterne gauche/droite selon l'index
  const isLeft = index % 2 === 0;

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center py-20 bg-stone-50">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
          
          {/* Photo */}
          <motion.div
            className={`relative h-[60vh] lg:h-[75vh] rounded-2xl overflow-hidden shadow-2xl ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}
            style={{ scale: imageScale, opacity: imageOpacity }}
          >
            <Image
              src={`/photos/${photo}`}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Texte */}
          <motion.div
            className={`space-y-6 ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}
            style={{ y: textY, opacity: textOpacity }}
          >
            {/* Numéro */}
            <div className="text-sm tracking-[0.3em] uppercase text-gray-400 font-light">
              {number}  /  {title}
            </div>

            {/* Titre */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-[1.15]">
              {title.split(' ').map((word, i) => {
                // Mots en italique pour emphase
                const italicWords = ['SARAUNIYATA', 'ÉVIDENCE', 'BÉBÉ', 'SOURIRE', 'BEAUTÉ', 'ÂME'];
                const isItalic = italicWords.some(w => word.toUpperCase().includes(w));
                return (
                  <span key={i} className={isItalic ? 'italic font-normal' : ''}>
                    {word}{' '}
                  </span>
                );
              })}
            </h2>

            {/* Texte */}
            <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed max-w-xl">
              {text}
            </p>

            {/* Coeur décoratif */}
            <div className="pt-4">
              <span className="text-2xl">♥</span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default BookChapter;
