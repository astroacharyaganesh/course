import React from 'react';
import { motion } from 'motion/react';

interface FloatingZodiacSymbolsProps {
  count?: number;
  className?: string;
}

interface ZodiacParticle {
  id: number;
  symbol: string;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const ZODIAC_SIGNS = [
  '♈', '♉', '♊', '♋', '♌', '♍', 
  '♎', '♏', '♐', '♑', '♒', '♓', 
  'ॐ', '✦', '✧'
];

export const FloatingZodiacSymbols: React.FC<FloatingZodiacSymbolsProps> = ({
  count = 10,
  className = '',
}) => {
  // Deterministic positions so no hydration mismatch
  const particles: ZodiacParticle[] = [
    { id: 1, symbol: '♈', top: '12%', left: '8%', size: 22, duration: 18, delay: 0, opacity: 0.18 },
    { id: 2, symbol: '♌', top: '24%', left: '88%', size: 26, duration: 22, delay: 2, opacity: 0.22 },
    { id: 3, symbol: 'ॐ', top: '65%', left: '5%', size: 28, duration: 26, delay: 4, opacity: 0.15 },
    { id: 4, symbol: '♐', top: '78%', left: '92%', size: 20, duration: 20, delay: 1, opacity: 0.20 },
    { id: 5, symbol: '♓', top: '42%', left: '15%', size: 24, duration: 24, delay: 3, opacity: 0.16 },
    { id: 6, symbol: '✧', top: '8%', left: '72%', size: 18, duration: 16, delay: 5, opacity: 0.25 },
    { id: 7, symbol: '♉', top: '55%', left: '82%', size: 24, duration: 21, delay: 2.5, opacity: 0.18 },
    { id: 8, symbol: '✦', top: '85%', left: '28%', size: 16, duration: 19, delay: 3.5, opacity: 0.22 },
    { id: 9, symbol: '♎', top: '35%', left: '95%', size: 22, duration: 25, delay: 1.5, opacity: 0.17 },
    { id: 10, symbol: '✦', top: '70%', left: '70%', size: 18, duration: 17, delay: 4.5, opacity: 0.20 },
  ].slice(0, count);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute select-none text-[#b88628] font-serif font-semibold"
          style={{
            top: p.top,
            left: p.left,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
          }}
          animate={{
            y: [-12, 14, -12],
            rotate: [-6, 8, -6],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        >
          {p.symbol}
        </motion.div>
      ))}
    </div>
  );
};
