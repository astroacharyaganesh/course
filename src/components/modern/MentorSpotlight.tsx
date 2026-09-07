import React from 'react';
import { Award, ShieldCheck, BookOpen, Star, Sparkles, Quote, ArrowRight } from 'lucide-react';

interface MentorSpotlightProps {
  onEnrollClick: () => void;
}

export const MentorSpotlight: React.FC<MentorSpotlightProps> = ({ onEnrollClick }) => {
  return (
    <section id="mentor" className="py-20 bg-[#faf7f2] text-[#2c1e16] relative border-b border-[#e7d8c5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-white border border-[#dfcaa6] p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          
          {/* Subtle Warm Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#dfba88]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Portrait with Sacred Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-72">
                
                {/* Gold Outer Halo */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#dfba88] to-[#c85a17] opacity-25 blur-md" />

                {/* Portrait Container */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#dfcaa6] bg-[#f8efe2] shadow-xl aspect-[4/5]">
                  <img
                    src="/src/assets/images/acharya_ganesh_portrait_1788771630566.jpg"
                    alt="Astrologer Hanish Bagga"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />

                  <div className="absolute bottom-4 inset-x-4 text-center">
                    <div className="font-cinzel text-lg font-bold text-white">
                      Astrologer Hanish Bagga
                    </div>
                    <div className="text-[11px] text-[#fef3c7] font-semibold tracking-wider uppercase">
                      Founder, Acharya Ganesh Academy
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Bio & Credentials */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fef3c7] border border-[#fde68a] text-[#92400e] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#c85a17]" />
                <span>Meet Your Mentor</span>
              </div>

              <div className="space-y-2">
                <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#241812] tracking-tight">
                  Guided by Astrologer Hanish Bagga
                </h2>
                <div className="text-sm text-[#8c3b12] font-semibold">
                  Senior Vedic Astrologer • Author • Spiritual Mentor
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 rounded-xl bg-[#faf7f2] border-l-4 border-[#c85a17] text-[#4a3b32] italic text-sm sm:text-base leading-relaxed relative">
                <Quote className="w-5 h-5 text-[#dfcaa6] absolute top-2 right-2" />
                "Vedic Astrology is never meant to make you live in fear or fatalism. It is the divine GPS given by Rishi Parashara to awaken your discernment, navigate karmic tests, and live with spiritual alignment."
              </div>

              <p className="text-xs sm:text-sm text-[#5c4a3e] leading-relaxed">
                With more than 15 years of dedicated practice and over 25,000 birth charts decoded, 
                Astrologer Hanish Bagga is celebrated across India and worldwide for his scientific, 
                fear-free approach to classical Jyotish. Through the Acharya Ganesh Academy, he has 
                trained over 50,000 seekers in transforming complex shastric principles into practical everyday life wisdom.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2 text-center sm:text-left border-t border-[#ebdccd]">
                <div>
                  <div className="font-display text-2xl font-bold text-[#8c3b12]">15+ Years</div>
                  <div className="text-[11px] text-[#735e50]">Shastric Practice</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-[#8c3b12]">25,000+</div>
                  <div className="text-[11px] text-[#735e50]">Kundlis Decoded</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-[#8c3b12]">50,000+</div>
                  <div className="text-[11px] text-[#735e50]">Students Worldwide</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onEnrollClick}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#c85a17] via-[#d97706] to-[#b45309] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Learn with Hanish Bagga for Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
