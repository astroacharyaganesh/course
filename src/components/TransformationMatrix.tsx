import React from 'react';
import { XCircle, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { TRANSFORMATION_POINTS } from '../data/courseData';

interface TransformationMatrixProps {
  onEnrollClick: () => void;
}

export const TransformationMatrix: React.FC<TransformationMatrixProps> = ({ onEnrollClick }) => {
  return (
    <section 
      id="transformation"
      className="relative py-24 bg-[#090e17] border-y border-slate-800/80 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#c59b27]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c59b27]/15 border border-[#d4a34b]/30 text-[#fcebc2] text-xs font-semibold tracking-[0.2em] uppercase font-sans-ui mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>The Internal Awakening</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Shift from Superstition to <span className="gold-gradient-text">Sacred Science</span>
          </h2>

          <p className="font-spiritual text-xl sm:text-2xl text-slate-300 leading-relaxed">
            Vedic astrology is not fatalism. It is a luminous map of your soul’s chosen karmic 
            curriculum, offering clarity where once there was anxiety.
          </p>
        </div>

        {/* Before vs After Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Without Authentic Guidance (The Dilemma) */}
          <div className="p-8 rounded-3xl bg-[#0e1524] border border-red-500/20 shadow-xl relative">
            <div className="flex items-center gap-3 pb-6 border-b border-slate-800/80 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-200">
                  Fragmented & Fear-Based Astrology
                </h3>
                <p className="text-xs text-slate-400">
                  How most people experience astrology today
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {TRANSFORMATION_POINTS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 text-slate-300 text-sm leading-relaxed">
                  <span className="text-red-400 font-bold mt-0.5 shrink-0 text-base">✕</span>
                  <p>{item.before}</p>
                </div>
              ))}
            </div>
          </div>

          {/* With Acharya Ganesh (The Transformation) */}
          <div className="p-8 rounded-3xl bg-[#111a2d] border border-[#d4a34b]/40 shadow-2xl relative">
            {/* Subtle glow highlight */}
            <div className="absolute top-0 right-8 px-4 py-1 rounded-b-xl bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-slate-950 text-[11px] font-bold tracking-wider uppercase font-sans-ui shadow-md">
              Acharya Ganesh Mastery Path
            </div>

            <div className="flex items-center gap-3 pb-6 border-b border-[#d4a34b]/30 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#c59b27]/20 border border-[#d4a34b]/40 flex items-center justify-center text-[#f59e0b]">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Clarity, Dharma & Mastery
                </h3>
                <p className="text-xs text-[#fcebc2]">
                  What you will experience upon completing this course
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {TRANSFORMATION_POINTS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 text-slate-100 text-sm leading-relaxed">
                  <span className="text-[#f59e0b] font-bold mt-0.5 shrink-0 text-base">✓</span>
                  <p>{item.after}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Conversion Action */}
        <div className="text-center">
          <button
            onClick={onEnrollClick}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] text-slate-950 font-bold text-sm tracking-wider uppercase font-sans-ui hover:shadow-xl hover:shadow-[#f59e0b]/25 transition-all cursor-pointer"
          >
            <span>Begin Your Personal Transformation Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
