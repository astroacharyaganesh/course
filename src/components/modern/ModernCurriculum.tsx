import React, { useState } from 'react';
import { PlayCircle, ChevronDown, ChevronUp, Clock, BookOpen, Download, Sparkles } from 'lucide-react';

interface ModernCurriculumProps {
  onPlayLesson: (title: string) => void;
  onEnrollClick: () => void;
}

export const ModernCurriculum: React.FC<ModernCurriculumProps> = ({
  onPlayLesson,
  onEnrollClick,
}) => {
  const [openLesson, setOpenLesson] = useState<number | null>(0);

  const lessons = [
    {
      num: 1,
      phase: 'Phase 1: Sacred Foundations',
      title: 'Introduction to Vedic Astrology (Jyotish as the Sacred Eye)',
      duration: '8 mins',
      takeaway: 'Understand Jyotish as Vedanga — not superstition, but the cosmic clock of soul karma and conscious evolution.',
      previewAvailable: true
    },
    {
      num: 2,
      phase: 'Phase 1: Sacred Foundations',
      title: 'What is a Kundli? Astronomical Snapshot & Chart Geometries',
      duration: '7 mins',
      takeaway: 'How a 2D birth chart mirrors the 360-degree celestial sky. North vs. South Indian chart orientation made effortless.',
      previewAvailable: true
    },
    {
      num: 3,
      phase: 'Phase 1: Sacred Foundations',
      title: 'The Eastern Horizon & Lagna (The Ascendant)',
      duration: '7 mins',
      takeaway: 'Why the Lagna is the steering wheel of the entire horoscope and sets the house numbers for life.',
      previewAvailable: false
    },
    {
      num: 4,
      phase: 'Phase 2: Grahas & Rashis',
      title: 'Overview of the 9 Grahas (Navagrahas) as Living Forces',
      duration: '12 mins',
      takeaway: 'Sun (Soul), Moon (Mind), Mars, Mercury, Jupiter, Venus, Saturn, and the shadow karma nodes Rahu and Ketu.',
      previewAvailable: true
    },
    {
      num: 5,
      phase: 'Phase 2: Grahas & Rashis',
      title: 'The 12 Rashis (Zodiac Signs) and the Four Elements',
      duration: '10 mins',
      takeaway: 'Aries to Pisces: Fire (Agni), Earth (Prithvi), Air (Vayu), and Water (Jala) matrices of planetary expression.',
      previewAvailable: false
    },
    {
      num: 6,
      phase: 'Phase 2: Grahas & Rashis',
      title: 'Zodiac Signs and Their Ruling Planetary Lords',
      duration: '8 mins',
      takeaway: 'The sovereign relationship between planets and the signs they call home. How planetary disposition works.',
      previewAvailable: false
    },
    {
      num: 7,
      phase: 'Phase 2: Grahas & Rashis',
      title: 'Planetary Dignities: Exaltation, Debilitation & Own Sign',
      duration: '9 mins',
      takeaway: 'Uchha (exalted) vs. Neecha (debilitated). Why debility is not a curse, but a specific spiritual training ground.',
      previewAvailable: false
    },
    {
      num: 8,
      phase: 'Phase 3: Houses & Synthesis',
      title: 'The 12 Bhavas: The Cosmic Stages of Human Life',
      duration: '11 mins',
      takeaway: '1st (Self) to 12th (Moksha): How the twelve houses map out every single dimension of human experience.',
      previewAvailable: true
    },
    {
      num: 9,
      phase: 'Phase 3: Houses & Synthesis',
      title: 'House Groupings: Kendras, Trikonas, Upachayas & Dusthanas',
      duration: '8 mins',
      takeaway: 'The structural pillars of strength (Pillars of Vishnu) vs. Houses of Grace (Lakshmi Sthanas) vs. challenges.',
      previewAvailable: false
    },
    {
      num: 10,
      phase: 'Phase 3: Houses & Synthesis',
      title: 'Drishti (Planetary Aspects): How Planets Cast Their Influence',
      duration: '7 mins',
      takeaway: 'Mutual 7th aspects and special aspects of Mars, Jupiter, and Saturn in classical Parashari Jyotish.',
      previewAvailable: false
    },
    {
      num: 11,
      phase: 'Phase 3: Houses & Synthesis',
      title: 'The 5-Step Chart Synthesis Formula by Hanish Bagga',
      duration: '10 mins',
      takeaway: 'The signature actionable framework to look at any birth chart without getting lost in contradictory details.',
      previewAvailable: true
    },
    {
      num: 12,
      phase: 'Phase 3: Houses & Synthesis',
      title: 'Live Case Study Synthesis & Your Next Dharmic Steps',
      duration: '11 mins',
      takeaway: 'Step-by-step decoding of a real chart from scratch. Certificate unlock and spiritual guidance.',
      previewAvailable: false
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-[#fcf9f5] text-[#2c1e16] relative border-b border-[#e7d8c5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fef3c7] border border-[#fde68a] text-[#92400e] text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#c85a17]" />
            <span>Complete 12-Part Syllabus</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241812] tracking-tight">
            The Masterclass Curriculum
          </h2>

          <p className="text-[#5c4a3e] text-sm sm:text-base leading-relaxed">
            Designed to take you from complete beginner to reading birth charts with clarity. 
            No filler. No endless fluff. Just sacred foundational wisdom.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-[#6b584a]">
            <span className="flex items-center gap-1.5 text-[#8c3b12] font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>90 Mins Total Watch Time</span>
            </span>
            <span>•</span>
            <span>Self-Paced On-Demand Access</span>
            <span>•</span>
            <span className="text-emerald-700 font-bold">100% Free Access</span>
          </div>
        </div>

        {/* Curriculum List Accordion */}
        <div className="space-y-3">
          {lessons.map((lesson, idx) => {
            const isOpen = openLesson === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-white border-[#dfcaa6] shadow-md ring-1 ring-[#dfcaa6]'
                    : 'bg-white/80 border-[#e8dac7] hover:bg-white hover:border-[#dfcaa6]'
                }`}
              >
                <div
                  onClick={() => setOpenLesson(isOpen ? null : idx)}
                  className="p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 sm:gap-5 min-w-0">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                      isOpen
                        ? 'bg-gradient-to-r from-[#c85a17] to-[#d97706] text-white shadow-sm'
                        : 'bg-[#f8efe2] text-[#8c3b12] border border-[#dfcaa6]'
                    }`}>
                      {lesson.num}
                    </div>

                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-bold text-[#9c6508] uppercase tracking-wider">
                        {lesson.phase}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#241812] truncate sm:text-wrap">
                        {lesson.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-[#735e50] font-mono hidden sm:inline">
                      {lesson.duration}
                    </span>

                    {lesson.previewAvailable && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onPlayLesson(lesson.title);
                        }}
                        className="flex items-center gap-1 text-[11px] font-bold text-[#8c3b12] bg-[#f8efe2] hover:bg-[#f2e2cf] px-3 py-1 rounded-full border border-[#dfcaa6] cursor-pointer"
                      >
                        <PlayCircle className="w-3 h-3" />
                        <span>Preview</span>
                      </button>
                    )}

                    <div className="text-[#8c3b12]">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 opacity-60" />}
                    </div>
                  </div>
                </div>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#ebdccd] text-xs sm:text-sm text-[#5c4a3e] space-y-3">
                    <div>
                      <strong className="text-[#7c3a18] text-xs uppercase tracking-wider block mb-1">
                        Key Lesson Learning:
                      </strong>
                      <p className="leading-relaxed text-[#4a3b32]">
                        {lesson.takeaway}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <span className="text-xs text-[#735e50]">
                        Lesson Duration: <strong className="text-[#241812]">{lesson.duration}</strong>
                      </span>

                      <button
                        onClick={() => onPlayLesson(lesson.title)}
                        className="text-xs font-bold text-[#c85a17] hover:text-[#8c3b12] underline cursor-pointer"
                      >
                        Play Audio/Video Excerpt →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Action Strip */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-[#dfcaa6] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#241812]">
              Ready to begin Lesson 1 right now?
            </h3>
            <p className="text-xs text-[#5c4a3e]">
              Access the entire 12-part masterclass instantly with zero fees.
            </p>
          </div>

          <button
            onClick={onEnrollClick}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#c85a17] via-[#d97706] to-[#b45309] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer shrink-0"
          >
            Start Free Masterclass →
          </button>
        </div>

      </div>
    </section>
  );
};
