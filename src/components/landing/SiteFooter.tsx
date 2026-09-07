import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';

export const SiteFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#050811] text-[#94a3b8] pt-14 pb-8 border-t border-[#182236] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#182236]">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#dfa851] to-[#a2681c] p-0.5 flex items-center justify-center">
                <div className="w-full h-full rounded-[10px] bg-[#0a0f1d] flex items-center justify-center text-[#e8b560] font-display text-lg font-bold">
                  ॐ
                </div>
              </div>
              <div>
                <div className="font-cinzel text-base font-bold text-white tracking-wider">
                  ACHARYA GANESH
                </div>
                <div className="text-[9px] tracking-[0.2em] text-[#d4a34b] uppercase font-sans-ui font-semibold">
                  Academy of Vedic Astrology
                </div>
              </div>
            </div>

            <p className="text-[#94a3b8] leading-relaxed text-xs max-w-sm">
              Dedicated to preserving and transmitting authentic Vedic astrological wisdom through 
              practical, scientific, and ethical chart interpretation.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {['Facebook', 'Instagram', 'YouTube', 'LinkedIn'].map((platform, pIdx) => (
                <a
                  key={pIdx}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-[#0e172a] border border-[#1e293b] hover:border-[#dfa344] hover:text-[#dfa344] text-[#cbd5e1] flex items-center justify-center transition-colors text-[11px] font-bold"
                  aria-label={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[#94a3b8]">
              <li>
                <a href="#" className="hover:text-[#dfa344] transition-colors">Home</a>
              </li>
              <li>
                <a href="#course-modules" className="hover:text-[#dfa344] transition-colors">Course Modules</a>
              </li>
              <li>
                <a href="#pitru-paksh-course" className="hover:text-[#dfa344] text-[#e8b560] font-semibold transition-colors flex items-center justify-between">
                  <span>Pitru Paksh Course</span>
                  <span className="text-[9px] bg-[#df8b2c] text-white px-1.5 py-0.2 rounded font-bold">₹1,500</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#dfa344] transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#dfa344] transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-[#94a3b8]">
              <li>
                <a href="#" className="hover:text-[#dfa344] transition-colors">Career Astrology</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#dfa344] transition-colors">Marriage Astrology</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#dfa344] transition-colors">Business Astrology</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#dfa344] transition-colors">Vastu Consultation</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#dfa344] transition-colors">Numerology</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              Contact Us
            </h4>

            <div className="space-y-2 text-[#94a3b8]">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#dfa344]" />
                <a href="tel:+919896043710" className="hover:text-white transition-colors">
                  +91 98960 43710
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#dfa344]" />
                <a href="mailto:info@acharyaganesh.com" className="hover:text-white transition-colors">
                  info@acharyaganesh.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#dfa344]" />
                <span>Delhi, India</span>
              </div>
            </div>

            {/* Newsletter Subscription Form */}
            <form onSubmit={handleSubscribe} className="pt-2 space-y-2">
              <div className="text-[10px] text-[#cbd5e1] font-semibold uppercase tracking-wider">
                Subscribe for Astrological Updates:
              </div>
              <div className="flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-l-lg bg-[#0e172a] border border-[#1e293b] text-white text-xs placeholder:text-[#64748b] focus:outline-none focus:border-[#dfa344]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-r-lg bg-[#dfa344] hover:bg-[#e8b560] text-[#1c1004] font-bold text-xs shrink-0 cursor-pointer transition-colors flex items-center justify-center"
                >
                  {subscribed ? <Check className="w-4 h-4 text-[#1c1004]" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-[#86efac]">
                  Thank you for subscribing!
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748b]">
          <div>
            © 2025 Acharya Ganesh. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#94a3b8] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#94a3b8] transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
