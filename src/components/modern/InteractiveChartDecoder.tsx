import React, { useState } from 'react';
import { Sparkles, ArrowRight, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const InteractiveChartDecoder: React.FC<{ onEnrollClick: () => void }> = ({ onEnrollClick }) => {
  const [selectedPlanet, setSelectedPlanet] = useState<string>('Jupiter');
  const [selectedHouse, setSelectedHouse] = useState<string>('9th');

  const combinations: Record<string, { title: string; synthesis: string; karma: string }> = {
    'Jupiter-9th': {
      title: 'Guru in the Sacred 9th House (Dharma Bhava)',
      synthesis: 'Supreme spiritual fortune (Bhagya). The native is naturally inclined toward higher philosophy, righteous conduct, guidance by elevated gurus, and effortless prosperity through honorable means.',
      karma: 'Karmic legacy of spiritual study, protection of temples, and teaching sacred wisdom across generations.'
    },
    'Jupiter-1st': {
      title: 'Guru in the 1st House (Lagna Bhava)',
      synthesis: 'Hamsa Yoga tendency. Endows the native with natural dignity, broad-minded wisdom, golden aura, optimistic vitality, and respectful reception in all social circles.',
      karma: 'Soul arrives with protective blessings that mitigate hundreds of minor chart afflictions.'
    },
    'Jupiter-5th': {
      title: 'Guru in the 5th House (Purva Punya)',
      synthesis: 'Exceptional intelligence, intuitive creativity, virtuous children, and talent in advisory, mentorship, or financial guidance.',
      karma: 'Fulfillment of meritorious past-life deeds (Purva Punya) manifesting as spontaneous good judgment.'
    },
    'Jupiter-10th': {
      title: 'Guru in the 10th House (Karma Bhava)',
      synthesis: 'Ethical leadership, advisory roles, jurisprudence, executive mentorship, and public honor earned through moral integrity.',
      karma: 'Called to lead institutions with compassionate truth rather than brute authority.'
    },
    'Sun-1st': {
      title: 'Surya in the 1st House (Lagna Bhava)',
      synthesis: 'Magnetic presence, courageous independence, natural royal demeanor, robust stamina, and an unmistakable aura of command.',
      karma: 'Learning to balance healthy confidence without burning surrounding relationships with egoic heat.'
    },
    'Sun-10th': {
      title: 'Surya in the 10th House (Digbala Peak)',
      synthesis: 'Directional Strength (Digbala). Unstoppable administrative power, high government connections, fame, and decisive executive capability.',
      karma: 'Destined to bear heavy public responsibilities and uplift family lineage.'
    },
    'Sun-9th': {
      title: 'Surya in the 9th House (Dharma Bhava)',
      synthesis: 'High moral code, deep respect for lineage, philosophical pilgrimage, and strong ideals inherited from paternal ancestors.',
      karma: 'Illumination of righteous principles and spreading knowledge of truth.'
    },
    'Sun-5th': {
      title: 'Surya in the 5th House (Purva Punya)',
      synthesis: 'Sharp intellect, interest in political philosophy, creative authority, and strong pride in one’s creative brainchildren.',
      karma: 'Cultivating humility while guiding disciples or progeny.'
    },
    'Saturn-10th': {
      title: 'Shani in the 10th House (Karma Bhava)',
      synthesis: 'Slow, unshakeable rise to prominence through perseverance. Unmatched work ethic, mastery of systems, and late-life enduring reputation.',
      karma: 'Testing through discipline early in career, followed by indisputable mastery.'
    },
    'Saturn-1st': {
      title: 'Shani in the 1st House (Lagna Bhava)',
      synthesis: 'Sasha Yoga potential in Libra/Capricorn/Aquarius. Serious, reflective demeanor, profound maturity from young age, and immense endurance.',
      karma: 'Soul is trained in humility and patience, forging an indomitable character.'
    },
    'Venus-4th': {
      title: 'Shukra in the 4th House (Digbala Peak)',
      synthesis: 'Directional Strength (Digbala). Elegant home, peaceful vehicles, artistic surroundings, heartfelt generosity, and deep maternal devotion.',
      karma: 'Manifesting aesthetic harmony and bringing peace to one\'s domestic sanctuary.'
    },
    'Venus-1st': {
      title: 'Shukra in the 1st House (Lagna Bhava)',
      synthesis: 'Malavya Yoga potential. Charming persona, photogenic appeal, diplomatic grace, and spontaneous social attraction.',
      karma: 'Bringing sweetness, reconciliation, and artistic refinement into a chaotic world.'
    }
  };

  const key = `${selectedPlanet}-${selectedHouse}`;
  const currentResult = combinations[key] || {
    title: `${selectedPlanet} in the ${selectedHouse} House`,
    synthesis: `When ${selectedPlanet} occupies the ${selectedHouse} House, its planetary agenda interacts directly with this arena of human life, creating specific karmic and psychological patterns explained in the masterclass.`,
    karma: 'Decode this exact placement along with sign dignities and aspects in the 90-minute course.'
  };

  return (
    <section id="decoder" className="py-20 bg-gradient-to-b from-[#f4eee4] via-[#f7f2ea] to-[#faf7f2] text-[#2c1e16] relative border-b border-[#e7d8c5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fef3c7] border border-[#fde68a] text-[#92400e] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#c85a17]" />
            <span>Interactive Learning Lab</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#241812] tracking-tight">
            Try the Parashara Synthesis Formula
          </h2>

          <p className="text-[#5c4a3e] text-sm sm:text-base">
            See how a Planet and a House combine to reveal deep karmic tendencies. Select a combination below:
          </p>
        </div>

        {/* Decoder Interactive Container */}
        <div className="rounded-3xl bg-white border border-[#dfcaa6] p-6 sm:p-10 shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Selectors */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Select Planet */}
              <div>
                <label className="block text-xs font-bold text-[#8c3b12] uppercase tracking-wider mb-2">
                  1. Select a Planet (Graha):
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Jupiter', 'Sun', 'Saturn', 'Venus'].map((planet) => (
                    <button
                      key={planet}
                      onClick={() => setSelectedPlanet(planet)}
                      className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        selectedPlanet === planet
                          ? 'bg-gradient-to-r from-[#c85a17] to-[#d97706] text-white border-transparent shadow-sm'
                          : 'bg-[#faf7f2] text-[#4a3b32] border-[#e8dac7] hover:border-[#dfcaa6]'
                      }`}
                    >
                      {planet}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select House */}
              <div>
                <label className="block text-xs font-bold text-[#8c3b12] uppercase tracking-wider mb-2">
                  2. Select a House (Bhava):
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['1st', '5th', '9th', '10th'].map((house) => (
                    <button
                      key={house}
                      onClick={() => setSelectedHouse(house)}
                      className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        selectedHouse === house
                          ? 'bg-gradient-to-r from-[#c85a17] to-[#d97706] text-white border-transparent shadow-sm'
                          : 'bg-[#faf7f2] text-[#4a3b32] border-[#e8dac7] hover:border-[#dfcaa6]'
                      }`}
                    >
                      {house} House
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-[11px] text-[#735e50] italic">
                *In the complete course, you learn all 9 planets across all 12 houses and 12 signs.
              </div>

            </div>

            {/* Right Display Outcome */}
            <div className="lg:col-span-7 rounded-2xl bg-[#faf7f2] border border-[#dfcaa6] p-6 sm:p-8 space-y-4">
              
              <div className="flex items-center justify-between border-b border-[#ebdccd] pb-3">
                <span className="text-[11px] font-bold tracking-widest text-[#8c3b12] uppercase font-sans-ui">
                  Shastric Synthesis Preview
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#e6f4ea] border border-[#a8dab5] text-[#137333] text-[10px] font-bold">
                  Classical Logic
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#241812]">
                {currentResult.title}
              </h3>

              <div className="space-y-1.5">
                <div className="text-xs font-bold text-[#8c3b12] uppercase tracking-wider">
                  Psychological & Real-World Effect:
                </div>
                <p className="text-sm text-[#4a3b32] leading-relaxed">
                  {currentResult.synthesis}
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-[#ebdccd]">
                <div className="text-xs font-bold text-[#8c3b12] uppercase tracking-wider">
                  Dharmic / Karmic Blueprint:
                </div>
                <p className="text-xs sm:text-sm text-[#5c4a3e] leading-relaxed">
                  {currentResult.karma}
                </p>
              </div>

              {/* Callout to Course */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white rounded-xl p-4 border border-[#e8dac7]">
                <div className="text-xs text-[#5c4a3e]">
                  Ready to read all 144 planetary combinations?
                </div>
                <button
                  onClick={onEnrollClick}
                  className="w-full sm:w-auto px-5 py-2 rounded-full bg-gradient-to-r from-[#c85a17] to-[#d97706] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:scale-105 transition-transform cursor-pointer"
                >
                  Join Free Masterclass →
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
