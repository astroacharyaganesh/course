import React, { useState, useMemo } from 'react';
import { 
  Flame, 
  BookOpen, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  ShieldAlert, 
  Compass, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  ArrowUpRight, 
  Layers,
  HeartHandshake
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from '../ui/ScrollReveal';

export interface TocItem {
  id: number;
  title: string;
  category: 'foundations' | 'dignity' | 'signs' | 'houses_remedies';
  categoryLabel: string;
  summary: string;
  highlights: string[];
  keyPlanetInfo?: string;
}

export const MARS_TOC_ITEMS: TocItem[] = [
  {
    id: 1,
    title: 'Introduction to Mars (Mangal) in Vedic Astrology',
    category: 'foundations',
    categoryLabel: 'Core Foundations',
    summary: 'The celestial Commander-in-Chief (Senapati). Understanding Mangal’s elemental nature (Agni tattva), raw courage, vital life force (Prana), and drive for victory.',
    highlights: ['Agni (Fire) element & Kshatriya temperament', 'Physical vitality, blood circulation & muscle strength', 'Drive, ambition, and leadership qualities'],
    keyPlanetInfo: 'Planetary Role: Senapati (Commander)',
  },
  {
    id: 2,
    title: 'Mythology & Symbolism of Mangal',
    category: 'foundations',
    categoryLabel: 'Core Foundations',
    summary: 'Bhoomi Putra (son of Earth) and connection to Lord Kartikeya / Skanda. Shastric origins, the spear weapon (Shakti Vel), and spiritual defense against adharma.',
    highlights: ['Birth from Mother Earth (Bhauma)', 'Archetype of Lord Skanda / Murugan', 'Sacred mount: The celestial Ram (Chhagala)'],
    keyPlanetInfo: 'Divine Deity: Lord Kartikeya & Hanuman Ji',
  },
  {
    id: 3,
    title: 'Characteristics & Significations of Mars',
    category: 'foundations',
    categoryLabel: 'Core Foundations',
    summary: 'Karakas of Mars: real estate, siblings (especially younger brothers), engineering, surgical acumen, military strategy, sports, and technical problem-solving.',
    highlights: ['Significator of real estate & immovable land', 'Bhratri Karaka (Younger siblings)', 'Surgical, technical & executive intelligence'],
    keyPlanetInfo: 'Governs: Bone marrow, hemoglobin & stamina',
  },
  {
    id: 4,
    title: 'Understanding Mangal Dosha',
    category: 'dignity',
    categoryLabel: 'Dosha & Dignity',
    summary: 'Comprehensive analysis of Kuja Dosha from Lagna, Moon, and Venus in houses 1, 4, 7, 8, and 12. Demystifying myths, exceptions, and authentic cancellations (Bhanga).',
    highlights: ['Real impacts on temperament and marital harmony', 'Authentic cancellation rules (Neecha, Guru aspect, etc.)', 'Kumbh Vivah and traditional Vedic safeguards'],
    keyPlanetInfo: 'Affected Houses: 1st, 4th, 7th, 8th, 12th',
  },
  {
    id: 5,
    title: 'Exalted, Debilitated & Own Sign of Mars',
    category: 'dignity',
    categoryLabel: 'Dosha & Dignity',
    summary: 'Deep dive into exaltation in Capricorn (Uchha at 28°), debilitation in Cancer (Neecha at 28°), own signs (Aries & Scorpio), and Moolatrikona degree nuances.',
    highlights: ['Capricorn (Makara): Disciplined structural power', 'Cancer (Karka): Emotional friction & channelization', 'Aries (Mesha) vs. Scorpio (Vrishchika) dynamics'],
    keyPlanetInfo: 'Exaltation: Capricorn 28° | Debilitation: Cancer 28°',
  },
  {
    id: 6,
    title: 'Effect of Mars in Aries',
    category: 'signs',
    categoryLabel: 'Zodiac Signs (1–12)',
    summary: 'Own sign and Moolatrikona. Fearless initiative, athletic prowess, direct communication, rapid enterprise, and pioneering leadership.',
    highlights: ['Fiery dynamism & decisive action', 'Natural command over mechanical challenges', 'Tendency for impatience to temper'],
    keyPlanetInfo: 'Rashi: Mesha (Fiery Cardinal)',
  },
  {
    id: 7,
    title: 'Effect of Mars in Taurus',
    category: 'signs',
    categoryLabel: 'Zodiac Signs (1–12)',
    summary: 'Mars in Venusian earthly sign. Tenacious determination, wealth defense, voice projection, sensual passion, and deliberate financial conquests.',
    highlights: ['Persistent and stubborn stamina', 'Resource-building & property acquisition', 'Controlled passion and steady work ethic'],
    keyPlanetInfo: 'Rashi: Vrishabha (Fixed Earth)',
  },
  {
    id: 8,
    title: 'Effect of Mars in Gemini',
    category: 'signs',
    categoryLabel: 'Zodiac Signs (1–12)',
    summary: 'Mars in Mercurial airy realm. Sharp verbal wit, aggressive debates, technical multitasking, intellectual boldness, and restless agility.',
    highlights: ['Incisive debate and tactical strategy', 'Multi-venture management skills', 'Channeling mental nervousness into writing'],
    keyPlanetInfo: 'Rashi: Mithuna (Mutable Air)',
  },
  {
    id: 9,
    title: 'Effect of Mars in Cancer',
    category: 'signs',
    categoryLabel: 'Zodiac Signs (1–12)',
    summary: 'Debilitated sign (Neecha). Emotional vulnerability, protective defensive instinct, domestic turbulence, and turning emotional heat into devotion.',
    highlights: ['Passionate defense of home and loved ones', 'Vulnerability to passive-aggressive conflict', 'Neechabhanga Raja Yoga possibilities'],
    keyPlanetInfo: 'Rashi: Karka (Cardinal Water)',
  },
  {
    id: 10,
    title: 'Effect of Mars in Leo',
    category: 'signs',
    categoryLabel: 'Zodiac Signs (1–12)',
    summary: 'Mars in royal friendly Sun sign. Regal dignity, magnanimous courage, protective loyalty, theatrical flair, and natural commanding authority.',
    highlights: ['Born authority and executive governance', 'Heroic defense of honor and high principles', 'Radiant self-assurance and ambition'],
    keyPlanetInfo: 'Rashi: Simha (Fixed Fire)',
  },
  {
    id: 11,
    title: 'Effect of Mars in Virgo',
    category: 'signs',
    categoryLabel: 'Zodiac Signs (1–12)',
    summary: 'Mars in analytical Earth sign. Precision engineering, surgical critique, relentless work stamina, problem-solving, and dispute resolution.',
    highlights: ['Eye for detail and tactical optimization', 'Medical, legal, and operational prowess', 'Avoiding over-critical friction in relationships'],
    keyPlanetInfo: 'Rashi: Kanya (Mutable Earth)',
  },
  {
    id: 12,
    title: 'Effect of Mars in Libra',
    category: 'signs',
    categoryLabel: 'Zodiac Signs (1–12)',
    summary: 'Mars in Venusian cardinal sign. Fighting for justice and ethics, balance between assertiveness and diplomatic negotiation in partnerships.',
    highlights: ['Advocacy for fairness and civil rights', 'Dynamic partnership negotiations', 'Balancing personal drive with partner compromises'],
    keyPlanetInfo: 'Rashi: Tula (Cardinal Air)',
  },
  {
    id: 13,
    title: 'Effect of Mars in Scorpio',
    category: 'signs',
    categoryLabel: 'Zodiac Signs (1–12)',
    summary: 'Own sign (Swakshetra). Occult penetration, investigative genius, strategic secrecy, unbreakable resilience, and psychological depth.',
    highlights: ['Mastery over hidden knowledge and research', 'Immense crisis management & survival power', 'Loyalty with laser-focused intensity'],
    keyPlanetInfo: 'Rashi: Vrishchika (Fixed Water)',
  },
  {
    id: 14,
    title: 'Effect of Mars in Sagittarius',
    category: 'signs',
    categoryLabel: 'Zodiac Signs (1–12)',
    summary: 'Friendly Jupiterian fiery realm. Righteous crusader (Dharma Yodha), philosophical zeal, high adventure, honesty, and principled action.',
    highlights: ['Courage guided by moral wisdom', 'Enthusiasm for higher knowledge & law', 'Direct, unvarnished truth-telling'],
    keyPlanetInfo: 'Rashi: Dhanu (Mutable Fire)',
  },
  {
    id: 15,
    title: 'Effect of Mars in Capricorn',
    category: 'signs',
    categoryLabel: 'Zodiac Signs (1–12)',
    summary: 'Exalted sign (Uchha). Highest manifestation of disciplined ambition, peak endurance, industrial leadership, and long-term triumph.',
    highlights: ['Exceptional executive and administrative ability', 'Cool, calculating crisis leadership', 'Culmination of karmic perseverance'],
    keyPlanetInfo: 'Rashi: Makara (Cardinal Earth)',
  },
  {
    id: 16,
    title: 'Effect of Mars in Aquarius',
    category: 'signs',
    categoryLabel: 'Zodiac Signs (1–12)',
    summary: 'Saturnian airy domain. Rebellious intellect, collective social revolutions, progressive technology, scientific experimentation, and community reform.',
    highlights: ['Pioneering futuristic and tech ventures', 'Fighting for humanitarian causes', 'Unconventional problem-solving methods'],
    keyPlanetInfo: 'Rashi: Kumbha (Fixed Air)',
  },
  {
    id: 17,
    title: 'Effect of Mars in Pisces',
    category: 'signs',
    categoryLabel: 'Zodiac Signs (1–12)',
    summary: 'Jupiterian oceanic realm. Spiritual warrior, psychic intuition, empathetic courage, artistic passion, and service for the underprivileged.',
    highlights: ['Spiritual sadhana & subconscious mastery', 'Sacrificing ego for transcendental ideals', 'Creative and healing applications of energy'],
    keyPlanetInfo: 'Rashi: Meena (Mutable Water)',
  },
  {
    id: 18,
    title: 'Effect of Mars in the 1st to 12th House',
    category: 'houses_remedies',
    categoryLabel: 'Houses & Remedies',
    summary: 'Systematic analysis of Mars in each Bhava: Kendras (1, 4, 7, 10), Trikonas (5, 9), Upachayas (3, 6, 10, 11), and Dusthanas (6, 8, 12).',
    highlights: ['Digbala in 10th House (Supreme career direction)', 'Ruchaka Mahapurusha Yoga configurations', 'Vedic Dristi (4th, 7th, and 8th special aspects)'],
    keyPlanetInfo: 'Bhava Scope: Houses 1 through 12',
  },
  {
    id: 19,
    title: 'Remedies & Strengthening Mars',
    category: 'houses_remedies',
    categoryLabel: 'Houses & Remedies',
    summary: 'Authentic Shastric upayas: Hanuman Chalisa, Sundarkand, Mangal Beej Mantra, Red Coral (Moonga) guidelines, copper donation, and physical disciplines.',
    highlights: ['Mantra: ॐ भौं भौमाय नमः (Om Bhaum Bhaumaya Namah)', 'Tuesday fasts & charity of red lentils (masoor dal)', 'Physical workouts & anger-transmutation techniques'],
    keyPlanetInfo: 'Remedial Gem: Natural Italian Red Coral (Moonga)',
  },
  {
    id: 20,
    title: 'Conclusion & Key Takeaways',
    category: 'houses_remedies',
    categoryLabel: 'Houses & Remedies',
    summary: 'Synthesizing chart analysis: D-9 Navamsha verification, planetary transit synergy, dasha timeline mastery, and transforming aggressive fury into noble purpose.',
    highlights: ['Integration of Rashi, Bhava, and Dasha rules', 'Ethical client consultation principles', 'Final masterclass synthesis & self-assessment'],
    keyPlanetInfo: 'Final Milestone: Professional Mastery',
  },
];

interface MarsTableOfContentsProps {
  onItemSelect?: (item: TocItem) => void;
  onEnrollClick?: () => void;
}

export const MarsTableOfContents: React.FC<MarsTableOfContentsProps> = ({
  onItemSelect,
  onEnrollClick,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const categories = [
    { id: 'all', label: 'All Topics', count: 20 },
    { id: 'foundations', label: 'Foundations (1–3)', count: 3 },
    { id: 'dignity', label: 'Dosha & Dignity (4–5)', count: 2 },
    { id: 'signs', label: 'All 12 Signs (6–17)', count: 12 },
    { id: 'houses_remedies', label: 'Houses & Remedies (18–20)', count: 3 },
  ];

  const filteredItems = useMemo(() => {
    return MARS_TOC_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toString() === searchQuery.trim();
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section 
      id="mars-table-of-contents" 
      className="py-12 sm:py-16 bg-[#faf7f2] text-[#2c1e16] border-b border-[#ebdccb] relative overflow-hidden"
    >
      {/* Decorative Mars Astrological Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#e27339]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-5 w-80 h-80 rounded-full bg-[#caa05b]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#e7dcce]">
          <div className="space-y-2.5 text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faecd4] border border-[#caa05b] text-[#8a400c] text-[11px] font-bold tracking-widest uppercase shadow-xs">
              <Flame className="w-3.5 h-3.5 text-[#b8500e] animate-pulse" />
              <span>MARS (MANGAL) COMPLETE CURRICULUM</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#1f1105] tracking-tight">
              Table of Contents
            </h2>

            <p className="text-sm sm:text-base text-[#5c4a3e] leading-relaxed">
              Explore the complete 20-part syllabus covering planetary nature, zodiac placements, 
              Mangal Dosha intricacies, house effects, and Vedic remedies.
            </p>
          </div>

          {/* Quick Overview Pill & Count */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="px-4 py-2 rounded-2xl bg-white border border-[#ebdccb] shadow-xs flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#faecd4] text-[#9c450f] font-bold text-sm flex items-center justify-center font-display">
                20
              </div>
              <div className="text-left text-xs leading-tight">
                <div className="font-bold text-[#241812]">Complete Chapters</div>
                <div className="text-[11px] text-[#735e50]">Comprehensive Vedic Scope</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="py-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#9c4d12] to-[#b35e19] text-white shadow-xs'
                      : 'bg-white text-[#5c4a3e] border border-[#ebdccb] hover:border-[#caa05b] hover:text-[#241812]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/25 text-white' : 'bg-[#faecd4] text-[#8a400c]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#a08f82] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search chapters (e.g. Leo, Dosha)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#ebdccb] bg-white text-xs text-[#241812] placeholder-[#a08f82] focus:outline-hidden focus:border-[#caa05b] focus:ring-1 focus:ring-[#caa05b] shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#735e50] hover:text-black"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* 2-Column Responsive Chapter List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {filteredItems.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl border transition-all duration-200 bg-white overflow-hidden shadow-xs ${
                  isExpanded
                    ? 'border-[#caa05b] shadow-md ring-1 ring-[#caa05b]/30'
                    : 'border-[#ebdccb] hover:border-[#caa05b]/60'
                }`}
              >
                {/* Chapter Card Header */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-4 sm:p-4.5 flex items-start justify-between gap-3.5 cursor-pointer select-none group"
                >
                  <div className="flex items-start gap-3.5">
                    {/* Chapter Number Badge */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 font-display text-xs sm:text-sm font-black transition-all ${
                        isExpanded
                          ? 'bg-gradient-to-br from-[#9c4d12] to-[#b35e19] text-white shadow-xs scale-105'
                          : 'bg-[#faecd4] text-[#8a400c] border border-[#caa05b]/40 group-hover:border-[#9c4d12]'
                      }`}
                    >
                      {item.id.toString().padStart(2, '0')}
                    </div>

                    {/* Chapter Title & Category Tag */}
                    <div className="text-left space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[#8a400c] uppercase tracking-wider bg-[#faecd4]/60 px-2 py-0.5 rounded-md">
                          {item.categoryLabel}
                        </span>
                      </div>
                      <h3
                        className={`text-xs sm:text-sm font-bold leading-snug transition-colors ${
                          isExpanded
                            ? 'text-[#9c450f]'
                            : 'text-[#1f1105] group-hover:text-[#9c450f]'
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Expand Chevron */}
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isExpanded
                        ? 'bg-[#faecd4] text-[#9c450f]'
                        : 'text-[#a08f82] group-hover:text-[#9c450f] group-hover:bg-[#faf7f2]'
                    }`}
                  >
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {/* Collapsible Content Area */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 sm:px-4.5 sm:pb-4.5 space-y-3.5 border-t border-[#f4e8db] bg-[#fbf8f4]/60">
                        {/* Summary */}
                        <p className="text-xs text-[#3d2412] leading-relaxed text-left font-medium">
                          {item.summary}
                        </p>

                        {/* Highlights List */}
                        <div className="space-y-1.5 text-left">
                          <div className="text-[11px] font-bold text-[#1f1105] uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#9c450f]" />
                            <span>Key Takeaways &amp; Shastric Rules:</span>
                          </div>
                          <div className="space-y-1 pl-1">
                            {item.highlights.map((h, hIdx) => (
                              <div
                                key={hIdx}
                                className="flex items-start gap-2 text-xs text-[#5c4a3e]"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#9c450f] shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Footer Info Strip inside Card */}
                        {item.keyPlanetInfo && (
                          <div className="pt-2 border-t border-[#ebdccb]/60 flex items-center justify-between text-[11px] text-[#783c0c] font-semibold">
                            <span className="flex items-center gap-1">
                              <Compass className="w-3 h-3 text-[#9c450f]" />
                              {item.keyPlanetInfo}
                            </span>
                            {onEnrollClick && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onEnrollClick();
                                }}
                                className="text-[#9c450f] hover:underline flex items-center gap-1 font-bold"
                              >
                                <span>Study Lesson</span>
                                <ArrowUpRight className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Empty Search Result */}
        {filteredItems.length === 0 && (
          <div className="p-10 rounded-2xl bg-white border border-[#ebdccb] text-center space-y-3">
            <BookOpen className="w-8 h-8 text-[#a08f82] mx-auto" />
            <div className="text-sm font-bold text-[#241812]">
              No chapters match "{searchQuery}"
            </div>
            <p className="text-xs text-[#735e50]">
              Try searching with keywords like "Aries", "Dosha", "Remedies", or reset your search filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-[#faecd4] text-[#8a400c] text-xs font-bold hover:bg-[#f6e1be] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner Callout with Quick Enrollment Option */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#faecd4]/60 border border-[#caa05b]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <div className="text-xs sm:text-sm font-bold text-[#1f1105] flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#9c450f]" />
              <span>Full Video Lessons + Downloadable Shastric Notes Available</span>
            </div>
            <p className="text-[11px] sm:text-xs text-[#5c4a3e]">
              Each of these 20 topics includes step-by-step kundli case studies, planetary transit timing, and authentic remedial mantras.
            </p>
          </div>

          {onEnrollClick && (
            <button
              onClick={onEnrollClick}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#9c4d12] to-[#b35e19] hover:from-[#ab5615] hover:to-[#783609] text-white text-xs font-bold tracking-wider uppercase whitespace-nowrap shadow-xs transition-all cursor-pointer"
            >
              Unlock Full Masterclass
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
