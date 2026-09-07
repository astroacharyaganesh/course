import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const PremiumPageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elegant brief introduction that disappears swiftly (750ms)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#070b14] flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Subtle golden ambient glow */}
          <div className="absolute w-72 h-72 rounded-full bg-[#d4af37]/20 blur-3xl animate-pulse" />

          {/* Rotating celestial mandala ring */}
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="w-24 h-24 rounded-full border border-dashed border-[#caa05b]/60"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              className="absolute w-20 h-20 rounded-full border border-[#caa05b]/30"
            />

            {/* Sacred ॐ Center */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute text-2xl font-serif font-bold text-[#e5b35a]"
            >
              ॐ
            </motion.div>
          </div>

          {/* Brand Name & Golden Progress Line */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="mt-5 text-center"
          >
            <div className="font-cinzel text-xs tracking-[0.25em] text-[#e8b560] uppercase font-bold">
              Acharya Ganesh
            </div>
            <div className="text-[9px] tracking-[0.15em] text-[#94a3b8] uppercase mt-0.5">
              Vedic Astrology Academy
            </div>

            {/* Fine Golden Shimmer Line */}
            <div className="w-36 h-0.5 bg-[#1a2333] rounded-full mt-3 overflow-hidden mx-auto">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.7, ease: 'easeInOut', repeat: Infinity }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#e5b35a] to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
