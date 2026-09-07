import { CourseModule, Testimonial, PricingPlan, FaqItem } from '../types';

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'mod-01',
    number: '01',
    title: 'Foundations of Vedic Wisdom',
    subtitle: 'The Cosmic Science & The Karmic Blueprint',
    shortDescription: 'Build a strong understanding of the fundamental concepts before moving into advanced learning.',
    phase: 'foundations',
    phaseName: 'Phase 1: Foundations',
    lessonsCount: 6,
    totalDuration: '4 hrs 45 mins',
    iconName: 'Compass',
    milestoneBadge: 'Core Principles Certified',
    keyOutcomes: [
      'Understand the philosophical roots of Jyotish as the "Eye of the Vedas"',
      'Decode the 4 Purusharthas (Dharma, Artha, Kama, Moksha) in the chart',
      'Learn how the Sidereal Zodiac differs accurately from Western Tropical astrology',
      'Calculate and construct the North and South Indian Kundali layouts with ease'
    ],
    lessons: [
      {
        id: 'l-101',
        title: 'Introduction to Jyotisha: The Eye of the Vedas',
        duration: '32 mins',
        type: 'video',
        isFreePreview: true,
        description: 'Discover how ancient sages perceived light, karma, and time cycles to guide human flourishing.'
      },
      {
        id: 'l-102',
        title: 'Sidereal vs. Tropical Zodiac: The Ayanamsha Reality',
        duration: '40 mins',
        type: 'video',
        description: 'Understand the astronomical precession of equinoxes and why Vedic precision reflects real constellations.'
      },
      {
        id: 'l-103',
        title: 'The 12 Rashis (Zodiac Signs) & Their Elemental Triplicities',
        duration: '55 mins',
        type: 'video',
        description: 'Agni, Prithvi, Vayu, and Jala tattvas — recognizing elemental temperament and personality inclinations.'
      },
      {
        id: 'l-104',
        title: 'How to Read Kundali Formats: North Indian vs. South Indian Style',
        duration: '48 mins',
        type: 'chart-workshop',
        isFreePreview: true,
        description: 'Interactive walk-through of diamond and square chart charts without confusion.'
      },
      {
        id: 'l-105',
        title: 'The 3 Categories of Karma: Sanchita, Prarabdha & Kriyamana',
        duration: '38 mins',
        type: 'video',
        description: 'How free will and cosmic destiny weave together in your birth chart.'
      },
      {
        id: 'l-106',
        title: 'Module 1 Practicum & Sanskrit Astrological Glossary Workbook',
        duration: '30 mins',
        type: 'workbook',
        description: 'Comprehensive 42-page PDF guide, key Sanskrit terminology, and practice birth charts.'
      }
    ]
  },
  {
    id: 'mod-02',
    number: '02',
    title: 'The 12 Bhavas (Houses)',
    subtitle: 'The 12 Domains of Human Incarnation',
    shortDescription: 'Master the architecture of life experiences — mapping health, career, wealth, intimacy, and spiritual liberation.',
    phase: 'foundations',
    phaseName: 'Phase 1: Foundations',
    lessonsCount: 7,
    totalDuration: '6 hrs 15 mins',
    iconName: 'LayoutGrid',
    milestoneBadge: 'House Interpretation Proficiency',
    keyOutcomes: [
      'Master the Kendra (Pillars), Trikona (Fortune), and Dusthana (Obstacle) houses',
      'Assess the Ascendant (Lagna) as the physical gateway of the soul in this lifetime',
      'Analyze 7th House partnerships, 10th House career karma, and 8th House transformations',
      'Learn Bhava Chalit principles: when planets shift houses in real space'
    ],
    lessons: [
      {
        id: 'l-201',
        title: 'The Ascendant (Lagna): Soul Purpose, Vitality & Appearance',
        duration: '52 mins',
        type: 'video',
        isFreePreview: true,
        description: 'The exact rising constellation at birth and how it shapes your physical vessel and life path.'
      },
      {
        id: 'l-202',
        title: 'The Kendra Houses (1, 4, 7, 10): The Pillars of Stability',
        duration: '58 mins',
        type: 'video',
        description: 'Home, career, relationships, and self: navigating the active cardinal forces of life.'
      },
      {
        id: 'l-203',
        title: 'The Trikona Houses (1, 5, 9): Lakshmi Sthanas & Past Merit',
        duration: '45 mins',
        type: 'video',
        description: 'Purva punya, intellect, children, father, guru, and divine blessings.'
      },
      {
        id: 'l-204',
        title: 'The Dusthana & Upachaya Houses (3, 6, 8, 11, 12): Growth through Friction',
        duration: '65 mins',
        type: 'chart-workshop',
        description: 'Transforming health challenges, debts, longevity, foreign travel, and spiritual retreat.'
      },
      {
        id: 'l-205',
        title: 'House Lords in Different Houses: The Chain of Manifestation',
        duration: '60 mins',
        type: 'video',
        description: 'What occurs when the 10th Lord sits in the 9th, or the 2nd Lord sits in the 11th?'
      },
      {
        id: 'l-206',
        title: 'Real Chart Workshop: Analyzing 5 Real Kundalis Step-by-Step',
        duration: '55 mins',
        type: 'chart-workshop',
        description: 'Watch Acharya Ganesh synthesize all 12 houses on live participant charts.'
      },
      {
        id: 'l-207',
        title: 'Bhava Diagnostic Matrix & Self-Assessment Checklist',
        duration: '20 mins',
        type: 'workbook',
        description: 'Quick reference cheat-sheets for every house ruler and karaka.'
      }
    ]
  },
  {
    id: 'mod-03',
    number: '03',
    title: 'The Navagrahas: 9 Celestial Forces',
    subtitle: 'Planetary Archetypes & Their Soul Currents',
    shortDescription: 'Decode the cosmic deities, their dignities, debilities, combustions, retrogrades, and psychological impacts.',
    phase: 'interpretation',
    phaseName: 'Phase 2: Deep Interpretation',
    lessonsCount: 8,
    totalDuration: '7 hrs 30 mins',
    iconName: 'SunMedium',
    milestoneBadge: 'Planetary Dignity Mastered',
    keyOutcomes: [
      'Unpack the Sun (Atma) and Moon (Manas) as the luminaries of conscious and subconscious mind',
      'Understand Mars (Courage), Mercury (Budhi), Jupiter (Guru), Venus (Shukra), and Saturn (Shani)',
      'Demystify the shadowy karmic nodes Rahu & Ketu: obsessive worldly desires and spiritual detachment',
      'Calculate planetary combustion (Asta), retrogression (Vakra), and planetary war (Graha Yuddha)'
    ],
    lessons: [
      {
        id: 'l-301',
        title: 'The Sun (Surya) & The Moon (Chandra): The Soul & The Mind',
        duration: '55 mins',
        type: 'video',
        description: 'Recognizing vital aura, paternal karma, emotional security, and mental tranquility.'
      },
      {
        id: 'l-302',
        title: 'Mars (Mangal) & Saturn (Shani): Warrior Fire & The Karmic Judge',
        duration: '65 mins',
        type: 'video',
        description: 'Discipline, ambition, patience, delays, and moving beyond the fear of Shani Sade Sati.'
      },
      {
        id: 'l-303',
        title: 'Mercury (Budha) & Jupiter (Brihaspati): Intellect & Supreme Wisdom',
        duration: '58 mins',
        type: 'video',
        description: 'Analytical skill, commerce, higher ethics, dharma, and benevolent fortune.'
      },
      {
        id: 'l-304',
        title: 'Venus (Shukra): Refined Arts, Devotion, Wealth & Relationships',
        duration: '48 mins',
        type: 'video',
        description: 'Love language, luxury, creative genius, and spiritual surrender through beauty.'
      },
      {
        id: 'l-305',
        title: 'Rahu & Ketu: The Karmic Eclipse Nodes Explained Without Mythological Fear',
        duration: '72 mins',
        type: 'chart-workshop',
        isFreePreview: true,
        description: 'The cutting-edge psychological perspective on obsession, technology, and spiritual liberation.'
      },
      {
        id: 'l-306',
        title: 'Planetary Aspects (Drishti): Direct, Special & Karmic Gazes',
        duration: '50 mins',
        type: 'video',
        description: 'How planets project their consciousness across houses to modify other planets.'
      },
      {
        id: 'l-307',
        title: 'Combustion, Retrogression, and Exaltation in Real Case Studies',
        duration: '60 mins',
        type: 'chart-workshop',
        description: 'Why a debilitated planet can occasionally produce astounding worldly triumphs (Neecha Bhanga).'
      },
      {
        id: 'l-308',
        title: 'Navagraha Chanting & Archetypal Resonance Meditation Audio',
        duration: '22 mins',
        type: 'meditation',
        description: 'Vocal frequencies and bijas to harmonize your inner planetary archetypes.'
      }
    ]
  },
  {
    id: 'mod-04',
    number: '04',
    title: 'The 27 Nakshatras: Lunar Wisdom',
    subtitle: 'The Subtle Cosmic DNA Behind the Zodiac',
    shortDescription: 'Journey beneath the 12 signs into the 27 primordial lunar mansions governing unconscious drives and destiny patterns.',
    phase: 'interpretation',
    phaseName: 'Phase 2: Deep Interpretation',
    lessonsCount: 7,
    totalDuration: '6 hrs 40 mins',
    iconName: 'Sparkles',
    milestoneBadge: 'Nakshatra Intuition Certified',
    keyOutcomes: [
      'Learn the deities, symbols, and mythological shakti of all 27 nakshatras from Ashwini to Revati',
      'Discover the 4 padas (quarters) and how they connect directly to the Navamsha (D9) chart',
      'Identify soul inclinations, career affinities, and shadow tendencies through your Janma Nakshatra',
      'Read interpersonal compatibility beyond superficial Sun-sign matching'
    ],
    lessons: [
      {
        id: 'l-401',
        title: 'The Secret of Lunar Mansions: Why Nakshatras Are the Real Core of Vedic Astrology',
        duration: '45 mins',
        type: 'video',
        description: 'How the Moon moves ~13°20\' daily and imprints the psyche with profound mythic patterns.'
      },
      {
        id: 'l-402',
        title: 'Ashwini to Ashlesha: The First Cycle of Creation & Primal Energy',
        duration: '70 mins',
        type: 'video',
        description: 'Healing power, stubborn determination, sensory refinement, and the serpent wisdom of Ashlesha.'
      },
      {
        id: 'l-403',
        title: 'Magha to Jyeshtha: The Second Cycle of Regal Power & Deep Trials',
        duration: '75 mins',
        type: 'video',
        description: 'Ancestral blessings, creative devotion, marital contracts, and psychological resilience.'
      },
      {
        id: 'l-404',
        title: 'Mula to Revati: The Third Cycle of Dissolution, Cosmic Truth & Liberation',
        duration: '80 mins',
        type: 'video',
        description: 'Root awakening, cosmic victory, universal humanitarianism, and the final spiritual shore of Revati.'
      },
      {
        id: 'l-405',
        title: 'The 4 Padas & Navamsha (D9) Integration Workshop',
        duration: '60 mins',
        type: 'chart-workshop',
        description: 'How each nakshatra quarter unfolds the hidden soul destiny in your D9 marriage and dharma chart.'
      },
      {
        id: 'l-406',
        title: 'Nakshatra Compatibility (Ashta Kuta Matching) Demystified',
        duration: '50 mins',
        type: 'chart-workshop',
        description: 'Evaluating emotional resonance, sexual compatibility (Yoni), and intellectual kinship.'
      },
      {
        id: 'l-407',
        title: 'The 27 Nakshatras Master Handbook (PDF)',
        duration: '20 mins',
        type: 'workbook',
        description: 'Detailed symbols, ruling deities, animal totems, and auspicious activities for each asterism.'
      }
    ]
  },
  {
    id: 'mod-05',
    number: '05',
    title: 'The Vimshottari Dasha & Cosmic Timing',
    subtitle: 'Mapping Life Transitions with Precision',
    shortDescription: 'Master the 120-year cycle of planetary periods to time career leaps, relationship milestones, and spiritual awakenings.',
    phase: 'remedies',
    phaseName: 'Phase 3: Prediction & Remedies',
    lessonsCount: 7,
    totalDuration: '6 hrs 50 mins',
    iconName: 'Hourglass',
    milestoneBadge: 'Predictive Timing Certified',
    keyOutcomes: [
      'Calculate and interpret Mahadashas, Antardashas, and Pratyantardashas with absolute clarity',
      'Synthesize transits (Gochara) like Jupiter, Saturn, and Rahu/Ketu across the natal chart',
      'Accurately identify turning points in life, career shifts, relocations, and health cycles',
      'Distinguish between internal psychological readiness and external environmental triggering'
    ],
    lessons: [
      {
        id: 'l-501',
        title: 'The Philosophy of Time in Jyotish: The 120-Year Vimshottari Matrix',
        duration: '48 mins',
        type: 'video',
        description: 'Why the Vimshottari system is the crown jewel of predictive timing gifted by Sage Parashara.'
      },
      {
        id: 'l-502',
        title: 'How to Read a Mahadasha: The Ruling Climate of Your Life Chapter',
        duration: '60 mins',
        type: 'video',
        description: 'Analyzing the house placement, lordship, and dignity of the Mahadasha ruler.'
      },
      {
        id: 'l-503',
        title: 'The Antardasha Sub-Periods: When Specific Events Crystalize',
        duration: '65 mins',
        type: 'chart-workshop',
        description: 'The dynamic relationship (6-8, 2-12, or auspicious 5-9) between major and minor period lords.'
      },
      {
        id: 'l-504',
        title: 'Planetary Transits (Gochara): Saturn\'s Sani Sade Sati & Jupiter\'s Grace',
        duration: '75 mins',
        type: 'video',
        description: 'Timing when the planetary clock ticks: marriage, children, business inception, or relocation.'
      },
      {
        id: 'l-505',
        title: 'The Ashtakavarga System: The Objective Numerical Score of House Strength',
        duration: '55 mins',
        type: 'chart-workshop',
        description: 'How to use Bindus to predict whether a transit will produce stellar results or friction.'
      },
      {
        id: 'l-506',
        title: 'Case Study Practicum: Deconstructing 4 Famous Historical & Modern Destinies',
        duration: '70 mins',
        type: 'chart-workshop',
        description: 'See the timeline of Swami Vivekananda, Steve Jobs, and modern entrepreneurs unfold via Dashas.'
      },
      {
        id: 'l-507',
        title: 'Predictive Timing Master Template & Life Timeline Worksheet',
        duration: '25 mins',
        type: 'workbook',
        description: 'Step-by-step 7-question protocol to date any question accurately.'
      }
    ]
  },
  {
    id: 'mod-06',
    number: '06',
    title: 'Remedial Measures & Sacred Upayas',
    subtitle: 'Harmonizing Karma Through Shastric Wisdom',
    shortDescription: 'Transform astrological knowledge into compassionate empowerment through authentic mantras, gemstones, rituals, and conscious living.',
    phase: 'remedies',
    phaseName: 'Phase 3: Prediction & Remedies',
    lessonsCount: 7,
    totalDuration: '5 hrs 40 mins',
    iconName: 'ShieldCheck',
    milestoneBadge: 'Master Practitioner Diploma',
    keyOutcomes: [
      'Understand the true philosophy of remedies: alignment, conscious repentance, and energetic harmonization',
      'Select authentic Vedic mantras, bijas, and Japa counts without dogmatic fear',
      'Learn the safe science of gemstones (Ratna Chikitsa), metals, and planetary hours (Hora)',
      'Conduct compassionate consultations with integrity, ethical boundaries, and uplifting counsel'
    ],
    lessons: [
      {
        id: 'l-601',
        title: 'The True Philosophy of Upayas: We Cannot Escape Karma, But We Can Carry An Umbrella',
        duration: '42 mins',
        type: 'video',
        isFreePreview: true,
        description: 'Acharya Ganesh on avoiding fear-mongering and shifting from superstition to conscious transformation.'
      },
      {
        id: 'l-602',
        title: 'Mantra Chikitsa: Sound Vibration, Bija Mantras & Sacred Japa Protocols',
        duration: '55 mins',
        type: 'video',
        description: 'How sound waves re-pattern brain chemistry and harmonize planetary disharmony.'
      },
      {
        id: 'l-603',
        title: 'Gemstone Science (Ratna): Caution, Rules & How to Avoid Harmful Prescriptions',
        duration: '50 mins',
        type: 'video',
        description: 'Why wearing the wrong gemstone can amplify negative traits and how to properly test a stone.'
      },
      {
        id: 'l-604',
        title: 'Dan (Charity) & Seva: The Most Potent Remedy for Afflicted Planets',
        duration: '45 mins',
        type: 'video',
        description: 'Specific selfless offerings for Saturn (elderly), Mercury (green pastures/students), Rahu (sweepers).'
      },
      {
        id: 'l-605',
        title: 'Ethics of an Astrological Counselor: Sacred Duty, Compassion & Boundaries',
        duration: '50 mins',
        type: 'video',
        description: 'How to communicate sensitive truths about death, health, and divorce with grace and hope.'
      },
      {
        id: 'l-606',
        title: 'Final Capstone Project: Comprehensive Analysis of an Unseen Birth Chart',
        duration: '60 mins',
        type: 'chart-workshop',
        description: 'Submit your full written synthesis and video review for Acharya Ganesh\'s teaching team evaluation.'
      },
      {
        id: 'l-607',
        title: 'Course Graduation Ceremony & Official Certification Walkthrough',
        duration: '38 mins',
        type: 'video',
        description: 'Receiving your verified credential, joining the exclusive alumni sangha, and ongoing masterminds.'
      }
    ]
  }
];

export const TRUST_INDICATORS = [
  {
    icon: 'GraduationCap',
    title: 'Guided by Acharya Ganesh',
    description: 'Direct transmission from an authentic Vedic astrologer with over 15 years of shastric teaching.'
  },
  {
    icon: 'Layers',
    title: 'Structured 6-Phase Curriculum',
    description: '41 exhaustive lessons systematically advancing from absolute beginner to confident chart interpreter.'
  },
  {
    icon: 'CheckCircle2',
    title: 'Practical Case-Study Learning',
    description: 'Learn through real-world birth charts and hands-on interpretation worksheets, not mere abstract theory.'
  },
  {
    icon: 'Clock',
    title: 'Learn at Your Own Pace',
    description: 'Lifetime access with downloadable workbooks, mobile playback, and bi-weekly live mentor sessions.'
  }
];

export const TRANSFORMATION_POINTS = [
  {
    before: 'Confused by conflicting astrology books, contradictory rules, and fear-based predictions',
    after: 'Grounded in authentic Parashari shastras with a clear, logical step-by-step chart interpretation framework'
  },
  {
    before: 'Relying on generic newspaper horoscopes or automated computer-generated reports that lack soul',
    after: 'Capable of looking at any birth chart and immediately discerning the native’s soul purpose, strengths, and life blocks'
  },
  {
    before: 'Helpless in the face of sudden life crises, difficult transits (Sade Sati), or relationship friction',
    after: 'Empowered with precise astrological timing (Dashas) and time-tested remedial upayas to harmonize challenges'
  },
  {
    before: 'Hesitant to guide family or seekers due to fear of giving incorrect astrological counsel',
    after: 'Equipped with ethical counseling wisdom, compassionate presence, and recognized certification'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Radhika Sharma',
    role: 'Cardiologist & Spiritual Aspirant',
    location: 'New Delhi, India',
    quote: 'As a medical doctor, I approached Vedic astrology with deep skepticism. Acharya Ganesh’s scientific, methodical, and profoundly spiritual teaching blew my reservations away. The curriculum is impeccably structured, devoid of superstition, and filled with deep truth.',
    impact: 'Decoded her entire family lineage charts with 100% accuracy and clarity.',
    rating: 5,
    avatarSeed: 'radhika'
  },
  {
    id: 'test-2',
    name: 'Vikramaditya Iyer',
    role: 'Senior Tech Lead & Entrepreneur',
    location: 'Bangalore & Singapore',
    quote: 'Most online astrology courses are either too superficial or hopelessly disorganized. Acharya Ganesh has distilled 15 years of deep research into a masterwork. The modules on Nakshatras and Vimshottari Dashas are worth ten times the tuition.',
    impact: 'Navigated major startup transition timing precisely aligned with his Jupiter Dasha.',
    rating: 5,
    avatarSeed: 'vikram'
  },
  {
    id: 'test-3',
    name: 'Ananya Deshmukh',
    role: 'Yoga Therapist & Holistic Counselor',
    location: 'Pune, India',
    quote: 'Acharya ji teaches with such boundless patience, warmth, and fatherly wisdom. I now incorporate birth chart analysis into my wellness therapy practice. My clients feel deeply understood and transformed by the remedies he taught.',
    impact: 'Established a thriving holistic counseling practice with over 80 regular clients.',
    rating: 5,
    avatarSeed: 'ananya'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'self-paced',
    name: 'Self-Paced Seeker',
    price: '₹14,999',
    originalPrice: '₹24,999',
    accessDuration: 'Lifetime On-Demand Access',
    description: 'Perfect for dedicated individuals who want to absorb sacred Vedic astrology at their own rhythm with complete video modules and workbooks.',
    features: [
      'All 6 Comprehensive Course Modules (41+ Video Lessons)',
      '38+ Hours of High-Definition Shastric Instruction',
      'Downloadable Sanskrit Chart Analysis Workbooks (200+ Pages)',
      'Navagraha Mantra & Meditation Audio Transmissions',
      'Interactive Quizzes & Case Study Practice Sets',
      'Official Certificate of Completion signed by Acharya Ganesh',
      'Private Student Community Discussion Forum'
    ],
    popular: false
  },
  {
    id: 'guided-cohort',
    name: 'Mastery Mentorship Cohort',
    badge: 'Most Popular & Recommended',
    price: '₹24,999',
    originalPrice: '₹39,999',
    accessDuration: 'Lifetime Access + 6 Months Live Mentorship',
    description: 'The ultimate immersion. Everything in Self-Paced plus bi-weekly live Zoom Q&As with Acharya Ganesh, personal birth chart audit, and priority review.',
    features: [
      'Everything included in Self-Paced Seeker',
      '12 Bi-Weekly Live Masterclasses & Interactive Chart Q&A with Acharya Ganesh',
      'One-on-One Personal Birth Chart Review by Senior Astrological Faculty',
      'Capstone Project Mentorship & Dedicated Grading Feedback',
      'Master Practitioner Verified Diploma with Public Verification Badge',
      'VIP Access to Acharya Ganesh\'s Exclusive Research Almanac',
      'Direct WhatsApp Mentorship Study Group Access'
    ],
    popular: true
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Do I need prior knowledge of Sanskrit or astrology to join?',
    answer: 'None at all. The course is meticulously designed starting with foundational concepts in Phase 1. Every Sanskrit term (Graha, Bhava, Rashi, Dasha) is explained with clear translations, modern analogies, and visual diagrams. Whether you are an absolute beginner or have read books for years, you will find clarity and structure.'
  },
  {
    question: 'How is this course different from free YouTube videos or standard LMS courses?',
    answer: 'Standard platforms offer fragmented snippets that frequently contradict each other and leave learners anxious or confused. Acharya Ganesh provides an authentic, unbroken shastric lineage systematized into a progressive 6-phase master framework. You learn how to synthesize the entire chart harmoniously, not just memorize isolated planet placements.'
  },
  {
    question: 'How much time do I need to invest each week?',
    answer: 'The course is self-paced. Most seekers dedicate 3 to 4 hours per week (2 hours watching lessons, 1 to 2 hours practicing on family and sample charts). You enjoy lifetime access, so you can pause or revisit any lesson whenever life demands.'
  },
  {
    question: 'Will I be able to read real birth charts upon completion?',
    answer: 'Yes! Practical chart interpretation is integrated from Module 2 onward. By the end of Module 5 and 6, you will have analyzed dozens of real kundalis and have the exact step-by-step checklist to delineate any birth chart with accuracy, empathy, and ethical depth.'
  },
  {
    question: 'What if I have doubts or get stuck on a difficult chart?',
    answer: 'You will have access to our private seeker community where you can post charts and questions. In the Mentorship Cohort tier, Acharya Ganesh and senior faculty host live interactive sessions twice a month to answer your questions in real time.'
  },
  {
    question: 'Is there a refund policy or guarantee?',
    answer: 'Yes. We offer a 14-day 100% sacred satisfaction guarantee. Explore the first two modules, examine the workbooks, and if you do not feel a profound upgrade in your astrological understanding, simply email our team for a courteous refund with no awkward questions.'
  }
];
