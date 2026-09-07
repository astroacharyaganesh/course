import React from 'react';
import { Award, Users, Video, Star, Infinity } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export const MetricsStrip: React.FC = () => {
  const metrics = [
    {
      icon: <Award className="w-5 h-5 text-[#b47e2b]" />,
      content: <AnimatedCounter value={17} suffix="+" />,
      label: 'Years of Experience',
    },
    {
      icon: <Users className="w-5 h-5 text-[#b47e2b]" />,
      content: <AnimatedCounter value={50000} suffix="+" />,
      label: 'Happy Students',
    },
    {
      icon: <Video className="w-5 h-5 text-[#b47e2b]" />,
      content: <AnimatedCounter value={100} suffix="+" />,
      label: 'Video Lessons',
    },
    {
      icon: <Star className="w-5 h-5 text-[#b47e2b] fill-current" />,
      content: <AnimatedCounter value={4.9} suffix="/5" decimals={1} />,
      label: 'Google Rating',
    },
    {
      icon: <Infinity className="w-5 h-5 text-[#b47e2b]" />,
      content: <span>Lifetime</span>,
      label: 'Access to Material',
    },
  ];

  return (
    <section className="bg-[#faf7f2] border-b border-[#e7dcce] py-8 text-[#2c1e16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ 
                y: -5, 
                borderColor: '#caa05b',
                boxShadow: '0 10px 25px -5px rgba(202, 160, 91, 0.2)'
              }}
              className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#ebdccb] shadow-xs cursor-default transition-colors duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-[#f8f1e6] border border-[#ebdccb] flex items-center justify-center shrink-0 shadow-xs">
                {item.icon}
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-[#241812] leading-tight">
                  {item.content}
                </div>
                <div className="text-[11px] sm:text-xs text-[#735e50] font-medium leading-tight">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
