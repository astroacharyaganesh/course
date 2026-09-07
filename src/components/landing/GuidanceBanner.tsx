import React from 'react';
import { ArrowRight, MessageSquare, Compass, ShieldCheck, Target, Sparkles } from 'lucide-react';

interface GuidanceBannerProps {
  onBookConsultationClick: () => void;
  onTalkToTeamClick: () => void;
}

export const GuidanceBanner: React.FC<GuidanceBannerProps> = ({
  onBookConsultationClick,
  onTalkToTeamClick,
}) => {
  const highlights = [
    {
      icon: <Sparkles className="w-4 h-4 text-[#9c450f]" />,
      text: 'Personalized Guidance',
    },
    {
      icon: <Compass className="w-4 h-4 text-[#9c450f]" />,
      text: 'Career & Life Direction',
    },
    {
      icon: <Target className="w-4 h-4 text-[#9c450f]" />,
      text: 'Accurate Predictions',
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#9c450f]" />,
      text: '100% Confidential',
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Light Brown Consultation Card with high-visibility fonts */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#fbf4e6] via-[#f5e3c3] to-[#e8cda0] border-2 border-[#caa05b] p-6 sm:p-8 lg:p-10 text-[#221206] shadow-xl overflow-hidden">
          
          {/* Subtle Background Mandala Halo */}
          <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full border border-[#caa05b]/25 bg-radial from-white/30 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-80 h-80 bg-white/20 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left: Circular Astrologer Photo with Zodiac Halo */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                {/* Outer Dashed Ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#caa05b]/60 animate-[spin_80s_linear_infinite]" />
                <div className="absolute inset-2 rounded-full border border-[#caa05b]/40" />
                
                {/* Image Inside Circle */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-[#caa05b] shadow-xl bg-[#241407]">
                  <img
                    src="/src/assets/images/acharya_ganesh_portrait_1788771630566.jpg"
                    alt="Acharya Ganesh"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Center: Headline, Explanatory Text, Action Buttons */}
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1f1105] tracking-tight leading-snug">
                Need Personal Guidance <br className="hidden sm:inline" />
                Before Joining?
              </h3>
              <p className="text-xs sm:text-sm text-[#3d2412] leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
                Not sure which course or path is right for you? Book a one-on-one consultation with 
                Acharya Ganesh for personalized guidance.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={onBookConsultationClick}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#9c4d12] via-[#b35e19] to-[#8a400c] hover:from-[#ab5615] hover:to-[#783609] text-[#fff8ee] font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:scale-105 cursor-pointer flex items-center gap-1.5 border border-[#caa05b]"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onTalkToTeamClick}
                  className="px-5 py-3 rounded-full bg-[#faecd4] hover:bg-[#f6e1be] text-[#1f1105] border border-[#caa05b] text-xs font-bold tracking-wide transition-all cursor-pointer flex items-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#9c450f]" />
                  <span>Talk to Our Team</span>
                </button>
              </div>
            </div>

            {/* Right: 4 Highlight Points with high legibility */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#caa05b]/40 pt-6 lg:pt-0 lg:pl-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#faecd4] border border-[#caa05b] flex items-center justify-center shrink-0 shadow-xs">
                      {item.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#1f1105]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
