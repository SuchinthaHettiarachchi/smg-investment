"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-offwhite"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 180 }}
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <motion.path
                  d="M10 30 L40 10 L70 30 L70 50 L40 70 L10 50 Z"
                  stroke="#D4AF37"
                  strokeWidth="2.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M20 35 L40 20 L60 35 L60 45 L40 60 L20 45 Z"
                  fill="#D4AF37"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                />
              </svg>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center"
            >
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal-300">SMG</h2>
              <p className="text-xs sm:text-sm text-gold-600 tracking-[0.25em] uppercase">Investment Services</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="w-40 sm:w-48 h-1 bg-offwhite-300 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full gold-gradient rounded-full"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
