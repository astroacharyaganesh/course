import React from 'react';

interface CourseSidebarProps {
  onBuyNowClick: () => void;
}

export const CourseSidebar: React.FC<CourseSidebarProps> = ({ onBuyNowClick }) => {
  return (
    <div className="w-full rounded-[24px] bg-[#fbf6ef] border border-[#f0ded0] p-6 sm:p-7 shadow-xs space-y-5 sticky top-24">
      
      {/* Category Pill Badge matching screenshot */}
      <div>
        <span className="inline-block px-3.5 py-1 rounded-full bg-[#421607] text-white text-[11px] font-bold tracking-wider uppercase font-sans-ui">
          VEDIC ASTROLOGY
        </span>
      </div>

      {/* Course Title matching screenshot */}
      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#381c10] leading-snug">
        Building Blocks of Astrology: Planets, Signs & Houses
      </h3>

      {/* Price tag */}
      <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#381c10] pt-1">
        FREE
      </div>

      {/* Course Detail Lines matching screenshot */}
      <div className="space-y-3 pt-2 text-xs sm:text-[13px] text-[#4b3528] leading-relaxed border-t border-[#ebd9c7]">
        <div>
          <span className="text-[#381c10] font-medium">Instructor:</span>{' '}
          <span className="text-[#5b4234]">Astrologer Hanish Bagga</span>
        </div>

        <div>
          <span className="text-[#381c10] font-medium">Duration:</span>{' '}
          <span className="text-[#5b4234]">90 Minutes</span>
        </div>

        <div>
          <span className="text-[#381c10] font-medium">No. of Sessions:</span>{' '}
          <span className="text-[#5b4234]">1</span>
        </div>

        <div>
          <span className="text-[#381c10] font-medium">Language:</span>{' '}
          <span className="text-[#5b4234]">A mix of Hindi and English</span>
        </div>
      </div>

      {/* Included Course Perks / Feel Highlights */}
      <div className="space-y-2 pt-1 border-t border-[#ebd9c7] text-xs text-[#553b2e]">
        <div className="font-semibold text-[#381c10] text-[12px] flex items-center justify-between">
          <span>What's Included:</span>
          <span className="text-[10px] text-[#2d5a27] font-bold bg-[#e3eedf] px-2 py-0.5 rounded-full">
            100% FREE
          </span>
        </div>
        <ul className="space-y-1.5 text-[11px] text-[#553b2e]">
          <li className="flex items-center gap-1.5">
            <span className="text-[#a2531d] font-bold">✓</span>
            <span>Full 90-Min On-Demand Video Access</span>
          </li>
          <li className="flex items-center gap-1.5">
            <span className="text-[#a2531d] font-bold">✓</span>
            <span>Downloadable Kundli Guide (PDF)</span>
          </li>
          <li className="flex items-center gap-1.5">
            <span className="text-[#a2531d] font-bold">✓</span>
            <span>Verified Course Completion Certificate</span>
          </li>
          <li className="flex items-center gap-1.5">
            <span className="text-[#a2531d] font-bold">✓</span>
            <span>Learn at Your Own Pace on Any Device</span>
          </li>
        </ul>
      </div>

      {/* BUY NOW Button matching screenshot with Feel Glow */}
      <div className="pt-2">
        <button
          onClick={onBuyNowClick}
          className="w-full py-3.5 rounded-full bg-[#e8be89] hover:bg-[#dfb175] text-[#381c10] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
        >
          <span>BUY NOW (FREE)</span>
          <span>→</span>
        </button>
      </div>

      {/* Live Seeker Activity */}
      <div className="text-center text-[11px] text-[#7d6558] pt-1 space-y-1">
        <div className="flex items-center justify-center gap-1.5 text-[#2d5a27] font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Instant Portal Access Activated</span>
        </div>
        <div className="text-[10px] text-[#8c7465]">
          No credit card or payment required
        </div>
      </div>

    </div>
  );
};
