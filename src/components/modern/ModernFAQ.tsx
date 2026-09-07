import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const ModernFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is covered in this Table of Contents?',
      a: 'This Table of Contents outlines the entire 12-part curriculum of "Building Blocks of Astrology: Planets, Signs & Houses" by Acharya Ganesh. It covers the 3 primary pillars of Vedic astrology: the 9 Grahas (Planets), the 12 Rashis (Zodiac Signs), and the 12 Bhavas (Houses), concluding with the 5-step chart synthesis method and a complete live case study.'
    },
    {
      q: 'Is this foundational masterclass really 100% free?',
      a: 'Yes, completely free. Acharya Ganesh believes that foundational Vedic knowledge must be freely accessible to sincere seekers. There are no credit card requirements, hidden renewal fees, or surprise paywalls.'
    },
    {
      q: 'Do I need any previous knowledge of Sanskrit, Astronomy, or Astrology?',
      a: 'None at all. This course was specifically designed by Astrologer Hanish Bagga for curious beginners. All classical concepts from Sage Parashara are broken down into simple, relatable real-world analogies in a conversational blend of clear English and Hindi terms.'
    },
    {
      q: 'In what language is the masterclass taught?',
      a: 'The instruction is delivered in bilingual conversational Hindi-English (Hinglish), with all Sanskrit astrological terms clearly defined, transliterated, and illustrated with visual chart examples on screen.'
    },
    {
      q: 'How is this structured syllabus different from random YouTube tutorials?',
      a: 'Most online videos present fragmented, out-of-context snippets (e.g., "Saturn transit fear" or isolated sign traits). In contrast, this 12-lesson syllabus gives you a cohesive, mathematical foundation based on Maharishi Parashara’s Brihat Parashara Hora Shastra, teaching you how the system actually fits together into a logical whole.'
    },
    {
      q: 'How long does it take to complete all 12 lessons?',
      a: 'The total runtime across all 12 lessons is approximately 90 minutes. You can complete it in a single weekend afternoon or study one lesson per day at your own pace.'
    },
    {
      q: 'Can I watch on my mobile phone, tablet, or desktop?',
      a: 'Yes. The Acharya Ganesh online portal is 100% cloud-based and responsive. You can seamlessly log in from your smartphone, tablet, laptop, or desktop computer.'
    },
    {
      q: 'Will I receive a verified certificate upon completion?',
      a: 'Yes. Once you complete the 12 lessons and a brief comprehension quiz, a verifiable Certificate of Foundational Mastery signed by Astrologer Hanish Bagga will be unlocked inside your student portal.'
    },
    {
      q: 'What chart style is taught — North Indian or South Indian?',
      a: 'Both styles are explained in Lesson 2! Astrologer Hanish Bagga teaches the geometric orientation of both the North Indian diamond chart (fixed houses) and the South Indian square chart (fixed zodiac signs) so you can read charts from any region of India.'
    },
    {
      q: 'What are the recommended next steps after finishing this course?',
      a: 'After mastering the Building Blocks (Planets, Signs, and Houses), students are equipped to explore intermediate topics such as Nakshatras (Lunar Mansions), Vimshottari Dasha (planetary timing cycles), Gochara (transits), and predictive Prashna.'
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#f7f2ea] text-[#2c1e16] border-t border-[#dfcaa6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fef3c7] border border-[#fde68a] text-[#92400e] text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#c85a17]" />
            <span>Common Questions</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#241812] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-[#5c4a3e] text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about the course curriculum, structure, and Vedic study prerequisites.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-white border-[#dfcaa6] shadow-sm ring-1 ring-[#dfcaa6]'
                    : 'bg-white/80 border-[#e8dac7] hover:bg-white hover:border-[#dfcaa6]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#241812]">
                    {faq.q}
                  </span>
                  <div className="text-[#8c3b12] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 opacity-60" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5c4a3e] leading-relaxed border-t border-[#ebdccd]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
