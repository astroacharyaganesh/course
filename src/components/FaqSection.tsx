import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/courseData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faqs"
      className="relative py-24 bg-[#090e17] border-t border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c59b27]/15 border border-[#d4a34b]/30 text-[#fcebc2] text-xs font-semibold tracking-[0.2em] uppercase font-sans-ui mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Seeker Inquiries</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>

          <p className="font-spiritual text-xl text-slate-300">
            Clear answers to common questions about our pedagogy, curriculum, and community.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0f1728] border-[#d4a34b]/50 shadow-lg'
                    : 'bg-[#0c121e]/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="font-display text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#c59b27]/20 text-[#fcebc2]' : 'bg-[#141f32] text-slate-400'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed font-sans-ui border-t border-slate-800/80 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center text-xs text-slate-400">
          Have an unanswered question? Email our team at{' '}
          <a href="mailto:support@acharyaganesh.com" className="text-[#fcebc2] underline hover:text-white font-semibold">
            support@acharyaganesh.com
          </a>{' '}
          or message our admissions counselor directly.
        </div>

      </div>
    </section>
  );
};
