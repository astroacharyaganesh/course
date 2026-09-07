import React from 'react';
import { 
  BookOpen, 
  ChevronRight, 
  ArrowRight, 
  Video, 
  Users, 
  FileText, 
  Download, 
  Award, 
  Infinity as InfinityIcon, 
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import laptopDeskImg from '../../assets/images/astrology_laptop_desk_1788776411706.jpg';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ParallaxTiltCard } from '../ui/ParallaxTiltCard';
import { MagneticButton } from '../ui/MagneticButton';

interface CourseModulesSectionProps {
  onViewFullSyllabus: () => void;
  onSelectModule: (moduleId: number) => void;
}

export const CourseModulesSection: React.FC<CourseModulesSectionProps> = ({
  onViewFullSyllabus,
  onSelectModule,
}) => {
  const modules = [
    {
      id: 1,
      num: 'Module 1',
      title: 'Introduction to Astrology',
      lessons: '12 Lessons',
      duration: '4 Hours',
      level: 'Beginner',
      description: 'Cosmic origin, astronomy of Kundli, North vs. South charts, and the Lagna rising blueprint.',
    },
    {
      id: 2,
      num: 'Module 2',
      title: 'Planets & Signs',
      lessons: '14 Lessons',
      duration: '5 Hours',
      level: 'Beginner',
      description: 'The 9 Navagrahas, 12 Rashis, four Vedic elements, exaltation, debilitation, and planetary friendships.',
    },
    {
      id: 3,
      num: 'Module 3',
      title: 'Houses & Aspects',
      lessons: '16 Lessons',
      duration: '6 Hours',
      level: 'Intermediate',
      description: 'The 12 Bhavas, Kendra and Trikona power centers, Dusthanas, and special Graha Drishti rules.',
    },
    {
      id: 4,
      num: 'Module 4',
      title: 'Dasha System',
      lessons: '12 Lessons',
      duration: '5 Hours',
      level: 'Intermediate',
      description: 'Mastering the 120-year Vimshottari Dasha system, Mahadasha, Antardasha, and event timing.',
    },
    {
      id: 5,
      num: 'Module 5',
      title: 'Transits (Gochar)',
      lessons: '14 Lessons',
      duration: '5 Hours',
      level: 'Intermediate',
      description: 'Saturn Sade Sati, Jupiter transit, Rahu-Ketu nodal shifts, and Ashtakavarga cross-referencing.',
    },
    {
      id: 6,
      num: 'Module 6',
      title: 'Yogas & Doshas',
      lessons: '18 Lessons',
      duration: '7 Hours',
      level: 'Advanced',
      description: 'Gajakesari, Pancha Mahapurusha, Raja Yogas, plus Manglik and Kaal Sarp Dosha remedies.',
    },
    {
      id: 7,
      num: 'Module 7',
      title: 'Chart Prediction',
      lessons: '15 Lessons',
      duration: '6 Hours',
      level: 'Advanced',
      description: 'Real kundli syntheses for career choices, wealth accumulation, marriage timing, and health vitality.',
    },
    {
      id: 8,
      num: 'Module 8',
      title: 'Practical Consultation',
      lessons: '10 Lessons',
      duration: '4 Hours',
      level: 'Advanced',
      description: 'Live client handling, ethical client counseling, software mastery, and building your astrological practice.',
    },
  ];

  const interactiveFeatures = [
    { icon: <Video className="w-4 h-4 text-[#b47e2b]" />, title: 'HD Video', subtitle: 'Lessons' },
    { icon: <Users className="w-4 h-4 text-[#b47e2b]" />, title: 'Live', subtitle: 'Classes' },
    { icon: <FileText className="w-4 h-4 text-[#b47e2b]" />, title: 'Practice', subtitle: 'Exercises' },
    { icon: <Download className="w-4 h-4 text-[#b47e2b]" />, title: 'Downloadable', subtitle: 'PDFs' },
    { icon: <CheckCircle2 className="w-4 h-4 text-[#b47e2b]" />, title: 'Assignments', subtitle: '& Quizzes' },
    { icon: <Award className="w-4 h-4 text-[#b47e2b]" />, title: 'Certification', subtitle: 'Verified' },
    { icon: <Users className="w-4 h-4 text-[#b47e2b]" />, title: 'Community', subtitle: 'Access' },
    { icon: <InfinityIcon className="w-4 h-4 text-[#b47e2b]" />, title: 'Lifetime', subtitle: 'Updates' },
  ];

  return (
    <section id="course-modules" className="py-16 sm:py-20 bg-[#faf7f2] text-[#2c1e16] border-b border-[#ebdccb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: 8 Course Modules Grid (8 of 12 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Header */}
            <ScrollReveal direction="up" distance={16} delay={0.05} className="space-y-2 text-left">
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#241812] tracking-tight">
                Course Modules
              </h2>
              <p className="text-sm sm:text-base text-[#5c4a3e]">
                Complete Vedic Astrology Course from Basics to Advanced
              </p>
            </ScrollReveal>

            {/* 2-Column Grid of Modules with Card Hover Lift */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {modules.map((mod, idx) => (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  whileHover={{ 
                    y: -4, 
                    borderColor: '#caa05b',
                    boxShadow: '0 10px 25px -5px rgba(202, 160, 91, 0.2)' 
                  }}
                  onClick={() => onSelectModule(mod.id)}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-[#e8d9c8] shadow-xs cursor-pointer group flex items-start justify-between gap-3 transition-colors duration-200"
                >
                  <div className="flex items-start gap-3.5">
                    {/* Module Icon Badge */}
                    <div className="w-10 h-10 rounded-xl bg-[#f8f1e6] border border-[#ebdccb] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#dfa344] group-hover:text-white transition-colors duration-300">
                      <BookOpen className="w-5 h-5 text-[#b47e2b] group-hover:text-white transition-colors" />
                    </div>

                    <div className="space-y-1 text-left">
                      <div className="font-bold text-xs sm:text-sm text-[#241812] group-hover:text-[#b47e2b] transition-colors leading-tight">
                        {mod.num}: {mod.title}
                      </div>
                      <div className="text-[11px] text-[#735e50] flex items-center gap-2">
                        <span>{mod.lessons}</span>
                        <span>•</span>
                        <span>{mod.duration}</span>
                        <span>•</span>
                        <span className="font-semibold text-[#8c3b12]">{mod.level}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-[#a08f82] group-hover:text-[#b47e2b] group-hover:translate-x-1 transition-all mt-1">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Button to View Full Course Syllabus */}
            <div className="pt-2 text-center sm:text-left">
              <MagneticButton
                onClick={onViewFullSyllabus}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#b47e2b] to-[#8c5e1b] hover:from-[#c88f34] hover:to-[#9e6c22] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md inline-flex items-center gap-2 border border-[#caa05b]"
              >
                <span>View Full Course Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>

          </div>

          {/* Right Column: Interactive Learning Experience Card (4 of 12 cols) */}
          <div className="lg:col-span-4">
            <ParallaxTiltCard maxTilt={4} glowColor="rgba(218, 165, 32, 0.25)">
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#e8d9c8] shadow-md space-y-6 text-left">
                
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-[#241812] leading-snug">
                    Interactive Learning Experience
                  </h3>
                  <p className="text-xs text-[#735e50] mt-1">
                    Everything you need to master Kundli interpretation with practical confidence.
                  </p>
                </div>

                {/* 8 Features in mini grid with hover lift */}
                <div className="grid grid-cols-2 gap-3">
                  {interactiveFeatures.map((feat, fIdx) => (
                    <motion.div
                      key={fIdx}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="p-2.5 rounded-xl bg-[#faf7f2] border border-[#f0e4d2] flex items-center gap-2.5 transition-colors hover:border-[#dfcaa6]"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#f8f1e6] flex items-center justify-center shrink-0">
                        {feat.icon}
                      </div>
                      <div className="text-left leading-none">
                        <div className="text-xs font-bold text-[#241812]">{feat.title}</div>
                        <div className="text-[10px] text-[#735e50] mt-0.5">{feat.subtitle}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Laptop Study Illustration */}
                <div className="relative rounded-2xl overflow-hidden border border-[#ebdccb] shadow-inner bg-[#1a1410] aspect-[4/3] flex flex-col justify-end group">
                  <img
                    src={laptopDeskImg}
                    alt="Learn Astrology Anywhere"
                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/images/astrology_laptop_desk_1788776411706.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <div className="relative z-10 p-4 text-right">
                    <div className="font-serif italic text-base sm:text-lg text-[#fcebc2] tracking-wide">
                      Learn Astrology <br />
                      <span className="font-bold text-white not-italic font-cinzel">Anywhere</span>
                    </div>
                  </div>
                </div>

              </div>
            </ParallaxTiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};
