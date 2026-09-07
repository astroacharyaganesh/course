import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  ChevronRight, 
  PlusCircle, 
  Facebook, 
  Instagram, 
  Youtube,
  ArrowRight
} from 'lucide-react';

export const AcharyaFooter: React.FC = () => {
  const quickLinks = [
    'Home',
    'About',
    'Courses',
    'Services',
    'Reports',
    'Online Puja',
    'Web Stories',
    'Spirituality',
    'Contact',
    'FAQs'
  ];

  const citiesCol1 = [
    'Delhi',
    'Noida',
    'Ghaziabad',
    'Gurgaon',
    'Jaipur',
    'Bangalore',
    'Mumbai',
    'Hyderabad',
    'Chennai',
    'Pune'
  ];

  const citiesCol2 = [
    'Kolkata',
    'Lucknow',
    'Faridabad',
    'Kanpur',
    'Agra',
    'Indore',
    'Chandigarh',
    'Amritsar',
    'Patna',
    'Ahmedabad'
  ];

  const services = [
    'Astro Vastu',
    'Astrology Guidance',
    'Match Making',
    'Career Prediction',
    'Health Astrology',
    'Love Astrology',
    'Muhurta Astrology',
    'Wealth Astrology',
    'Litigation Astrology'
  ];

  return (
    <footer className="bg-[#141414] text-[#cfcfcf] text-xs pt-16 pb-12 border-t border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          
          {/* Column 1: Brand Bio & Contact Details (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* Logo Emblem */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#d6a86c] to-[#8c5e26] p-[2px] flex items-center justify-center shrink-0">
                <div className="w-full h-full rounded-full bg-[#1c1c1c] flex flex-col items-center justify-center">
                  <span className="font-display text-lg font-bold text-[#e8be89]">ॐ</span>
                  <span className="text-[6px] font-bold text-[#e8be89] uppercase tracking-tighter">GANESH</span>
                </div>
              </div>

              <div>
                <span className="font-display text-lg font-bold text-white block">
                  Acharya Ganesh
                </span>
                <span className="text-[10px] text-[#bda078] tracking-wider uppercase">
                  Vedic Astrologer
                </span>
              </div>
            </div>

            {/* Slogan with decorative side lines */}
            <div className="flex items-center gap-3 py-1">
              <div className="h-px bg-[#7e6141]/50 flex-1" />
              <span className="text-xs font-spiritual italic text-[#e8be89] tracking-wide shrink-0">
                Trusted Guidance. Positive Life.
              </span>
              <div className="h-px bg-[#7e6141]/50 flex-1" />
            </div>

            {/* Description */}
            <p className="text-xs text-[#a6a6a6] leading-relaxed">
              Acharya Ganesh is a renowned Vedic astrologer offering guidance in various aspects of life 
              including love, career, marriage, health and business. Get the best solutions for a better tomorrow.
            </p>

            {/* Contact Details with Icons */}
            <div className="space-y-3 pt-2 text-xs text-[#b8b8b8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e8be89] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Floor, 887, Lower Ground, B-1, Niti Khand I, Indirapuram, Ghaziabad, Uttar Pradesh 201014
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#e8be89] shrink-0" />
                <a href="mailto:info@acharyaganesh.com" className="hover:text-white transition-colors">
                  info@acharyaganesh.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e8be89] shrink-0" />
                <a href="tel:+917300004325" className="hover:text-white transition-colors font-medium">
                  +91 73000-04325
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-base font-bold text-[#e8be89] tracking-wide">
              Quick Links
            </h4>

            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-[#b0b0b0] hover:text-[#e8be89] transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-[#b0b0b0]" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services Available In (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display text-base font-bold text-[#e8be89] tracking-wide">
              Our Services Available In
            </h4>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {/* Col 1 */}
              <div className="space-y-2">
                {citiesCol1.map((city) => (
                  <div key={city} className="flex items-center gap-1.5 text-[#b0b0b0]">
                    <MapPin className="w-3 h-3 text-[#d6a86c] shrink-0" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>

              {/* Col 2 */}
              <div className="space-y-2">
                {citiesCol2.map((city) => (
                  <div key={city} className="flex items-center gap-1.5 text-[#b0b0b0]">
                    <MapPin className="w-3 h-3 text-[#d6a86c] shrink-0" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button className="px-4 py-1.5 rounded border border-[#525252] text-xs text-[#d1d5db] hover:border-[#e8be89] hover:text-white transition-colors cursor-pointer">
                View More Cities →
              </button>
            </div>

            <p className="text-[11px] text-[#808080] italic leading-tight">
              * We have expert astrologers available in 20-50+ major cities across India.
            </p>
          </div>

          {/* Column 4: Our Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-base font-bold text-[#e8be89] tracking-wide">
              Our Services
            </h4>

            <ul className="space-y-2.5 text-xs">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-[#b0b0b0] hover:text-[#e8be89] transition-colors"
                  >
                    <PlusCircle className="w-3.5 h-3.5 text-[#e8be89]/80 shrink-0" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar matching screenshot */}
        <div className="pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8a8a8a]">
          <div>
            © 2026 Acharya Ganesh. All Rights Reserved.
          </div>

          {/* Follow Us Social Icons */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#a3a3a3] font-medium mr-1">Follow Us:</span>
            
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 rounded-full bg-[#262626] hover:bg-[#3b5998] flex items-center justify-center text-white transition-colors"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full bg-[#262626] hover:bg-[#e1306c] flex items-center justify-center text-white transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-7 h-7 rounded-full bg-[#262626] hover:bg-[#ff0000] flex items-center justify-center text-white transition-colors"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>

            {/* Small WhatsApp Icon */}
            <a
              href="https://wa.me/917300004325"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-7 h-7 rounded-full bg-[#262626] hover:bg-[#25d366] flex items-center justify-center text-white transition-colors"
            >
              <span className="text-[12px] font-bold">W</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
