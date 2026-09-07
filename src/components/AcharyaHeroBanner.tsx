import React from 'react';
import { Clock, BookOpen, Sparkles } from 'lucide-react';

interface AcharyaHeroBannerProps {
  onBuyNowClick: () => void;
}

export const AcharyaHeroBanner: React.FC<AcharyaHeroBannerProps> = ({ onBuyNowClick }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
      
      {/* Light Warm Beige Rounded Container matching screenshot */}
      <div className="rounded-[28px] bg-[#faeee1] border border-[#f0ded0] p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Breadcrumb, Title, Metadata, Price & Button */}
          <div className="lg:col-span-8 flex flex-col items-start justify-center space-y-5">
            
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-xs sm:text-[13px] text-[#715444] font-medium flex items-center gap-2">
              <a href="#" className="hover:text-[#a2531d] transition-colors">Home</a>
              <span className="text-[#a88d7c]">/</span>
              <a href="#" className="hover:text-[#a2531d] transition-colors">Courses</a>
              <span className="text-[#a88d7c]">/</span>
              <span className="text-[#a2531d] font-semibold">Vedic Astrology</span>
            </nav>

            {/* Course Title */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#381c10] leading-[1.18] tracking-tight">
              Building Blocks of Astrology: Planets, Signs & Houses
            </h1>

            {/* Meta Information Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-[13px] text-[#553b2e] font-medium">
              <div>
                <strong className="text-[#381c10]">Duration:</strong> 90 Minutes
              </div>
              <span className="text-[#c4a997]">|</span>
              <div>
                <strong className="text-[#381c10]">Sessions:</strong> 1
              </div>
            </div>

            {/* Price & Primary Action with Feel CTA */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#381c10] tracking-wide">
                  FREE
                </div>

                <button
                  onClick={onBuyNowClick}
                  className="px-8 py-3 rounded-full bg-[#e8be89] hover:bg-[#dfb175] text-[#381c10] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#8c501c]" />
                  <span>BUY NOW</span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('table-of-contents-heading');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-full border border-[#b88648]/40 hover:border-[#8c501c] text-[#553b2e] hover:text-[#381c10] font-semibold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#a2531d]" />
                  <span>View 12 Lessons</span>
                </button>
              </div>

              {/* Social proof & Reassurance badges */}
              <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-[11px] sm:text-xs text-[#6a4f40] pt-1">
                <div className="flex items-center gap-1">
                  <span className="text-[#a2531d] font-bold">★ 4.9/5</span>
                  <span>(3,450+ Seekers Enrolled)</span>
                </div>
                <span className="hidden sm:inline text-[#d4bcae]">•</span>
                <div className="flex items-center gap-1 text-[#2d5a27] font-medium">
                  <span>✓ 100% Free Instant Access</span>
                </div>
                <span className="hidden sm:inline text-[#d4bcae]">•</span>
                <div>
                  <span>📜 Certificate Included</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Course Poster Artwork */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[260px] sm:max-w-[280px] rounded-2xl overflow-hidden shadow-xl border-2 border-[#b88648]/40 bg-[#09121f]">
              
              {/* Inner Poster Card Frame */}
              <div className="p-3 text-center text-white flex flex-col justify-between h-[360px] relative bg-gradient-to-b from-[#0e1b2f] via-[#09121f] to-[#050b14]">
                
                {/* Gold Ornamental Header */}
                <div className="border-b border-[#d4a34b]/40 pb-2">
                  <span className="text-[10px] tracking-[0.25em] text-[#d4a34b] font-bold uppercase font-sans-ui block">
                    BUILDING BLOCKS OF
                  </span>
                  <div className="font-display text-lg font-bold text-white tracking-wide">
                    ASTROLOGY
                  </div>
                  <div className="text-[10px] text-[#fcebc2] tracking-wider italic">
                    Planets, Signs & Houses
                  </div>
                </div>

                {/* Center Visual: Astrologer Portrait with Cosmic Zodiac Ring */}
                <div className="relative my-2 flex items-center justify-center">
                  {/* Outer Golden Zodiac Wheel */}
                  <div className="w-40 h-40 rounded-full border border-[#d4a34b]/40 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border border-dashed border-[#d4a34b]/30 animate-[spin_60s_linear_infinite]" />
                    
                    {/* Portrait of Astrologer */}
                    <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#d4a34b] shadow-lg relative bg-[#111928]">
                      <img
                        src="/src/assets/images/acharya_ganesh_portrait_1788771630566.jpg"
                        alt="Astrologer Hanish Bagga / Acharya Ganesh"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                {/* Subtitle & Bottom Banner */}
                <div>
                  <div className="text-[11px] font-semibold text-[#fcebc2] mb-1">
                    EXPERT ASTROLOGER
                  </div>
                  <div className="text-[10px] tracking-wider text-slate-300 mb-2">
                    HANISH BAGGA / ACHARYA GANESH
                  </div>

                  <div className="py-1 px-2 rounded bg-gradient-to-r from-[#d97706] to-[#b45309] text-[9px] font-bold tracking-widest uppercase text-white shadow-xs">
                    LEARN ASTROLOGY FROM THE GROUND UP
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
