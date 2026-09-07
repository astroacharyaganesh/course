import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'motion/react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  glow = true,
  onClick,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth spring physics for magnetic cursor pull
  const springConfig = { damping: 15, stiffness: 180, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Subtle magnetic attraction factor
    x.set(distanceX * 0.18);
    y.set(distanceY * 0.18);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`relative group overflow-hidden cursor-pointer ${className}`}
      {...(props as any)}
    >
      {/* Soft Ambient Golden Aurora Glow behind button */}
      {glow && (
        <span
          className={`absolute -inset-1 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f5c77e] to-[#9c4d12] opacity-0 group-hover:opacity-45 blur-md transition-opacity duration-500 pointer-events-none`}
        />
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Royal Gold Shimmer Sweep */}
      <span
        className="absolute top-0 -left-[100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] group-hover:animate-[goldShimmer_1.2s_ease-in-out_forwards] pointer-events-none"
      />
    </motion.button>
  );
};
