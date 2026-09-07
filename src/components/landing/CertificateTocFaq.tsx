import React, { useState } from 'react';
import { Search, Plus, Minus, Award, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import certificateImg from '../../assets/images/astrology_certificate_1788776431031.jpg';
import { ParallaxTiltCard } from '../ui/ParallaxTiltCard';
import { ScrollReveal } from '../ui/ScrollReveal';

export const CertificateTocFaq: React.FC<{ onPreviewCertificate: () => void }> = ({
  onPreviewCertificate,
}) => {
  // Table of Contents Accordion State
  const [openToc, setOpenToc] = useState<number | null>(0);

  // FAQ Accordion State & Search
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqSearch, setFaqSearch] = useState('');

  const tocItems = [
    {
      title: 'Course Overview',
      content: 'A comprehensive, 100+ lesson journey through classical Parashari Jyotish, structured from absolute fundamentals to professional chart interpretation.',
    },
    {
      title: 'Modules & Curriculum',
      content: '8 intensive modules covering the 9 Grahas, 12 Rashis, 12 Bhavas, Vimshottari Dasha, planetary dignities, KP sub-lords, and remedial measures.',
    },
    {
      title: 'Mentor Profile',
      content: 'Learn under the personal mentorship of Acharya Ganesh, celebrity astrologer with 17+ years experience and national media presence on India TV & Zee News.',
    },
    {
      title: 'Student Success Stories',
      content: 'Over 50,000 students trained globally, with hundreds now practicing professionally, counseling clients, and writing astrological forecasts.',
    },
    {
      title: 'Learning & Benefits',
      content: 'HD video lectures, interactive live doubt clearing sessions, assignments, downloadable PDF guidebooks, and lifetime classroom portal access.',
    },
    {
      title: 'Certificate Details',
      content: 'Receive a formally verifiable Certificate of Completion in Vedic Astrology signed by Acharya Ganesh upon completing all curriculum modules and quizzes.',
    },
  ];

  const faqs = [
    {
      q: 'Is this course beginner-friendly?',
      a: 'Yes, absolutely! The course starts from absolute zero. Even if you have never seen a Kundli before, every concept is taught using intuitive real-world examples without confusing jargon.',
    },
    {
      q: 'What is the duration of the course?',
      a: 'The complete curriculum spans over 40+ hours across 8 modules and 100+ lessons. You get lifetime self-paced access so you can learn comfortably on your own schedule.',
    },
    {
      q: 'Will I be able to predict events accurately?',
      a: 'Yes. By mastering planetary transits (Gochar), Vimshottari Dasha periods, and house interactions, you will gain practical confidence to time marriage, career milestones, and life transitions.',
    },
    {
      q: 'Will I receive a verified certificate?',
      a: 'Yes. Upon completing the course curriculum and practice assessments, you will be awarded an authenticated Certificate of Completion issued by Acharya Ganesh Academy.',
    },
    {
      q: 'Do I need prior astrology knowledge?',
      a: 'No prior background in astronomy or Sanskrit is needed. All terms are clearly explained in accessible English and Hindi.',
    },
    {
      q: 'Can I access the course on mobile?',
      a: 'Yes. Our student portal runs smoothly on all Android & iOS smartphones, iPads/tablets, laptops, and desktop browsers 24/7.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      f.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#faf7f2] text-[#2c1e16] border-b border-[#ebdccb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Columns Grid: Certificate Preview (4) | Table of Contents (4) | FAQ (4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Certificate Preview with Parallax Tilt (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#241812] tracking-tight">
              Certificate Preview
            </h3>

            <ParallaxTiltCard maxTilt={5} glowColor="rgba(218, 165, 32, 0.35)">
              <div 
                onClick={onPreviewCertificate}
                className="relative rounded-2xl overflow-hidden border-2 border-[#dfcaa6] shadow-md hover:shadow-xl transition-all cursor-pointer group bg-white"
              >
                <img
                  src={certificateImg}
                  alt="Acharya Ganesh Certificate of Completion"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-104 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/images/astrology_certificate_1788776431031.jpg';
                  }}
                />

                {/* Hover Badge */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white text-[#8c5e1b] font-bold text-xs uppercase tracking-wider shadow-lg">
                    Click to View Full Certificate
                  </span>
                </div>
              </div>
            </ParallaxTiltCard>

            <div className="p-3.5 rounded-xl bg-white border border-[#ebdccb] text-xs text-[#5c4a3e] space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#8c3b12]">
                <Award className="w-4 h-4 text-[#b47e2b]" />
                <span>Verifiable Academy Credential</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Add prestige to your professional practice with this authenticated credential signed by Acharya Ganesh.
              </p>
            </div>
          </div>

          {/* Column 2: Table of Contents (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#241812] tracking-tight">
              Table of Contents
            </h3>

            <div className="space-y-2.5">
              {tocItems.map((item, idx) => {
                const isOpen = openToc === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#e8d9c8] bg-white overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setOpenToc(isOpen ? null : idx)}
                      className="w-full p-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-[13px] font-bold text-[#241812] hover:text-[#b47e2b] transition-colors cursor-pointer"
                    >
                      <span>{item.title}</span>
                      <div className="w-5 h-5 rounded-full bg-[#faf7f2] flex items-center justify-center text-[#8c3b12] shrink-0">
                        {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-3.5 pb-3.5 pt-1 text-xs text-[#5c4a3e] leading-relaxed border-t border-[#f4e8db]">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 3: Frequently Asked Questions (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#241812] tracking-tight">
              Frequently Asked Questions
            </h3>

            {/* Question Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#a08f82] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search your question..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#ebdccb] bg-white text-xs text-[#241812] placeholder-[#a08f82] focus:outline-hidden focus:border-[#b47e2b] focus:ring-1 focus:ring-[#b47e2b] transition-all"
              />
            </div>

            {/* FAQ Accordion List */}
            <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
              {filteredFaqs.map((faq, fIdx) => {
                const isFaqOpen = openFaq === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="rounded-xl border border-[#e8d9c8] bg-white overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setOpenFaq(isFaqOpen ? null : fIdx)}
                      className="w-full p-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-[13px] font-bold text-[#241812] hover:text-[#b47e2b] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <div className="w-5 h-5 rounded-full bg-[#faf7f2] flex items-center justify-center text-[#8c3b12] shrink-0">
                        {isFaqOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isFaqOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-3.5 pb-3.5 pt-1 text-xs text-[#5c4a3e] leading-relaxed border-t border-[#f4e8db]">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {filteredFaqs.length === 0 && (
                <div className="p-6 text-center text-xs text-[#8a7668] bg-white rounded-xl border border-[#ebdccb]">
                  No matching questions found. Feel free to contact our counseling team directly.
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
