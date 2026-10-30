"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Counter = () => {
  const { counter } = siteContent;
  const [timeElapsed, setTimeElapsed] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const startDate = new Date(counter.startDate).getTime();
      const now = new Date().getTime();
      const difference = now - startDate;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    calculateTimeElapsed();
    const interval = setInterval(calculateTimeElapsed, 1000);

    return () => clearInterval(interval);
  }, [counter.startDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <motion.div
        key={value}
        className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {value.toString().padStart(2, "0")}
      </motion.div>

      <div className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-400 font-light">
        {label}
      </div>
    </div>
  );

  return (
    <section className="py-24 sm:py-32 md:py-40 lg:py-48 px-6 sm:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="mb-20 sm:mb-28 md:mb-36 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-400 font-light mb-8">
            Depuis Le Début
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-[1.1] max-w-4xl mx-auto">
            {counter.title}
          </h2>
        </motion.div>

        {/* Counter grid - très espacé */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 lg:gap-20 max-w-6xl mx-auto">
          <TimeUnit value={timeElapsed.days} label={counter.labels.days} />
          <TimeUnit value={timeElapsed.hours} label={counter.labels.hours} />
          <TimeUnit value={timeElapsed.minutes} label={counter.labels.minutes} />
          <TimeUnit value={timeElapsed.seconds} label={counter.labels.seconds} />
        </div>
      </div>
    </section>
  );
};

export default Counter;
