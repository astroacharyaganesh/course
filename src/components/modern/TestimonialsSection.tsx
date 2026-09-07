import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'beginners' | 'professionals'>('all');

  const testimonials = [
    {
      category: 'beginners',
      quote: 'I had always thought astrology was too complicated with all the Sanskrit jargon. Astrologer Hanish Bagga broke down the 12 houses and signs in 90 minutes so intuitively that I could understand my own chart immediately!',
      author: 'Rajesh Sharma',
      role: 'Software Architect, Bengaluru',
      rating: 5,
      highlight: 'Clear & No Sanskrit jargon'
    },
    {
      category: 'professionals',
      quote: 'As a psychologist, I was blown away by the archetypal depth of the 9 Grahas. There was zero fear-mongering or superstitious doom. It gave me profound psychological insights into family dynamics and personal behavior.',
      author: 'Dr. Sunita Mehra',
      role: 'Clinical Psychologist, New Delhi',
      rating: 5,
      highlight: 'Fear-free & Scientific logic'
    },
    {
      category: 'beginners',
      quote: 'The 5-step synthesis checklist alone is worth thousands of rupees. In other courses, teachers give bits and pieces, but here you get a complete cohesive system from day one. And it’s completely free!',
      author: 'Aarav Singhania',
      role: 'Financial Analyst, Mumbai',
      rating: 5,
      highlight: 'Actionable 5-step checklist'
    },
    {
      category: 'professionals',
      quote: 'The way Hanish ji explains planetary dignity (exaltation vs. debility) completely shifted my perspective. Debilitated planets are not curses; they are specific karmic work zones. Deeply grateful!',
      author: 'Priya Nambiar',
      role: 'Yoga Instructor & Seeker, Kochi',
      rating: 5,
      highlight: 'Spiritual perspective on dignity'
    }
  ];

  const filtered = filter === 'all' 
    ? testimonials 
    : testimonials.filter((t) => t.category === filter);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-[#faf7f2] to-[#f4eee4] text-[#2c1e16] relative border-b border-[#e7d8c5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fef3c7] border border-[#fde68a] text-[#92400e] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#c85a17]" />
            <span>Seeker Transformations</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#241812] tracking-tight">
            Loved by 15,400+ Seekers Worldwide
          </h2>

          <div className="flex items-center justify-center gap-2 pt-1 text-amber-600">
            <div className="flex text-lg text-amber-500">★★★★★</div>
            <span className="text-xs font-bold text-[#5c4a3e]">4.96 / 5 Average Rating</span>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-[#c85a17] to-[#d97706] text-white shadow-xs'
                  : 'bg-white text-[#5c4a3e] hover:text-[#241812] border border-[#e8dac7]'
              }`}
            >
              All Stories
            </button>
            <button
              onClick={() => setFilter('beginners')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === 'beginners'
                  ? 'bg-gradient-to-r from-[#c85a17] to-[#d97706] text-white shadow-xs'
                  : 'bg-white text-[#5c4a3e] hover:text-[#241812] border border-[#e8dac7]'
              }`}
            >
              Complete Beginners
            </button>
            <button
              onClick={() => setFilter('professionals')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === 'professionals'
                  ? 'bg-gradient-to-r from-[#c85a17] to-[#d97706] text-white shadow-xs'
                  : 'bg-white text-[#5c4a3e] hover:text-[#241812] border border-[#e8dac7]'
              }`}
            >
              Professionals & Seekers
            </button>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-[#dfcaa6] p-6 sm:p-7 space-y-4 hover:border-[#c85a17] hover:shadow-md transition-all relative flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500 text-xs">
                    {'★'.repeat(item.rating)}
                  </div>
                  <span className="text-[10px] text-[#8c3b12] bg-[#f8efe2] border border-[#dfcaa6] px-2 py-0.5 rounded-full font-bold">
                    {item.highlight}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#382a22] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#ebdccd]">
                <div>
                  <div className="font-bold text-sm text-[#241812]">
                    {item.author}
                  </div>
                  <div className="text-[11px] text-[#735e50]">
                    {item.role}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Seeker</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
