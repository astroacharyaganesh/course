import React from 'react';
import { Award, Users, Tv, Quote } from 'lucide-react';

export const MentorBanner: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Glowing Mentor Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#070b14] via-[#0d1425] to-[#121c33] border border-[#263553] p-6 sm:p-8 lg:p-10 text-white shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Golden Glow */}
          <div className="absolute -top-20 right-10 w-80 h-80 bg-[#d4a34b]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Mentor Portrait with Golden Ring */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-[#d4a34b] shadow-2xl bg-[#131b2e]">
                <img
                  src="/src/assets/images/acharya_ganesh_portrait_1788771630566.jpg"
                  alt="Celebrity Astrologer Acharya Ganesh"
                  className="w-full h-full object-cover object-top"
                />
              </div>
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
                  Celebrity Vedic Astrologer & Spiritual Guide
                </div>
              </div>

              {/* 3 Quick Mentor Stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
                <div className="flex items-center gap-2 text-left">
                  <Award className="w-4 h-4 text-[#e8b560]" />
                  <div>
                    <div className="text-xs font-bold text-white">17+</div>
                    <div className="text-[10px] text-[#94a3b8]">Years Experience</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-left">
                  <Users className="w-4 h-4 text-[#e8b560]" />
                  <div>
                    <div className="text-xs font-bold text-white">50,000+</div>
                    <div className="text-[10px] text-[#94a3b8]">Students</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-left">
                  <Tv className="w-4 h-4 text-[#e8b560]" />
                  <div>
                    <div className="text-xs font-bold text-white">TV Panelist</div>
                    <div className="text-[10px] text-[#94a3b8]">& Media Presence</div>
                  </div>
                </div>
              </div>

              {/* Media Presence Badges */}
              <div className="pt-2 space-y-2">
                <div className="text-[10px] uppercase tracking-wider text-[#94a3b8] font-bold">
                  Featured On National Television:
                </div>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
                  <span className="px-3 py-1 rounded-md bg-[#162137] border border-[#2b3c5e] text-[11px] font-black tracking-wider text-white">
                    INDIA TV
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#162137] border border-[#2b3c5e] text-[11px] font-black tracking-wider text-[#ea580c]">
                    ZEE NEWS
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#162137] border border-[#2b3c5e] text-[11px] font-black tracking-wider text-[#f59e0b]">
                    NEWS 24
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#162137] border border-[#2b3c5e] text-[11px] font-black tracking-wider text-[#dc2626]">
                    AAJ TAK
                  </span>
                </div>
              </div>

            </div>

            {/* Right: Golden Quote Callout */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#263553] pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#111a2d]/80 border border-[#2b3c5e] space-y-3 relative">
                <Quote className="w-6 h-6 text-[#e8b560]/40 absolute top-3 right-3" />
                <p className="font-serif italic text-xs sm:text-sm text-[#f1f5f9] leading-relaxed">
                  "Astrology is not just about predicting the future, it's about understanding your present and creating a better tomorrow."
                </p>
                <div className="text-right">
                  <span className="font-cinzel text-xs text-[#e8b560] font-bold tracking-wider">
                    — Acharya Ganesh
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
