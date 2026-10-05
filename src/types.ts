export type PageView = 
  | 'home' 
  | 'services' 
  | 'contact' 
  | 'track' 
  | 'testimonials' 
  | 'faq' 
  | 'privacy'
  | 'refund';

export interface ServiceItem {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  description: string;
  startingPrice: number;
  durationMinutes: number;
  rating: number;
  reviewCount: number;
  popular?: boolean;
  iconName: string;
  gradient: string;
  inclusions: string[];
  pricingTiers: {
    tier: 'Basic' | 'Standard Pro' | 'Premium Care';
    price: number;
    highlights: string[];
  }[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  colorGradient: string;
  bgLight: string;
  badgeText: string;
  serviceCount: number;
  featuredServices: ServiceItem[];
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  gradient: string;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  serviceUsed: string;
  rating: number;
  date: string;
  comment: string;
  avatarUrl: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'pricing' | 'safety' | 'app';
}
