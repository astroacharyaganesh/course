import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck, Play, ArrowRight, UserCheck, Lock } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  type: 'enroll' | 'preview' | 'login';
  previewTitle?: string;
  onClose: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  type,
  previewTitle,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSuccess(true);
    setTimeout(() => {
      onClose();
      setLoginSuccess(false);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setLoginSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-lg rounded-3xl bg-[#faf7f2] border border-[#dfcaa6] shadow-2xl overflow-hidden text-[#2c1e16]">
        
        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#f0e4d2] hover:bg-[#ebd7c0] text-[#5c4a3e] hover:text-[#241812] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. Video Preview Mode */}
        {type === 'preview' && (
          <div className="p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8c3b12] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#c85a17]" />
              <span>Masterclass Video Excerpt</span>
            </div>

            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#241812]">
              {previewTitle || 'Building Blocks of Astrology'}
            </h3>

            {/* High-Def Sacred Player Frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#1c120c] border border-[#dfcaa6] flex flex-col items-center justify-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-[#c85a17]/20 border-2 border-[#d97706] flex items-center justify-center text-[#d97706] animate-pulse">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <div className="font-display text-base text-[#fef3c7] mt-3">
                Playing Sacred Excerpt • Astrologer Hanish Bagga
              </div>
              <div className="text-[11px] text-[#dfcaa6] mt-1">
                Lesson: {previewTitle || 'Planets, Signs & Houses'}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#dfcaa6] text-xs text-[#5c4a3e]">
              <span className="font-bold text-[#8c3b12] block mb-1">Seeker Access:</span>
              Watch all 12 complete lessons in full 1080p HD with zero charges in this cohort.
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#c85a17] via-[#d97706] to-[#b45309] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              Enroll For Free to Unlock All 12 Lessons →
            </button>
          </div>
        )}

        {/* 2. Free Enrollment Mode */}
        {type === 'enroll' && (
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-cinzel text-2xl font-bold text-[#241812]">
                    Pranaam, {name || 'Seeker'}!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5c4a3e] max-w-sm mx-auto leading-relaxed">
                    Your 100% free enrollment in <strong>Building Blocks of Astrology</strong> is confirmed.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#dfcaa6] text-xs text-[#5c4a3e] text-left space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                    <span>✓ Portal credentials dispatched to WhatsApp & Email</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                    <span>✓ 32-Page Kundli Guide (PDF) link ready</span>
                  </div>
                  <div className="text-[11px] text-[#735e50] pt-1">
                    Sent to: <strong className="text-[#241812]">{phone || email}</strong>
                  </div>
                </div>

                <button
                  onClick={handleResetAndClose}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#c85a17] to-[#d97706] text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md"
                >
                  Enter Sacred Classroom Portal →
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                
                {/* Header */}
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8c3b12] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#c85a17]" />
                    <span>Instant 100% Free Registration</span>
                  </div>
                  <h3 className="font-cinzel text-2xl font-bold text-[#241812]">
                    Claim Your Free Masterclass Seat
                  </h3>
                  <p className="text-xs text-[#5c4a3e]">
                    Get immediate access to all 12 video lessons, PDF guide, and verified certificate.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#5c4a3e] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#dfcaa6] text-[#241812] text-xs placeholder:text-[#a08f82] focus:outline-none focus:border-[#c85a17] shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5c4a3e] mb-1">
                      WhatsApp Mobile Number *
                    </label>
                    <div className="flex gap-2">
                      <span className="px-3 py-3 rounded-xl bg-[#f8efe2] border border-[#dfcaa6] text-xs text-[#5c4a3e] font-semibold flex items-center">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#dfcaa6] text-[#241812] text-xs placeholder:text-[#a08f82] focus:outline-none focus:border-[#c85a17] shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5c4a3e] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#dfcaa6] text-[#241812] text-xs placeholder:text-[#a08f82] focus:outline-none focus:border-[#c85a17] shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#c85a17] via-[#d97706] to-[#b45309] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>START FREE MASTERCLASS NOW (₹0)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-3 text-[11px] text-[#735e50] pt-1">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-[#c85a17]" />
                      <span>No credit card required</span>
                    </span>
                    <span>•</span>
                    <span>Instant access</span>
                  </div>
                </form>

              </div>
            )}
          </div>
        )}

        {/* 3. Portal Login Mode */}
        {type === 'login' && (
          <div className="p-6 sm:p-8 space-y-5">
            <div className="space-y-1">
              <div className="text-[11px] font-bold text-[#8c3b12] uppercase tracking-wider">
                Student & Seeker Access
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-[#241812]">
                Log In to Acharya Ganesh Portal
              </h3>
              <p className="text-xs text-[#5c4a3e]">
                Enter your registered mobile or email to resume your masterclass.
              </p>
            </div>

            {loginSuccess ? (
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <div className="text-sm font-bold text-emerald-800">Login Successful!</div>
                <div className="text-xs text-emerald-700">Redirecting to classroom...</div>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5c4a3e] mb-1">
                    Registered Mobile / Email
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter mobile or email"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#dfcaa6] text-[#241812] text-xs placeholder:text-[#a08f82] focus:outline-none focus:border-[#c85a17] shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5c4a3e] mb-1">
                    Password or OTP
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Enter password or received OTP"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#dfcaa6] text-[#241812] text-xs placeholder:text-[#a08f82] focus:outline-none focus:border-[#c85a17] shadow-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#c85a17] to-[#d97706] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  Access My Classroom →
                </button>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
