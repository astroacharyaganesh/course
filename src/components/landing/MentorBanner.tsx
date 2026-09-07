import React from 'react';
import { Award, Users, Tv, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import acharyaImg from '../../assets/images/acharya_ganesh_portrait_1788771630566.jpg';
import { ParallaxTiltCard } from '../ui/ParallaxTiltCard';
import { FloatingZodiacSymbols } from '../ui/FloatingZodiacSymbols';

export const MentorBanner: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#faf7f2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Glowing Mentor Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#070b14] via-[#0d1425] to-[#121c33] border border-[#263553] p-6 sm:p-8 lg:p-10 text-white shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Golden Glow */}
          <div className="absolute -top-20 right-10 w-80 h-80 bg-[#d4a34b]/15 rounded-full blur-3xl pointer-events-none aurora-glow" />
          <FloatingZodiacSymbols count={6} className="opacity-20 text-[#e8b560]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Mentor Portrait with Parallax Tilt & Golden Ring */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <ParallaxTiltCard maxTilt={6} glowColor="rgba(232, 181, 96, 0.4)">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-[#d4a34b] shadow-2xl bg-[#131b2e] group">
                  <img
                    src={acharyaImg}
                    alt="Celebrity Astrologer Acharya Ganesh"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/images/acharya_ganesh_portrait_1788771630566.jpg';
                    }}
                  />
                </div>
              </ParallaxTiltCard>
            </div>

            {/* Center: Mentor Profile, Experience & Media Presence */}
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <div className="inline-block text-[11px] font-bold tracking-[0.2em] text-[#e8b560] uppercase">
                Meet Your Mentor
              </div>

              <div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Acharya Ganesh
                </h3>
                <div className="text-xs sm:text-sm text-[#cbd5e1] font-medium">
                  Celebrity Vedic Astrologer &amp; Spiritual Guide
                </div>
              </div>

              {/* 3 Quick Mentor Stats with Hover Lift */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
                <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2 text-left bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                  <Award className="w-4 h-4 text-[#e8b560]" />
                  <div>
                    <div className="text-xs font-bold text-white">17+</div>
                    <div className="text-[10px] text-[#94a3b8]">Years Experience</div>
                  </div>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2 text-left bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                  <Users className="w-4 h-4 text-[#e8b560]" />
                  <div>
                    <div className="text-xs font-bold text-white">50,000+</div>
                    <div className="text-[10px] text-[#94a3b8]">Students</div>
                  </div>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2 text-left bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                  <Tv className="w-4 h-4 text-[#e8b560]" />
                  <div>
                    <div className="text-xs font-bold text-white">National TV</div>
                    <div className="text-[10px] text-[#94a3b8]">Panelist</div>
                  </div>
                </motion.div>
              </div>

              {/* Media Badges */}
              <div className="pt-2 text-left">
                <div className="text-[10px] text-[#94a3b8] uppercase tracking-wider font-semibold mb-1.5">
                  Featured On National Television
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-[#cbd5e1]">
                  <span className="px-2.5 py-0.5 rounded-md bg-white/10 border border-white/10">
                    Zee News
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-white/10 border border-white/10">
                    India TV
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-white/10 border border-white/10">
                    Aaj Tak
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-white/10 border border-white/10">
                    News18
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Personal Message Quote */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 relative text-left">
                <Quote className="w-6 h-6 text-[#e8b560]/40 absolute top-3 right-3" />
                <p className="font-serif italic text-xs sm:text-sm text-[#e2e8f0] leading-relaxed">
                  "Astrology is not about predicting a fixed fate. It is the sacred science of timing your karma to achieve peace, purpose, and prosperity."
                </p>
                <div className="text-[11px] text-[#e8b560] font-cinzel font-bold tracking-wider">
                  — Acharya Ganesh
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
