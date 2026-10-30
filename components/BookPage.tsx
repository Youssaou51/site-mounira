"use client";

import { ReactNode, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface BookPageProps {
  children: ReactNode;
  hasPhoto?: boolean;
  photoSrc?: string;
  pageNumber?: string;
}

const BookPage = ({ children, hasPhoto = false, photoSrc, pageNumber }: BookPageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallaxe subtil pour les photos
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      className="bg-white flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12"
      style={{ opacity }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
        
        {/* Contenu */}
        <motion.div 
          className="text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>

        {/* Photo si présente avec parallaxe */}
        {hasPhoto && photoSrc && (
          <motion.div
            className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] my-4 sm:my-5 md:my-6 overflow-hidden rounded-lg shadow-lg"
            style={{ y }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={photoSrc}
              alt="Mounira"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 640px"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BookPage;
