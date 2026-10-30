"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/content";
import ImageWithFallback from "./ImageWithFallback";

const Gallery = () => {
  const { gallery } = siteContent;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 md:py-40 lg:py-48 px-6 sm:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Title style L'Agence */}
        <motion.div
          className="mb-20 sm:mb-28 md:mb-36"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-400 font-light mb-8">
            Nos Souvenirs
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-[1.1] max-w-4xl">
            Quelques{" "}
            <span className="italic font-normal">moments</span>{" "}
            précieux
          </h2>
        </motion.div>

        {/* Grille simple et épurée - 2 ou 3 colonnes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {gallery.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedImage(index)}
            >
              <ImageWithFallback
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay très subtil */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox minimaliste blanc */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white p-6 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button - style L'Agence */}
            <button
              className="absolute top-6 right-6 sm:top-8 sm:right-8 text-gray-400 hover:text-gray-900 transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-6 sm:left-8 text-gray-400 hover:text-gray-900 transition-colors duration-300 hidden md:block"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage === 0 ? gallery.length - 1 : selectedImage - 1);
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-w-5xl max-h-[85vh]">
                <ImageWithFallback
                  src={gallery[selectedImage].src}
                  alt={gallery[selectedImage].alt}
                  width={1200}
                  height={1600}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                />
              </div>
            </motion.div>

            <button
              className="absolute right-6 sm:right-8 text-gray-400 hover:text-gray-900 transition-colors duration-300 hidden md:block"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage + 1) % gallery.length);
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
