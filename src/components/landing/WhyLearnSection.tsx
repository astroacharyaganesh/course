import React from 'react';
import { 
  Award, 
  Crown, 
  Tv, 
  CheckCircle2, 
  Infinity as InfinityIcon, 
  BookOpen, 
  Users, 
  HelpCircle,
  ArrowRight,
  MessageSquare,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import acharyaImg from '../../assets/images/acharya_ganesh_portrait_1788771630566.jpg';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ParallaxTiltCard } from '../ui/ParallaxTiltCard';
import { MagneticButton } from '../ui/MagneticButton';

interface WhyLearnSectionProps {
  onBookConsultationClick?: () => void;
  onTalkToTeamClick?: () => void;
}

export const WhyLearnSection: React.FC<WhyLearnSectionProps> = ({
  onBookConsultationClick,
  onTalkToTeamClick,
}) => {
  const reasons = [
    {
      icon: <Award className="w-5 h-5 text-[#b47e2b]" />,
      title: '17 Years',
      subtitle: 'Experience',
    },
    {
      icon: <Crown className="w-5 h-5 text-[#b47e2b]" />,
      title: 'Celebrity',
      subtitle: 'Astrologer',
    },
    {
      icon: <Tv className="w-5 h-5 text-[#b47e2b]" />,
      title: 'TV Panelist',
      subtitle: '& Media Presence',
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#b47e2b]" />,
      title: 'Certified',
      subtitle: 'Course',
    },
    {
      icon: <InfinityIcon className="w-5 h-5 text-[#b47e2b]" />,
      title: 'Lifetime',
      subtitle: 'Access',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[#b47e2b]" />,
      title: 'Practical',
      subtitle: 'Learning',
    },
    {
      icon: <Users className="w-5 h-5 text-[#b47e2b]" />,
      title: 'Community',
      subtitle: 'Support',
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-[#b47e2b]" />,
      title: 'Live Doubt',
      subtitle: 'Sessions',
    },
  ];

  return (
    <section id="why-learn" className="py-14 sm:py-20 bg-[#faf7f2] text-[#2c1e16] border-b border-[#ebdccb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" distance={16} delay={0.05} className="space-y-3 mb-10 sm:mb-12 text-left">
          <div className="inline-block text-[11px] font-bold tracking-[0.2em] text-[#a2681c] uppercase">
            WHY CHOOSE THIS COURSE
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#241812] tracking-tight">
            Why Learn From Acharya Ganesh?
          </h2>

          <p className="text-sm sm:text-base text-[#5c4a3e] max-w-2xl leading-relaxed">
            Get authentic knowledge, practical training and lifetime support from India's most trusted astrologer.
          </p>
        </ScrollReveal>

        {/* 2 Columns: 8 Benefit Cards (left 7 cols) + Need Personal Guidance CTA Card (right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: 8 Cards in 4x2 Grid with Staggered Hover Lift */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
              {reasons.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.45 }}
                  whileHover={{ 
                    y: -6, 
                    borderColor: '#caa05b',
                    boxShadow: '0 12px 24px -6px rgba(202, 160, 91, 0.22)' 
                  }}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-[#e8d9c8] shadow-xs cursor-default text-center flex flex-col items-center justify-center min-h-[135px] sm:min-h-[145px] group transition-colors duration-200"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#f8f1e6] border border-[#ebdccb] flex items-center justify-center mb-2.5 group-hover:scale-110 group-hover:bg-[#f3e5ce] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-[#241812] leading-tight">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-[#735e50] font-medium leading-tight mt-0.5">
                    {item.subtitle}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: "Need Personal Guidance Before Joining?" CTA Card */}
          <div className="lg:col-span-5 flex">
            <ParallaxTiltCard maxTilt={4} glowColor="rgba(218, 165, 32, 0.35)" className="w-full h-full">
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#fbf4e6] via-[#f6e4c7] to-[#ebd3ad] border-2 border-[#caa05b] p-6 sm:p-7 text-[#221206] shadow-xl overflow-hidden flex flex-col justify-between text-left">
                
                {/* Decorative Subtle Celestial Ring in Background */}
                <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full border border-[#caa05b]/30 bg-radial from-white/30 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/40 rounded-full blur-2xl pointer-events-none aurora-glow" />

                <div className="relative z-10 space-y-4">
                  {/* Top Avatar & Trust Pill */}
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#caa05b] shadow-md bg-[#241407] shrink-0">
                      <img
                        src={acharyaImg}
                        alt="Acharya Ganesh"
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/images/acharya_ganesh_portrait_1788771630566.jpg';
                        }}
                      />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#faecd4] border border-[#caa05b] text-[#8a400c] text-[10px] font-bold tracking-wider uppercase">
                        <Sparkles className="w-3 h-3 text-[#9c450f]" />
                        <span>Direct Mentorship</span>
                      </div>
                      <div className="text-xs font-bold text-[#1f1105] mt-0.5">
                        Acharya Ganesh
                      </div>
                      <div className="text-[10px] text-[#735e50]">
                        Celebrity Vedic Astrologer
                      </div>
                    </div>
                  </div>

                  {/* Headline */}
                  <div className="space-y-1">
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1f1105] tracking-tight leading-snug">
                      Need Personal Guidance <br />
                      <span className="text-[#9c450f]">Before Joining?</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3d2412] leading-relaxed font-medium">
                      Not sure which course or path is right for you? Book a one-on-one consultation with Acharya Ganesh for personalized guidance.
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-[#3d2412] bg-white/60 px-2.5 py-1.5 rounded-xl border border-[#ebdccb]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#9c450f] shrink-0" />
                      <span>100% Confidential</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-[#3d2412] bg-white/60 px-2.5 py-1.5 rounded-xl border border-[#ebdccb]">
                      <Sparkles className="w-3.5 h-3.5 text-[#9c450f] shrink-0" />
                      <span>Custom Roadmap</span>
                    </div>
                  </div>
                </div>

                {/* CTA Action Buttons */}
                <div className="relative z-10 pt-5 mt-4 border-t border-[#caa05b]/40 flex flex-wrap items-center gap-3">
                  <MagneticButton
                    onClick={onBookConsultationClick}
                    className="flex-1 min-w-[140px] px-5 py-3 rounded-full bg-gradient-to-r from-[#9c4d12] via-[#b35e19] to-[#8a400c] hover:from-[#ab5615] hover:to-[#783609] text-[#fff8ee] font-bold text-xs tracking-wider uppercase transition-all shadow-md border border-[#caa05b] justify-center"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </MagneticButton>

                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onTalkToTeamClick}
                    className="px-4 py-3 rounded-full bg-[#faecd4] hover:bg-[#f6e1be] text-[#1f1105] border border-[#caa05b] text-xs font-bold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#9c450f]" />
                    <span>Talk to Our Team</span>
                  </motion.button>
                </div>

              </div>
            </ParallaxTiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};
