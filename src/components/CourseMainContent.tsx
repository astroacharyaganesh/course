import React, { useState } from 'react';
import { 
  PlayCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  HelpCircle, 
  Star, 
  ArrowRight, 
  ShieldCheck,
  Compass,
  GraduationCap
} from 'lucide-react';

interface CourseMainContentProps {
  onPlayPreview: (itemTitle: string) => void;
  onBuyNowClick: () => void;
}

export const CourseMainContent: React.FC<CourseMainContentProps> = ({ 
  onPlayPreview,
  onBuyNowClick
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  const tableOfContents = [
    {
      title: 'Introduction to Vedic Astrology',
      duration: '8 mins',
      detail: 'Core philosophy of Jyotish as the sacred eye of the Vedas, understanding karmic time and cosmic consciousness.'
    },
    {
      title: 'What is a Kundli (Birth Chart)?',
      duration: '7 mins',
      detail: 'The exact astronomical snapshot of the sky at birth; difference between North and South Indian chart geometries.'
    },
    {
      title: 'Overview of the 9 Planets (Navagraha)',
      duration: '12 mins',
      detail: 'Sun (Soul), Moon (Mind), Mars, Mercury, Jupiter, Venus, Saturn, and the shadow eclipse nodes Rahu and Ketu.'
    },
    {
      title: 'Overview of the 12 Zodiac Signs (Rashis)',
      duration: '10 mins',
      detail: 'Aries to Pisces: the 12 solar constellations, elemental triplicities (Fire, Earth, Air, Water), and movable/fixed nature.'
    },
    {
      title: 'Zodiac Signs and Their Ruling Lords',
      duration: '8 mins',
      detail: 'Planetary rulerships, natural planetary friendships, and how planets express their agenda through specific signs.'
    },
    {
      title: 'Overview of the 12 Houses (Bhavas)',
      duration: '11 mins',
      detail: 'The 12 dimensional zones of human experience: Lagna (self), wealth, siblings, home, children, career, and moksha.'
    },
    {
      title: 'Houses and Their Ruling Lords',
      duration: '9 mins',
      detail: 'How house rulers bridge different domains of life, creating the interconnected web of personal destiny.'
    },
    {
      title: 'How Planets, Signs & Houses Work Together',
      duration: '10 mins',
      detail: 'The golden synthesis formula: Planet (Actor) + Sign (Costume/Demeanor) + House (Stage/Arena of life).'
    },
    {
      title: 'Basics of Exaltation, Debilitation & Own Sign',
      duration: '8 mins',
      detail: 'Understanding planetary dignity, comfort levels, and why debility does not always indicate misfortune.'
    },
    {
      title: 'Introduction to Benefic & Malefic Planets',
      duration: '7 mins',
      detail: 'Natural benefics (Jupiter, Venus) vs. natural malefics (Saturn, Mars, Rahu, Ketu) and functional context.'
    },
    {
      title: 'How to Read a Kundli — A Beginner\'s Framework',
      duration: '10 mins',
      detail: 'A simple 5-step checklist to open any birth chart and decode the native\'s core strengths without feeling overwhelmed.'
    },
    {
      title: 'Conclusion & What\'s Next in This Series',
      duration: '5 mins',
      detail: 'Roadmap to the upcoming advanced deep-dives into individual planet placements across all 12 houses.'
    }
  ];

  const faqs = [
    {
      q: 'Is this course genuinely 100% free?',
      a: 'Yes, completely free. Acharya Ganesh believes that foundational spiritual wisdom should be accessible to every sincere seeker without financial barriers. There are no hidden fees or card details required.'
    },
    {
      q: 'Do I need any previous knowledge of Sanskrit or Astrology?',
      a: 'None at all! The course is taught in a conversational blend of Hindi and English, breaking down classical terms into clear, relatable concepts that anyone can grasp.'
    },
    {
      q: 'How will I access the video sessions?',
      a: 'Upon clicking "BUY NOW" and submitting your basic details, you will get instant access to the online learning portal. You can watch anytime, anywhere, on your phone, tablet, or laptop.'
    },
    {
      q: 'Will I receive a course certificate?',
      a: 'Yes! Upon completing the 90-minute module, you can download a personalized Certificate of Completion signed by Astrologer Hanish Bagga.'
    }
  ];

  const toggleItem = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-10 text-[#333333]">
      
      {/* Course Description Paragraphs matching screenshot */}
      <div className="space-y-4 text-[15px] sm:text-base leading-[1.7] text-[#3d2c22]">
        <p>
          This introductory course lays the foundation for everything you'll learn in this series. 
          Before diving into individual planets, you need to understand the three core building 
          blocks of any kundli: the planets (grahas), the zodiac signs (rashis), and the houses 
          (bhavas). This course breaks down what each of these elements represents, how they interact 
          with one another, and why their combination is the basis of all chart interpretation in 
          Vedic astrology.
        </p>

        <p>
          You'll learn the basic nature of the 9 planets, the characteristics of the 12 zodiac signs 
          and their ruling lords, and the meaning of each of the 12 houses in a kundli — covering 
          areas of life like self, wealth, relationships, career, and spirituality. By the end of this 
          course, you'll have the essential vocabulary and framework needed to confidently follow the 
          rest of the series, where each planet's effect across every sign and house is explored in depth.
        </p>
      </div>

      {/* Table of Contents Section Heading in Terracotta Serif matching screenshot */}
      <div id="table-of-contents-heading" className="pt-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-3xl sm:text-[32px] font-bold text-[#a2531d] tracking-tight">
            Table of Contents:
          </h2>
          <span className="text-xs text-[#715444] font-medium hidden sm:inline-block">
            12 Comprehensive Lessons • 90 Mins Total
          </span>
        </div>

        {/* Clean, Simple Numbered List matching screenshot */}
        <ol className="space-y-3 text-[15px] sm:text-[16px] text-[#2c1d15] font-normal pl-0">
          {tableOfContents.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <li 
                key={index}
                className="group rounded-xl transition-all p-2 -ml-2 hover:bg-[#fbf5ee]"
              >
                <div 
                  onClick={() => toggleItem(index)}
                  className="flex items-start justify-between gap-3 cursor-pointer"
                >
                  <span className="leading-snug">
                    <span className="font-medium text-[#2c1d15] mr-1">{index + 1}.</span> {item.title}
                  </span>

                  <div className="flex items-center gap-2 shrink-0 pt-0.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onPlayPreview(item.title);
                      }}
                      className="opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[11px] font-bold text-[#a2531d] bg-[#faeee1] hover:bg-[#f0ded0] px-2 py-0.5 rounded-full"
                      title="Watch excerpt"
                    >
                      <PlayCircle className="w-3 h-3 text-[#a2531d]" />
                      <span>Preview</span>
                    </button>
                    <span className="text-[#a2531d] text-xs">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 opacity-40 group-hover:opacity-100" />}
                    </span>
                  </div>
                </div>

                {/* Optional Quick Detail Box */}
                {isExpanded && (
                  <div className="mt-2 pl-5 pr-3 py-2.5 text-xs sm:text-[13px] text-[#6d5548] bg-[#fbf3e9] rounded-lg border-l-2 border-[#a2531d] leading-relaxed">
                    <p className="mb-1.5">{item.detail}</p>
                    <div className="flex items-center justify-between text-[11px] text-[#a2531d] font-semibold pt-1">
                      <span>Duration: {item.duration}</span>
                      <button
                        onClick={() => onPlayPreview(item.title)}
                        className="underline hover:text-[#8c4516] flex items-center gap-1"
                      >
                        <span>Watch Lesson Snippet</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      {/* 1. FEEL CTA BANNER: Emotional Call To Action right under Table of Contents */}
      <div className="rounded-2xl bg-gradient-to-br from-[#faeee1] via-[#f7e6d4] to-[#faeee1] border border-[#ebd6c2] p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#a2531d] tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Begin With Authenticity</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#381c10] leading-snug">
              Ready to Read Your First Kundli with Confidence?
            </h3>
            <p className="text-xs sm:text-[13px] text-[#6a4f40] leading-relaxed max-w-md">
              No superstition. No confusing Sanskrit terms. Join 15,000+ seekers who began their spiritual astrology journey here.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={onBuyNowClick}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#a2531d] hover:bg-[#884214] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Enroll For Free (₹0)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-[10px] text-center text-[#7a5d4d] mt-1.5">
              ⚡ Instant Access • 100% Free
            </div>
          </div>
        </div>
      </div>

      {/* 2. WHAT YOU WILL MASTER (Key Takeaways / Outcomes) */}
      <div className="pt-2 space-y-4">
        <h3 className="font-display text-2xl font-bold text-[#381c10]">
          What You Will Master in This Masterclass
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#fcf8f3] border border-[#f0ded0] space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#faeee1] text-[#a2531d] flex items-center justify-center font-bold text-sm">
              <Compass className="w-4 h-4" />
            </div>
            <h4 className="font-display text-base font-bold text-[#381c10]">
              Instant Kundli Orientation
            </h4>
            <p className="text-xs text-[#6a4f40] leading-relaxed">
              Understand how to open any birth chart (North or South Indian) and instantly spot the Ascendant (Lagna) and the 12 houses.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#fcf8f3] border border-[#f0ded0] space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#faeee1] text-[#a2531d] flex items-center justify-center font-bold text-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="font-display text-base font-bold text-[#381c10]">
              The 9 Grahas as Cosmic Archetypes
            </h4>
            <p className="text-xs text-[#6a4f40] leading-relaxed">
              Discover how the Sun, Moon, and planetary energies govern specific psychological behaviors, careers, and karmic strengths.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#fcf8f3] border border-[#f0ded0] space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#faeee1] text-[#a2531d] flex items-center justify-center font-bold text-sm">
              <BookOpen className="w-4 h-4" />
            </div>
            <h4 className="font-display text-base font-bold text-[#381c10]">
              Signs and Planetary Dignities
            </h4>
            <p className="text-xs text-[#6a4f40] leading-relaxed">
              Grasp the concept of Exaltation (Uchha), Debilitation (Neecha), and Own signs without fear or fatalism.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#fcf8f3] border border-[#f0ded0] space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#faeee1] text-[#a2531d] flex items-center justify-center font-bold text-sm">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h4 className="font-display text-base font-bold text-[#381c10]">
              The 5-Step Synthesis Formula
            </h4>
            <p className="text-xs text-[#6a4f40] leading-relaxed">
              Synthesize Planet + Sign + House into a cohesive interpretation of health, wealth, relationships, and higher life purpose.
            </p>
          </div>
        </div>
      </div>

      {/* 3. MENTOR SECTION: Astrologer Hanish Bagga (Acharya Ganesh) */}
      <div className="rounded-2xl bg-[#fbf6ef] border border-[#ebd9c7] p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#b88648] shrink-0 shadow-md">
            <img
              src="/src/assets/images/acharya_ganesh_portrait_1788771630566.jpg"
              alt="Astrologer Hanish Bagga"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#ebdcc8] text-[#381c10] text-[11px] font-semibold">
              Your Course Instructor
            </div>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-[#381c10]">
              Astrologer Hanish Bagga
            </h4>
            <p className="text-xs text-[#a2531d] font-semibold">
              Senior Astrologer & Founder • Acharya Ganesh Academy
            </p>
            <p className="text-xs text-[#553b2e] leading-relaxed font-spiritual italic pt-1">
              "Vedic Astrology is not a science of fear or superstition. It is the sacred wisdom of the Rishis designed to grant clarity, spiritual alignment, and peaceful understanding of life's karmic currents."
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-[11px] text-[#715444] font-medium">
              <span>• 15+ Years Lineage Wisdom</span>
              <span>• 25,000+ Kundlis Analyzed</span>
              <span>• Trusted Worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SEEKER EXPERIENCES (Authentic Testimonials in Warm Theme) */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl font-bold text-[#381c10]">
            What Seekers Say
          </h3>
          <div className="flex items-center gap-1 text-xs text-[#a2531d] font-bold">
            <span>⭐ 4.98 / 5 Average Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#fcf8f3] border border-[#ebd9c7] space-y-2">
            <div className="flex items-center text-amber-500 gap-0.5 text-xs">
              {'★★★★★'}
            </div>
            <p className="text-xs text-[#4a3429] leading-relaxed italic">
              "I had tried reading astrology books before but was completely overwhelmed by terms like Bhavas and Drishtis. Astrologer Hanish Bagga explained the 12 houses in just 90 minutes with such crystal clarity!"
            </p>
            <div className="text-[11px] font-bold text-[#381c10] pt-1">
              — Rajesh Sharma, Software Architect (Bengaluru)
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#fcf8f3] border border-[#ebd9c7] space-y-2">
            <div className="flex items-center text-amber-500 gap-0.5 text-xs">
              {'★★★★★'}
            </div>
            <p className="text-xs text-[#4a3429] leading-relaxed italic">
              "What I loved most is the complete absence of fear-mongering. The focus is purely on self-awareness, dharma, and understanding why planets behave the way they do. Truly a gift!"
            </p>
            <div className="text-[11px] font-bold text-[#381c10] pt-1">
              — Dr. Sunita Mehra, Clinical Psychologist (Delhi)
            </div>
          </div>
        </div>
      </div>

      {/* 5. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <div className="space-y-4 pt-2">
        <h3 className="font-display text-2xl font-bold text-[#381c10]">
          Frequently Asked Questions
        </h3>

        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = faqOpenIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-xl border border-[#ebd9c7] bg-[#fbf6ef] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-[13px] font-bold text-[#381c10] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#a2531d]">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-[#6a4f40] leading-relaxed border-t border-[#ebd9c7]/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. FINAL BOTTOM FEEL CTA */}
      <div className="rounded-2xl bg-[#381c10] text-white p-7 sm:p-9 text-center space-y-4 shadow-md">
        <div className="inline-block px-3 py-1 rounded-full bg-[#e8be89]/20 text-[#e8be89] text-[11px] font-bold tracking-widest uppercase font-sans-ui">
          FREE SACRED LEARNING
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#faeee1] max-w-lg mx-auto leading-snug">
          Transform Confusion Into Clarity. Start Your Vedic Journey Today.
        </h3>

        <p className="text-xs sm:text-[13px] text-[#e0cfc5] max-w-md mx-auto leading-relaxed">
          Gain free instant access to all 12 modules, the downloadable chart checklist, and study community.
        </p>

        <div className="pt-2">
          <button
            onClick={onBuyNowClick}
            className="px-9 py-3.5 rounded-full bg-[#e8be89] hover:bg-[#dfb175] text-[#381c10] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:scale-105 cursor-pointer"
          >
            BUY NOW — IT'S 100% FREE
          </button>
        </div>

        <div className="text-[11px] text-[#c7b4a9] pt-1">
          No credit card needed • Instant portal link via email and WhatsApp
        </div>
      </div>

    </div>
  );
};
