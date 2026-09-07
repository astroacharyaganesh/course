import React from 'react';
import { Sparkles, Video, FileText, Headphones, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface BonusValueBundleProps {
  onEnrollClick: () => void;
}

export const BonusValueBundle: React.FC<BonusValueBundleProps> = ({ onEnrollClick }) => {
  const items = [
    {
      icon: <Video className="w-6 h-6 text-[#8c3b12]" />,
      title: 'Full 90-Minute HD Masterclass',
      value: '₹1,999',
      desc: 'All 12 structured video lessons on planets, signs, houses, and the 5-step chart synthesis formula. Watch on mobile or desktop anytime.'
    },
    {
      icon: <FileText className="w-6 h-6 text-[#8c3b12]" />,
      title: '32-Page Printable Kundli Cheat-Sheet (PDF)',
      value: '₹999',
      desc: 'Quick-reference guide featuring planetary dignities, natural friendship charts, house classifications, and sign lords.'
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#8c3b12]" />,
      title: 'Navagraha Chants & Audio Meditation Guide',
      value: '₹999',
      desc: 'Sacred Beej mantras for all 9 planets recorded with proper Vedic pronunciation to harmonise planetary energies.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#8c3b12]" />,
      title: 'Verified Certificate of Completion',
      value: '₹1,000',
      desc: 'Personalised, verifiable certificate signed by Astrologer Hanish Bagga to showcase your foundational mastery.'
    }
  ];

  return (
    <section id="included" className="py-20 bg-gradient-to-b from-[#f4eee4] via-[#f8f3eb] to-[#faf7f2] text-[#2c1e16] relative border-b border-[#e7d8c5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fef3c7] border border-[#fde68a] text-[#92400e] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#c85a17]" />
            <span>Complete Knowledge Package</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241812] tracking-tight">
            What You Receive In This Free Cohort
          </h2>

          <p className="text-[#5c4a3e] text-sm sm:text-base">
            Everything you need to step into Vedic astrology with total confidence. No hidden fees or paywalls.
          </p>
        </div>

        {/* 4 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-[#dfcaa6] p-6 sm:p-7 space-y-3 hover:border-[#c85a17] hover:shadow-lg transition-all shadow-sm group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#f8efe2] border border-[#dfcaa6] flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#8c786a] line-through block">Value {item.value}</span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded-full border border-emerald-300">
                    INCLUDED FREE
                  </span>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-[#241812] pt-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5c4a3e] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Total Value Summary Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#fffbf5] via-[#fef7ee] to-[#fffbf5] border-2 border-[#dfcaa6] p-8 sm:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            <div className="space-y-2">
              <div className="text-xs font-bold text-[#8c3b12] uppercase tracking-wider">
                Total Value: <span className="line-through text-[#8c786a]">₹4,999</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#241812]">
                Your Investment Today: <span className="text-emerald-700">₹0 (100% FREE)</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#5c4a3e] max-w-lg">
                Acharya Ganesh believes sacred foundational knowledge should be accessible to all seekers. 
                Register in 30 seconds and receive your immediate portal link.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <button
                onClick={onEnrollClick}
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#c85a17] via-[#d97706] to-[#b45309] text-white font-bold text-sm tracking-wider uppercase transition-all shadow-xl hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>CLAIM YOUR FREE SEAT NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-[11px] text-[#735e50] text-center mt-2 font-medium">
                ⚡ Instant WhatsApp & Email Access
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
