"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { siteContent } from "@/data/content";

const MessageCard = ({ message, index }: { message: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="py-12 sm:py-16 md:py-20 border-t border-gray-200 first:border-t-0"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid md:grid-cols-12 gap-8 md:gap-12">
        {/* Title - prend 5 colonnes */}
        <div className="md:col-span-5">
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-[1.1]">
            {message.title}
          </h3>
        </div>

        {/* Message - prend 7 colonnes */}
        <div className="md:col-span-7">
          <p className="text-base sm:text-lg text-gray-600 leading-[1.8] font-light">
            {message.message}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const LoveMessages = () => {
  const { loveMessages } = siteContent;

  return (
    <section className="py-24 sm:py-32 md:py-40 lg:py-48 px-6 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="mb-20 sm:mb-28 md:mb-36"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-400 font-light mb-8">
            Pour Toi
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-[1.1] max-w-4xl">
            Ce que{" "}
            <span className="italic font-normal">je ressens</span>
          </h2>
        </motion.div>

        {/* Messages - style liste avec séparateurs */}
        <div>
          {loveMessages.map((message, index) => (
            <MessageCard key={message.id} message={message} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveMessages;
