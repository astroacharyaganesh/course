import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Compass, 
  Users, 
  Star,
  Play,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface HeroSectionProps {
  onExploreCourse: () => void;
  onViewCurriculum: () => void;
  onWatchPreview: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCourse,
  onViewCurriculum,
  onWatchPreview,
}) => {
  return (
    <section 
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden spiritual-gradient-bg"
    >
      {/* Background Sacred Geometry & Radial Aura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central soft warm golden glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#d97706]/10 via-[#c59b27]/8 to-transparent rounded-full blur-3xl" />
        
        {/* Subtle SVG Sacred Mandala in the background */}
        <svg
          className="absolute -top-32 right-[-10%] w-[900px] h-[900px] text-[#c59b27]/5 animate-[spin_160s_linear_infinite]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.35"
        >
          <circle cx="100" cy="100" r="90" strokeDasharray="2, 3" />
          <circle cx="100" cy="100" r="75" />
          <circle cx="100" cy="100" r="60" strokeDasharray="4, 4" />
          <circle cx="100" cy="100" r="45" />
          <circle cx="100" cy="100" r="30" />
          <polygon points="100,10 190,100 100,190 10,100" />
          <polygon points="100,25 175,100 100,175 25,100" />
          <polygon points="163,36 163,163 36,163 36,36" />
          {/* 12 zodiac spokes */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x2 = 100 + 88 * Math.cos(angle);
            const y2 = 100 + 88 * Math.sin(angle);
            return <line key={i} x1="100" y1="100" x2={x2} y2={y2} />;
          })}
        </svg>

        {/* Fine ornamental decorative line pattern */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4a34b]/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Course Headline, Transformation Statement, Benefits, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Small Eyebrow Label */}
            <div 
              id="hero-eyebrow"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c59b27]/15 border border-[#d4a34b]/40 text-[#fcebc2] text-xs font-semibold tracking-[0.22em] uppercase font-sans-ui mb-6 backdrop-blur-sm shadow-sm shadow-[#c59b27]/10"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>LEARN • PRACTICE • TRANSFORM</span>
            </div>

            {/* Main Headline */}
            <h1 
              id="hero-headline"
              className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.14] tracking-tight text-white mb-6"
            >
              Unlock the Wisdom of{' '}
              <span className="block mt-1 gold-gradient-text">
                Vedic Astrology & Cosmic Blueprint
              </span>
            </h1>

            {/* Supporting Statement: Personal Transformation & Value */}
            <p 
              id="hero-supporting-statement"
              className="font-spiritual text-xl sm:text-2xl text-[#cbd5e1] leading-relaxed mb-8 max-w-2xl"
            >
              Move beyond superstition and fragmented horoscopes. Master the profound 
              shastric science of Jyotish to read any birth chart with reverence, discover 
              your soul’s karmic architecture, and bring conscious clarity to every life decision.
            </p>

            {/* 3–4 Compact Benefit Indicators */}
            <div 
              id="hero-benefit-indicators"
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full mb-9"
            >
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xs">
                <div className="w-8 h-8 rounded-lg bg-[#c59b27]/15 flex items-center justify-center shrink-0 border border-[#d4a34b]/30">
                  <Compass className="w-4 h-4 text-[#f59e0b]" />
                </div>
                <div className="text-xs font-medium text-slate-200 leading-tight">
                  Structured Learning
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xs">
                <div className="w-8 h-8 rounded-lg bg-[#c59b27]/15 flex items-center justify-center shrink-0 border border-[#d4a34b]/30">
                  <Award className="w-4 h-4 text-[#f59e0b]" />
                </div>
                <div className="text-xs font-medium text-slate-200 leading-tight">
                  Expert Guidance
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xs">
                <div className="w-8 h-8 rounded-lg bg-[#c59b27]/15 flex items-center justify-center shrink-0 border border-[#d4a34b]/30">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
                </div>
                <div className="text-xs font-medium text-slate-200 leading-tight">
                  Practical Knowledge
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xs">
                <div className="w-8 h-8 rounded-lg bg-[#c59b27]/15 flex items-center justify-center shrink-0 border border-[#d4a34b]/30">
                  <Clock className="w-4 h-4 text-[#f59e0b]" />
                </div>
                <div className="text-xs font-medium text-slate-200 leading-tight">
                  Learn at Your Pace
                </div>
              </div>
            </div>

            {/* CTAs: Primary (Explore Course) & Secondary (View Curriculum) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-9">
              {/* Primary CTA */}
              <button
                id="hero-primary-cta"
                onClick={onExploreCourse}
                className="relative group overflow-hidden px-8 py-4 rounded-xl font-bold text-slate-950 text-base tracking-wide bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] hover:shadow-xl hover:shadow-[#f59e0b]/25 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Explore Course</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              </button>

              {/* Secondary CTA */}
              <button
                id="hero-secondary-cta"
                onClick={onViewCurriculum}
                className="px-6 py-4 rounded-xl font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-[#d4a34b]/50 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Curriculum ↓</span>
              </button>
            </div>

            {/* Trust Metrics Pill */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b]" />
                  ))}
                </div>
                <span className="font-semibold text-slate-200">4.98/5</span>
                <span>(1,820+ verified reviews)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span className="font-semibold text-slate-200">14,200+ Seekers</span>
                <span>Guided Globally</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span className="text-slate-300">100% Shastra Authenticity</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Premium Portrait Area with Spiritual Aura Background */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Background Spiritual Aura & Concentric Sacred Circles */}
            <div className="relative w-full max-w-[420px]">
              
              {/* Radial glow background */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#c59b27]/25 via-[#f59e0b]/15 to-transparent blur-2xl -z-10" />
              
              {/* Outer Decorative Mandala Frame Ring */}
              <div className="relative rounded-2xl p-[2px] bg-gradient-to-b from-[#d4a34b] via-[#d4a34b]/30 to-transparent shadow-2xl shadow-black/60">
                <div className="relative rounded-[14px] overflow-hidden bg-[#0c121e]">
                  
                  {/* Portrait Image of Acharya Ganesh */}
                  <div className="relative aspect-[3/4] overflow-hidden group">
                    <img
                      src="/src/assets/images/acharya_ganesh_portrait_1788771630566.jpg"
                      alt="Acharya Ganesh - Renowned Vedic Astrologer & Spiritual Mentor"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay for Vignette and Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-black/20" />
                    
                    {/* Subtle Sacred Geometry Motif in Corner */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-[#fcebc2]/20 flex items-center justify-center bg-black/40 backdrop-blur-xs">
                      <span className="font-display text-sm text-[#fcebc2]">ॐ</span>
                    </div>

                    {/* Interactive Preview Play Button Overlay */}
                    <button
                      id="hero-preview-play-btn"
                      onClick={onWatchPreview}
                      className="absolute bottom-20 right-5 z-20 group/play flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#0c121e]/90 border border-[#d4a34b]/60 backdrop-blur-md text-[#fcebc2] hover:bg-[#d97706] hover:text-slate-950 transition-all duration-300 shadow-xl"
                      title="Watch Sample Lesson Preview"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#f59e0b] group-hover/play:bg-white text-slate-950 flex items-center justify-center transition-colors">
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      </div>
                      <span className="text-xs font-semibold tracking-wide pr-1 font-sans-ui">
                        Watch 2-Min Preview
                      </span>
                    </button>

                    {/* Bottom Identification Banner */}
                    <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#0c121e] via-[#0c121e]/90 to-transparent">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4a34b]">
                            Lead Instructor
                          </div>
                          <div className="font-display text-lg font-bold text-white">
                            Acharya Ganesh
                          </div>
                          <div className="text-xs text-slate-400">
                            Vedic Astrologer • 15+ Yrs Sacred Lineage
                          </div>
                        </div>

                        <div className="w-10 h-10 rounded-full border border-[#d4a34b]/40 bg-[#c59b27]/10 flex items-center justify-center">
                          <Award className="w-5 h-5 text-[#f59e0b]" />
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              {/* Floating Credibility Pill on Left */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 p-3.5 rounded-xl bg-[#111827]/95 border border-[#d4a34b]/40 shadow-2xl backdrop-blur-md flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-lg bg-[#d97706]/20 flex items-center justify-center border border-[#d4a34b]/40">
                  <BookOpen className="w-4 h-4 text-[#f59e0b]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    Parashara Shastra Pure
                  </div>
                  <div className="text-[11px] text-[#cbd5e1]">
                    Zero superstition • Pure science
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
