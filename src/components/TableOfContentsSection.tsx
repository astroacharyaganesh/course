import React, { useState } from 'react';
import { 
  Compass, 
  LayoutGrid, 
  SunMedium, 
  Sparkles, 
  Hourglass, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  PlayCircle, 
  BookOpen, 
  Clock, 
  Award, 
  Search, 
  Check, 
  FileText, 
  Music,
  Eye
} from 'lucide-react';
import { COURSE_MODULES } from '../data/courseData';
import { CourseModule, Lesson } from '../types';

interface TableOfContentsProps {
  onPreviewLesson: (lesson: Lesson, module: CourseModule) => void;
  onEnrollClick: () => void;
}

export const TableOfContentsSection: React.FC<TableOfContentsProps> = ({
  onPreviewLesson,
  onEnrollClick,
}) => {
  const [activePhase, setActivePhase] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>('mod-01');

  // Icon mapping for modules
  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#f59e0b]" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-[#f59e0b]" />;
      case 'SunMedium':
        return <SunMedium className="w-5 h-5 text-[#f59e0b]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#f59e0b]" />;
      case 'Hourglass':
        return <Hourglass className="w-5 h-5 text-[#f59e0b]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#f59e0b]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#f59e0b]" />;
    }
  };

  const getLessonTypeIcon = (type: Lesson['type']) => {
    switch (type) {
      case 'video':
        return <PlayCircle className="w-4 h-4 text-[#f59e0b]" />;
      case 'chart-workshop':
        return <LayoutGrid className="w-4 h-4 text-[#38bdf8]" />;
      case 'workbook':
        return <FileText className="w-4 h-4 text-[#34d399]" />;
      case 'meditation':
        return <Music className="w-4 h-4 text-[#e879f9]" />;
    }
  };

  // Filter modules by phase and search query
  const filteredModules = COURSE_MODULES.filter((mod) => {
    const matchesPhase = activePhase === 'all' || mod.phase === activePhase;
    const matchesSearch = 
      mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.lessons.some(l => l.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesPhase && matchesSearch;
  });

  const toggleModule = (id: string) => {
    setExpandedModuleId(expandedModuleId === id ? null : id);
  };

  const expandAll = () => {
    if (expandedModuleId === 'all') {
      setExpandedModuleId(null);
    } else {
      setExpandedModuleId('all');
    }
  };

  return (
    <section 
      id="curriculum"
      className="relative py-24 bg-[#0c121e] text-slate-100 overflow-hidden"
    >
      {/* Subtle mandala background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d97706]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c59b27]/15 border border-[#d4a34b]/30 text-[#fcebc2] text-xs font-semibold tracking-[0.2em] uppercase font-sans-ui mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Structured Path to Mastery</span>
          </div>

          <h2 
            id="curriculum-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5"
          >
            Your Learning Journey
          </h2>

          <p 
            id="curriculum-subheading"
            className="font-spiritual text-xl sm:text-2xl text-slate-300 leading-relaxed"
          >
            Explore the complete curriculum and discover what you'll learn, step by step.
          </p>
        </div>

        {/* Phase Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          
          {/* Phase Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              id="filter-phase-all"
              onClick={() => setActivePhase('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activePhase === 'all'
                  ? 'bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-slate-950 shadow-md shadow-[#f59e0b]/20 font-bold'
                  : 'bg-[#121a2a] text-slate-400 hover:text-slate-200 hover:bg-[#182338]'
              }`}
            >
              All Modules (6)
            </button>
            <button
              id="filter-phase-foundations"
              onClick={() => setActivePhase('foundations')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activePhase === 'foundations'
                  ? 'bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-slate-950 shadow-md shadow-[#f59e0b]/20 font-bold'
                  : 'bg-[#121a2a] text-slate-400 hover:text-slate-200 hover:bg-[#182338]'
              }`}
            >
              Phase 1: Foundations
            </button>
            <button
              id="filter-phase-interpretation"
              onClick={() => setActivePhase('interpretation')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activePhase === 'interpretation'
                  ? 'bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-slate-950 shadow-md shadow-[#f59e0b]/20 font-bold'
                  : 'bg-[#121a2a] text-slate-400 hover:text-slate-200 hover:bg-[#182338]'
              }`}
            >
              Phase 2: Deep Interpretation
            </button>
            <button
              id="filter-phase-remedies"
              onClick={() => setActivePhase('remedies')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activePhase === 'remedies'
                  ? 'bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-slate-950 shadow-md shadow-[#f59e0b]/20 font-bold'
                  : 'bg-[#121a2a] text-slate-400 hover:text-slate-200 hover:bg-[#182338]'
              }`}
            >
              Phase 3: Timing & Remedies
            </button>
          </div>

          {/* Search Input & Expand All */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics, planets, houses..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#101726] border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#d4a34b]/60"
              />
            </div>
            <button
              onClick={expandAll}
              className="shrink-0 px-3 py-2 text-xs font-medium text-slate-400 hover:text-[#fcebc2] bg-[#101726] border border-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              {expandedModuleId === 'all' ? 'Collapse All' : 'Expand All'}
            </button>
          </div>

        </div>

        {/* Modules Accordion / Cards List */}
        <div className="space-y-5">
          {filteredModules.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-[#111928] border border-slate-800">
              <Compass className="w-8 h-8 text-slate-500 mx-auto mb-3" />
              <h3 className="font-display text-lg text-slate-200 mb-1">No matching curriculum modules found</h3>
              <p className="text-xs text-slate-400 mb-4">Try adjusting your search query or reset phase filters.</p>
              <button
                onClick={() => { setActivePhase('all'); setSearchQuery(''); }}
                className="px-4 py-2 rounded-lg bg-[#c59b27]/20 text-[#fcebc2] text-xs font-semibold hover:bg-[#c59b27]/30"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredModules.map((mod) => {
              const isExpanded = expandedModuleId === mod.id || expandedModuleId === 'all';

              return (
                <div
                  key={mod.id}
                  id={`module-card-${mod.number}`}
                  className={`group rounded-2xl transition-all duration-300 overflow-hidden border ${
                    isExpanded
                      ? 'bg-[#101828] border-[#d4a34b]/60 shadow-xl shadow-black/40'
                      : 'bg-[#0f1726]/90 border-slate-800/80 hover:border-slate-700 hover:bg-[#111a2c]'
                  }`}
                >
                  {/* Module Card Header (Clickable Accordion Trigger) */}
                  <div
                    onClick={() => toggleModule(mod.id)}
                    className="p-6 sm:p-7 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                  >
                    {/* Left: Number + Icon + Title + Short Description */}
                    <div className="flex items-start gap-4 sm:gap-5 flex-1">
                      
                      {/* Module Number Stamp */}
                      <div className="flex flex-col items-center justify-center shrink-0">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-display text-lg font-bold transition-colors ${
                          isExpanded
                            ? 'bg-gradient-to-br from-[#d97706] to-[#b45309] text-slate-950 shadow-md shadow-[#d97706]/30'
                            : 'bg-[#141f32] text-[#fcebc2] border border-[#d4a34b]/30 group-hover:border-[#d4a34b]/60'
                        }`}>
                          {mod.number}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="text-[10px] font-semibold tracking-widest uppercase text-[#d4a34b] font-sans-ui px-2 py-0.5 rounded-md bg-[#c59b27]/10">
                            {mod.phaseName}
                          </span>
                          {mod.milestoneBadge && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-medium text-amber-300/80">
                              <Award className="w-3 h-3 text-[#f59e0b]" />
                              {mod.milestoneBadge}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="shrink-0">{getModuleIcon(mod.iconName)}</div>
                          <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#fcebc2] transition-colors">
                            {mod.number} — {mod.title}
                          </h3>
                        </div>

                        <p className="text-sm text-slate-300 leading-relaxed font-spiritual max-w-3xl">
                          "{mod.shortDescription}"
                        </p>
                      </div>

                    </div>

                    {/* Right: Meta stats & Expand Arrow */}
                    <div className="flex items-center justify-between md:justify-end gap-5 shrink-0 pl-16 md:pl-0 border-t md:border-t-0 border-slate-800/60 pt-3 md:pt-0">
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-[#d4a34b]" />
                          <span className="text-slate-200 font-semibold">{mod.lessonsCount}</span> lessons
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#d4a34b]" />
                          <span className="text-slate-200 font-semibold">{mod.totalDuration}</span>
                        </div>
                      </div>

                      {/* Expand / Collapse Button */}
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isExpanded 
                          ? 'bg-[#c59b27]/20 text-[#fcebc2]' 
                          : 'bg-[#141f33] text-slate-400 group-hover:text-white'
                      }`}>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Expanded Accordion Body */}
                  {isExpanded && (
                    <div className="px-6 sm:px-7 pb-7 pt-2 border-t border-slate-800/80 bg-[#0c1322]/80 space-y-6">
                      
                      {/* Key Learning Outcomes */}
                      <div className="p-4 rounded-xl bg-[#121b2d] border border-slate-800">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#d4a34b] font-sans-ui mb-3 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5" />
                          What You Will Master in this Module
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {mod.keyOutcomes.map((outcome, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                              <div className="w-4 h-4 rounded-full bg-[#c59b27]/15 flex items-center justify-center shrink-0 mt-0.5 border border-[#d4a34b]/30">
                                <Check className="w-2.5 h-2.5 text-[#f59e0b]" />
                              </div>
                              <span className="leading-snug">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Detailed Lessons List */}
                      <div>
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                          <span>Complete Syllabus ({mod.lessons.length} Lessons)</span>
                          <span className="text-[11px] text-slate-500 font-normal">Click any previewable lesson to watch</span>
                        </div>

                        <div className="space-y-2">
                          {mod.lessons.map((lesson, lIdx) => (
                            <div
                              key={lesson.id}
                              className={`p-3.5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors border ${
                                lesson.isFreePreview
                                  ? 'bg-[#131e32] border-[#d4a34b]/30 hover:border-[#d4a34b]/70 hover:bg-[#17243c]'
                                  : 'bg-[#0f1726] border-slate-800/60 hover:bg-[#121c2e]'
                              }`}
                            >
                              {/* Left: Icon & Title & Description */}
                              <div className="flex items-start gap-3 flex-1">
                                <div className="mt-0.5 shrink-0">
                                  {getLessonTypeIcon(lesson.type)}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-xs font-bold text-slate-400">
                                      {mod.number}.{lIdx + 1}
                                    </span>
                                    <h4 className="text-sm font-semibold text-white">
                                      {lesson.title}
                                    </h4>
                                    {lesson.isFreePreview && (
                                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#d97706]/20 text-[#fcebc2] text-[10px] font-bold tracking-wide border border-[#d97706]/40">
                                        <Eye className="w-2.5 h-2.5 text-[#f59e0b]" />
                                        Free Preview
                                      </span>
                                    )}
                                  </div>
                                  {lesson.description && (
                                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                      {lesson.description}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Right: Duration & Action */}
                              <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                                <span className="text-xs text-slate-400 font-mono">
                                  {lesson.duration}
                                </span>

                                {lesson.isFreePreview ? (
                                  <button
                                    onClick={() => onPreviewLesson(lesson, mod)}
                                    className="px-3 py-1.5 rounded-lg bg-[#c59b27] hover:bg-[#d97706] text-slate-950 text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                                  >
                                    <PlayCircle className="w-3.5 h-3.5" />
                                    <span>Watch Free</span>
                                  </button>
                                ) : (
                                  <div className="text-[11px] text-slate-500 font-medium px-2 py-1 rounded bg-slate-900/60 border border-slate-800">
                                    Enroll to Unlock
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Module Bar */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-[#f59e0b]" />
                          <span>Includes Downloadable Shastra Workbook & Self-Study Charts</span>
                        </div>
                        <button
                          onClick={onEnrollClick}
                          className="text-[#fcebc2] hover:text-white font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <span>Get Full Lifetime Access to Module {mod.number} →</span>
                        </button>
                      </div>

                    </div>
                  )}

                </div>
              );
            })
          )}
        </div>

        {/* Visual Course Materials Banner (Showcasing ancient sacred chart visual) */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#121927] via-[#162135] to-[#0f1726] border border-[#d4a34b]/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-lg border border-slate-700/80 aspect-video lg:aspect-auto h-48 sm:h-56">
              <img
                src="/src/assets/images/vedic_sacred_chart_1788771652377.jpg"
                alt="Sacred Vedic Chart Artifacts"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c59b27]/15 text-[#fcebc2] text-[11px] font-semibold tracking-wider uppercase font-sans-ui">
                <Award className="w-3.5 h-3.5 text-[#f59e0b]" />
                Included Shastric Study Kit
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Downloadable Workbooks, Kundali Templates & Audio Mantras
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-spiritual">
                Every seeker receives Acharya Ganesh’s personal 200-page Sanskrit Astrological 
                Reference Almanac, printable North and South Indian Kundali workbooks, high-frequency 
                Navagraha audio chants, and a 10-step chart diagnosis protocol.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onEnrollClick}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-slate-950 font-bold text-xs tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Enroll Now & Claim Shastric Study Kit
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
