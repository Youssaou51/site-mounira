"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const ScrollStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transformations basées sur le scroll
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 1.2]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  const leftTextY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const leftTextOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 1, 0.3]);
  
  const rightTextY = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
  const rightTextOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-stone-50">
      {/* Section sticky qui reste en place pendant le scroll */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative h-full w-full flex items-center px-6 sm:px-12 lg:px-16">
          
          {/* Photo qui s'agrandit - PLUS GRANDE */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[80vh] overflow-hidden rounded-2xl shadow-2xl"
            style={{ scale: imageScale, opacity: imageOpacity }}
          >
            <Image
              src="/photos/photo2.jpg"
              alt="Mounira"
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
          </motion.div>

          {/* Texte gauche qui monte */}
          <motion.div
            className="absolute left-8 sm:left-12 lg:left-20 top-1/2 -translate-y-1/2 max-w-xs lg:max-w-md z-10"
            style={{ y: leftTextY, opacity: leftTextOpacity }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-500 font-light mb-6">
              Notre Histoire
            </p>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-[1.15] mb-6">
              Chaque moment avec{" "}
              <span className="italic font-normal">toi</span> est une{" "}
              <span className="italic font-normal">aventure</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
              Depuis notre première rencontre, chaque instant passé ensemble 
              a créé des souvenirs inoubliables qui illuminent ma vie.
            </p>
          </motion.div>

          {/* Texte droite qui apparaît - NOUVEAU MESSAGE */}
          <motion.div
            className="absolute right-8 sm:right-12 lg:right-20 top-1/2 -translate-y-1/2 max-w-xs lg:max-w-md z-10"
            style={{ y: rightTextY, opacity: rightTextOpacity }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-500 font-light mb-6">
              Pour Toi Mounira
            </p>
            
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-[1.2] mb-6">
              Tu es mon{" "}
              <span className="italic font-normal">soleil</span>,{" "}
              ma{" "}
              <span className="italic font-normal">joie</span>,{" "}
              mon{" "}
              <span className="italic font-normal">éternité</span>
            </h3>

            <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed mb-4">
              Ton sourire illumine mes journées,
              ta présence apaise mon cœur,
              et ton amour donne un sens à ma vie.
            </p>
            
            <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
              Avec toi, chaque jour est une promesse,
              chaque instant est un cadeau,
              et chaque souvenir est un trésor.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ScrollStory;
