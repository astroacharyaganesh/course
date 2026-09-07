import React from 'react';
import { 
  GraduationCap, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  Award,
  BookOpenCheck
} from 'lucide-react';

export const TrustCredibilityStrip: React.FC = () => {
  const credibilityItems = [
    {
      id: 'cred-1',
      icon: GraduationCap,
      title: 'Guided by Acharya Ganesh',
      subtitle: '15+ Years Lineage Wisdom',
      description: 'Learn directly from one of India\'s most trusted Vedic scholars and astrological mentors.'
    },
    {
      id: 'cred-2',
      icon: Layers,
      title: 'Structured Curriculum',
      subtitle: '6 Phases • 41 Lessons',
      description: 'Systematic pedagogical progression from foundational cosmic principles to predictive chart synthesis.'
    },
    {
      id: 'cred-3',
      icon: CheckCircle2,
      title: 'Practical Learning',
      subtitle: 'Real Kundali Case Studies',
      description: 'Deconstruct real birth charts, analyze timing of life events, and practice hands-on remedies.'
    },
    {
      id: 'cred-4',
      icon: TrendingUp,
      title: 'Beginner to Advanced Mastery',
      subtitle: 'Zero Sanskrit Required',
      description: 'Designed for seekers starting from scratch up to practicing astrologers seeking shastric depth.'
    }
  ];

  return (
    <section 
      id="credibility-strip"
      className="relative py-14 bg-[#090e17] border-y border-[#d4a34b]/20 overflow-hidden"
    >
      {/* Subtle mandala background accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#d4a34b_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle Top Assurance Label */}
        <div className="text-center mb-9">
          <p className="inline-block text-[11px] font-semibold tracking-[0.25em] text-[#d4a34b] uppercase font-sans-ui px-4 py-1 rounded-full bg-[#c59b27]/10 border border-[#d4a34b]/20">
            Authentic Shastra Foundation • Modern Clarity
          </p>
        </div>

        {/* 4 Credibility Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {credibilityItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative p-6 rounded-2xl bg-[#0e1626]/80 border border-slate-800/80 hover:border-[#d4a34b]/50 hover:bg-[#121c30] transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#d4a34b]/5 flex flex-col items-start"
              >
                {/* Gold accent line on hover */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#d4a34b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 rounded-xl bg-[#c59b27]/10 border border-[#d4a34b]/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#c59b27]/20 transition-all">
                  <Icon className="w-6 h-6 text-[#f59e0b]" />
                </div>

                <div className="text-[11px] font-semibold tracking-wider uppercase text-[#d4a34b] mb-1 font-sans-ui">
                  {item.subtitle}
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Confidence Assurance Strip */}
        <div className="mt-10 pt-8 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <BookOpenCheck className="w-4 h-4 text-[#f59e0b]" />
            <span>Curriculum Grounded in <strong>Brihat Parashara Hora Shastra</strong> & <strong>Jaimini Sutras</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#f59e0b]" />
            <span>Verified Certificate of Completion Recognized by <strong>Acharya Ganesh Sansthan</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};
