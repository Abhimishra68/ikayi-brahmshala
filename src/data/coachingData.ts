export interface Course {
  id: string;
  title: string;
  category: 'jee' | 'neet' | 'foundation' | 'crash';
  targetClass: string;
  duration: string;
  badge?: string;
  features: string[];
  batchStartTime: string;
  fees: string;
  scholarshipOffer: string;
  mode: 'Offline' | 'Hybrid' | 'Online';
  seatsLeft: number;
}

export interface Topper {
  id: string;
  name: string;
  exam: string;
  rank: string;
  year: string;
  percentile: string;
  photoUrl: string;
  testimonial: string;
  dreamCollege: string;
}

export interface ExamEvent {
  id: string;
  name: string;
  date: string;
  daysRemaining: number;
  description: string;
  category: string;
}

export const COURSES: Course[] = [
  {
    id: 'jee-2-yr',
    title: 'IIT-JEE Target 2028 (2-Year Pinnacle)',
    category: 'jee',
    targetClass: 'Class 11th Students',
    duration: '2 Years (24 Months)',
    badge: 'Most Popular',
    features: [
      'Comprehensive Coverage of Class 11 & 12 Syllabus',
      'Daily 4-Hour Live/Offline Interactive Lectures',
      'Dedicated Weekly JEE Mains & Advanced DPPs',
      '1:1 Doubt Solving Session with Senior IITian Faculty',
      'All India Test Series (AITS) with Analytics'
    ],
    batchStartTime: 'Batch Starts 15th April 2026',
    fees: '₹85,000 / year',
    scholarshipOffer: 'Up to 90% Scholarship via I-SAT',
    mode: 'Hybrid',
    seatsLeft: 6
  },
  {
    id: 'jee-1-yr',
    title: 'IIT-JEE Target 2027 (1-Year Achievers)',
    category: 'jee',
    targetClass: 'Class 12th & Dropper Students',
    duration: '1 Year (12 Months)',
    badge: 'High Impact',
    features: [
      'Rapid Revision & Advanced Problem Solving Tactics',
      'Previous 15 Years JEE Advanced Question Analysis',
      'Personalized Rank Booster Doubt Counters',
      'Bi-Weekly Mock Tests with Performance Dashboard',
      'Full Study Material Package & Formula Books'
    ],
    batchStartTime: 'Batch Starts 2nd May 2026',
    fees: '₹95,000 / year',
    scholarshipOffer: 'Up to 100% Scholarship Available',
    mode: 'Offline',
    seatsLeft: 4
  },
  {
    id: 'neet-2-yr',
    title: 'NEET Medical Target 2028 (2-Year Ascent)',
    category: 'neet',
    targetClass: 'Class 11th Students',
    duration: '2 Years (24 Months)',
    badge: 'Doctor Special',
    features: [
      'In-Depth NCERT Mastery for Biology, Chem & Physics',
      '35,000+ NCERT Based Question Bank Practice',
      'Weekly OMR Based Speed & Accuracy Tests',
      'Special Memory Mnemonics & Diagram Trick Workshops',
      'Personal Doctor Mentors from Top AIIMS'
    ],
    batchStartTime: 'Batch Starts 20th April 2026',
    fees: '₹80,000 / year',
    scholarshipOffer: 'Up to 90% Scholarship via I-SAT',
    mode: 'Offline',
    seatsLeft: 8
  },
  {
    id: 'neet-dropper',
    title: 'NEET Target 2027 (Repeater/Dropper Batch)',
    category: 'neet',
    targetClass: 'Class 12th Passed / Droppers',
    duration: '1 Year (10 Months Intensive)',
    badge: 'Recommended',
    features: [
      'Zero to Hero Concept Building Strategy',
      'Daily 6 Hours Intensive Problem Practice',
      'Dedicated Physics Numerical Special Batches',
      'NCERT Line-by-Line Revision Modules',
      'Complete Test Series with AI Performance Tracking'
    ],
    batchStartTime: 'Batch Starts 10th May 2026',
    fees: '₹90,000 / year',
    scholarshipOffer: 'Special Fee Discounts for 600+ Scorers',
    mode: 'Hybrid',
    seatsLeft: 3
  },
  {
    id: 'foundation-builder',
    title: 'Foundation Champs (Class 8th, 9th & 10th)',
    category: 'foundation',
    targetClass: 'Class 8th - 10th Students',
    duration: '1 Year Program',
    badge: 'Early Starter',
    features: [
      'Strong Science & Maths Concept Foundation',
      'NTSE, Olympiad (NSEJS/PRMO) Special Training',
      'Interactive Science Experiments & Practical Learning',
      'Regular School Syllabus Support & Board Prep',
      'Mental Ability & Logical Reasoning Booster'
    ],
    batchStartTime: 'Batch Starts 1st April 2026',
    fees: '₹45,000 / year',
    scholarshipOffer: 'Up to 50% Early Bird Scholarship',
    mode: 'Offline',
    seatsLeft: 12
  },
  {
    id: 'jee-neet-crash',
    title: 'JEE / NEET 2026 Fast-Track Crash Course',
    category: 'crash',
    targetClass: 'Class 12th Appearing',
    duration: '60 Days Intensive',
    badge: 'Rank Booster',
    features: [
      'High-Weightage Chapter Quick Revision',
      '10,000+ Expected Questions Solving',
      'Daily Full Syllabus Mock Tests with Ranking',
      'Formula Cheatsheets & Short Tricks',
      '24/7 Online Doubt Support App Access'
    ],
    batchStartTime: 'Immediate Start',
    fees: '₹18,500',
    scholarshipOffer: 'Flat 20% Off for Group Enrolments',
    mode: 'Online',
    seatsLeft: 15
  }
];

export const TOPPERS: Topper[] = [
  {
    id: '1',
    name: 'Aarav Sharma',
    exam: 'JEE Advanced 2025',
    rank: 'AIR 42',
    year: '2025',
    percentile: '99.98%ile',
    photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80',
    testimonial: 'The faculty at Ikayi Brahmshala made physics numericals seem like a breeze. The 1:1 mentorship helped me refine my exam strategy!',
    dreamCollege: 'IIT Bombay - Computer Science'
  },
  {
    id: '2',
    name: 'Ananya Verma',
    exam: 'NEET UG 2025',
    rank: 'AIR 89 (715/720)',
    year: '2025',
    percentile: '715 / 720',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    testimonial: 'Line-by-line NCERT Biology tests at IBS gave me the confidence to score 360/360 in Bio! Forever grateful to my teachers.',
    dreamCollege: 'AIIMS New Delhi'
  },
  {
    id: '3',
    name: 'Rohan Gupta',
    exam: 'JEE Main 2025',
    rank: 'AIR 118',
    year: '2025',
    percentile: '99.94%ile',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    testimonial: 'Regular mock tests and instant doubt clearance counters kept my preparation stress-free and highly focused.',
    dreamCollege: 'IIT Delhi - Electrical Engg'
  },
  {
    id: '4',
    name: 'Priya Sundaram',
    exam: 'Class 12 Board & NEET',
    rank: '99.2% Boards + AIR 245',
    year: '2025',
    percentile: '99.2% Boards',
    photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80',
    testimonial: 'Managing school boards along with NEET prep was smooth because IBS teachers balanced both syllabi effortlessly.',
    dreamCollege: 'JIPMER Puducherry'
  }
];

export const UPCOMING_EXAMS: ExamEvent[] = [
  {
    id: 'jee-main-session2',
    name: 'JEE Main 2026 (Session 2)',
    date: 'April 4 - April 12, 2026',
    daysRemaining: 15,
    description: 'National Level Engineering Entrance Examination conducted by NTA.',
    category: 'Engineering'
  },
  {
    id: 'neet-ug-2026',
    name: 'NEET UG 2026 Medical Exam',
    date: 'May 3, 2026',
    daysRemaining: 44,
    description: 'Single national entrance test for MBBS / BDS admission across India.',
    category: 'Medical'
  },
  {
    id: 'jee-adv-2026',
    name: 'JEE Advanced 2026',
    date: 'May 24, 2026',
    daysRemaining: 65,
    description: 'Gateway examination for admissions into all 23 premier IITs.',
    category: 'Engineering'
  },
  {
    id: 'isat-scholarship',
    name: 'Ikayi Brahmshala Scholarship Test (I-SAT)',
    date: 'April 6, 2026',
    daysRemaining: 17,
    description: 'Take test online/offline to win up to 100% scholarship on coaching fees.',
    category: 'Scholarship'
  }
];

export const BRANCH_INFO = {
  name: 'Ikayi Brahmshala Coaching Institute',
  tagline: 'Empowering Students for IIT-JEE, NEET & Foundation Success',
  address: 'Plot 42, Knowledge Park II, Near Metro Station, Sector 62, Noida / Delhi NCR - 201301',
  phonePrimary: '+91 98765 43210',
  phoneSecondary: '+91 98765 43211',
  whatsappNumber: '919876543210',
  email: 'admissions@ikayibrahmshala.org',
  googleMapsUrl: 'https://maps.google.com/?q=Ikayi+Brahmshala+Coaching+Institute',
  openingHours: 'Mon - Sat: 8:00 AM - 8:00 PM | Sun: 9:00 AM - 4:00 PM'
};
