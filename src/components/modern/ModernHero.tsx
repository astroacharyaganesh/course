import React from 'react';
import { Sparkles, Play, Clock, Award, ShieldCheck, CheckCircle2, ArrowRight, Flame } from 'lucide-react';

interface ModernHeroProps {
  onEnrollClick: () => void;
  onPlayTrailer: () => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({
  onEnrollClick,
  onPlayTrailer,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#faf7f2] via-[#f7f2ea] to-[#f4eee4] text-[#2c1e16] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#e7d8c5]">
      {/* Subtle Background Warm Sacred Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#dfba88]/20 via-[#f0dcbe]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-[#c85a17]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column: Messaging, Badges & Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Cohort & Lineage Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fef3c7] border border-[#fde68a] text-[#92400e] text-xs font-semibold tracking-wide shadow-xs">
              <Flame className="w-3.5 h-3.5 text-[#c85a17]" />
              <span>Free Cohort Open • 15,400+ Seekers Enrolled</span>
              <span className="hidden sm:inline text-[#d97706]/50">|</span>
              <span className="hidden sm:inline text-[#b45309] font-bold">Certified Masterclass</span>
            </div>

            {/* Display Title */}
            <div className="space-y-3">
              <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#241812] leading-[1.14] tracking-tight">
                Building Blocks of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8c3b12] via-[#c85a17] to-[#9c6508]">
                  Vedic Astrology
                </span>
              </h1>

              <div className="font-display text-lg sm:text-2xl text-[#7c3a18] italic font-normal tracking-wide">
                Planets (Grahas), Signs (Rashis) & Houses (Bhavas)
              </div>
            </div>

            {/* Value Proposition Paragraph */}
            <p className="text-sm sm:text-base text-[#5c4a3e] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Step into the sacred logic of Jyotish — the divine "Eye of the Vedas". 
              In this high-impact 90-minute masterclass, <strong>Astrologer Hanish Bagga</strong> strips 
              away superstition, fear, and confusing Sanskrit jargon to give you a clear, repeatable 
              framework to orient and interpret any birth chart.
            </p>

            {/* Price & Primary Call To Action Block */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                
                {/* 1-Click Free Access Button */}
                <button
                  onClick={onEnrollClick}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#c85a17] via-[#d97706] to-[#b45309] text-white font-bold text-sm tracking-wider uppercase transition-all shadow-xl shadow-[#c85a17]/25 hover:shadow-2xl hover:scale-105 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4 text-[#fef3c7]" />
                  <span>START FREE MASTERCLASS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Watch Trailer Button */}
                <button
                  onClick={onPlayTrailer}
                  className="w-full sm:w-auto px-6 py-4 rounded-full bg-white hover:bg-[#faf6f0] border border-[#dfcaa6] text-[#4a3b32] hover:text-[#241812] text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-[#f8efe2] text-[#8c3b12] flex items-center justify-center">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  <span>Watch 2-Min Preview</span>
                </button>

              </div>

              {/* Instant Reassurance Micro-text */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-1.5 text-xs text-[#6b584a] pt-1">
                <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Free Access (₹0)</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#9c6508]" />
                  <span>90 Mins Total</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#9c6508]" />
                  <span>Certificate of Completion</span>
                </span>
              </div>
            </div>

            {/* Social Proof Metric Chips */}
            <div className="pt-4 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 border-t border-[#e2d4c0] text-left">
              <div className="p-3 rounded-xl bg-white border border-[#e8dac7] shadow-xs">
                <div className="font-display text-xl sm:text-2xl font-bold text-[#8c3b12]">15,400+</div>
                <div className="text-[11px] text-[#6b584a]">Seekers Enrolled</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#e8dac7] shadow-xs">
                <div className="font-display text-xl sm:text-2xl font-bold text-[#8c3b12]">4.96 / 5</div>
                <div className="text-[11px] text-[#6b584a]">★★★★★ Rating</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#e8dac7] shadow-xs">
                <div className="font-display text-xl sm:text-2xl font-bold text-emerald-700">100% Free</div>
                <div className="text-[11px] text-[#6b584a]">No Credit Card</div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Premium Interactive Video Player Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            
            <div className="relative w-full max-w-md">
              
              {/* Outer Warm Golden Aura Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#dfba88]/50 via-[#f0dcbe]/40 to-[#c85a17]/20 blur-lg" />

              {/* Masterclass Showcase Card */}
              <div className="relative rounded-3xl bg-white border border-[#dfcaa6] overflow-hidden shadow-xl">
                
                {/* Media Artwork Header */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gradient-to-b from-[#f3e9dc] to-[#e8dac7]">
                  
                  {/* Portrait of Astrologer Hanish Bagga */}
                  <img
                    src="/src/assets/images/acharya_ganesh_portrait_1788771630566.jpg"
                    alt="Astrologer Hanish Bagga - Acharya Ganesh"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                  {/* Live Class Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#dfcaa6] text-[11px] text-[#8c3b12] font-semibold shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    <span>ON-DEMAND MASTERCLASS</span>
                  </div>

                  {/* Play Button Overlay */}
                  <button
                    onClick={onPlayTrailer}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#c85a17] hover:bg-[#b44212] text-white flex items-center justify-center shadow-xl shadow-black/40 hover:scale-110 transition-all cursor-pointer group"
                    aria-label="Play Masterclass Preview"
                  >
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </button>

                  {/* Bottom Duration Badge */}
                  <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded-md bg-black/75 text-[11px] text-white font-mono">
                    90:00 Mins (12 Lessons)
                  </div>
                </div>

                {/* Card Content & Interactive Chapter Preview */}
                <div className="p-6 space-y-4">
                  
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#9c6508]">
                      Core Curriculum Excerpt
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#241812]">
                      Building Blocks of Astrology
                    </h3>
                    <p className="text-xs text-[#6b584a] mt-1">
                      Instructor: <strong className="text-[#2c1e16]">Astrologer Hanish Bagga</strong>
                    </p>
                  </div>

                  {/* 3 Key Teaser Lessons */}
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-[#faf7f2] border border-[#e8dac7] flex items-center justify-between">
                      <span className="text-[#2c1e16] font-medium">1. Sacred Origins & What is a Kundli?</span>
                      <span className="text-[#c85a17] font-semibold text-[11px]">Free Preview</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#faf7f2] border border-[#e8dac7] flex items-center justify-between">
                      <span className="text-[#2c1e16] font-medium">2. The 9 Grahas as Cosmic Archetypes</span>
                      <span className="text-[#735e50] text-[11px]">12 Mins</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#faf7f2] border border-[#e8dac7] flex items-center justify-between">
                      <span className="text-[#2c1e16] font-medium">3. The 5-Step Chart Synthesis Formula</span>
                      <span className="text-[#735e50] text-[11px]">10 Mins</span>
                    </div>
                  </div>

                  {/* Card Action */}
                  <button
                    onClick={onEnrollClick}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#c85a17] to-[#d97706] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Instant Free Enrollment (₹0)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="text-center text-[10px] text-[#735e50]">
                    Includes Downloadable Kundli PDF + Verified Certificate
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
