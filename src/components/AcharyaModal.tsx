import React, { useState } from 'react';
import { X, CheckCircle2, Play, Lock, Sparkles, BookOpen } from 'lucide-react';

interface AcharyaModalProps {
  type: 'buy' | 'login' | 'courseLogin' | 'videoPreview';
  isOpen: boolean;
  onClose: () => void;
  videoTitle?: string;
}

export const AcharyaModal: React.FC<AcharyaModalProps> = ({
  type,
  isOpen,
  onClose,
  videoTitle = 'Introduction to Vedic Astrology',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enrolled, setEnrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'student' | 'otp'>('student');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-[#ebdcc8] shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-[#faeee1] border-b border-[#ebdcc8] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-[#381c10]">
              {type === 'buy' && 'Enroll in Free Course'}
              {type === 'login' && 'Seeker Account Login'}
              {type === 'courseLogin' && 'Student Portal Access'}
              {type === 'videoPreview' && 'Lesson Excerpt Preview'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#ebdcc8]/50 hover:bg-[#ebdcc8] flex items-center justify-center text-[#381c10] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          
          {/* BUY NOW / INSTANT ENROLLMENT MODAL */}
          {type === 'buy' && (
            <div>
              {enrolled ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#381c10]">
                    Welcome, {name || 'Seeker'}!
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-xs mx-auto">
                    Your free access to <strong>Building Blocks of Astrology</strong> is activated.
                    Your login link has been sent to <strong>{email || 'your email'}</strong>.
                  </p>
                  <div className="pt-3">
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-full bg-[#e8be89] text-[#381c10] font-bold text-xs uppercase"
                    >
                      Start Watching Now
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setEnrolled(true);
                  }}
                  className="space-y-4 text-xs sm:text-[13px]"
                >
                  <div className="p-3.5 rounded-xl bg-[#faeee1] border border-[#ebdcc8] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#381c10] text-sm">
                        Building Blocks of Astrology
                      </div>
                      <div className="text-xs text-[#715444]">
                        Planets, Signs & Houses • 90 Mins
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-base font-extrabold text-[#a2531d]">FREE</span>
                      <span className="block text-[10px] text-gray-500 line-through">₹2,499</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#ece3d6]/60 border border-gray-200 focus:border-[#a2531d] focus:bg-white text-xs focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#ece3d6]/60 border border-gray-200 focus:border-[#a2531d] focus:bg-white text-xs focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#ece3d6]/60 border border-gray-200 focus:border-[#a2531d] focus:bg-white text-xs focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#a45618] hover:bg-[#8c4516] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Confirm Free Enrollment (₹0)
                  </button>
                  <div className="text-center text-[11px] text-gray-500">
                    🔒 Instant portal access • No credit card required
                  </div>
                </form>
              )}
            </div>
          )}

          {/* LOG IN / COURSE LOGIN MODAL */}
          {(type === 'login' || type === 'courseLogin') && (
            <div className="space-y-4 text-xs sm:text-[13px]">
              <div className="flex rounded-lg bg-[#faeee1] p-1 border border-[#ebdcc8]">
                <button
                  type="button"
                  onClick={() => setActiveTab('student')}
                  className={`flex-1 py-1.5 rounded-md font-semibold text-xs transition-all ${
                    activeTab === 'student' ? 'bg-white text-[#381c10] shadow-xs' : 'text-[#715444]'
                  }`}
                >
                  Password Login
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('otp')}
                  className={`flex-1 py-1.5 rounded-md font-semibold text-xs transition-all ${
                    activeTab === 'otp' ? 'bg-white text-[#381c10] shadow-xs' : 'text-[#715444]'
                  }`}
                >
                  Quick OTP via WhatsApp
                </button>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Registered Email or Phone *
                </label>
                <input
                  type="text"
                  placeholder="Enter email or +91 phone number"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#ece3d6]/60 border border-gray-200 focus:border-[#a2531d] focus:bg-white text-xs focus:outline-none"
                />
              </div>

              {activeTab === 'student' ? (
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Password *</label>
                  <input
                    type="password"
                    placeholder="Enter your account password"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#ece3d6]/60 border border-gray-200 focus:border-[#a2531d] focus:bg-white text-xs focus:outline-none"
                  />
                  <div className="text-right mt-1">
                    <a href="#" className="text-[11px] text-[#a2531d] hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-gray-500 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                  A 4-digit verification code will be sent to your registered WhatsApp number.
                </div>
              )}

              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-[#a45618] hover:bg-[#8c4516] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                {activeTab === 'student' ? 'Sign In to Student Dashboard' : 'Send WhatsApp OTP'}
              </button>
            </div>
          )}

          {/* VIDEO EXCERPT PREVIEW */}
          {type === 'videoPreview' && (
            <div className="space-y-4">
              <div className="relative aspect-video rounded-xl bg-black overflow-hidden flex items-center justify-center border border-gray-800">
                <img
                  src="/src/assets/images/vedic_sacred_chart_1788771652377.jpg"
                  alt="Lesson Excerpt"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-4">
                  <span className="text-white text-xs font-semibold bg-[#a2531d] px-2.5 py-0.5 rounded-md self-start">
                    FREE EXCERPT
                  </span>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[#e8be89] text-[#381c10] flex items-center justify-center mx-auto hover:scale-110 transition-transform cursor-pointer shadow-lg">
                      <Play className="w-6 h-6 ml-0.5 fill-current" />
                    </div>
                  </div>

                  <div className="text-white text-xs font-medium">
                    {videoTitle}
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-600 leading-relaxed">
                Learn directly from Astrologer Hanish Bagga with step-by-step illustrations of chart Bhavas, planetary rulerships, and astronomical fundamentals.
              </div>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-[#e8be89] hover:bg-[#dfb175] text-[#381c10] font-bold text-xs uppercase tracking-wider"
              >
                Close Preview
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
