import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Award, CheckCircle2, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { CourseModule, Lesson } from '../types';

interface LessonPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: Lesson | null;
  module: CourseModule | null;
  onEnrollClick: () => void;
}

export const LessonPreviewModal: React.FC<LessonPreviewModalProps> = ({
  isOpen,
  onClose,
  lesson,
  module,
  onEnrollClick,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(25);

  if (!isOpen || !lesson) return null;

  return (
    <div 
      id="lesson-preview-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div 
        id="lesson-preview-modal-container"
        className="relative w-full max-w-4xl bg-[#0e1626] border border-[#d4a34b]/40 rounded-3xl shadow-2xl overflow-hidden my-auto"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090e17]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#d4a34b] font-sans-ui">
              Free Sample Masterclass • Acharya Ganesh
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close Preview Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Emulation Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          
          {/* Backdrop Visual (Acharya Ganesh in sacred studio) */}
          <img
            src="/src/assets/images/acharya_ganesh_portrait_1788771630566.jpg"
            alt="Masterclass preview"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-90"
          />

          {/* Ambient Lighting Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

          {/* Center Play/Pause Overlay */}
          <div className="relative z-10 text-center px-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#d97706] to-[#fbbf24] text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer mx-auto mb-4"
              aria-label={isPlaying ? 'Pause Lesson' : 'Play Lesson'}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current" />
              ) : (
                <Play className="w-8 h-8 fill-current ml-1" />
              )}
            </button>

            <div className="font-display text-lg sm:text-xl font-bold text-white mb-1">
              {lesson.title}
            </div>
            <div className="text-xs text-slate-300 font-sans-ui max-w-md mx-auto">
              {isPlaying ? 'Streaming sample excerpt with Acharya Ganesh...' : 'Click to start interactive masterclass excerpt'}
            </div>
          </div>

          {/* Bottom Player Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black to-transparent flex flex-col gap-2 z-20">
            {/* Progress Bar */}
            <div 
              className="w-full h-1.5 bg-slate-700/80 rounded-full cursor-pointer overflow-hidden"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setPlaybackProgress(Math.round(pos * 100));
              }}
            >
              <div 
                className="h-full bg-gradient-to-r from-[#d97706] to-[#fbbf24] rounded-full transition-all"
                style={{ width: `${playbackProgress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-[#f59e0b]"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-[#f59e0b]"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px]">
                  {Math.floor((playbackProgress * 32) / 100)}:15 / {lesson.duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">1080p HD</span>
                <span className="text-[10px] text-[#d4a34b] font-semibold">Shastric Audio</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Info & Conversion Prompt */}
        <div className="p-6 sm:p-8 bg-[#0c121e]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-3">
              {module && (
                <div className="text-xs font-semibold uppercase tracking-wider text-[#d4a34b] font-sans-ui">
                  From Module {module.number}: {module.title}
                </div>
              )}
              <h3 className="font-display text-2xl font-bold text-white">
                {lesson.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-spiritual">
                {lesson.description || 'Gain clear discernment into how ancient sages perceived light, karma, and time cycles to guide human flourishing with compassionate precision.'}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#f59e0b]" />
                  <span>Full Lesson: {lesson.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
                  <span>Includes Vedic Sanskrit Transcripts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#f59e0b]" />
                  <span>Direct Guidance by Acharya Ganesh</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 p-5 rounded-2xl bg-[#131b2c] border border-[#d4a34b]/30 text-center space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Ready for the Complete Journey?
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Unlock all 41 exhaustive lessons, live masterclasses, and certified diploma.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onEnrollClick();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-slate-950 font-bold text-xs tracking-wider uppercase font-sans-ui shadow-lg hover:shadow-[#f59e0b]/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Enroll in Full Course</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
