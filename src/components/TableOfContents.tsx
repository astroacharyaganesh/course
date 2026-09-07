import React, { useState, useMemo } from 'react';
import { BookOpen, Clock, Search, ChevronDown, ChevronUp, CheckCircle, Sparkles } from 'lucide-react';

interface Lesson {
  id: number;
  num: number;
  phase: string;
  phaseNumber: number;
  title: string;
  sanskritTitle?: string;
  duration: string;
  summary: string;
  keyTopics: string[];
}

export const TableOfContents: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedLessons, setExpandedLessons] = useState<Record<number, boolean>>({
    1: true,
  });

  const lessons: Lesson[] = [
    {
      id: 1,
      num: 1,
      phaseNumber: 1,
      phase: 'Phase 1: Sacred Foundations',
      title: 'Introduction to Vedic Astrology (Jyotish as the Sacred Eye)',
      sanskritTitle: 'ज्योतिष परिचय • Vedanga Jyotish',
      duration: '8 mins',
      summary: 'An introduction to Jyotish as the cosmic clock and "Eye of the Vedas" (Vedanga). Learn why Vedic astrology differs fundamentally from western sun-sign horoscopes, focusing on karma, soul evolution, and cosmic time cycles.',
      keyTopics: [
        'Vedanga origin and classical purpose of Jyotish',
        'Difference between Sidereal (Nirayana) and Tropical (Sayana) zodiacs',
        'How karma (Prarabdha, Sanchita, Kriyamana) is reflected in the chart'
      ]
    },
    {
      id: 2,
      num: 2,
      phaseNumber: 1,
      phase: 'Phase 1: Sacred Foundations',
      title: 'What is a Kundli? Astronomical Snapshot & Chart Geometries',
      sanskritTitle: 'कुंडली संरचना • North vs South Indian Charts',
      duration: '7 mins',
      summary: 'Understand the geometry of the birth chart. How a 2-dimensional 12-box diagram represents the exact 360-degree celestial sphere at the exact minute and coordinates of birth.',
      keyTopics: [
        'The 12-house grid and reading order',
        'North Indian diamond chart format vs. South Indian fixed-sign format',
        'Orientation of cardinal directions in Vedic astrology'
      ]
    },
    {
      id: 3,
      num: 3,
      phaseNumber: 1,
      phase: 'Phase 1: Sacred Foundations',
      title: 'The Eastern Horizon & Lagna (The Ascendant)',
      sanskritTitle: 'लग्न विचार • The Rising Sign Blueprint',
      duration: '7 mins',
      summary: 'Why the Lagna (Ascendant) is the supreme pivot of your chart. How the sign rising on the eastern horizon determines the 1st house and anchors all other 11 houses.',
      keyTopics: [
        'Definition of the Eastern Horizon (Lagna point)',
        'Why the Lagna changes every ~2 hours',
        'Lagna Lord (Lagnesha) as the primary life guide'
      ]
    },
    {
      id: 4,
      num: 4,
      phaseNumber: 2,
      phase: 'Phase 2: Grahas & Rashis (Planets & Signs)',
      title: 'Overview of the 9 Grahas (Navagrahas) as Living Forces',
      sanskritTitle: 'नवग्रह तत्व • The 9 Cosmic Archetypes',
      duration: '12 mins',
      summary: 'Deep dive into the 9 grahas: Surya (Soul), Chandra (Mind), Mangal (Action), Budha (Intellect), Guru (Wisdom), Shukra (Love & Refinement), Shani (Discipline), and the karmic shadow nodes Rahu & Ketu.',
      keyTopics: [
        'Natural benefics (Shubha Grahas) vs. natural malefics (Krupa Grahas)',
        'Planetary devatas, elements, metals, and gemstones',
        'Rahu and Ketu: The lunar eclipse axis of destiny'
      ]
    },
    {
      id: 5,
      num: 5,
      phaseNumber: 2,
      phase: 'Phase 2: Grahas & Rashis (Planets & Signs)',
      title: 'The 12 Rashis (Zodiac Signs) and the Four Elements',
      sanskritTitle: 'द्वादश राशि • Agni, Prithvi, Vayu, Jala',
      duration: '10 mins',
      summary: 'Explore the 12 signs from Aries (Mesha) to Pisces (Meena) categorized through the 4 primordial Vedic elements: Agni (Fire), Prithvi (Earth), Vayu (Air), and Jala (Water).',
      keyTopics: [
        'Agni rashis: Mesha (1), Simha (5), Dhanu (9)',
        'Prithvi rashis: Vrishabha (2), Kanya (6), Makara (10)',
        'Vayu rashis: Mithuna (3), Tula (7), Kumbha (11)',
        'Jala rashis: Karka (4), Vrishchika (8), Meena (12)'
      ]
    },
    {
      id: 6,
      num: 6,
      phaseNumber: 2,
      phase: 'Phase 2: Grahas & Rashis (Planets & Signs)',
      title: 'Zodiac Signs and Their Ruling Planetary Lords',
      sanskritTitle: 'राशि स्वामी • Planetary Ownership Systems',
      duration: '8 mins',
      summary: 'The classical lordship table. Understand why each planet governs specific signs, how the Sun and Moon rule one sign each, and how the other planets govern two signs.',
      keyTopics: [
        'Lordship allocations according to Maharishi Parashara',
        'Planetary friendship (Mitra), neutrality (Sama), and enmity (Shatru)',
        'Dispositor theory: How a sign lord impacts resident planets'
      ]
    },
    {
      id: 7,
      num: 7,
      phaseNumber: 2,
      phase: 'Phase 2: Grahas & Rashis (Planets & Signs)',
      title: 'Planetary Dignities: Exaltation, Debilitation & Own Sign',
      sanskritTitle: 'ग्रह बल • Uchha, Neecha & Swa-Kshetra',
      duration: '9 mins',
      summary: 'How planets behave when exalted (Uchha), debilitated (Neecha), in their own sign (Swa-Kshetra), or in friends\' signs. A non-fatalistic, empowering approach to planetary debility.',
      keyTopics: [
        'Degrees of maximum exaltation and deep debility',
        'Neecha Bhanga Raja Yoga (Cancellation of debility)',
        'Moolatrikona zones and raw planetary vitality'
      ]
    },
    {
      id: 8,
      num: 8,
      phaseNumber: 3,
      phase: 'Phase 3: Bhavas & Synthesis (Houses & Chart Reading)',
      title: 'The 12 Bhavas: The Cosmic Stages of Human Life',
      sanskritTitle: 'द्वादश भाव • The 12 Arenas of Existence',
      duration: '11 mins',
      summary: 'Comprehensive mapping of the 12 houses. From 1st house (Self, vitality) to 7th house (Partnerships), 10th house (Career, public standing) to 12th house (Moksha and transcendence).',
      keyTopics: [
        'Dharma houses (1, 5, 9) — Purpose and virtue',
        'Artha houses (2, 6, 10) — Wealth and resources',
        'Kama houses (3, 7, 11) — Desire and social circle',
        'Moksha houses (4, 8, 12) — Liberation and inner peace'
      ]
    },
    {
      id: 9,
      num: 9,
      phaseNumber: 3,
      phase: 'Phase 3: Bhavas & Synthesis (Houses & Chart Reading)',
      title: 'House Groupings: Kendras, Trikonas, Upachayas & Dusthanas',
      sanskritTitle: 'भाव वर्गीकरण • Kendra, Trikona & Dusthana',
      duration: '8 mins',
      summary: 'Master the fundamental house classifications: The 4 Kendras (Pillars of Vishnu), the 2 Trikonas (Houses of Lakshmi), the Upachayas (houses of growth over time), and the Dusthanas (houses of transformation).',
      keyTopics: [
        'Kendra Sthanas: 1st, 4th, 7th, 10th houses',
        'Trikona Sthanas: 1st, 5th, 9th houses',
        'Upachaya Sthanas: 3rd, 6th, 10th, 11th houses',
        'Dusthana Sthanas: 6th, 8th, 12th houses'
      ]
    },
    {
      id: 10,
      num: 10,
      phaseNumber: 3,
      phase: 'Phase 3: Bhavas & Synthesis (Houses & Chart Reading)',
      title: 'Drishti (Planetary Aspects): How Planets Cast Their Influence',
      sanskritTitle: 'ग्रह दृष्टि • Mutual & Special Aspects',
      duration: '7 mins',
      summary: 'Understand how planets project their gaze across the chart. All planets aspect the 7th house from themselves, plus the classical special aspects of Mars (4th, 8th), Jupiter (5th, 9th), and Saturn (3rd, 10th).',
      keyTopics: [
        'The universal 7th aspect rule',
        'Special Graha Drishtis of Mangal, Guru, and Shani',
        'How aspects modify the houses and planets they touch'
      ]
    },
    {
      id: 11,
      num: 11,
      phaseNumber: 3,
      phase: 'Phase 3: Bhavas & Synthesis (Houses & Chart Reading)',
      title: 'The 5-Step Chart Synthesis Formula by Hanish Bagga',
      sanskritTitle: 'समन्वय सूत्र • 5-Step Reading Framework',
      duration: '10 mins',
      summary: 'The signature actionable formula created by Astrologer Hanish Bagga to synthesize any birth chart step-by-step without getting overwhelmed by contradictory rules.',
      keyTopics: [
        'Step 1: Ascendant & Ascendant Lord examination',
        'Step 2: Moon sign (Janma Rashi) & emotional temperament',
        'Step 3: Sun position & core life purpose',
        'Step 4: Kendra & Trikona power balance',
        'Step 5: Current active planetary period (Dasha context)'
      ]
    },
    {
      id: 12,
      num: 12,
      phaseNumber: 3,
      phase: 'Phase 3: Bhavas & Synthesis (Houses & Chart Reading)',
      title: 'Live Case Study Synthesis & Practical Chart Walkthrough',
      sanskritTitle: 'अभ्यास व प्रत्यक्ष विश्लेषण • Practical Application',
      duration: '11 mins',
      summary: 'Watch an entire birth chart decoded live from start to finish applying every concept learned across the 12 lessons. Includes review questions and next steps.',
      keyTopics: [
        'Complete end-to-end chart reading demonstration',
        'Common beginner pitfalls to avoid',
        'Certificate unlocking criteria & continuing Vedic studies'
      ]
    }
  ];

  const filteredLessons = useMemo(() => {
    if (!searchQuery.trim()) return lessons;
    const query = searchQuery.toLowerCase();
    return lessons.filter(
      (lesson) =>
        lesson.title.toLowerCase().includes(query) ||
        lesson.phase.toLowerCase().includes(query) ||
        lesson.summary.toLowerCase().includes(query) ||
        lesson.keyTopics.some((t) => t.toLowerCase().includes(query)) ||
        (lesson.sanskritTitle && lesson.sanskritTitle.toLowerCase().includes(query))
    );
  }, [lessons, searchQuery]);

  const toggleLesson = (id: number) => {
    setExpandedLessons((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleExpandAll = () => {
    const allExpanded: Record<number, boolean> = {};
    lessons.forEach((l) => {
      allExpanded[l.id] = true;
    });
    setExpandedLessons(allExpanded);
  };

  const handleCollapseAll = () => {
    setExpandedLessons({});
  };

  // Group filtered lessons by phase
  const groupedLessons = useMemo(() => {
    const groups: Record<string, Lesson[]> = {};
    filteredLessons.forEach((l) => {
      if (!groups[l.phase]) {
        groups[l.phase] = [];
      }
      groups[l.phase].push(l);
    });
    return groups;
  }, [filteredLessons]);

  return (
    <section id="table-of-contents" className="py-12 sm:py-16 bg-[#faf7f2] text-[#2c1e16]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title & Overview Header */}
        <div className="border-b border-[#dfcaa6] pb-8 mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef3c7] border border-[#fde68a] text-[#92400e] text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#c85a17]" />
            <span>Curriculum Syllabus</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241812] tracking-tight">
            Table of Contents
          </h1>

          <p className="text-base sm:text-lg text-[#5c4a3e] max-w-3xl leading-relaxed">
            <strong>Building Blocks of Astrology: Planets, Signs & Houses</strong> is a structured 
            12-part masterclass designed by Astrologer Hanish Bagga to teach the foundational grammar 
            of classical Parashari Jyotish.
          </p>

          {/* Quick Metrics Strip */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-[#6b584a]">
            <div className="flex items-center gap-1.5 font-semibold text-[#8c3b12]">
              <Clock className="w-4 h-4 text-[#c85a17]" />
              <span>12 Lessons • 90 Mins Total</span>
            </div>
            <span className="text-[#dfcaa6] hidden sm:inline">•</span>
            <div>Format: On-Demand Video Lectures</div>
            <span className="text-[#dfcaa6] hidden sm:inline">•</span>
            <div className="text-emerald-800 font-semibold">100% Free Access</div>
            <span className="text-[#dfcaa6] hidden sm:inline">•</span>
            <div>Certificate Included</div>
          </div>
        </div>

        {/* Filter and Accordion Control Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white border border-[#dfcaa6] p-4 rounded-2xl shadow-xs">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#a08f82] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search topics, planets, houses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#faf7f2] border border-[#e8dac7] text-xs sm:text-sm text-[#241812] placeholder:text-[#a08f82] focus:outline-none focus:border-[#c85a17]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#a08f82] hover:text-[#241812]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Expand / Collapse Controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
            <span className="text-[#735e50] mr-1 hidden md:inline">
              Showing {filteredLessons.length} of {lessons.length} lessons
            </span>
            <button
              onClick={handleExpandAll}
              className="px-3 py-1.5 rounded-lg bg-[#f8efe2] hover:bg-[#f2e2cf] text-[#8c3b12] font-semibold transition-colors cursor-pointer border border-[#dfcaa6]"
            >
              Expand All
            </button>
            <button
              onClick={handleCollapseAll}
              className="px-3 py-1.5 rounded-lg bg-[#f8efe2] hover:bg-[#f2e2cf] text-[#8c3b12] font-semibold transition-colors cursor-pointer border border-[#dfcaa6]"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Grouped Content Accordion */}
        {filteredLessons.length === 0 ? (
          <div className="bg-white border border-[#dfcaa6] rounded-2xl p-10 text-center space-y-2">
            <p className="text-[#5c4a3e] font-medium text-sm">
              No lessons match your search for "{searchQuery}".
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-[#c85a17] font-bold underline cursor-pointer"
            >
              Reset search query
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {(Object.entries(groupedLessons) as [string, Lesson[]][]).map(([phaseName, phaseLessons]) => (
              <div key={phaseName} className="space-y-3">
                
                {/* Phase Divider Header */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="h-px bg-[#dfcaa6] flex-1" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8c3b12] bg-[#f8efe2] px-3.5 py-1 rounded-full border border-[#dfcaa6]">
                    {phaseName}
                  </span>
                  <div className="h-px bg-[#dfcaa6] flex-1" />
                </div>

                {/* Phase Lesson Items */}
                <div className="space-y-3">
                  {phaseLessons.map((lesson) => {
                    const isExpanded = !!expandedLessons[lesson.id];
                    return (
                      <div
                        key={lesson.id}
                        className={`rounded-2xl border transition-all ${
                          isExpanded
                            ? 'bg-white border-[#dfcaa6] shadow-sm ring-1 ring-[#dfcaa6]'
                            : 'bg-white/80 border-[#e8dac7] hover:bg-white hover:border-[#dfcaa6]'
                        }`}
                      >
                        {/* Header Row */}
                        <div
                          onClick={() => toggleLesson(lesson.id)}
                          className="p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none"
                        >
                          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 min-w-0">
                            {/* Number Badge */}
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 sm:mt-0 ${
                                isExpanded
                                  ? 'bg-gradient-to-r from-[#c85a17] to-[#d97706] text-white shadow-xs'
                                  : 'bg-[#f8efe2] text-[#8c3b12] border border-[#dfcaa6]'
                              }`}
                            >
                              {lesson.num}
                            </div>

                            <div className="min-w-0">
                              {lesson.sanskritTitle && (
                                <div className="text-[10px] sm:text-[11px] font-semibold text-[#9c6508] tracking-wide">
                                  {lesson.sanskritTitle}
                                </div>
                              )}
                              <h2 className="text-sm sm:text-base font-bold text-[#241812] leading-snug">
                                {lesson.title}
                              </h2>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            <span className="text-xs text-[#735e50] font-mono whitespace-nowrap bg-[#faf7f2] px-2.5 py-1 rounded-md border border-[#e8dac7]">
                              {lesson.duration}
                            </span>
                            <div className="text-[#8c3b12]">
                              {isExpanded ? (
                                <ChevronUp className="w-5 h-5" />
                              ) : (
                                <ChevronDown className="w-5 h-5 opacity-60" />
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Expanded Details */}
                        {isExpanded && (
                          <div className="px-5 pb-5 pt-2 border-t border-[#ebdccd] space-y-3.5 text-xs sm:text-sm">
                            <div>
                              <strong className="text-[#8c3b12] text-xs uppercase tracking-wider block mb-1">
                                Overview & Scope:
                              </strong>
                              <p className="text-[#4a3b32] leading-relaxed">
                                {lesson.summary}
                              </p>
                            </div>

                            <div>
                              <strong className="text-[#8c3b12] text-xs uppercase tracking-wider block mb-1.5">
                                Key Topics Covered:
                              </strong>
                              <ul className="space-y-1 text-[#5c4a3e]">
                                {lesson.keyTopics.map((topic, tIdx) => (
                                  <li key={tIdx} className="flex items-start gap-2">
                                    <CheckCircle className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
