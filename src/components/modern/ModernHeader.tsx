import React, { useState } from 'react';
import { Menu, X, BookOpen, HelpCircle } from 'lucide-react';

export const ModernHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#e7d8c5] text-[#2c1e16] shadow-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4a34b] to-[#9f7429] p-0.5 shadow-xs flex items-center justify-center">
              <div className="w-full h-full rounded-[10px] bg-[#fffbf5] flex items-center justify-center text-[#9c6508] font-display text-xl font-bold">
                ॐ
              </div>
            </div>
            <div>
              <div className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-[#2c1e16]">
                ACHARYA GANESH
              </div>
              <div className="text-[10px] tracking-[0.2em] text-[#9c6508] uppercase font-sans-ui font-semibold">
                Vedic Wisdom Academy
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden sm:flex items-center gap-6 text-xs sm:text-sm text-[#5c4a3e] font-semibold">
            <a 
              href="#table-of-contents" 
              className="flex items-center gap-1.5 hover:text-[#c85a17] transition-colors py-1.5 px-3 rounded-lg hover:bg-[#f3eadf]"
            >
              <BookOpen className="w-4 h-4 text-[#c85a17]" />
              <span>Table of Contents</span>
            </a>
            <a 
              href="#faq" 
              className="flex items-center gap-1.5 hover:text-[#c85a17] transition-colors py-1.5 px-3 rounded-lg hover:bg-[#f3eadf]"
            >
              <HelpCircle className="w-4 h-4 text-[#c85a17]" />
              <span>FAQ</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#5c4a3e] hover:text-[#2c1e16] rounded-lg hover:bg-[#f3eadf]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#fdfaf5] border-b border-[#e7d8c5] px-4 py-4 space-y-2 shadow-md">
          <nav className="flex flex-col space-y-2 text-sm text-[#3b2a1f] font-semibold">
            <a 
              href="#table-of-contents" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#f3eadf] hover:text-[#c85a17]"
            >
              <BookOpen className="w-4 h-4 text-[#c85a17]" />
              <span>Table of Contents</span>
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#f3eadf] hover:text-[#c85a17]"
            >
              <HelpCircle className="w-4 h-4 text-[#c85a17]" />
              <span>Frequently Asked Questions</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
