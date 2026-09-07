import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const StudentTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'IT Professional, Bengaluru',
      initials: 'RS',
      text: 'This course changed my life. The teaching style is simple and easy to understand. I can now analyze real charts with total clarity.',
      rating: 5,
    },
    {
      name: 'Neha Verma',
      role: 'Business Owner, Delhi',
      initials: 'NV',
      text: "Acharya Ganesh's guidance is truly priceless. The dasha timing techniques are remarkably accurate and practical.",
      rating: 5,
    },
    {
      name: 'Amit Kapoor',
      role: 'Vedic Enthusiast, Mumbai',
      initials: 'AK',
      text: 'The practical chart breakdown sessions and personal doubt clearing from Acharya ji make this course unmatched in India.',
      rating: 5,
    },
    {
      name: 'Priya Mehta',
      role: 'Educator, Jaipur',
      initials: 'PM',
      text: 'Best astrology course I have ever taken. Everything is taught with deep Shastric depth yet explained in relatable language.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-[#faf7f2] text-[#2c1e16] border-b border-[#ebdccb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" distance={16} delay={0.05} className="space-y-2 text-left">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#241812] tracking-tight">
            What Our Students Say
          </h2>
          <p className="text-sm text-[#5c4a3e]">
            Genuine experiences from working professionals, scholars, and spiritual seekers.
          </p>
        </ScrollReveal>

        {/* 4 Cards Grid with Staggered Hover Lift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ 
                y: -7, 
                borderColor: '#caa05b',
                boxShadow: '0 14px 30px -8px rgba(202, 160, 91, 0.25)' 
              }}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#e8d9c8] shadow-xs cursor-default flex flex-col justify-between space-y-4 group transition-colors duration-200"
            >
              {/* Top: Avatar & Name */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#dfa344] to-[#b47e2b] text-[#221305] font-bold text-xs flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-xs sm:text-sm text-[#241812] leading-tight">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-[#735e50] leading-tight mt-0.5">
                      {t.role}
                    </div>
                  </div>
                </div>
                <Quote className="w-4 h-4 text-[#dfa344]/50 group-hover:text-[#dfa344] transition-colors" />
              </div>

              {/* Middle: Review Quote */}
              <p className="text-xs text-[#5c4a3e] leading-relaxed italic text-left">
                "{t.text}"
              </p>

              {/* Bottom: 5 Stars */}
              <div className="flex items-center gap-1 pt-1 border-t border-[#f4ece1]">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-[#b47e2b] fill-[#b47e2b]" />
                ))}
                <span className="text-[10px] font-bold text-[#735e50] ml-1">Verified Student</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
