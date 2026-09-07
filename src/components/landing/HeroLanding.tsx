import React from 'react';
import { Star, Users, Calendar, ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import acharyaImg from '../../assets/images/acharya_ganesh_portrait_1788771630566.jpg';
import { FloatingZodiacSymbols } from '../ui/FloatingZodiacSymbols';
import { ParallaxTiltCard } from '../ui/ParallaxTiltCard';
import { MagneticButton } from '../ui/MagneticButton';
import { ScrollReveal } from '../ui/ScrollReveal';

interface HeroLandingProps {
  onEnrollClick: () => void;
  onWatchDemoClick: () => void;
}

export const HeroLanding: React.FC<HeroLandingProps> = ({
  onEnrollClick,
  onWatchDemoClick,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-[#fbf4e6] via-[#f5e3c3] to-[#e8cda0] text-[#1f1105] pt-10 sm:pt-14 pb-16 lg:pb-24 overflow-hidden border-b-2 border-[#caa05b]">
      
      {/* Floating subtle zodiac symbols in background */}
      <FloatingZodiacSymbols count={9} className="opacity-35" />

      {/* Subtle Background Sacred Halo & Light Ornaments */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none aurora-glow" />
      <div className="absolute -top-20 left-10 w-80 h-80 bg-[#caa05b]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle, Stats & Buttons */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            
            <ScrollReveal direction="down" distance={16} delay={0.05}>
              {/* Academy Trust Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#faecd4] border border-[#caa05b] text-[#783c0c] text-xs font-bold tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#9c450f] animate-pulse" />
                <span>India's Trusted Astrology Academy</span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal direction="up" distance={20} delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1f1105] leading-[1.15]">
                Master Vedic Astrology with{' '}
                <span className="text-[#9c450f]">Acharya Ganesh</span>
              </h1>
            </ScrollReveal>

            {/* Subheading */}
            <ScrollReveal direction="up" distance={18} delay={0.2}>
              <p className="text-base sm:text-lg text-[#3d2412] max-w-2xl font-normal leading-relaxed">
                Step-by-step authentic Shastric knowledge transformed into modern, practical wisdom. 
                Learn Kundli reading, planetary transits, dasha analysis, and accurate life predictions.
              </p>
            </ScrollReveal>

            {/* Key Metrics / Trust Signals Strip with Hover Lift */}
            <ScrollReveal direction="up" distance={16} delay={0.3}>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-xs sm:text-sm text-[#3d2412]">
                <motion.div 
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 font-semibold bg-[#faecd4]/70 px-3 py-1.5 rounded-full border border-[#caa05b]/40"
                >
                  <Star className="w-4 h-4 text-[#9c450f] fill-[#9c450f]" />
                  <span>4.9 / 5 Google Rating</span>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 font-semibold bg-[#faecd4]/70 px-3 py-1.5 rounded-full border border-[#caa05b]/40"
                >
                  <Users className="w-4 h-4 text-[#9c450f]" />
                  <span>50,000+ Enrolled</span>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 font-semibold bg-[#faecd4]/70 px-3 py-1.5 rounded-full border border-[#caa05b]/40"
                >
                  <Calendar className="w-4 h-4 text-[#9c450f]" />
                  <span>17+ Years Experience</span>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal direction="up" distance={16} delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <MagneticButton
                  onClick={onEnrollClick}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#9c4d12] via-[#b35e19] to-[#8a400c] hover:from-[#ab5615] hover:to-[#783609] text-[#fff8ee] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-xl border border-[#caa05b]"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>

                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onWatchDemoClick}
                  className="px-7 py-3.5 rounded-full bg-[#faecd4] hover:bg-[#f6e1be] text-[#1f1105] border border-[#caa05b] hover:border-[#9c450f] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-[#9c450f]/15 flex items-center justify-center text-[#9c450f]">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <span>Watch Demo</span>
                </motion.button>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Astrologer Portrait with Mouse Parallax & Glowing Zodiac Mandala */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ParallaxTiltCard
              maxTilt={7}
              glowColor="rgba(218, 165, 32, 0.4)"
              className="max-w-[380px] sm:max-w-[420px]"
            >
              <div className="relative w-full flex items-center justify-center">
                
                {/* Outer Golden Zodiac Disc Aura */}
                <div className="absolute w-[340px] sm:w-[400px] h-[340px] sm:h-[400px] rounded-full border border-[#caa05b]/60 flex items-center justify-center pointer-events-none">
                  <div className="absolute inset-0 rounded-full border border-dashed border-[#caa05b]/70 animate-[spin_120s_linear_infinite]" />
                  <div className="absolute inset-4 rounded-full border border-[#caa05b]/40" />
                  <div className="w-[280px] sm:w-[330px] h-[280px] sm:h-[330px] rounded-full bg-gradient-to-b from-[#caa05b]/30 to-transparent blur-md" />
                </div>

                {/* Astrologer Image Frame */}
                <div className="relative z-10 w-[290px] sm:w-[330px] h-[340px] sm:h-[390px] rounded-3xl overflow-hidden border-2 border-[#caa05b] shadow-2xl bg-[#241407]">
                  <img
                    src={acharyaImg}
                    alt="Celebrity Astrologer Acharya Ganesh"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/images/acharya_ganesh_portrait_1788771630566.jpg';
                    }}
                  />

                  {/* Subtle vignette gradient at bottom of frame */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#241407] via-[#241407]/70 to-transparent" />
                  
                  {/* Overlay Badge at Bottom of Portrait */}
                  <div className="absolute bottom-3 inset-x-3 text-center py-2 px-3 rounded-xl bg-[#faecd4]/95 border border-[#caa05b] backdrop-blur-sm shadow-md">
                    <div className="font-cinzel text-xs sm:text-sm font-bold text-[#1f1105] tracking-wide">
                      Acharya Ganesh
                    </div>
                    <div className="text-[10px] text-[#8a400c] font-sans-ui tracking-wider uppercase font-bold">
                      Celebrity Vedic Astrologer
                    </div>
                  </div>
                </div>

              </div>
            </ParallaxTiltCard>
          </div>

        </div>
      </div>
    </section>
  );
};
