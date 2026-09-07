import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LandingNavbar } from './components/landing/LandingNavbar';
import { HeroLanding } from './components/landing/HeroLanding';
import { MetricsStrip } from './components/landing/MetricsStrip';
import { MarsTableOfContents } from './components/landing/MarsTableOfContents';
import { WhyLearnSection } from './components/landing/WhyLearnSection';
import { LearningJourney } from './components/landing/LearningJourney';
import { CourseModulesSection } from './components/landing/CourseModulesSection';
import { MentorBanner } from './components/landing/MentorBanner';
import { StudentTestimonials } from './components/landing/StudentTestimonials';
import { CertificateTocFaq } from './components/landing/CertificateTocFaq';
import { PitruPakshCourseBanner } from './components/landing/PitruPakshCourseBanner';
import { BottomCtaBanner } from './components/landing/BottomCtaBanner';
import { SiteFooter } from './components/landing/SiteFooter';
import { Modals } from './components/landing/Modals';
import { PremiumPageLoader } from './components/ui/PremiumPageLoader';

export default function App() {
  // Modal states
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [demoVideoOpen, setDemoVideoOpen] = useState(false);
  const [certificateOpen, setCertificateOpen] = useState(false);
  const [syllabusOpen, setSyllabusOpen] = useState(false);
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);

  const handleSelectModule = (moduleId: number) => {
    setSelectedModuleId(moduleId);
    setSyllabusOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2c1e16] font-sans-ui selection:bg-[#dfba88]/40 selection:text-[#3b1c0b]">
      {/* Premium Initial Page Reveal / Loader */}
      <PremiumPageLoader />

      {/* 1. Header / Navbar */}
      <LandingNavbar onEnrollClick={() => setEnrollOpen(true)} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* 1. Primary Featured Course: Pitru Paksh Special Masterclass Banner */}
        <PitruPakshCourseBanner
          onBuyNowClick={() => setEnrollOpen(true)}
        />

        {/* 2. 5-Item Metrics Strip with Count-Up Numbers */}
        <MetricsStrip />

        {/* 2.5. Mars (Mangal) Masterclass Table of Contents */}
        <MarsTableOfContents
          onEnrollClick={() => setEnrollOpen(true)}
        />

        {/* 3. Master Vedic Astrology Hero Section with Mouse Parallax & Zodiacs */}
        <HeroLanding
          onEnrollClick={() => setEnrollOpen(true)}
          onWatchDemoClick={() => setDemoVideoOpen(true)}
        />

        {/* 4. Why Learn From Acharya Ganesh? (8 Feature Cards + Guidance CTA) */}
        <WhyLearnSection
          onBookConsultationClick={() => setConsultationOpen(true)}
          onTalkToTeamClick={() => setConsultationOpen(true)}
        />

        {/* 6. Your Learning Journey (7-Step Stepper Flow) */}
        <LearningJourney />

        {/* 7. Course Modules (8 Modules Grid + Interactive Experience Card) */}
        <CourseModulesSection
          onViewFullSyllabus={() => {
            setSelectedModuleId(null);
            setSyllabusOpen(true);
          }}
          onSelectModule={handleSelectModule}
        />

        {/* 8. Meet Your Mentor Banner with Media Logos */}
        <MentorBanner />

        {/* 9. What Our Students Say (4 Testimonial Cards) */}
        <StudentTestimonials />

        {/* 10. Three-Column Section: Certificate Preview | Table of Contents | FAQ */}
        <CertificateTocFaq
          onPreviewCertificate={() => setCertificateOpen(true)}
        />

        {/* 11. Bottom CTA Banner with Quote */}
        <BottomCtaBanner
          onEnrollClick={() => setEnrollOpen(true)}
          onBookConsultationClick={() => setConsultationOpen(true)}
        />
      </motion.main>

      {/* 12. Site Footer */}
      <SiteFooter />

      {/* 13. Interactive Modals (Enrollment, Consultation, Demo Video, Certificate, Syllabus) */}
      <Modals
        enrollOpen={enrollOpen}
        onCloseEnroll={() => setEnrollOpen(false)}
        consultationOpen={consultationOpen}
        onCloseConsultation={() => setConsultationOpen(false)}
        demoVideoOpen={demoVideoOpen}
        onCloseDemoVideo={() => setDemoVideoOpen(false)}
        certificateOpen={certificateOpen}
        onCloseCertificate={() => setCertificateOpen(false)}
        syllabusOpen={syllabusOpen}
        onCloseSyllabus={() => {
          setSyllabusOpen(false);
          setSelectedModuleId(null);
        }}
        selectedModuleId={selectedModuleId}
      />
    </div>
  );
}
