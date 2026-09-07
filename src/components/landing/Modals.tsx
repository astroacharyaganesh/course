import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Clock, 
  Award, 
  Play, 
  BookOpen, 
  Lock, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface ModalsProps {
  enrollOpen: boolean;
  onCloseEnroll: () => void;
  consultationOpen: boolean;
  onCloseConsultation: () => void;
  demoVideoOpen: boolean;
  onCloseDemoVideo: () => void;
  certificateOpen: boolean;
  onCloseCertificate: () => void;
  syllabusOpen: boolean;
  onCloseSyllabus: () => void;
  selectedModuleId?: number | null;
}

export const Modals: React.FC<ModalsProps> = ({
  enrollOpen,
  onCloseEnroll,
  consultationOpen,
  onCloseConsultation,
  demoVideoOpen,
  onCloseDemoVideo,
  certificateOpen,
  onCloseCertificate,
  syllabusOpen,
  onCloseSyllabus,
  selectedModuleId,
}) => {
  // Enrollment Form State
  const [enrollSubmitted, setEnrollSubmitted] = useState(false);
  const [enrollData, setEnrollData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Pitru Paksh Course — Ancestral Karma & Pitru Dosh (Special ₹1,500)',
    experience: 'Beginner',
  });

  // Consultation Form State
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [consultData, setConsultData] = useState({
    name: '',
    phone: '',
    service: 'Career & Business Astrology',
    preferredDate: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    notes: '',
  });

  const fullCurriculum = [
    {
      id: 1,
      title: 'Module 1: Introduction to Vedic Astrology & Cosmic Blueprint',
      lessons: [
        'Cosmic Origins & Philosophy of Jyotish Shastra',
        'Astronomy of the Kundli: The Earth, Sun & Zodiac Band',
        'North Indian vs. South Indian Chart Formats',
        'Lagna (Ascendant): The Sacred First House of Destiny',
        'Calculating and Reading the Ascendant Degree',
      ],
    },
    {
      id: 2,
      title: 'Module 2: The 9 Planets (Navagrahas) & 12 Zodiac Signs (Rashis)',
      lessons: [
        'Sun & Moon: The Soul (Atma) and Mind (Manas)',
        'Mars & Mercury: Courage, Intellect & Communication',
        'Jupiter & Venus: Wisdom, Prosperity & Relationships',
        'Saturn, Rahu & Ketu: Karma, Desires & Spiritual Liberation',
        'The 12 Rashis: Elements (Fire, Earth, Air, Water) & Modalities',
        'Exaltation, Debilitation, Moolatrikona & Natural Friendships',
      ],
    },
    {
      id: 3,
      title: 'Module 3: The 12 Houses (Bhavas) & Planetary Aspects (Drishti)',
      lessons: [
        'Kendra Houses (1, 4, 7, 10): The Pillars of Life',
        'Trikona Houses (1, 5, 9): The Auspicious Lakshmi Sthanas',
        'Dusthana Houses (6, 8, 12): Obstacles, Transformations & Moksha',
        'Upachaya Houses (3, 6, 10, 11): Growth Through Time',
        'Special Planetary Aspects: Mars (4, 7, 8), Jupiter (5, 7, 9), Saturn (3, 7, 10)',
      ],
    },
    {
      id: 4,
      title: 'Module 4: Vimshottari Dasha System & Planetary Transits (Gochara)',
      lessons: [
        'Structure of the 120-Year Vimshottari Dasha Cycle',
        'Calculating Mahadasha, Antardasha & Pratyantardasha',
        'How Planetary Dasha Activates Specific House Results',
        'Transit of Major Planets: Saturn Sade Sati & Jupiter Transits',
        'Ashtakavarga Matrix: Measuring House Strength Numerically',
      ],
    },
    {
      id: 5,
      title: 'Module 5: Horoscope Analysis & Classical Planetary Yogas',
      lessons: [
        'Raja Yogas: Combinations for Leadership & Fame',
        'Dhana Yogas: Wealth, Assets & Financial Abundance',
        'Pancha Mahapurusha Yogas: Ruchaka, Bhadra, Hamsa, Malavya, Sasa',
        'Vipareeta Raja Yogas: Turning Adversity into Triumph',
        'Combustion (Asta), Retrograde (Vakra) & Planetary War (Graha Yuddha)',
      ],
    },
    {
      id: 6,
      title: 'Module 6: Predictive Methodology & Authentic Vedic Remedies',
      lessons: [
        'Timing Marriage & Relationship Compatibility (Kundli Milan)',
        'Timing Career Breakthroughs, Promotion & Business Ventures',
        'Health Vulnerabilities & Medical Astrology Principles',
        'Authentic Vedic Remedies: Mantras, Gemstone Therapy, Yantras & Charity',
        'Karmic Neutralization vs. Superstition: The Ethical Approach',
      ],
    },
    {
      id: 7,
      title: 'Module 7: Krishnamurti Paddhati (KP) Astrology Fundamentals',
      lessons: [
        'Sub-Lord Theory: Dividing Nakshatras into Micro Rulers',
        'Placidus House Division & Cuspal Sub-Lords',
        'Ruling Planets Method for Instant Horary Queries (Prashna)',
        'Combining Parashari and KP for Pinpoint Timing',
      ],
    },
    {
      id: 8,
      title: 'Module 8: Practical Consultation Mastery & Professional Ethics',
      lessons: [
        'Live Real-Chart Case Studies with Acharya Ganesh',
        'Structuring a 45-Minute Client Consultation Session',
        'Ethical Boundaries: Communicating Difficult Planetary Periods',
        'Astrology Software Tools, Kundli Generation & Report Writing',
        'Establishing Your Independent Astrology Practice',
      ],
    },
  ];

  return (
    <>
      {/* 1. ENROLLMENT MODAL */}
      {enrollOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0e1626] border border-[#273752] text-white p-6 sm:p-8 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={onCloseEnroll}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-[#182337] text-[#94a3b8] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {enrollSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#dfa344]/20 text-[#dfa344] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-white">
                  Enrollment Successful!
                </h3>
                <p className="text-sm text-[#94a3b8] max-w-sm mx-auto">
                  Welcome to Acharya Ganesh Academy, <strong>{enrollData.name}</strong>. Your seat for <strong>{enrollData.course}</strong> is confirmed. Our academic counselor will contact you at <strong>{enrollData.phone}</strong> with your learning portal credentials.
                </p>
                <button
                  onClick={() => {
                    setEnrollSubmitted(false);
                    onCloseEnroll();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#dfa344] text-[#1a1004] font-bold text-xs uppercase"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182337] border border-[#dfa344]/40 text-[#f3cf8a] text-[11px] font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Limited Seats Available</span>
                  </div>
                  <h3 className="font-cinzel text-2xl font-bold text-white">
                    Enroll in Vedic Astrology Course
                  </h3>
                  <p className="text-xs text-[#94a3b8] mt-1">
                    Master the sacred science under Celebrity Astrologer Acharya Ganesh.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setEnrollSubmitted(true);
                  }}
                  className="space-y-3.5"
                >
                  <div>
                    <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aditi Sharma"
                      value={enrollData.name}
                      onChange={(e) => setEnrollData({ ...enrollData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141e30] border border-[#263753] text-white text-xs placeholder:text-[#64748b] focus:outline-none focus:border-[#dfa344]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={enrollData.email}
                        onChange={(e) => setEnrollData({ ...enrollData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141e30] border border-[#263753] text-white text-xs placeholder:text-[#64748b] focus:outline-none focus:border-[#dfa344]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={enrollData.phone}
                        onChange={(e) => setEnrollData({ ...enrollData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#141e30] border border-[#263753] text-white text-xs placeholder:text-[#64748b] focus:outline-none focus:border-[#dfa344]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                      Selected Course *
                    </label>
                    <select
                      value={enrollData.course}
                      onChange={(e) => setEnrollData({ ...enrollData, course: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141e30] border border-[#263753] text-[#f3cf8a] text-xs font-semibold focus:outline-none focus:border-[#dfa344]"
                    >
                      <option value="Pitru Paksh Course — Ancestral Karma & Pitru Dosh (Special ₹1,500)">
                        Pitru Paksh Course (Special Offer — ₹1,500)
                      </option>
                      <option value="Certified Vedic Astrology Mastercourse (Complete 8-Module Certification)">
                        Certified Vedic Astrology Mastercourse (Full Certification)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                      Prior Astrology Knowledge
                    </label>
                    <select
                      value={enrollData.experience}
                      onChange={(e) => setEnrollData({ ...enrollData, experience: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141e30] border border-[#263753] text-white text-xs focus:outline-none focus:border-[#dfa344]"
                    >
                      <option value="Beginner">Beginner (Zero prior knowledge)</option>
                      <option value="Intermediate">Intermediate (Know basic planets & signs)</option>
                      <option value="Practicing">Practitioner (Seeking professional prediction mastery)</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#e5b35a] via-[#dfa344] to-[#c6892e] text-[#1e1003] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-transform cursor-pointer"
                    >
                      Confirm Enrollment & Reserve Seat
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-[#94a3b8] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#dfa344]" />
                    <span>100% Confidential • Instant Confirmation • Lifetime Access</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. CONSULTATION MODAL */}
      {consultationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0e1626] border border-[#273752] text-white p-6 sm:p-8 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={onCloseConsultation}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-[#182337] text-[#94a3b8] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {consultSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#dfa344]/20 text-[#dfa344] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-white">
                  Consultation Request Received!
                </h3>
                <p className="text-sm text-[#94a3b8] max-w-sm mx-auto">
                  Thank you, <strong>{consultData.name}</strong>. Acharya Ganesh's coordination office will call you at <strong>{consultData.phone}</strong> to confirm your slot for {consultData.service}.
                </p>
                <button
                  onClick={() => {
                    setConsultSubmitted(false);
                    onCloseConsultation();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#dfa344] text-[#1a1004] font-bold text-xs uppercase"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182337] border border-[#dfa344]/40 text-[#f3cf8a] text-[11px] font-bold uppercase tracking-wider mb-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>Personal 1-on-1 Mentorship</span>
                  </div>
                  <h3 className="font-cinzel text-2xl font-bold text-white">
                    Book Consultation with Acharya Ganesh
                  </h3>
                  <p className="text-xs text-[#94a3b8] mt-1">
                    Get clear, confidential answers and personalized guidance for career, marriage, or life direction.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setConsultSubmitted(true);
                  }}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={consultData.name}
                        onChange={(e) => setConsultData({ ...consultData, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#141e30] border border-[#263753] text-white text-xs placeholder:text-[#64748b] focus:outline-none focus:border-[#dfa344]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98960 43710"
                        value={consultData.phone}
                        onChange={(e) => setConsultData({ ...consultData, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#141e30] border border-[#263753] text-white text-xs placeholder:text-[#64748b] focus:outline-none focus:border-[#dfa344]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                      Consultation Focus
                    </label>
                    <select
                      value={consultData.service}
                      onChange={(e) => setConsultData({ ...consultData, service: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#141e30] border border-[#263753] text-white text-xs focus:outline-none focus:border-[#dfa344]"
                    >
                      <option value="Course Guidance">Which Astrology Course is Right for Me?</option>
                      <option value="Career & Business Astrology">Career & Business Astrology</option>
                      <option value="Marriage & Kundli Milan">Marriage & Relationship Compatibility</option>
                      <option value="Holistic Life & Remedies">Holistic Life Reading & Vedic Remedies</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={consultData.preferredDate}
                        onChange={(e) => setConsultData({ ...consultData, preferredDate: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#141e30] border border-[#263753] text-white text-xs focus:outline-none focus:border-[#dfa344]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#cbd5e1] mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={consultData.timeSlot}
                        onChange={(e) => setConsultData({ ...consultData, timeSlot: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-[#141e30] border border-[#263753] text-white text-xs focus:outline-none focus:border-[#dfa344]"
                      >
                        <option value="Morning">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
                        <option value="Evening">Evening (6:00 PM - 8:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-gradient-to-r from-[#e5b35a] via-[#dfa344] to-[#c6892e] text-[#1e1003] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-transform cursor-pointer"
                    >
                      Book 1-on-1 Consultation Slot
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. DEMO VIDEO MODAL */}
      {demoVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#090f1c] border border-[#24334f] text-white p-6 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-[#1b273d]">
              <div>
                <span className="text-[10px] text-[#e8b560] uppercase font-bold tracking-wider">
                  Masterclass Sample Video
                </span>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
                  Acharya Ganesh — How to Read Planets, Signs & Houses
                </h3>
              </div>
              <button
                onClick={onCloseDemoVideo}
                className="p-1.5 rounded-full bg-[#162035] text-[#94a3b8] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Placeholder with High Quality Artwork */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black my-4 border border-[#24334f] flex items-center justify-center group">
              <img
                src="/src/assets/images/vedic_sacred_chart_178877652377.jpg"
                alt="Demo Astrology Lesson"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#dfa344] hover:bg-[#e8b560] text-[#1a1004] flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <div className="text-xs text-[#f1f5f9] font-medium bg-black/60 px-3 py-1 rounded-full border border-white/20">
                  Click to Play 15-Min Free Introductory Lecture
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#cbd5e1]">
                <span>Topic: The 12 Houses (Bhavas) of Horoscope</span>
                <span>Language: Hindi / English</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-[#94a3b8]">
                Ready to begin the complete certified course?
              </span>
              <button
                onClick={() => {
                  onCloseDemoVideo();
                }}
                className="px-5 py-2 rounded-full bg-[#dfa344] text-[#1a1004] font-bold text-xs uppercase"
              >
                Enroll in Full Course
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. CERTIFICATE PREVIEW MODAL */}
      {certificateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#090f1c] border border-[#24334f] text-white p-6 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-[#1b273d]">
              <div>
                <span className="text-[10px] text-[#e8b560] uppercase font-bold tracking-wider">
                  Official Credential
                </span>
                <h3 className="font-cinzel text-lg font-bold text-white">
                  Acharya Ganesh Academy Certificate of Completion
                </h3>
              </div>
              <button
                onClick={onCloseCertificate}
                className="p-1.5 rounded-full bg-[#162035] text-[#94a3b8] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-4 rounded-2xl overflow-hidden border-2 border-[#dfcaa6] shadow-xl bg-white">
              <img
                src="/src/assets/images/astrology_certificate_1788776431031.jpg"
                alt="Acharya Ganesh Certificate of Completion Full View"
                className="w-full object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#94a3b8]">
              <div className="flex items-center gap-1.5 text-[#e8b560]">
                <ShieldCheck className="w-4 h-4" />
                <span>QR-code verifiable & signed by Acharya Ganesh</span>
              </div>
              <button
                onClick={onCloseCertificate}
                className="px-5 py-2 rounded-full bg-[#dfa344] text-[#1a1004] font-bold text-xs uppercase"
              >
                Back to Syllabus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. FULL SYLLABUS MODAL */}
      {syllabusOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[85vh] rounded-3xl bg-[#0e1626] border border-[#273752] text-white p-6 sm:p-8 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-[#1f2b40] shrink-0">
              <div>
                <span className="text-[10px] text-[#e8b560] uppercase font-bold tracking-wider">
                  Curriculum Breakdown
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                  Complete Course Syllabus (8 Modules • 100+ Lessons)
                </h3>
              </div>
              <button
                onClick={onCloseSyllabus}
                className="p-1.5 rounded-full bg-[#182337] text-[#94a3b8] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable list of all modules */}
            <div className="overflow-y-auto space-y-4 my-4 pr-2">
              {fullCurriculum.map((mod) => (
                <div
                  key={mod.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    selectedModuleId === mod.id
                      ? 'bg-[#18253d] border-[#dfa344]'
                      : 'bg-[#111a2d] border-[#22314d]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-[#dfa344]" />
                    <h4 className="font-bold text-sm text-white">
                      {mod.title}
                    </h4>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#94a3b8] pl-6 list-disc">
                    {mod.lessons.map((lesson, lIdx) => (
                      <li key={lIdx} className="leading-relaxed">
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#1f2b40] flex items-center justify-between shrink-0">
              <span className="text-xs text-[#94a3b8]">
                Includes downloadable PDFs & homework charts
              </span>
              <button
                onClick={onCloseSyllabus}
                className="px-6 py-2.5 rounded-full bg-[#dfa344] text-[#1a1004] font-bold text-xs uppercase"
              >
                Close Syllabus
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
