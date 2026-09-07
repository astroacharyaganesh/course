export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'chart-workshop' | 'workbook' | 'meditation';
  isFreePreview?: boolean;
  description?: string;
}

export interface CourseModule {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  phase: 'foundations' | 'interpretation' | 'remedies';
  phaseName: string;
  lessonsCount: number;
  totalDuration: string;
  iconName: string;
  milestoneBadge?: string;
  lessons: Lesson[];
  keyOutcomes: string[];
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  impact: string;
  rating: number;
  avatarSeed: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  originalPrice: string;
  accessDuration: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
