import { ServiceCategory, ServiceItem, PricingPlan, Testimonial, FAQItem } from '../types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'ac-appliance',
    name: 'AC & Appliance Repair',
    tagline: 'Expert diagnostics, servicing, and installation with 30-day warranty',
    iconName: 'Wrench',
    colorGradient: 'from-blue-600 to-indigo-600',
    bgLight: 'bg-blue-50/80 text-blue-700 border-blue-100',
    badgeText: 'Most Requested',
    serviceCount: 14,
    featuredServices: [
      {
        id: 'ac-foam-jet',
        name: 'AC Deep Jet Servicing',
        categoryId: 'ac-appliance',
        categoryName: 'AC & Appliance Repair',
        description: '2X deeper cleaning with foam jet tech for max cooling & energy savings.',
        startingPrice: 499,
        durationMinutes: 60,
        rating: 4.9,
        reviewCount: 1840,
        popular: true,
        iconName: 'Wind',
        gradient: 'from-blue-500 to-cyan-500',
        inclusions: ['High-pressure foam wash', 'Gas pressure check', 'Air filter replacement', '30-day performance guarantee'],
        pricingTiers: [
          { tier: 'Basic', price: 499, highlights: ['Standard pressure wash', 'Filter cleaning', 'Basic health check'] },
          { tier: 'Standard Pro', price: 699, highlights: ['2X Foam Jet wash', 'Anti-bacterial coating', 'Free gas check', '30-day warranty'] },
          { tier: 'Premium Care', price: 999, highlights: ['Comprehensive foam jet', 'Refrigerant top-up (up to 20%)', 'PCB check', '90-day warranty'] }
        ]
      },
      {
        id: 'washing-machine-repair',
        name: 'Washing Machine Repair & Service',
        categoryId: 'ac-appliance',
        categoryName: 'AC & Appliance Repair',
        description: 'Diagnosis for motor noise, spin issues, water leaks, and PCB faults.',
        startingPrice: 349,
        durationMinutes: 45,
        rating: 4.8,
        reviewCount: 920,
        iconName: 'RotateCcw',
        gradient: 'from-indigo-500 to-blue-600',
        inclusions: ['Complete inspection', 'Drum descale treatment', 'Drain pipe flushing', 'Genuine parts warranty'],
        pricingTiers: [
          { tier: 'Basic', price: 349, highlights: ['Inspection & diagnosis', 'Filter flush'] },
          { tier: 'Standard Pro', price: 549, highlights: ['Full diagnostic', 'Descaling treatment', '30-day service warranty'] },
          { tier: 'Premium Care', price: 849, highlights: ['Full service', 'Belt/valve replacement support', '60-day warranty'] }
        ]
      },
      {
        id: 'refrigerator-service',
        name: 'Refrigerator Repair & Gas Refill',
        categoryId: 'ac-appliance',
        categoryName: 'AC & Appliance Repair',
        description: 'Instant cooling restoration, compressor check, and leak sealing.',
        startingPrice: 449,
        durationMinutes: 60,
        rating: 4.85,
        reviewCount: 1100,
        iconName: 'Refrigerator',
        gradient: 'from-cyan-600 to-teal-600',
        inclusions: ['Compressor test', 'Thermostat inspection', 'Leak repair', 'Gas refill available'],
        pricingTiers: [
          { tier: 'Basic', price: 449, highlights: ['Diagnostic & leak test'] },
          { tier: 'Standard Pro', price: 749, highlights: ['Full service + R134/R600 gas top-up', '30-day warranty'] },
          { tier: 'Premium Care', price: 1099, highlights: ['Full gas recharge + Relay replace', '90-day warranty'] }
        ]
      }
    ]
  },
  {
    id: 'house-cleaning',
    name: 'Deep House Cleaning',
    tagline: 'Hospital-grade sanitized cleaning for kitchens, bathrooms, & full homes',
    iconName: 'Sparkles',
    colorGradient: 'from-emerald-600 to-teal-600',
    bgLight: 'bg-emerald-50/80 text-emerald-700 border-emerald-100',
    badgeText: 'Trending',
    serviceCount: 18,
    featuredServices: [
      {
        id: 'full-home-deep-clean',
        name: 'Full Home Deep Sanitization',
        categoryId: 'house-cleaning',
        categoryName: 'Deep House Cleaning',
        description: '360° deep scrub for floors, walls, cabinets, windows, and balcony.',
        startingPrice: 1299,
        durationMinutes: 240,
        rating: 4.95,
        reviewCount: 3200,
        popular: true,
        iconName: 'Home',
        gradient: 'from-emerald-500 to-teal-600',
        inclusions: ['Single/Multi-bedroom options', 'Mechanized floor scrubbing', 'Kitchen grease degreasing', 'Bathroom descaling'],
        pricingTiers: [
          { tier: 'Basic', price: 1299, highlights: ['1-2 BHK essential scrub', 'Dusting & vacuuming'] },
          { tier: 'Standard Pro', price: 1899, highlights: ['3 BHK complete deep clean', 'Kitchen degreasing', 'Bathroom acid-free descaling'] },
          { tier: 'Premium Care', price: 2499, highlights: ['4+ BHK luxury deep clean', 'Sofa & mattress steam sanitization', 'Window glass polish'] }
        ]
      },
      {
        id: 'bathroom-deep-clean',
        name: 'Bathroom Deep Cleaning & Mold Removal',
        categoryId: 'house-cleaning',
        categoryName: 'Deep House Cleaning',
        description: 'Hard water stain removal, grout scrubbing, and chrome fitting shine.',
        startingPrice: 299,
        durationMinutes: 45,
        rating: 4.88,
        reviewCount: 1450,
        iconName: 'ShowerHead',
        gradient: 'from-teal-500 to-emerald-600',
        inclusions: ['Tile stain scrubbing', 'Shower head descaling', 'Mirror & glass polish', 'Disinfectant mist'],
        pricingTiers: [
          { tier: 'Basic', price: 299, highlights: ['1 Bathroom standard scrub'] },
          { tier: 'Standard Pro', price: 499, highlights: ['2 Bathrooms deep scrub', 'Hard water stain removal'] },
          { tier: 'Premium Care', price: 699, highlights: ['3 Bathrooms deep scrub', 'Anti-fungal shield coating'] }
        ]
      }
    ]
  },
  {
    id: 'electrical-lighting',
    name: 'Electrical & Lighting',
    tagline: 'Certified electricians for wiring, circuit breakers, lights, & smart devices',
    iconName: 'Zap',
    colorGradient: 'from-amber-500 to-orange-600',
    bgLight: 'bg-amber-50/80 text-amber-700 border-amber-100',
    badgeText: 'Verified Pros',
    serviceCount: 22,
    featuredServices: [
      {
        id: 'fan-light-installation',
        name: 'Fan, Chandelier & Light Fitting',
        categoryId: 'electrical-lighting',
        categoryName: 'Electrical & Lighting',
        description: 'Safe ceiling fan mounting, decorative light fixtures, and smart switches.',
        startingPrice: 199,
        durationMinutes: 30,
        rating: 4.9,
        reviewCount: 2100,
        popular: true,
        iconName: 'Lightbulb',
        gradient: 'from-amber-500 to-yellow-500',
        inclusions: ['Safely isolated wiring', 'Heavy ceiling hook check', 'Switchboard testing'],
        pricingTiers: [
          { tier: 'Basic', price: 199, highlights: ['Up to 2 light/fan fittings'] },
          { tier: 'Standard Pro', price: 399, highlights: ['Up to 5 light/fan fittings', 'MCB safety check'] },
          { tier: 'Premium Care', price: 699, highlights: ['Whole room re-wiring & smart switch setup'] }
        ]
      },
      {
        id: 'mcb-short-circuit',
        name: 'MCB Repair & Fuse Short Circuit Fix',
        categoryId: 'electrical-lighting',
        categoryName: 'Electrical & Lighting',
        description: 'Urgent troubleshooting for tripping breakers, burning smells, or power loss.',
        startingPrice: 249,
        durationMinutes: 40,
        rating: 4.92,
        reviewCount: 880,
        iconName: 'ShieldAlert',
        gradient: 'from-orange-500 to-amber-600',
        inclusions: ['Thermal leak detection', 'Circuit load balance check', 'MCB replacement labor'],
        pricingTiers: [
          { tier: 'Basic', price: 249, highlights: ['Diagnostic & minor fuse repair'] },
          { tier: 'Standard Pro', price: 449, highlights: ['MCB breaker replacement + testing'] },
          { tier: 'Premium Care', price: 799, highlights: ['Whole house load audit & main board upgrade labor'] }
        ]
      }
    ]
  },
  {
    id: 'plumbing-sanitary',
    name: 'Plumbing & Sanitary',
    tagline: 'Quick leak repair, tap replacement, drainage clearance, & tank cleaning',
    iconName: 'Droplets',
    colorGradient: 'from-cyan-600 to-blue-700',
    bgLight: 'bg-cyan-50/80 text-cyan-700 border-cyan-100',
    badgeText: 'Instant Booking',
    serviceCount: 16,
    featuredServices: [
      {
        id: 'leakage-tap-repair',
        name: 'Tap & Pipe Leakage Repair',
        categoryId: 'plumbing-sanitary',
        categoryName: 'Plumbing & Sanitary',
        description: 'Fix dripping faucets, concealed wall leaks, and water pressure issues.',
        startingPrice: 219,
        durationMinutes: 30,
        rating: 4.87,
        reviewCount: 1620,
        popular: true,
        iconName: 'Droplet',
        gradient: 'from-cyan-500 to-blue-600',
        inclusions: ['Washer & spindle replacement', 'Thread sealing', 'Pressure check'],
        pricingTiers: [
          { tier: 'Basic', price: 219, highlights: ['Fix 1 tap/valve leak'] },
          { tier: 'Standard Pro', price: 419, highlights: ['Fix up to 3 leaks', 'Includes washer kits'] },
          { tier: 'Premium Care', price: 749, highlights: ['Whole bathroom plumbing health overhaul'] }
        ]
      },
      {
        id: 'drainage-blockage',
        name: 'Drain Unblocking & Clog Clearance',
        categoryId: 'plumbing-sanitary',
        categoryName: 'Plumbing & Sanitary',
        description: 'Mechanized drain snake clearance for kitchen sinks and bathroom drains.',
        startingPrice: 299,
        durationMinutes: 45,
        rating: 4.84,
        reviewCount: 970,
        iconName: 'Disc',
        gradient: 'from-blue-600 to-cyan-700',
        inclusions: ['High-torque drain auger', 'Bio-enzyme pipe flush', 'Odor neutralization'],
        pricingTiers: [
          { tier: 'Basic', price: 299, highlights: ['Kitchen sink or basin unclog'] },
          { tier: 'Standard Pro', price: 499, highlights: ['Main drain line mechanized snake clearance'] },
          { tier: 'Premium Care', price: 849, highlights: ['Full drainage system flush + anti-odor barrier'] }
        ]
      }
    ]
  },
  {
    id: 'painting-waterproofing',
    name: 'Painting & Waterproofing',
    tagline: 'Dust-free laser-guided wall painting and long-lasting dampness protection',
    iconName: 'Paintbrush',
    colorGradient: 'from-purple-600 to-pink-600',
    bgLight: 'bg-purple-50/80 text-purple-700 border-purple-100',
    badgeText: 'Premium Finish',
    serviceCount: 10,
    featuredServices: [
      {
        id: 'interior-wall-painting',
        name: 'Fresh Wall & Accent Painting',
        categoryId: 'painting-waterproofing',
        categoryName: 'Painting & Waterproofing',
        description: 'Mechanized sanding, wall putty repair, and washable premium paints.',
        startingPrice: 1999,
        durationMinutes: 480,
        rating: 4.91,
        reviewCount: 780,
        iconName: 'Palette',
        gradient: 'from-purple-500 to-pink-500',
        inclusions: ['Free shade consultation', 'Furniture masking & covering', 'Laser wall measurement'],
        pricingTiers: [
          { tier: 'Basic', price: 1999, highlights: ['Single room accent wall painting'] },
          { tier: 'Standard Pro', price: 3999, highlights: ['Full 2 BHK repaint with royal emulsion'] },
          { tier: 'Premium Care', price: 6999, highlights: ['3 BHK high-sheen antibacterial paint + 1yr guarantee'] }
        ]
      }
    ]
  },
  {
    id: 'carpentry-furniture',
    name: 'Carpentry & Furniture Assembly',
    tagline: 'Custom door locks, furniture repairs, drawer slides, & custom shelving',
    iconName: 'Hammer',
    colorGradient: 'from-rose-600 to-amber-700',
    bgLight: 'bg-rose-50/80 text-rose-700 border-rose-100',
    badgeText: 'Craftsmen',
    serviceCount: 15,
    featuredServices: [
      {
        id: 'furniture-assembly',
        name: 'Modular Furniture & Closet Assembly',
        categoryId: 'carpentry-furniture',
        categoryName: 'Carpentry & Furniture Assembly',
        description: 'Precision assembly for wardrobes, beds, desks, and TV units.',
        startingPrice: 299,
        durationMinutes: 60,
        rating: 4.89,
        reviewCount: 1340,
        popular: true,
        iconName: 'Box',
        gradient: 'from-rose-500 to-amber-600',
        inclusions: ['Precision tool assembly', 'Wall anchor mounting', 'Alignment check'],
        pricingTiers: [
          { tier: 'Basic', price: 299, highlights: ['Small table/chair/desk assembly'] },
          { tier: 'Standard Pro', price: 599, highlights: ['Bed or 2-door wardrobe assembly'] },
          { tier: 'Premium Care', price: 999, highlights: ['Complex modular wardrobe + wall TV unit'] }
        ]
      }
    ]
  },
  {
    id: 'pest-control',
    name: 'Pest Control & Fumigation',
    tagline: 'Odorless, eco-friendly pest extermination for cockroaches, termites, & bed bugs',
    iconName: 'Shield',
    colorGradient: 'from-green-600 to-emerald-700',
    bgLight: 'bg-green-50/80 text-green-700 border-green-100',
    badgeText: 'Eco Safe',
    serviceCount: 8,
    featuredServices: [
      {
        id: 'cockroach-pest-control',
        name: 'Advanced Cockroach & Ant Gel Treatment',
        categoryId: 'pest-control',
        categoryName: 'Pest Control & Fumigation',
        description: 'US-FDA approved odorless gel spots inside cabinets and drain treatments.',
        startingPrice: 399,
        durationMinutes: 45,
        rating: 4.93,
        reviewCount: 2200,
        iconName: 'Bug',
        gradient: 'from-green-500 to-teal-600',
        inclusions: ['Odorless gel application', 'Drain trap treatment', 'Free 15-day retreatment check'],
        pricingTiers: [
          { tier: 'Basic', price: 399, highlights: ['1-2 BHK single visit treatment'] },
          { tier: 'Standard Pro', price: 699, highlights: ['Annual subscription (2 visits / year)'] },
          { tier: 'Premium Care', price: 999, highlights: ['Annual subscription (4 visits + termite shield)'] }
        ]
      }
    ]
  },
  {
    id: 'beauty-spa',
    name: 'Beauty & Salon at Home',
    tagline: 'Hygienic single-use kits for facial, waxing, manicure, & hair styling',
    iconName: 'Smile',
    colorGradient: 'from-fuchsia-600 to-pink-600',
    bgLight: 'bg-fuchsia-50/80 text-fuchsia-700 border-fuchsia-100',
    badgeText: 'Hygienic Kits',
    serviceCount: 12,
    featuredServices: [
      {
        id: 'glow-facial-cleanup',
        name: 'Organic Glow Facial & De-tan',
        categoryId: 'beauty-spa',
        categoryName: 'Beauty & Salon at Home',
        description: 'Deep pore cleansing, herbal exfoliation, and relaxing face massage.',
        startingPrice: 449,
        durationMinutes: 60,
        rating: 4.96,
        reviewCount: 4100,
        popular: true,
        iconName: 'Sparkle',
        gradient: 'from-fuchsia-500 to-pink-600',
        inclusions: ['100% sealed mono-kits', 'Beautician sanitation protocol', 'Face & neck massage'],
        pricingTiers: [
          { tier: 'Basic', price: 449, highlights: ['Fruit Glow facial + De-tan pack'] },
          { tier: 'Standard Pro', price: 749, highlights: ['O3+ Diamond Glow facial + Head massage'] },
          { tier: 'Premium Care', price: 1149, highlights: ['Luxury Spa Combo: Facial + Pedicure + Hair Spa'] }
        ]
      }
    ]
  }
];

export const AGENCY_PRICING_PLANS: PricingPlan[] = [
  {
    id: 'pay-per-service',
    name: 'Pay As You Go',
    price: '₹199',
    period: 'starts from / service',
    description: 'Perfect for occasional repairs and one-off home maintenance needs in Durgapur.',
    features: [
      'Access to all 8 service categories',
      'Instant booking via Android App',
      '30-day work warranty included',
      'Verified & background-checked pro',
      'Transparent upfront itemized pricing',
      'Pay online, UPI or cash post-service'
    ],
    gradient: 'from-slate-800 to-slate-900',
    ctaText: 'Book Service Now'
  },
  {
    id: 'home-pass-pro',
    name: 'Durgapur Fix Pass (Annual)',
    badge: 'Best Value • Save 40%',
    price: '₹1,499',
    period: 'per year',
    description: 'Complete peace of mind with free routine maintenance and priority dispatch across Durgapur.',
    isPopular: true,
    features: [
      '2 Free AC Foam Jet Servicings / year',
      '1 Free Full House Deep Cleaning',
      'Unlimited zero-visiting fee plumbing & electrical visits',
      'Priority 30-minute express booking via App',
      '15% flat discount on all additional bookings',
      'Dedicated Home Manager support line',
      '60-day extended service warranty'
    ],
    gradient: 'from-indigo-600 via-blue-600 to-violet-600',
    ctaText: 'Activate Home Pass'
  },
  {
    id: 'property-agency-plan',
    name: 'Property & Estate Care',
    badge: 'For Landlords & Agencies',
    price: '₹3,999',
    period: 'per property / year',
    description: 'Tailored agency maintenance package for tenant turnovers and landlords.',
    features: [
      'Quarterly preventative electrical & plumbing audit',
      'Deep cleaning & fresh paint prep on tenant move-out',
      'Automated digital inspection reports in Android App',
      'Dedicated agency account manager',
      'Consolidated monthly invoicing for tax tracking',
      '24/7 priority emergency line'
    ],
    gradient: 'from-teal-700 to-emerald-800',
    ctaText: 'Contact Agency Team'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sunita Roy',
    location: 'City Centre, Durgapur',
    serviceUsed: 'AC Deep Jet Servicing',
    rating: 5,
    date: '2 days ago',
    comment: 'The booking via the Durgapur Fix Android app took less than 30 seconds! The technician arrived with shoe covers, performed a high-pressure jet wash, and my AC cooling is literally like brand new.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    verified: true
  },
  {
    id: '2',
    name: 'Aritra Banerjee',
    location: 'Bidhannagar, Durgapur',
    serviceUsed: 'Full Home Deep Sanitization',
    rating: 5,
    date: '1 week ago',
    comment: 'Durgapur Fix sent a team of 3 professionals with commercial floor scrubbing machines. They completely transformed our kitchen tiles and bathrooms. Highly professional agency standard!',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    verified: true
  },
  {
    id: '3',
    name: 'Pooja Sharma',
    location: 'Benachity, Durgapur',
    serviceUsed: 'Electrical & Smart Switches',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Fixed an MCB trip that 2 local electricians could not diagnose. The electrician had modern thermal scanners and fixed the faulty wire safely. Upfront pricing with no surprise add-ons.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    verified: true
  },
  {
    id: '4',
    name: 'Debashis Mukhopadhyay',
    location: 'Steel Township, Durgapur',
    serviceUsed: 'Furniture Assembly & Mounting',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Assembled 2 large wardrobes and mounted our TV unit in under 2 hours. Super neat work, cleaned up all packaging afterwards. The app live tracking made it super convenient.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    category: 'booking',
    question: 'How do I book a service using the Durgapur Fix Android App?',
    answer: 'Simply install the Durgapur Fix app from Google Play Store, select your required home service category, pick your preferred date and time slot, and confirm. You can track your assigned verified professional in real time.'
  },
  {
    id: 'f2',
    category: 'safety',
    question: 'How are your service professionals verified?',
    answer: 'Every service partner in Durgapur undergoes a 5-step vetting process including government ID verification, criminal background check, technical skill examination, and mandatory safety training.'
  },
  {
    id: 'f3',
    category: 'pricing',
    question: 'Are there any hidden charges or cancellation fees?',
    answer: 'No. We follow a strict 100% transparent pricing model in INR (₹). You see the exact itemized rate before booking. Free cancellation is supported up to 2 hours before the scheduled time slot.'
  },
  {
    id: 'f4',
    category: 'pricing',
    question: 'What does the 30-day service guarantee cover?',
    answer: 'If the issue reoccurs within 30 days of service completion, our partner will revisit and resolve it completely free of charge under our agency quality guarantee.'
  },
  {
    id: 'f5',
    category: 'app',
    question: 'Is the Android App required to manage my bookings?',
    answer: 'While you can discover services and request instant quotes on this website, the Android App unlocks live GPS tracking, in-app messaging with your technician, digital invoice storage, and one-tap rebooking.'
  }
];

