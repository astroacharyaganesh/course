import React from 'react';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/courseData';

export const SeekerTestimonials: React.FC = () => {
  return (
    <section 
      id="testimonials"
      className="relative py-24 bg-[#090e17] border-y border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c59b27]/15 border border-[#d4a34b]/30 text-[#fcebc2] text-xs font-semibold tracking-[0.2em] uppercase font-sans-ui mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Seeker Voices</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Lives Illuminated by <span className="gold-gradient-text">Sacred Knowledge</span>
          </h2>

          <p className="font-spiritual text-xl text-slate-300">
            Hear from doctors, entrepreneurs, and seekers who discovered practical wisdom 
            and spiritual direction through Acharya Ganesh’s guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-3xl bg-[#0e1627] border border-slate-800/80 hover:border-[#d4a34b]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1 text-[#f59e0b]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f59e0b]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#d4a34b]/30" />
                </div>

                {/* Quote Text */}
                <p className="font-spiritual text-base sm:text-lg text-slate-200 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Tangible Outcome Box & Author */}
              <div className="pt-4 border-t border-slate-800">
                <div className="p-2.5 rounded-xl bg-[#121c2e] border border-slate-800 mb-4 text-xs text-amber-200/90 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <span><strong>Real Impact:</strong> {t.impact}</span>
                </div>

                <div>
                  <h4 className="font-display text-base font-bold text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#d4a34b] font-medium">
                    {t.role}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {t.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Seeker Trust Seal */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-sans-ui">
            ⭐ Rated <strong>4.98 / 5.0</strong> across 1,820+ verified reviews in 34 countries.
          </p>
        </div>

      </div>
    </section>
  );
};
