import React, { useState } from 'react';
import { Sparkles, Sun, Moon, Compass, Globe2, Shield, Eye, Flame, Award } from 'lucide-react';

export const InteractivePillars: React.FC<{ onEnrollClick: () => void }> = ({ onEnrollClick }) => {
  const [activeTab, setActiveTab] = useState<'grahas' | 'rashis' | 'bhavas'>('grahas');
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const grahas = [
    {
      name: 'Surya (The Sun)',
      sanskrit: 'सूर्य • Soul & Authority',
      archetype: 'The King / The Atman',
      meaning: 'Governs the immortal Soul, vital life energy, leadership, relationship with father, and your authentic calling in the world.',
      gem: 'Ruby',
      day: 'Sunday'
    },
    {
      name: 'Chandra (The Moon)',
      sanskrit: 'चन्द्र • Mind & Emotions',
      archetype: 'The Queen / The Manas',
      meaning: 'Governs emotional equilibrium, subconscious patterns, inner contentment, nurturing capacity, and motherly energy.',
      gem: 'Pearl',
      day: 'Monday'
    },
    {
      name: 'Mangal (Mars)',
      sanskrit: 'मंगल • Energy & Action',
      archetype: 'The Commander / Tejas',
      meaning: 'Governs raw vitality, courage to take risks, athletic discipline, property acquisition, and righteous protection.',
      gem: 'Red Coral',
      day: 'Tuesday'
    },
    {
      name: 'Budha (Mercury)',
      sanskrit: 'बुध • Intellect & Speech',
      archetype: 'The Prince / Buddhi',
      meaning: 'Governs analytical discrimination, commerce, rapid wit, persuasive articulation, mathematics, and youthful adaptability.',
      gem: 'Emerald',
      day: 'Wednesday'
    },
    {
      name: 'Guru (Jupiter)',
      sanskrit: 'गुरु • Grace & Dharma',
      archetype: 'The High Priest / Brihaspati',
      meaning: 'The great benefic. Bestows spiritual wisdom, philosophical breadth, higher fortune, teachers, and divine protection.',
      gem: 'Yellow Sapphire',
      day: 'Thursday'
    },
    {
      name: 'Shukra (Venus)',
      sanskrit: 'शुक्र • Love & Refinement',
      archetype: 'The Diplomat & Artist',
      meaning: 'Governs romantic devotion, artistic discernment, sensual joy, medicine/healing, wealth flow, and aesthetic balance.',
      gem: 'Diamond',
      day: 'Friday'
    },
    {
      name: 'Shani (Saturn)',
      sanskrit: 'शनि • Karma & Discipline',
      archetype: 'The Ascetic Judge',
      meaning: 'The lord of time and accountability. Teaches endurance, humble service, structural mastery, and karmic justice.',
      gem: 'Blue Sapphire',
      day: 'Saturday'
    },
    {
      name: 'Rahu & Ketu',
      sanskrit: 'राहु - केतु • The Karmic Axis',
      archetype: 'Shadow Eclipse Nodes',
      meaning: 'Rahu shows where your soul seeks future worldly breakthroughs; Ketu reveals mastered past-life gifts and paths to liberation.',
      gem: 'Hessonite / Cat\'s Eye',
      day: 'Eclipse Points'
    }
  ];

  const rashis = [
    {
      element: 'Agni (Fire)',
      signs: 'Aries (Mesha) • Leo (Simha) • Sagittarius (Dhanu)',
      essence: 'Initiative, inspiration, sovereign leadership, and the relentless drive to ignite truth.',
      nature: 'Dynamic, passionate, visionary'
    },
    {
      element: 'Prithvi (Earth)',
      signs: 'Taurus (Vrishabha) • Virgo (Kanya) • Capricorn (Makara)',
      essence: 'Material manifestation, tactile stability, craftsmanship, enduring wealth, and systematic patience.',
      nature: 'Pragmatic, grounded, building for legacy'
    },
    {
      element: 'Vayu (Air)',
      signs: 'Gemini (Mithuna) • Libra (Tula) • Aquarius (Kumbha)',
      essence: 'Conceptual circulation, social alliances, intellectual symmetry, and humanitarian reform.',
      nature: 'Mental, communicative, objective'
    },
    {
      element: 'Jala (Water)',
      signs: 'Cancer (Karka) • Scorpio (Vrishchika) • Pisces (Meena)',
      essence: 'Intuitive oceanic depth, emotional transmutation, psychic receptivity, and spiritual surrender.',
      nature: 'Empathic, mystical, healing'
    }
  ];

  const bhavas = [
    {
      house: '1st House (Lagna)',
      title: 'Tanu Bhava — Body, Soul & Emergence',
      desc: 'The eastern horizon at your birth. Represents physical constitution, vitality, personal outlook, and destiny blueprint.'
    },
    {
      house: '4th House (Sukha)',
      title: 'Matru Bhava — Home & Inner Peace',
      desc: 'The deepest point of the chart. Represents ancestral roots, mother, inner psychological sanctuary, and genuine happiness.'
    },
    {
      house: '7th House (Jaya)',
      title: 'Kalatra Bhava — Sacred Partnerships',
      desc: 'The setting horizon. Governs romantic marriage, business contracts, and the mirrors other people hold up to you.'
    },
    {
      house: '10th House (Karma)',
      title: 'Rajya Bhava — Public Purpose & Career',
      desc: 'The high noon zenith. Governs social recognition, profession, authority figures, and what legacy you leave behind.'
    }
  ];

  return (
    <section id="pillars" className="py-20 bg-[#fcf9f5] text-[#2c1e16] relative border-b border-[#e7d8c5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fef3c7] border border-[#fde68a] text-[#92400e] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#c85a17]" />
            <span>Core Foundation Architecture</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241812] tracking-tight">
            The 3 Building Blocks of Jyotish
          </h2>

          <p className="text-[#5c4a3e] text-sm sm:text-base leading-relaxed">
            Every birth chart in Vedic astrology is woven from three interconnected elements.
            Mastering these three turns a confusing grid into an open book of wisdom.
          </p>

          {/* Tab Switchers */}
          <div className="flex items-center justify-center gap-2 p-1.5 rounded-full bg-[#f0e6d8] border border-[#dfcaa6] max-w-md mx-auto mt-6 shadow-xs">
            <button
              onClick={() => {
                setActiveTab('grahas');
                setSelectedItem(0);
              }}
              className={`flex-1 py-2.5 px-4 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'grahas'
                  ? 'bg-gradient-to-r from-[#c85a17] to-[#d97706] text-white shadow-sm'
                  : 'text-[#6b584a] hover:text-[#241812]'
              }`}
            >
              1. The 9 Grahas
            </button>
            <button
              onClick={() => {
                setActiveTab('rashis');
                setSelectedItem(0);
              }}
              className={`flex-1 py-2.5 px-4 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'rashis'
                  ? 'bg-gradient-to-r from-[#c85a17] to-[#d97706] text-white shadow-sm'
                  : 'text-[#6b584a] hover:text-[#241812]'
              }`}
            >
              2. The 12 Rashis
            </button>
            <button
              onClick={() => {
                setActiveTab('bhavas');
                setSelectedItem(0);
              }}
              className={`flex-1 py-2.5 px-4 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'bhavas'
                  ? 'bg-gradient-to-r from-[#c85a17] to-[#d97706] text-white shadow-sm'
                  : 'text-[#6b584a] hover:text-[#241812]'
              }`}
            >
              3. The 12 Bhavas
            </button>
          </div>
        </div>

        {/* Tab 1: The 9 Grahas Content */}
        {activeTab === 'grahas' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left selector pills */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-2 gap-2.5">
              {grahas.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedItem(idx)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedItem === idx
                      ? 'bg-white border-[#c85a17] text-[#241812] shadow-md ring-1 ring-[#c85a17]'
                      : 'bg-white/70 border-[#e8dac7] text-[#5c4a3e] hover:bg-white hover:text-[#241812]'
                  }`}
                >
                  <div className="text-xs font-bold text-[#9c6508]">{item.sanskrit.split('•')[0]}</div>
                  <div className="text-xs font-semibold mt-0.5 truncate">{item.name}</div>
                </button>
              ))}
            </div>

            {/* Right Detailed Showcase */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-[#dfcaa6] p-6 sm:p-8 space-y-5 shadow-lg">
              <div className="flex items-center justify-between border-b border-[#ebdccd] pb-4">
                <div>
                  <span className="text-[11px] font-bold text-[#c85a17] tracking-wider uppercase">
                    Planetary Focus
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#241812] mt-1">
                    {grahas[selectedItem].name}
                  </h3>
                  <div className="text-xs text-[#7c3a18] font-serif italic mt-0.5">
                    {grahas[selectedItem].sanskrit}
                  </div>
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#f8efe2] border border-[#dfcaa6] flex items-center justify-center text-[#8c3b12]">
                  <Sun className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#6b584a]">
                  Cosmic Archetype:
                </div>
                <div className="text-base text-[#7c3a18] font-semibold">
                  {grahas[selectedItem].archetype}
                </div>
                <p className="text-sm text-[#5c4a3e] leading-relaxed pt-1">
                  {grahas[selectedItem].meaning}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#ebdccd] text-xs">
                <div>
                  <span className="text-[#6b584a] block">Associated Gem:</span>
                  <strong className="text-[#2c1e16]">{grahas[selectedItem].gem}</strong>
                </div>
                <div>
                  <span className="text-[#6b584a] block">Day / Time Window:</span>
                  <strong className="text-[#2c1e16]">{grahas[selectedItem].day}</strong>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onEnrollClick}
                  className="text-xs font-bold text-[#c85a17] hover:text-[#8c3b12] underline flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Learn all 9 planetary placements in the free masterclass →</span>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: The 12 Rashis Content */}
        {activeTab === 'rashis' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rashis.map((r, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-white border border-[#dfcaa6] p-6 space-y-3 hover:border-[#c85a17] hover:shadow-md transition-all shadow-xs"
              >
                <div className="flex items-center gap-2 text-[#c85a17] text-xs font-bold uppercase tracking-wider">
                  <Flame className="w-4 h-4" />
                  <span>{r.element} Element</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#241812]">
                  {r.signs}
                </h3>
                <p className="text-sm text-[#5c4a3e] leading-relaxed">
                  {r.essence}
                </p>
                <div className="pt-2 text-xs text-[#7c3a18] font-semibold border-t border-[#ebdccd]">
                  Archetypal Energy: {r.nature}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: The 12 Bhavas Content */}
        {activeTab === 'bhavas' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bhavas.map((b, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-white border border-[#dfcaa6] p-6 space-y-3 hover:border-[#c85a17] hover:shadow-md transition-all shadow-xs"
              >
                <div className="flex items-center gap-2 text-[#c85a17] text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>{b.house}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#241812]">
                  {b.title}
                </h3>
                <p className="text-sm text-[#5c4a3e] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onEnrollClick}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#c85a17] via-[#d97706] to-[#b45309] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer"
          >
            Decode Your Entire Chart in 90 Minutes (Free) →
          </button>
        </div>

      </div>
    </section>
  );
};
