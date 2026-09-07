import React from 'react';
import { ArrowRight, Sparkles, MessageSquare, Quote } from 'lucide-react';

interface BottomCtaBannerProps {
  onEnrollClick: () => void;
  onBookConsultationClick: () => void;
}

export const BottomCtaBanner: React.FC<BottomCtaBannerProps> = ({
  onEnrollClick,
  onBookConsultationClick,
}) => {
  return (
    <section className="relative bg-gradient-to-r from-[#fbf4e6] via-[#f5e3c3] to-[#e8cda0] text-[#1f1105] py-14 sm:py-16 border-t-2 border-[#caa05b] overflow-hidden">
      
      {/* Decorative Golden Ambient Watermark */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-white/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 opacity-15 pointer-events-none text-[#9c450f] font-serif text-[180px] leading-none select-none font-bold">
        ॐ
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Call to Action Headline & Buttons */}
          <div className="lg:col-span-7 space-y-4 text-center sm:text-left">
            <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1f1105] tracking-tight leading-snug">
              Start Your Journey to Become a <br className="hidden sm:inline" />
              <span className="text-[#9c450f]">Certified Vedic Astrologer</span>
            </h2>

            <p className="text-sm sm:text-base text-[#3d2412] max-w-xl font-medium">
              Learn from India's Trusted Celebrity Astrologer. Gain the wisdom to read life, destiny, and cosmic timing.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <button
                onClick={onEnrollClick}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#9c4d12] via-[#b35e19] to-[#8a400c] hover:from-[#ab5615] hover:to-[#783609] text-[#fff8ee] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-xl hover:scale-105 cursor-pointer flex items-center gap-2 border border-[#caa05b]"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onBookConsultationClick}
                className="px-6 py-3.5 rounded-full bg-[#faecd4] hover:bg-[#f6e1be] text-[#1f1105] border border-[#caa05b] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-xs cursor-pointer"
              >
                Book Consultation
              </button>
            </div>
          </div>

          {/* Right: Astrological Quote Box */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="p-6 rounded-2xl bg-[#faecd4] border border-[#caa05b] shadow-lg space-y-3 max-w-md relative">
              <Quote className="w-6 h-6 text-[#9c450f]/30 absolute top-3 right-3" />
              <p className="font-serif italic text-xs sm:text-sm text-[#2a1608] leading-relaxed font-medium">
                "The stars are not just in the sky, they are within you. Learn to read them."
              </p>
              <div className="text-right">
                <span className="font-cinzel text-xs text-[#8a400c] font-bold tracking-wider">
                  — Acharya Ganesh
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
