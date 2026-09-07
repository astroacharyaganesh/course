import React, { useState, useEffect } from 'react';
import { Sparkles, Volume2, VolumeX, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onEnrollClick: () => void;
  onExploreClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnrollClick, onExploreClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [oscillators, setOscillators] = useState<OscillatorNode[]>([]);
  const [gainNode, setGainNode] = useState<GainNode | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Soft meditative Indian tanpura drone synthesis using Web Audio API
  const toggleAmbientSound = () => {
    if (!isAudioPlaying) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.045, ctx.currentTime);
        masterGain.connect(ctx.destination);

        // Root drone note in C# (138.59 Hz) and fifth G# (207.65 Hz)
        const freqs = [138.59, 207.65, 277.18, 415.30];
        const oscs: OscillatorNode[] = [];

        freqs.forEach((f, idx) => {
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();
          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(f, ctx.currentTime);

          // Subtle LFO modulation for breathing acoustic presence
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.value = 0.15 + idx * 0.05;
          lfoGain.gain.value = 0.015;
          lfo.connect(oscGain.gain);
          lfo.start();

          oscGain.gain.setValueAtTime(0.25 / freqs.length, ctx.currentTime);
          osc.connect(oscGain);
          oscGain.connect(masterGain);
          osc.start();
          oscs.push(osc);
        });

        setAudioCtx(ctx);
        setOscillators(oscs);
        setGainNode(masterGain);
        setIsAudioPlaying(true);
      } catch (err) {
        console.error('Audio could not be initialized:', err);
      }
    } else {
      if (gainNode && audioCtx) {
        gainNode.gain.setValueAtTime(gainNode.gain.value, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
        setTimeout(() => {
          oscillators.forEach(osc => {
            try { osc.stop(); } catch { /* ignore */ }
          });
          audioCtx.close();
          setIsAudioPlaying(false);
          setAudioCtx(null);
          setOscillators([]);
          setGainNode(null);
        }, 850);
      }
    }
  };

  const navLinks = [
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Why Jyotish', href: '#transformation' },
    { label: 'Acharya Ganesh', href: '#mentor' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Tuition', href: '#pricing' },
    { label: 'FAQ', href: '#faqs' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c121e]/90 backdrop-blur-md border-b border-[#d4a34b]/20 py-3 shadow-xl shadow-black/40'
          : 'bg-gradient-to-b from-[#0c121e]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Emblem */}
          <a
            id="brand-logo-link"
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-[#c59b27] via-[#f59e0b] to-[#fbbf24] p-[1.5px] shadow-lg shadow-[#c59b27]/20 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#0c121e] flex items-center justify-center group-hover:bg-[#131b2c] transition-colors">
                <span className="font-display text-lg font-bold text-[#fcebc2]">ॐ</span>
              </div>
              <div className="absolute -inset-1 rounded-full bg-[#f59e0b]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-lg tracking-wider font-semibold text-[#fcebc2]">
                  ACHARYA GANESH
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d4a34b]"></span>
              </div>
              <p className="text-[10px] tracking-[0.25em] text-[#94a3b8] uppercase font-sans-ui">
                Vedic Wisdom Academy
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#cbd5e1]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#f7d58b] relative py-1 text-[13px] tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Meditative Ambient Sound Toggle */}
            <button
              id="ambient-sound-toggle-btn"
              onClick={toggleAmbientSound}
              title={isAudioPlaying ? 'Mute Meditative Tanpura' : 'Play Meditative Tanpura Drone'}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                isAudioPlaying
                  ? 'border-[#d4a34b] bg-[#d4a34b]/15 text-[#fcebc2] shadow-sm shadow-[#d4a34b]/30'
                  : 'border-slate-700/80 bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:border-slate-600'
              }`}
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[#f59e0b] animate-pulse" />
                  <span className="text-[11px] tracking-wide">Tanpura Playing</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="text-[11px] tracking-wide">Atmosphere Sound</span>
                </>
              )}
            </button>

            {/* Quick Explore */}
            <button
              id="nav-explore-btn"
              onClick={onExploreClick}
              className="text-xs font-semibold px-4 py-2 text-slate-300 hover:text-white transition-colors"
            >
              Overview
            </button>

            {/* Main CTA */}
            <button
              id="nav-enroll-cta"
              onClick={onEnrollClick}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] transition-all duration-300 group-hover:scale-105" />
              <div className="relative px-5 py-2 rounded-full bg-[#121927] transition-all duration-300 group-hover:bg-opacity-80 flex items-center gap-1.5">
                <span className="text-xs font-semibold tracking-wider text-[#fcebc2] uppercase font-sans-ui">
                  Enroll Now
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#f59e0b] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-ambient-sound-btn"
              onClick={toggleAmbientSound}
              className="p-2 rounded-lg text-slate-400 hover:text-[#fcebc2]"
              aria-label="Toggle Sound"
            >
              {isAudioPlaying ? <Volume2 className="w-5 h-5 text-[#f59e0b]" /> : <VolumeX className="w-5 h-5" />}
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 pb-4 border-t border-slate-800 bg-[#0c121e]/98 rounded-b-2xl px-2 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-slate-300 hover:text-[#f7d58b] hover:bg-slate-900/60 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                id="mobile-enroll-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onEnrollClick();
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-slate-950 font-bold text-sm tracking-wide shadow-md"
              >
                Enroll Now • Claim Admission
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
