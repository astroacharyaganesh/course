import React from 'react';
import { Sparkles, ShieldCheck, Flame, Moon, BookOpen } from 'lucide-react';

interface PitruPakshCourseBannerProps {
  onBuyNowClick: () => void;
}

export const PitruPakshCourseBanner: React.FC<PitruPakshCourseBannerProps> = ({
  onBuyNowClick,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-[#faf7f2]" id="pitru-paksh-course">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card in Light Brown Theme (matching the warm golden-sand font tone) */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#fbf4e6] via-[#f5e3c3] to-[#e8cda0] border-2 border-[#caa05b] p-6 sm:p-8 lg:p-10 shadow-xl text-[#221206] overflow-hidden">
          
          {/* Subtle Sacred Halo Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full border border-[#caa05b]/25 bg-radial from-white/30 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Tag, Title, Price, Details, Action Button */}
            <div className="lg:col-span-5 space-y-4 text-left">
              
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#faecd4] border border-[#caa05b] text-[#783c0c] text-[11px] font-bold tracking-[0.2em] uppercase shadow-xs">
                <Flame className="w-3.5 h-3.5 text-[#b8500e]" />
                <span>PITRU PAKSH SPECIAL MASTERCLASS</span>
              </div>

              {/* Title with crisp, deep dark chocolate brown for maximum legibility */}
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1f1105] leading-snug tracking-tight">
                Pitru Paksh Course — Ancestral Karma, Pitru Dosh Nivaran &amp; Shradh Vidhi
              </h3>

              {/* Price Row with sharp high-contrast typography */}
              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-sm line-through font-semibold text-[#6e503a]">
                  ₹3,000
                </span>
                <span className="font-display text-3xl sm:text-4xl font-black text-[#9c450f]">
                  ₹1,500
                </span>
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-[#9c450f] text-white shadow-xs">
                  50% OFF SPECIAL
                </span>
              </div>

              {/* Masterclass Specific Details with high legibility */}
              <div className="space-y-1.5 text-xs pt-1 text-[#3d2412]">
                <div>
                  <strong className="text-[#1f1105] font-bold">Instructor:</strong>{' '}
                  Acharya Ganesh &amp; Senior Vedic Faculty
                </div>
                <div>
                  <strong className="text-[#1f1105] font-bold">Core Coverage:</strong>{' '}
                  Shradh Vidhi, Tarpan, Pitru Dosh Diagnosis &amp; Remedial Mantras
                </div>
                <div>
                  <strong className="text-[#1f1105] font-bold">Course Mode:</strong>{' '}
                  Video Lessons + Live Q&amp;A + Shradh Tithi Calendar
                </div>
                <div>
                  <strong className="text-[#1f1105] font-bold">Language:</strong>{' '}
                  Easy-to-understand Hindi &amp; English
                </div>
                <div>
                  <strong className="text-[#1f1105] font-bold">Includes:</strong>{' '}
                  Downloadable Pind Daan &amp; Tarpan Guidebook (PDF)
                </div>
              </div>

              {/* Buy Now Button in Rich Warm Amber/Bronze */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <button
                  onClick={onBuyNowClick}
                  className="w-full sm:w-auto px-10 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-xl hover:scale-105 cursor-pointer text-center bg-gradient-to-r from-[#9c4d12] via-[#b35e19] to-[#8a400c] hover:from-[#ab5615] hover:to-[#783609] text-[#fff8ee] border border-[#caa05b]"
                >
                  BUY NOW • ₹1,500
                </button>
                <span className="text-[11px] font-bold text-[#4a2e19]">
                  Instant Access • Lifetime Validity
                </span>
              </div>

            </div>

            {/* Center: Sacred Pitru Paksha Disc / Artwork (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full flex items-center justify-center">
                {/* Outer Dashed Orbit */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#caa05b]/60 animate-[spin_100s_linear_infinite]" />
                <div className="absolute inset-3 rounded-full border border-[#caa05b]/40" />
                
                {/* Sacred Disc Image */}
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-[#caa05b] shadow-2xl bg-[#29170e]">
                  <img
                    src="/src/assets/images/pitru_paksh_course_1788779847527.jpg"
                    alt="Pitru Paksh Course - Vedic Shradh, Tarpan and Pitru Dosh Nivaran"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right: Sacred Om + 5 Bullet Points (3 cols) */}
            <div className="lg:col-span-3 space-y-4 border-t lg:border-t-0 lg:border-l border-[#caa05b]/40 pt-6 lg:pt-0 lg:pl-6 text-left">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full font-display text-xl font-bold flex items-center justify-center shadow-xs bg-[#fffaf0] border-2 border-[#caa05b] text-[#8a400c]">
                  ॐ
                </div>
                <div>
                  <div className="font-cinzel text-xs font-bold tracking-wider uppercase text-[#1f1105]">
                    Pitru Shanti Tattva
                  </div>
                  <div className="text-[10px] text-[#4a2e19] font-medium">
                    Ancestral Blessings &amp; Peace
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#1f1105]">
                  <Flame className="w-4 h-4 shrink-0 text-[#a64d12]" />
                  <span>Pitru Dosh Kundli Diagnosis</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs font-bold text-[#1f1105]">
                  <Moon className="w-4 h-4 shrink-0 text-[#a64d12]" />
                  <span>Authentic Tarpan &amp; Shradh Vidhi</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs font-bold text-[#1f1105]">
                  <Sparkles className="w-4 h-4 shrink-0 text-[#a64d12]" />
                  <span>Mantra Japa &amp; Daan Guidance</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs font-bold text-[#1f1105]">
                  <BookOpen className="w-4 h-4 shrink-0 text-[#a64d12]" />
                  <span>Shradh Tithi &amp; Muhurta Secrets</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs font-bold text-[#1f1105]">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-[#a64d12]" />
                  <span>100% Vedic &amp; Shastric Remedies</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

