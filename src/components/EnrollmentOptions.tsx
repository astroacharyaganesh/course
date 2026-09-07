import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Award, 
  Users, 
  X, 
  CheckCircle2, 
  Lock 
} from 'lucide-react';
import { PRICING_PLANS } from '../data/courseData';
import { PricingPlan } from '../types';

interface EnrollmentOptionsProps {
  onPlanSelected?: (plan: PricingPlan) => void;
}

export const EnrollmentOptions: React.FC<EnrollmentOptionsProps> = () => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [seekerName, setSeekerName] = useState('');
  const [seekerEmail, setSeekerEmail] = useState('');
  const [seekerPhone, setSeekerPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOpenEnrollment = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    setIsSuccess(false);
  };

  const handleSubmitEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!seekerName || !seekerEmail) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <section 
      id="pricing"
      className="relative py-24 bg-[#0c121e] overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d97706]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c59b27]/15 border border-[#d4a34b]/30 text-[#fcebc2] text-xs font-semibold tracking-[0.2em] uppercase font-sans-ui mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>Sacred Investment in Yourself</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Choose Your <span className="gold-gradient-text">Learning Pathway</span>
          </h2>

          <p className="font-spiritual text-xl text-slate-300">
            Transparent tuition, lifetime curriculum access, and shastric excellence.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 border ${
                plan.popular
                  ? 'bg-[#111a2d] border-[#d4a34b] shadow-2xl shadow-[#d97706]/15 lg:-translate-y-2'
                  : 'bg-[#0f1726]/90 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-slate-950 text-xs font-extrabold uppercase tracking-wider font-sans-ui shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#d4a34b] mb-1 font-sans-ui">
                    {plan.accessDuration}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed min-h-[36px]">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="p-5 rounded-2xl bg-[#0a0f1a] border border-slate-800/80 mb-8 flex items-baseline justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                        {plan.price}
                      </span>
                      <span className="text-sm text-slate-500 line-through">
                        {plan.originalPrice}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#fcebc2]">One-time tuition • No hidden fees</span>
                  </div>

                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded bg-[#d97706]/20 text-[#fcebc2] text-[10px] font-bold uppercase tracking-wide border border-[#d97706]/30">
                      Save 40%
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-sans-ui">
                    What is Included:
                  </div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-[#c59b27]/20 flex items-center justify-center text-[#f59e0b] shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => handleOpenEnrollment(plan)}
                  className={`w-full py-4 rounded-2xl font-bold text-sm tracking-wider uppercase font-sans-ui transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] text-slate-950 shadow-xl hover:shadow-[#f59e0b]/25 hover:scale-[1.01]'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-[#d4a34b]/50'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* 14-Day Guarantee Box */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#090e17] border border-[#d4a34b]/30 shadow-xl flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-16 h-16 rounded-2xl bg-[#c59b27]/15 border border-[#d4a34b]/40 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8 text-[#f59e0b]" />
          </div>
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-1">
              100% Sacred 14-Day Satisfaction Guarantee
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Take the first two modules, download the sacred Sanskrit workbooks, and experience 
              Acharya Ganesh’s teaching. If you feel this does not profoundly elevate your 
              understanding of Vedic astrology, simply write to us within 14 days for an immediate, 
              cordial refund. No risk.
            </p>
          </div>
        </div>

      </div>

      {/* Checkout / Enrollment Simulation Modal */}
      {isModalOpen && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0e1626] border border-[#d4a34b]/50 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden">
            
            {/* Close */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#d4a34b] font-sans-ui mb-1">
                  Secure Enrollment
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {selectedPlan.name}
                </h3>
                <p className="text-xs text-slate-300 mb-6">
                  Complete your details below to activate instant access to Acharya Ganesh’s Vedic Wisdom Academy portal.
                </p>

                <div className="p-3.5 rounded-xl bg-[#080d16] border border-slate-800 flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs font-semibold text-slate-300">{selectedPlan.name}</div>
                    <div className="text-[11px] text-slate-400">{selectedPlan.accessDuration}</div>
                  </div>
                  <div className="font-display text-xl font-bold text-[#f59e0b]">
                    {selectedPlan.price}
                  </div>
                </div>

                <form onSubmit={handleSubmitEnrollment} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kumar"
                      value={seekerName}
                      onChange={(e) => setSeekerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#121a2a] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#d4a34b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address (For Portal Login) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. anand@example.com"
                      value={seekerEmail}
                      onChange={(e) => setSeekerEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#121a2a] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#d4a34b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      WhatsApp / Phone (For Study Group Access)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={seekerPhone}
                      onChange={(e) => setSeekerPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#121a2a] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#d4a34b]"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-2">
                    <Lock className="w-3.5 h-3.5 text-[#f59e0b]" />
                    <span>256-Bit SSL Encrypted • Instant Access Activation</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24] text-slate-950 font-bold text-sm tracking-wider uppercase font-sans-ui hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Activating Sacred Access...</span>
                    ) : (
                      <>
                        <span>Complete Enrollment • {selectedPlan.price}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#d97706]/20 border border-[#d4a34b] flex items-center justify-center mx-auto text-[#f59e0b]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Welcome to the Shastric Sangha!
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                  Namaste <strong>{seekerName}</strong>. Your enrollment in{' '}
                  <span className="text-[#fcebc2] font-semibold">{selectedPlan.name}</span> has been confirmed.
                  We have sent your academy credentials and workbook downloads to{' '}
                  <span className="text-[#fcebc2] font-semibold">{seekerEmail}</span>.
                </p>

                <div className="p-4 rounded-2xl bg-[#090e17] border border-slate-800 text-left text-xs space-y-1.5 text-slate-300">
                  <div className="text-[#d4a34b] font-bold">Your Next Steps:</div>
                  <div>1. Check your inbox for your LMS access portal invitation.</div>
                  <div>2. Join Acharya Ganesh's private Telegram/WhatsApp seeker channel.</div>
                  <div>3. Start with Module 01: Foundations of Vedic Wisdom.</div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 rounded-xl bg-[#c59b27] text-slate-950 font-bold text-xs uppercase tracking-wider font-sans-ui hover:bg-[#d97706] transition-colors"
                >
                  Close & Explore Curriculum
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
