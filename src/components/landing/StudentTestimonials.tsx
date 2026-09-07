import React from 'react';
import { Star, ChevronRight, User } from 'lucide-react';

export const StudentTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'IT Professional',
      initials: 'RS',
      text: 'This course changed my life. The teaching style is simple and easy to understand.',
      rating: 5,
    },
    {
      name: 'Neha Verma',
      role: 'Business Owner',
      initials: 'NV',
      text: "Acharya Ganesh's guidance is truly priceless. I feel more confident now.",
      rating: 5,
    },
    {
      name: 'Amit Kapoor',
      role: 'Student',
      initials: 'AK',
      text: 'The practical sessions and support from the team are amazing!',
      rating: 5,
    },
    {
      name: 'Priya Mehta',
      role: 'Teacher',
      initials: 'PM',
      text: 'Best astrology course I have ever taken. Highly recommended.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-[#faf7f2] text-[#2c1e16] border-b border-[#ebdccb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#241812] tracking-tight">
            What Our Students Say
          </h2>
          <p className="text-sm text-[#5c4a3e]">
            Genuine experiences from working professionals, scholars, and spiritual seekers.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#e8d9c8] hover:border-[#dfcaa6] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              {/* Top: Avatar & Name */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#dfa344] to-[#b47e2b] text-[#221305] font-bold text-xs flex items-center justify-center shadow-xs">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-[#241812] leading-tight">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-[#735e50] leading-tight">
                      {t.role}
                    </div>
                  </div>
                </div>

                <div className="text-[#a08f82] group-hover:text-[#b47e2b] transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-xs text-[#4a3b32] italic leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 text-[#e5a83b] pt-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
