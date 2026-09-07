import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070b13] border-t border-[#d4a34b]/20 text-slate-400 text-xs relative overflow-hidden">
      
      {/* Sacred Invocation Shloka Banner */}
      <div className="py-8 bg-[#0a0f1b] border-b border-slate-900 text-center px-4">
        <div className="font-display text-sm sm:text-base text-[#fcebc2] tracking-wider mb-1">
          "ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥"
        </div>
        <div className="text-[11px] text-slate-500 font-spiritual italic">
          "Lead us from the unreal to the real; from darkness into light; from mortality into timeless wisdom."
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#c59b27] via-[#f59e0b] to-[#fbbf24] p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#0c121e] flex items-center justify-center">
                  <span className="font-display text-base font-bold text-[#fcebc2]">ॐ</span>
                </div>
              </div>
              <div>
                <span className="font-display text-base tracking-wider font-semibold text-white">
                  ACHARYA GANESH
                </span>
                <p className="text-[10px] tracking-[0.2em] text-[#d4a34b] uppercase">
                  Vedic Wisdom Academy
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-spiritual">
              Committed to preserving the sacred, unadulterated science of Jyotish as bequeathed 
              by the ancient Rishis, making authentic Vedic wisdom accessible, ethical, and 
              transformative for the modern seeker.
            </p>

            <div className="text-[11px] text-slate-500">
              Sansthan Registered • ISO 9001:2015 Educational Standard
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300 font-sans-ui">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero-section" className="hover:text-[#fcebc2] transition-colors">Course Overview</a></li>
              <li><a href="#curriculum" className="hover:text-[#fcebc2] transition-colors">Complete Curriculum (6 Modules)</a></li>
              <li><a href="#transformation" className="hover:text-[#fcebc2] transition-colors">Personal Transformation</a></li>
              <li><a href="#mentor" className="hover:text-[#fcebc2] transition-colors">About Acharya Ganesh</a></li>
              <li><a href="#pricing" className="hover:text-[#fcebc2] transition-colors">Tuition & Cohorts</a></li>
              <li><a href="#faqs" className="hover:text-[#fcebc2] transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Shastric Ethics & Certifications */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300 font-sans-ui">
              Shastric Code of Ethics
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans-ui">
              All coursework is taught in accordance with Parashara Smriti ethics. We do not promote 
              fear, fatalism, or exploitation. All remedies prescribed are purely spiritual, sattvic, 
              and self-empowering.
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Acharya Ganesh Vedic Wisdom Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Enrollment</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Honor Code</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
