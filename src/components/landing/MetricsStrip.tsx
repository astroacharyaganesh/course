import React from 'react';
import { Award, Users, Video, Star, Infinity } from 'lucide-react';

export const MetricsStrip: React.FC = () => {
  const metrics = [
    {
      icon: <Award className="w-5 h-5 text-[#b47e2b]" />,
      value: '17+',
      label: 'Years of Experience',
    },
    {
      icon: <Users className="w-5 h-5 text-[#b47e2b]" />,
      value: '50,000+',
      label: 'Happy Students',
    },
    {
      icon: <Video className="w-5 h-5 text-[#b47e2b]" />,
      value: '100+',
      label: 'Video Lessons',
    },
    {
      icon: <Star className="w-5 h-5 text-[#b47e2b] fill-current" />,
      value: '4.9/5',
      label: 'Google Rating',
    },
    {
      icon: <Infinity className="w-5 h-5 text-[#b47e2b]" />,
      value: 'Lifetime',
      label: 'Access',
    },
  ];

  return (
    <section className="bg-[#faf7f2] border-b border-[#e7dcce] py-8 text-[#2c1e16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl bg-white border border-[#ebdccb] shadow-xs hover:border-[#dfcaa6] transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-[#f8f1e6] border border-[#ebdccb] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-[#241812] leading-tight">
                  {item.value}
                </div>
                <div className="text-[11px] sm:text-xs text-[#735e50] font-medium leading-tight">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
