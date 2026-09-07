import React from 'react';

const TOC_ITEMS = [
  'Introduction to Mars (Mangal) in Vedic Astrology',
  'Mythology & Symbolism of Mangal',
  'Characteristics & Significations of Mars',
  'Understanding Mangal Dosha',
  'Exalted, Debilitated & Own Sign of Mars',
  'Effect of Mars in Aries',
  'Effect of Mars in Taurus',
  'Effect of Mars in Gemini',
  'Effect of Mars in Cancer',
  'Effect of Mars in Leo',
  'Effect of Mars in Virgo',
  'Effect of Mars in Libra',
  'Effect of Mars in Scorpio',
  'Effect of Mars in Sagittarius',
  'Effect of Mars in Capricorn',
  'Effect of Mars in Aquarius',
  'Effect of Mars in Pisces',
  'Effect of Mars in the 1st to 12th House',
  'Remedies & Strengthening Mars',
  'Conclusion & Key Takeaways',
];

interface MarsTableOfContentsProps {
  onEnrollClick?: () => void;
}

export const MarsTableOfContents: React.FC<MarsTableOfContentsProps> = () => {
  // Split into 2 columns (1-10 and 11-20) for balanced desktop reading
  const col1 = TOC_ITEMS.slice(0, 10);
  const col2 = TOC_ITEMS.slice(10, 20);

  return (
    <section 
      id="table-of-contents" 
      className="py-10 sm:py-14 bg-[#faf7f2] text-[#2c1e16] border-b border-[#ebdccb]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Section Header */}
        <div className="text-center mb-8 sm:mb-10 space-y-2">
          <div className="inline-block text-[11px] font-bold tracking-[0.2em] text-[#a2681c] uppercase">
            COURSE CURRICULUM
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#241812] tracking-tight">
            Table of Contents
          </h2>
          <p className="text-xs sm:text-sm text-[#735e50] max-w-md mx-auto">
            Complete 20-part breakdown of Mars (Mangal) in Vedic Astrology
          </p>
        </div>

        {/* Clean, Simple 2-Column Table of Contents Card */}
        <div className="bg-white rounded-2xl border border-[#ebdccb] shadow-xs p-5 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1 divide-y md:divide-y-0 divide-[#f2e7da]">
            
            {/* Column 1: Items 1 to 10 */}
            <div className="space-y-1">
              {col1.map((title, idx) => {
                const itemNum = idx + 1;
                return (
                  <div
                    key={itemNum}
                    className="flex items-center gap-3.5 py-2.5 px-3 rounded-xl transition-colors hover:bg-[#faf6ef] text-left group"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#faecd4] text-[#8a400c] text-xs font-bold font-display flex items-center justify-center shrink-0 group-hover:bg-[#9c4d12] group-hover:text-white transition-colors">
                      {itemNum}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-[#241812] group-hover:text-[#9c450f] transition-colors leading-snug">
                      {title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Column 2: Items 11 to 20 */}
            <div className="space-y-1 pt-2 md:pt-0">
              {col2.map((title, idx) => {
                const itemNum = idx + 11;
                return (
                  <div
                    key={itemNum}
                    className="flex items-center gap-3.5 py-2.5 px-3 rounded-xl transition-colors hover:bg-[#faf6ef] text-left group"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#faecd4] text-[#8a400c] text-xs font-bold font-display flex items-center justify-center shrink-0 group-hover:bg-[#9c4d12] group-hover:text-white transition-colors">
                      {itemNum}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-[#241812] group-hover:text-[#9c450f] transition-colors leading-snug">
                      {title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
