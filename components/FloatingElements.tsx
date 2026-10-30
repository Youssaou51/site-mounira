"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface FloatingItem {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
}

const FloatingElements = () => {
  const [hearts, setHearts] = useState<FloatingItem[]>([]);

  useEffect(() => {
    // Générer seulement 8 cœurs plus discrets
    setHearts(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: Math.random() * 15 + 20,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 15 + 25,
      }))
    );
  }, []);

  if (hearts.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={`heart-${heart.id}`}
          className="absolute text-pink-300/40"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
          initial={{ y: "110vh", rotate: 0, opacity: 0 }}
          animate={{
            y: "-10vh",
            rotate: [0, 15, -15, 0],
            opacity: [0, 0.6, 0.6, 0],
            x: [0, 30, -30, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          💕
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
