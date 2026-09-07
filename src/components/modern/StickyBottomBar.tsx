import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, MessageSquare, Phone } from 'lucide-react';

interface StickyBottomBarProps {
  onEnrollClick: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onEnrollClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside 
      id="sticky-conversion-bar"
      aria-label="Course quick registration bar"
      className="fixed bottom-0 inset-x-0 z-40 bg-white/95 border-t border-[#dfcaa6] backdrop-blur-md py-3 px-4 shadow-2xl transition-all animate-in slide-in-from-bottom duration-300 text-[#2c1e16]"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c85a17] to-[#d97706] text-white font-display font-bold text-lg flex items-center justify-center shrink-0 shadow-md">
            ॐ
          </div>

          <div className="text-left">
            <div className="text-xs sm:text-sm font-bold text-[#241812] flex items-center gap-2">
              <span>Building Blocks of Astrology: Planets, Signs & Houses</span>
              <span className="text-[10px] bg-emerald-100 border border-emerald-300 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                100% FREE
              </span>
            </div>
            <div className="text-[11px] text-[#735e50] flex items-center gap-2">
              <span className="text-[#8c3b12] font-semibold">⭐ 4.96/5 (15,400+ Seekers)</span>
              <span className="hidden sm:inline">• 90 Mins Masterclass</span>
              <span className="hidden sm:inline">• Free Certificate</span>
            </div>
          </div>
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <a
            href="https://wa.me/917300004325?text=Pranaam%20Acharya%20Ganesh%2C%20I%20want%20to%20know%20more%20about%20the%20Building%20Blocks%20of%20Astrology%20free%20course."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-xs text-emerald-800 hover:text-emerald-900 px-3 py-2 rounded-full bg-emerald-50 border border-emerald-300 font-semibold"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>

          <button
            onClick={onEnrollClick}
            className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-gradient-to-r from-[#c85a17] via-[#d97706] to-[#b45309] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>CLAIM FREE SEAT (₹0)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </aside>
  );
};
