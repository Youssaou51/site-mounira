"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/data/content";
import ImageWithFallback from "./ImageWithFallback";

const TimelineItem = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <motion.div
      ref={ref}
      className="mb-24 md:mb-40"
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Photo - format portrait */}
        <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
          <ImageWithFallback
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Contenu */}
        <div className="space-y-6 md:space-y-8">
          {/* Date - petit et discret */}
          <div className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-400 font-light">
            {item.date}
          </div>

          {/* Title - grand avec mot en italique */}
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-[1.1]">
            {item.title}
          </h3>

          {/* Description - spacing généreux */}
          <p className="text-base sm:text-lg text-gray-600 leading-[1.8] font-light max-w-lg">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const { timeline } = siteContent;

  return (
    <section className="py-24 sm:py-32 md:py-40 lg:py-48 px-6 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section title - style L'Agence */}
        <motion.div
          className="mb-20 sm:mb-28 md:mb-36"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-400 font-light mb-8">
            Notre Histoire
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-[1.1] max-w-4xl">
            Les moments qui ont{" "}
            <span className="italic font-normal">construit</span>{" "}
            notre amour
          </h2>
        </motion.div>

        {/* Timeline items */}
        <div>
          {timeline.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
