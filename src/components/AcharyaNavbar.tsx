import React, { useState } from 'react';
import { Phone, User, LogIn, Menu, X, ChevronDown } from 'lucide-react';

interface AcharyaNavbarProps {
  onLoginClick: () => void;
  onCourseLoginClick: () => void;
}

export const AcharyaNavbar: React.FC<AcharyaNavbarProps> = ({
  onLoginClick,
  onCourseLoginClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Courses');

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Courses', href: '#', active: true },
    { label: 'Products', href: '#' },
    { label: 'Reports', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Blogs', href: '#' },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-40">
      {/* Top Utility Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Left: Brand Logo with Ganesh Emblem */}
        <a href="#" className="flex items-center gap-2.5 group">
          {/* Circular Golden Emblem with Ganesh Icon */}
          <div className="relative w-12 h-12 rounded-full bg-gradient-to-b from-[#d6a86c] via-[#b88648] to-[#8c5e26] p-[2px] shadow-sm flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#fdfbf7] flex flex-col items-center justify-center overflow-hidden border border-[#d6a86c]/30">
              <span className="font-display text-xl font-bold text-[#8c501c] leading-none">ॐ</span>
              <span className="text-[7px] font-bold text-[#b45d17] tracking-tighter uppercase mt-0.5">GANESH</span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-xl font-bold text-[#2d1b11] tracking-tight leading-tight">
              Acharya Ganesh
            </span>
            <span className="text-[10px] text-[#8c501c] font-medium tracking-wide">
              Trusted Guidance • Positive Life
            </span>
          </div>
        </a>

        {/* Right: Phone Numbers & Login Buttons */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm text-gray-800">
          
          {/* Phone 1 */}
          <a
            href="tel:+917300004325"
            className="flex items-center gap-2 hover:text-[#b45d17] transition-colors group"
          >
            <div className="w-7 h-7 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-[#b45d17]">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium text-[13px] tracking-tight text-gray-900">+91 73000-04325</span>
          </a>

          {/* Phone 2 */}
          <a
            href="tel:+917300004326"
            className="hidden lg:flex items-center gap-2 hover:text-[#b45d17] transition-colors group"
          >
            <div className="w-7 h-7 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-[#b45d17]">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium text-[13px] tracking-tight text-gray-900">+91 73000-04326</span>
          </a>

          {/* Log in Button */}
          <button
            onClick={onLoginClick}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gray-900 text-xs font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-all cursor-pointer"
          >
            <User className="w-3.5 h-3.5" />
            <span>Log in</span>
          </button>

          {/* Course Login Button */}
          <button
            onClick={onCourseLoginClick}
            className="px-4 py-1.5 rounded-full border border-gray-900 text-xs font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-all cursor-pointer"
          >
            <span>Course Login</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-800 hover:text-black"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Main Navigation Menu Strip */}
      <div className="hidden md:block border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-8 lg:gap-11 py-2.5 text-[14px]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(link.label);
                }}
                className={`font-medium transition-colors py-1 relative ${
                  activeNav === link.label
                    ? 'text-black font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#a2531d]'
                    : 'text-gray-700 hover:text-[#a2531d]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-center pb-3 border-b border-gray-100">
            <button
              onClick={onLoginClick}
              className="py-2 rounded-full border border-gray-800 text-xs font-semibold"
            >
              Log in
            </button>
            <button
              onClick={onCourseLoginClick}
              className="py-2 rounded-full bg-[#e8be89] text-[#2d1b11] text-xs font-bold"
            >
              Course Login
            </button>
          </div>

          <div className="space-y-1 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-[#a2531d]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100 text-xs text-gray-600 space-y-1">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#a2531d]" />
              <span>+91 73000-04325</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#a2531d]" />
              <span>+91 73000-04326</span>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};
