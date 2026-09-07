import React from 'react';
import { 
  Award, 
  Crown, 
  Tv, 
  CheckCircle2, 
  Infinity as InfinityIcon, 
  BookOpen, 
  Users, 
  HelpCircle 
} from 'lucide-react';

export const WhyLearnSection: React.FC = () => {
  const reasons = [
    {
      icon: <Award className="w-6 h-6 text-[#b47e2b]" />,
      title: '17 Years',
      subtitle: 'Experience',
    },
    {
      icon: <Crown className="w-6 h-6 text-[#b47e2b]" />,
      title: 'Celebrity',
      subtitle: 'Astrologer',
    },
    {
      icon: <Tv className="w-6 h-6 text-[#b47e2b]" />,
      title: 'TV Panelist',
      subtitle: '& Media Presence',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-[#b47e2b]" />,
      title: 'Certified',
      subtitle: 'Course',
    },
    {
      icon: <InfinityIcon className="w-6 h-6 text-[#b47e2b]" />,
      title: 'Lifetime',
      subtitle: 'Access',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#b47e2b]" />,
      title: 'Practical',
      subtitle: 'Learning',
    },
    {
      icon: <Users className="w-6 h-6 text-[#b47e2b]" />,
      title: 'Community',
      subtitle: 'Support',
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-[#b47e2b]" />,
      title: 'Live Doubt',
      subtitle: 'Sessions',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#faf7f2] text-[#2c1e16] border-b border-[#ebdccb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-block text-[11px] font-bold tracking-[0.2em] text-[#a2681c] uppercase">
            WHY CHOOSE THIS COURSE
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#241812] tracking-tight">
            Why Learn From Acharya Ganesh?
          </h2>

          <p className="text-sm sm:text-base text-[#5c4a3e] max-w-2xl leading-relaxed">
            Get authentic knowledge, practical training and lifetime support from India's most trusted astrologer.
          </p>
        </div>

        {/* 2 Columns: 8 Benefit Cards (left) + Astrological Photograph (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 8 Cards in 4x2 Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
              {reasons.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#e8d9c8] hover:border-[#dfcaa6] shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center justify-center min-h-[140px] group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f8f1e6] border border-[#ebdccb] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-[#241812] leading-tight">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-[#735e50] font-medium leading-tight mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Rich Atmospheric Astrolabe / Manuscripts Photo */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full rounded-3xl overflow-hidden border border-[#dfcaa6] shadow-xl bg-[#160f09] flex flex-col justify-end min-h-[300px] lg:min-h-[auto]">
              <img
                src="/src/assets/images/astrology_books_candle_1788776394108.jpg"
                alt="Ancient Vedic Astrology manuscripts and brass astrolabe"
                className="w-full h-full object-cover object-center absolute inset-0 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140c06]/85 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10 p-6 text-white space-y-1">
                <div className="text-[11px] tracking-widest text-[#e8b560] uppercase font-bold">
                  Parashara Tradition
                </div>
                <div className="font-cinzel text-lg sm:text-xl font-bold">
                  Time-Tested Vedic Shastras
                </div>
                <p className="text-xs text-[#d1c2b5] leading-relaxed">
                  Decoded into clear, modern, practical lessons without superstition or fear.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
