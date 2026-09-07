import React, { useState } from 'react';
import { Search, Plus, Minus, CheckCircle, Award, Sparkles } from 'lucide-react';

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
      q: 'Will I get a certificate after completion?',
      a: 'Yes. After completing all video modules and passing the review assessments, you will be awarded an official, verifiable Certificate of Completion from Acharya Ganesh Academy.',
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
    <section id="faq" className="py-16 sm:py-20 bg-[#faf7f2] text-[#2c1e16] border-b border-[#ebdccb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Columns Grid: Certificate Preview (4) | Table of Contents (4) | FAQ (4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Certificate Preview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#241812] tracking-tight">
              Certificate Preview
            </h3>

            <div 
              onClick={onPreviewCertificate}
              className="relative rounded-2xl overflow-hidden border-2 border-[#dfcaa6] shadow-md hover:shadow-xl transition-all cursor-pointer group bg-white"
            >
              <img
                src="/src/assets/images/astrology_certificate_1788776431031.jpg"
                alt="Acharya Ganesh Certificate of Completion"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Badge */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-white text-[#8c5e1b] font-bold text-xs uppercase tracking-wider shadow-lg">
                  Click to View Full Certificate
                </span>
              </div>
            </div>

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
          <div className="lg:col-span-4 space-y-4">
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

                    {isOpen && (
                      <div className="px-3.5 pb-3.5 pt-1 text-xs text-[#5c4a3e] leading-relaxed border-t border-[#f4e8db]">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 3: Frequently Asked Questions (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
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
                className="w-full pl-8 pr-3 py-2 rounded-xl bg-white border border-[#e8d9c8] text-xs text-[#241812] placeholder:text-[#a08f82] focus:outline-none focus:border-[#b47e2b] shadow-xs"
              />
            </div>

            {/* FAQ Accordion List */}
            <div className="space-y-2.5">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#e8d9c8] bg-white overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-[13px] font-bold text-[#241812] hover:text-[#b47e2b] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <div className="w-5 h-5 rounded-full bg-[#faf7f2] flex items-center justify-center text-[#8c3b12] shrink-0">
                        {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-3.5 pb-3.5 pt-1 text-xs text-[#5c4a3e] leading-relaxed border-t border-[#f4e8db]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
