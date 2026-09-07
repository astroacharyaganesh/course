import React from 'react';
import { 
  UserPlus, 
  BookOpen, 
  Compass, 
  Video, 
  FileEdit, 
  Award, 
  Briefcase, 
  ArrowRight 
} from 'lucide-react';
import { motion } from 'motion/react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const LearningJourney: React.FC = () => {
  const steps = [
    {
      num: 1,
      icon: <UserPlus className="w-5 h-5 text-[#b47e2b]" />,
      title: 'Enroll',
      subtitle: 'Get Started',
    },
    {
      num: 2,
      icon: <BookOpen className="w-5 h-5 text-[#b47e2b]" />,
      title: 'Learn Basics',
      subtitle: 'Build Foundation',
    },
    {
      num: 3,
      icon: <Compass className="w-5 h-5 text-[#b47e2b]" />,
      title: 'Advanced Astrology',
      subtitle: 'Deepen Knowledge',
    },
    {
      num: 4,
      icon: <Video className="w-5 h-5 text-[#b47e2b]" />,
      title: 'Live Sessions',
      subtitle: 'Interactive Learning',
    },
    {
      num: 5,
      icon: <FileEdit className="w-5 h-5 text-[#b47e2b]" />,
      title: 'Assignments',
      subtitle: 'Practice & Improve',
    },
    {
      num: 6,
      icon: <Award className="w-5 h-5 text-[#b47e2b]" />,
      title: 'Certification',
      subtitle: 'Get Certified',
    },
    {
      num: 7,
      icon: <Briefcase className="w-5 h-5 text-[#b47e2b]" />,
      title: 'Professional Astrologer',
      subtitle: 'Start Your Career',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#faf7f2] text-[#2c1e16] border-b border-[#ebdccb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={16} delay={0.05} className="text-center space-y-2 mb-14">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#241812] tracking-tight">
            Your Learning Journey
          </h2>
          <p className="text-sm sm:text-base text-[#5c4a3e] max-w-xl mx-auto">
            From Basics to Becoming a Professional Astrologer
          </p>
        </ScrollReveal>

        {/* Stepper Process Flow */}
        <div className="relative">
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-2 items-start">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="relative flex flex-col items-center text-center group cursor-default"
              >
                
                {/* Step Circle with Hover Glow */}
                <div className="relative mb-3.5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-[#e8d9c8] group-hover:border-[#caa05b] shadow-xs group-hover:shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                    {step.icon}
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gradient-to-r from-[#b47e2b] to-[#9c450f] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                    {step.num}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="font-bold text-xs sm:text-sm text-[#241812] leading-snug group-hover:text-[#9c450f] transition-colors">
                  {step.title}
                </div>
                <div className="text-[11px] text-[#735e50] font-medium leading-snug mt-0.5">
                  {step.subtitle}
                </div>

                {/* Arrow to Next Step (Desktop Only, except for last item) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 -right-3 text-[#b47e2b] translate-x-1/2 z-10 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
