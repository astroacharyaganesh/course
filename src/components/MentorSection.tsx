import React from 'react';
import { Award, BookOpen, Check, ShieldCheck, Star, Users } from 'lucide-react';

interface MentorSectionProps {
  onEnrollClick: () => void;
}

export const MentorSection: React.FC<MentorSectionProps> = ({ onEnrollClick }) => {
  return (
    <section 
      id="mentor"
      className="relative py-24 bg-[#0c121e] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Spiritual Backdrop */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#d97706]/30 via-[#c59b27]/20 to-transparent blur-xl" />
              
              <div className="relative rounded-2xl overflow-hidden border border-[#d4a34b]/40 bg-[#0e1626] shadow-2xl">
                <img
                  src="/src/assets/images/acharya_ganesh_portrait_1788771630566.jpg"
                  alt="Acharya Ganesh - Renowned Vedic Astrologer"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/5] object-cover object-top"
                />

                <div className="p-5 bg-gradient-to-t from-[#090e17] to-transparent">
                  <div className="font-display text-xl font-bold text-white">
                    Acharya Ganesh
                  </div>
                  <div className="text-xs text-[#d4a34b] font-medium tracking-wide">
                    Master Astrologer, Shastra Researcher & Mentor
                  </div>
                </div>
              </div>

              {/* Floating Quote Stamp */}
              <div className="absolute -bottom-6 -right-4 p-4 rounded-xl bg-[#141d2f]/95 border border-[#d4a34b]/40 shadow-xl max-w-[220px]">
                <div className="text-[11px] text-amber-200/90 font-spiritual italic">
                  "Astrology is neither fate nor fear; it is the divine lantern illuminating your free will."
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c59b27]/15 border border-[#d4a34b]/30 text-[#fcebc2] text-xs font-semibold tracking-[0.2em] uppercase font-sans-ui">
              <Award className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>Meet Your Guide</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Guided by the Wisdom of <span className="gold-gradient-text">Acharya Ganesh</span>
            </h2>

            <p className="font-spiritual text-lg sm:text-xl text-slate-300 leading-relaxed">
              With over 15 years of dedicated practice in traditional Vedic Jyotish, Acharya Ganesh 
              has guided more than 14,000 individuals worldwide—including entrepreneurs, doctors, 
              creative artists, and spiritual seekers.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed font-sans-ui">
              Trained in classical gurukul lineages and thoroughly grounded in Maharishi Parashara's 
              treatises, Acharya Ganesh has earned universal acclaim for stripping away fear, 
              superstition, and dogmatism. His teaching methodology bridges ancient Vedic wisdom 
              with modern psychological depth, empowering students to decipher their life purpose 
              with clear ethical discernment.
            </p>

            {/* Key Accomplishments Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-[#111928] border border-slate-800">
                <div className="font-display text-2xl font-bold text-[#f59e0b]">15+</div>
                <div className="text-xs text-slate-400">Years Shastric Practice</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111928] border border-slate-800">
                <div className="font-display text-2xl font-bold text-[#f59e0b]">25,000+</div>
                <div className="text-xs text-slate-400">Birth Charts Analyzed</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111928] border border-slate-800">
                <div className="font-display text-2xl font-bold text-[#f59e0b]">14,200+</div>
                <div className="text-xs text-slate-400">Students Globally</div>
              </div>
            </div>

            {/* Core Teaching Pillars */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-[#c59b27]/20 flex items-center justify-center text-[#f59e0b] shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Zero Fear-Mongering — Astrology taught as an empowering spiritual science</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-[#c59b27]/20 flex items-center justify-center text-[#f59e0b] shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Uncompromised Lineage Authenticity grounded in Brihat Parashara Hora Shastra</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-5 h-5 rounded-full bg-[#c59b27]/20 flex items-center justify-center text-[#f59e0b] shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Hands-On Mentorship with personal doubt-resolution during live cohort sessions</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onEnrollClick}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-slate-950 font-bold text-xs tracking-wider uppercase font-sans-ui hover:shadow-lg transition-all cursor-pointer"
              >
                Learn Directly Under Acharya Ganesh
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
