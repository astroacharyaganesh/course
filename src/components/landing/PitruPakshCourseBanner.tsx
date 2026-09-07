import React from 'react';
import { Sparkles, ShieldCheck, Flame, Moon, BookOpen, CheckCircle2, Award, Clock } from 'lucide-react';
import pitruPakshImg from '../../assets/images/pitru_paksh_course_1788779847527.jpg';

interface PitruPakshCourseBannerProps {
  onBuyNowClick: () => void;
}

export const PitruPakshCourseBanner: React.FC<PitruPakshCourseBannerProps> = ({
  onBuyNowClick,
}) => {
  return (
    <section className="pt-3 sm:pt-4 pb-4 sm:pb-6 bg-[#faf7f2]" id="pitru-paksh-course">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card in Light Brown Theme - Engineered for full first-view visibility */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#fbf4e6] via-[#f5e3c3] to-[#e8cda0] border-2 border-[#caa05b] p-5 sm:p-6 lg:p-7 shadow-xl text-[#221206] overflow-hidden">
          
          {/* Subtle Golden Ambient Glow & Watermark */}
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-8 opacity-10 pointer-events-none text-[#9c450f] font-serif text-[180px] leading-none select-none font-bold">
            ॐ
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            
            {/* Left Column: Tag, Title, Price, Details Grid, Action Button (7 cols) */}
            <div className="lg:col-span-7 space-y-3.5 text-left">
              
              {/* Top Tag & Sacred Indicator */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#faecd4] border border-[#caa05b] text-[#783c0c] text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase shadow-xs">
                  <Flame className="w-3.5 h-3.5 text-[#b8500e]" />
                  <span>PITRU PAKSH SPECIAL MASTERCLASS</span>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[#8a400c]">
                  <Sparkles className="w-3.5 h-3.5 text-[#b8500e]" />
                  <span>Limited Period Shradh Season Access</span>
                </div>
              </div>

              {/* Title with crisp, deep dark chocolate brown for maximum legibility */}
              <h2 className="font-display text-xl sm:text-2xl lg:text-[28px] font-bold text-[#1f1105] leading-snug tracking-tight">
                Pitru Paksh Course — Ancestral Karma, Pitru Dosh Nivaran &amp; Shradh Vidhi
              </h2>

              {/* Price Row with sharp high-contrast typography */}
              <div className="flex items-baseline gap-3">
                <span className="text-sm line-through font-semibold text-[#6e503a]">
                  ₹3,000
                </span>
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#9c450f]">
                  ₹1,500
                </span>
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-[#9c450f] text-white shadow-xs">
                  50% OFF SPECIAL
                </span>
                <span className="text-xs font-semibold text-[#3d2412] hidden sm:inline">
                  • 1-Time Payment
                </span>
              </div>

              {/* Course Specifications in a clean, space-efficient 2-column grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-[#3d2412] bg-[#faecd4]/60 border border-[#caa05b]/40 rounded-xl p-3">
                <div>
                  <strong className="text-[#1f1105] font-bold">Instructor:</strong>{' '}
                  Acharya Ganesh &amp; Senior Vedic Faculty
                </div>
                <div>
                  <strong className="text-[#1f1105] font-bold">Coverage:</strong>{' '}
                  Tarpan, Shradh Vidhi &amp; Pitru Dosh
                </div>
                <div>
                  <strong className="text-[#1f1105] font-bold">Course Mode:</strong>{' '}
                  Video Lessons + Live Q&amp;A + Calendar
                </div>
                <div>
                  <strong className="text-[#1f1105] font-bold">Language:</strong>{' '}
                  Easy-to-understand Hindi &amp; English
                </div>
                <div className="sm:col-span-2 pt-0.5 border-t border-[#caa05b]/30">
                  <strong className="text-[#1f1105] font-bold">Includes:</strong>{' '}
                  Downloadable Pind Daan &amp; Tarpan Guidebook (PDF) + Remedial Mantras
                </div>
              </div>

              {/* 5 Key Highlights as horizontal badge chips */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5 text-[11px] font-bold text-[#2a1608]">
                <span className="inline-flex items-center gap-1 bg-[#faecd4] border border-[#caa05b] px-2.5 py-1 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9c450f]" />
                  Kundli Diagnosis
                </span>
                <span className="inline-flex items-center gap-1 bg-[#faecd4] border border-[#caa05b] px-2.5 py-1 rounded-lg">
                  <Moon className="w-3.5 h-3.5 text-[#9c450f]" />
                  Authentic Tarpan Vidhi
                </span>
                <span className="inline-flex items-center gap-1 bg-[#faecd4] border border-[#caa05b] px-2.5 py-1 rounded-lg">
                  <BookOpen className="w-3.5 h-3.5 text-[#9c450f]" />
                  Mantra Japa &amp; Daan
                </span>
                <span className="inline-flex items-center gap-1 bg-[#faecd4] border border-[#caa05b] px-2.5 py-1 rounded-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9c450f]" />
                  100% Shastric Remedies
                </span>
              </div>

              {/* Buy Now Button in Rich Warm Amber/Bronze */}
              <div className="pt-1 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <button
                  onClick={onBuyNowClick}
                  className="w-full sm:w-auto px-9 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-xl hover:scale-105 cursor-pointer text-center bg-gradient-to-r from-[#9c4d12] via-[#b35e19] to-[#8a400c] hover:from-[#ab5615] hover:to-[#783609] text-[#fff8ee] border border-[#caa05b] flex items-center justify-center gap-2"
                >
                  <span>BUY NOW • ₹1,500</span>
                </button>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#4a2e19]">
                  <Clock className="w-3.5 h-3.5 text-[#9c450f]" />
                  <span>Instant Access • Lifetime Validity</span>
                </div>
              </div>

            </div>

            {/* Right Column: Large Rectangular Showcase Banner Artwork (5 cols) */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-md lg:max-w-none group">
                
                {/* Golden Glow Backdrop */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#caa05b] via-[#e5b35a] to-[#9c4d12] opacity-40 blur-md group-hover:opacity-70 transition duration-500" />
                
                {/* Large Rectangular Image Container */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#caa05b] shadow-2xl bg-gradient-to-br from-[#f5e3c3] to-[#caa05b] aspect-[4/3] w-full flex items-center justify-center">
                  <img
                    src={pitruPakshImg}
                    alt="Pitru Paksh Special Masterclass - Vedic Shradh, Tarpan and Pitru Dosh Nivaran"
                    className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/images/pitru_paksh_course_1788779847527.jpg';
                    }}
                  />

                  {/* Top-Right Badge: Pitru Shanti Tattva */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1f1105]/85 backdrop-blur-md border border-[#caa05b] text-[#faecd4] shadow-lg">
                    <span className="font-serif font-bold text-amber-300 text-sm">ॐ</span>
                    <div className="text-left">
                      <div className="font-cinzel text-[10px] font-bold tracking-wider uppercase text-amber-200 leading-tight">
                        Pitru Shanti Tattva
                      </div>
                      <div className="text-[9px] text-[#faecd4]/80 leading-tight">
                        Ancestral Peace &amp; Blessings
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar: Course Tagline Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a0e05]/95 via-[#1a0e05]/70 to-transparent p-3 sm:p-4 text-white flex items-end justify-between">
                    <div>
                      <div className="text-[11px] font-cinzel font-bold text-[#e5b35a] tracking-wider uppercase">
                        Acharya Ganesh Masterclass
                      </div>
                      <div className="text-xs font-semibold text-white/95">
                        Shradh, Tarpan &amp; Pitru Dosh Nivaran
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-1 text-[10px] font-bold bg-[#caa05b]/30 border border-[#caa05b] px-2 py-1 rounded text-amber-100">
                      <Award className="w-3 h-3 text-amber-300" />
                      <span>Certified</span>
                    </div>
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
