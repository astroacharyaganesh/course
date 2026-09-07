/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AcharyaNavbar } from './components/AcharyaNavbar';
import { AcharyaHeroBanner } from './components/AcharyaHeroBanner';
import { CourseInquiryForm } from './components/CourseInquiryForm';
import { CourseMainContent } from './components/CourseMainContent';
import { CourseSidebar } from './components/CourseSidebar';
import { AcharyaFooter } from './components/AcharyaFooter';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AcharyaModal } from './components/AcharyaModal';
import { Sparkles, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'buy' | 'login' | 'courseLogin' | 'videoPreview';
    videoTitle?: string;
  }>({
    isOpen: false,
    type: 'buy',
  });

  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA bar once user has scrolled past the main hero banner (550px)
      if (window.scrollY > 550) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBuyNow = () => {
    setModalState({ isOpen: true, type: 'buy' });
  };

  const handleOpenLogin = () => {
    setModalState({ isOpen: true, type: 'login' });
  };

  const handleOpenCourseLogin = () => {
    setModalState({ isOpen: true, type: 'courseLogin' });
  };

  const handlePlayPreview = (title: string) => {
    setModalState({ isOpen: true, type: 'videoPreview', videoTitle: title });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-white text-[#2c2c2c] flex flex-col font-sans-ui selection:bg-[#ebdcc8] selection:text-[#381c10]">
      
      {/* 1. Header / Navbar matching screenshot */}
      <AcharyaNavbar
        onLoginClick={handleOpenLogin}
        onCourseLoginClick={handleOpenCourseLogin}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        
        {/* 2. Top Hero / Banner Card matching screenshot */}
        <AcharyaHeroBanner
          onBuyNowClick={handleOpenBuyNow}
        />

        {/* 3. 3-Column Section matching screenshot */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Have questions about this course? Inquiry Form */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <CourseInquiryForm />
            </div>

            {/* Middle Column: Course Overview & Simple Table of Contents */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <CourseMainContent
                onPlayPreview={handlePlayPreview}
                onBuyNowClick={handleOpenBuyNow}
              />
            </div>

            {/* Right Column: Course Summary Card with BUY NOW */}
            <div className="lg:col-span-3 order-3 lg:order-3">
              <CourseSidebar
                onBuyNowClick={handleOpenBuyNow}
              />
            </div>

          </div>
        </div>

      </main>

      {/* 4. Complete Footer matching screenshot */}
      <AcharyaFooter />

      {/* 5. Floating WhatsApp Button matching screenshot */}
      <WhatsAppButton />

      {/* 6. Sticky Bottom Conversion Ribbon ("Feel CTA" on Scroll) */}
      {showStickyBar && (
        <aside 
          id="sticky-conversion-bar"
          aria-label="Course quick registration bar"
          className="fixed bottom-0 inset-x-0 z-40 bg-[#faeee1]/95 border-t border-[#ebd6c2] backdrop-blur-md py-3 px-4 shadow-xl transition-all animate-in slide-in-from-bottom duration-300"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e8be89] text-[#381c10] flex items-center justify-center font-bold shrink-0">
                ॐ
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold text-[#381c10] flex items-center gap-2">
                  <span>Building Blocks of Astrology: Planets, Signs & Houses</span>
                  <span className="text-[10px] bg-[#381c10] text-white px-2 py-0.5 rounded-full font-semibold">
                    100% FREE
                  </span>
                </div>
                <div className="text-[11px] text-[#6a4f40] flex items-center gap-2">
                  <span>⭐ 4.9/5 (3,450+ Seekers)</span>
                  <span className="hidden sm:inline">• 90 Mins Masterclass</span>
                  <span className="hidden sm:inline">• Free Certificate</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <a
                href="tel:+917300004325"
                className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-[#553b2e] hover:text-[#381c10] px-3 py-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#a2531d]" />
                <span>+91 73000-04325</span>
              </a>

              <button
                onClick={handleOpenBuyNow}
                className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-[#a2531d] hover:bg-[#884214] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>BUY NOW (FREE)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </aside>
      )}

      {/* 7. Interactive Modal for Enrollment, Login, and Previews */}
      <AcharyaModal
        isOpen={modalState.isOpen}
        type={modalState.type}
        videoTitle={modalState.videoTitle}
        onClose={handleCloseModal}
      />

    </div>
  );
}
