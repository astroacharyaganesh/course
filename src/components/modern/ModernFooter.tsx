import React from 'react';

export const ModernFooter: React.FC = () => {
  return (
    <footer className="bg-[#f0e8dc] text-[#5c4a3e] border-t border-[#dfcaa6] py-8 text-center text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
        <div className="flex items-center justify-center gap-2 font-cinzel text-sm font-bold text-[#241812] tracking-wider">
          <span>ॐ</span>
          <span>ACHARYA GANESH</span>
          <span>•</span>
          <span>VEDIC WISDOM ACADEMY</span>
        </div>
        <p className="text-[11px] text-[#735e50]">
          Building Blocks of Astrology: Planets, Signs & Houses • Guided by Astrologer Hanish Bagga
        </p>
        <div className="text-[10px] text-[#8c786a] pt-2">
          © {new Date().getFullYear()} Acharya Ganesh. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
