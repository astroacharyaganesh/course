import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface LandingNavbarProps {
  onEnrollClick: () => void;
}

export const LandingNavbar: React.FC<LandingNavbarProps> = ({ onEnrollClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#070b14]/95 backdrop-blur-md border-b border-[#caa05b]/30 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#dfa851] to-[#a2681c] p-0.5 shadow-lg flex items-center justify-center">
              <div className="w-full h-full rounded-[10px] bg-[#0c1220] flex items-center justify-center text-[#e8b560] font-display text-xl font-bold group-hover:scale-105 transition-transform">
                ॐ
              </div>
            </div>
            <div>
              <div className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white flex items-center gap-1.5">
                <span>ACHARYA GANESH</span>
              </div>
              <div className="text-[10px] tracking-[0.22em] text-[#d4a34b] uppercase font-sans-ui font-medium">
                Academy of Vedic Astrology
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs sm:text-[13px] text-[#cbd5e1] font-medium">
            <a href="#" className="hover:text-[#e8b560] transition-colors py-1">
              Home
            </a>
            <a href="#course-modules" className="hover:text-[#e8b560] transition-colors py-1">
              Course Modules
            </a>
            <a href="#pitru-paksh-course" className="hover:text-[#e8b560] transition-colors py-1 flex items-center gap-1.5 text-[#f5c77e] font-semibold">
              <span>Pitru Paksh Course</span>
              <span className="text-[10px] bg-[#df8b2c] text-white px-1.5 py-0.5 rounded font-bold">₹1,500</span>
            </a>
            <a href="#testimonials" className="hover:text-[#e8b560] transition-colors py-1">
              Testimonials
            </a>
            <a href="#faq" className="hover:text-[#e8b560] transition-colors py-1">
              FAQ
            </a>
          </nav>

          {/* Right Action: Enroll Now */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onEnrollClick}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#e5b35a] via-[#dfa344] to-[#c6892e] hover:from-[#f0c26b] hover:to-[#d89736] text-[#221305] font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:scale-105 cursor-pointer flex items-center gap-1.5"
            >
              <span>Enroll Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onEnrollClick}
              className="px-3.5 py-1.5 rounded-full bg-[#dfa344] text-[#221305] font-bold text-[11px] uppercase tracking-wider"
            >
              Enroll
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#cbd5e1] hover:text-white rounded-lg hover:bg-[#131b2e]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1222] border-b border-[#232b3e] px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm text-[#e2e8f0]">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#162138] hover:text-[#e8b560]"
            >
              Home
            </a>
            <a 
              href="#course-modules" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#162138] hover:text-[#e8b560]"
            >
              Course Modules
            </a>
            <a 
              href="#pitru-paksh-course" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#162138] text-[#f5c77e] flex items-center justify-between"
            >
              <span>Pitru Paksh Course</span>
              <span className="text-[10px] bg-[#df8b2c] text-white px-2 py-0.5 rounded font-bold">₹1,500</span>
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#162138] hover:text-[#e8b560]"
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#162138] hover:text-[#e8b560]"
            >
              FAQ
            </a>
          </nav>
          <div className="pt-2 border-t border-[#1d273c]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onEnrollClick();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#e5b35a] to-[#c6892e] text-[#221305] font-bold text-xs tracking-wider uppercase text-center"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
