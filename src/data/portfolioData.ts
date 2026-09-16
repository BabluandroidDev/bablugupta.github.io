import { Project, SkillCategory, ProficiencyMetric, ExperienceItem, EducationItem } from '../types';

export const personalInfo = {
  name: 'Bablu Gupta',
  initials: 'BG',
  role: 'Flutter & Android Mobile Developer',
  tagline: 'Building digital solutions that make an impact.',
  shortBio:
    'Mobile Developer with 5+ years of software engineering experience, including 4+ years in Android and mobile application development. Proficient in Flutter/Dart cross-platform development alongside deep Native Android expertise in Kotlin, Java, Android SDK, Jetpack, MVVM, and Clean Architecture.',
  email: 'bg.babloo.gupta@gmail.com',
  phone: '+91-7409290026',
  location: 'Mathura, Uttar Pradesh, India',
  preferredLocations: 'Noida, Pune, Bengaluru',
  noticePeriod: '30 days (Earliest joining: 15 days)',
  availability: 'Open for Full-time Roles & High-Impact Projects',
  resumeUrl: '/assets/documents/Bablu_Gupta_Android_Developer.pdf',
  resumeDocxUrl: '/assets/documents/Bablu_Gupta_Flutter_Developer.docx',
  portraitUrl: '/assets/images/bablu_portrait.png',
  githubUrl: 'https://github.com/BabluandroidDev',
  linkedinUrl: 'https://www.linkedin.com/in/bablu-gupta-android-developer/',
};

export const aboutHighlights = [
  {
    title: 'What I Work With',
    description:
      'Flutter SDK, Dart, Kotlin, Java, Android SDK, Jetpack Compose, ViewBinding, MVVM, Clean Architecture, REST APIs, JSON data pipelines, Firebase & Cloud Firestore.',
  },
  {
    title: 'Quality & Delivery',
    description:
      'High-security payment integrations (Razorpay, Paytm, BBPS, HDFC, UPI), RFID & QR hardware workflows, responsive UI development, Play Store deployment, and proactive production troubleshooting.',
  },
  {
    title: 'AI-Assisted Development',
    description:
      'I use AI tools thoughtfully to speed up research, draft test cases, refine architecture patterns, and troubleshoot integration bugs. Clear, context-rich prompting backed by rigorous testing and security standards.',
  },
];

export const proficiencyMetrics: ProficiencyMetric[] = [
  {
    name: 'Native Android (Kotlin & Java)',
    percentage: 92,
    highlight: 'Jetpack, Compose, MVVM, ViewBinding, Lifecycle',
  },
  {
    name: 'Flutter & Cross-Platform Development',
    percentage: 90,
    highlight: 'Flutter SDK, Dart, Responsive UI, Null Safety',
  },
  {
    name: 'Clean Architecture & MVVM',
    percentage: 90,
    highlight: 'Repository Pattern, Separation of Concerns, OOP',
  },
  {
    name: 'REST APIs & Data Synchronization',
    percentage: 90,
    highlight: 'JSON handling, offline-first cache, async pipelines',
  },
  {
    name: 'Payments & Hardware Integrations',
    percentage: 88,
    highlight: 'Razorpay, Paytm, BBPS, HDFC, UPI, RFID, QR',
  },
  {
    name: 'Firebase & Cloud Services',
    percentage: 85,
    highlight: 'Auth, Cloud Messaging, Firestore, Analytics',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Mobile Frameworks & Languages',
    description: 'Core platforms for building native and multiplatform mobile applications.',
    skills: [
      'Flutter SDK',
      'Dart',
      'Kotlin',
      'Java',
      'Android SDK',
      'Jetpack Compose',
      'ViewBinding',
      'Lifecycle & Coroutines',
    ],
  },
  {
    title: 'Architecture & State Patterns',
    description: 'Scalable patterns ensuring maintainability, testability, and separation of concerns.',
    skills: [
      'Clean Architecture',
      'MVVM Architecture',
      'Repository Pattern',
      'Provider & Riverpod',
      'GetX State Management',
      'OOP Principles',
      'Modular Design',
    ],
  },
  {
    title: 'Payments & Hardware Integrations',
    description: 'Mission-critical hardware scanners and financial gateway orchestration.',
    skills: [
      'Razorpay',
      'Paytm Payment Gateway',
      'BBPS (Bharat Bill Payment)',
      'HDFC Gateway',
      'UPI Digital Payments',
      'RFID Scanner Integration',
      'QR Code Scanning',
      'Google Maps SDK',
    ],
  },
  {
    title: 'APIs, Cloud & Data Flow',
    description: 'Reliable data communication and persistence across systems.',
    skills: [
      'RESTful HTTP APIs',
      'JSON Data Flow',
      'Firebase Authentication',
      'Firebase Cloud Messaging (FCM)',
      'Cloud Firestore',
      'MySQL',
      'PostgreSQL',
      'Data Sync & Status Validation',
    ],
  },
  {
    title: 'Testing & DevOps Delivery',
    description: 'Tools for building, testing, verifying, and publishing production applications.',
    skills: [
      'Android Studio',
      'Git & GitHub',
      'Google Play Console',
      'CI/CD Pipelines',
      'JUnit & Espresso',
      'Production Troubleshooting',
      'Postman',
      'AWS / VPS Basics',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'mrs-pay',
    title: 'MRS Pay',
    category: 'Flutter',
    shortDescription:
      'Multi-service fintech application supporting UPI, utility bill payments (BBPS), and mobile recharge workflows.',
    longOverview:
      'MRS Pay is a comprehensive mobile financial service application developed using Flutter and Dart. Designed to streamline digital transactions, it supports Bharat Bill Payment System (BBPS), direct UPI transfers, utility bill payments, and telecom recharges with enterprise-grade security and real-time reconciliation.',
    keyContributions: [
      'Engineered cross-platform mobile UI using Flutter SDK with fluid responsive layouts across diverse Android screen densities.',
      'Implemented Bharat Bill Payment System (BBPS) and UPI payment orchestration with end-to-end status validation and retry handling.',
      'Integrated Firebase Authentication and real-time state updates for instant transaction confirmation and ledger synchronization.',
      'Constructed modular repository architecture separating API communication, cache persistence, and UI rendering.',
      'Prepared production build pipelines and managed Google Play Console release verification.',
    ],
    outcome:
      'Delivered a robust, high-reliability payment application with smooth user flows and zero transaction reconciliation failures across active daily users.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'BBPS', 'UPI', 'REST APIs', 'Play Console'],
    iconType: 'payment',
  },
  {
    id: 'jwelly-ecat',
    title: 'Jwelly E-Cat',
    category: 'Android',
    shortDescription:
      'Customer-facing showroom sales application with RFID product selection, QR scanning, and dynamic ERP sync.',
    longOverview:
      'Jwelly E-Cat is a high-performance native Android application engineered for luxury jewelry showrooms. It empowers sales personnel and customers to instantly explore jewelry inventory, check real-time bullion pricing, scan RFID product trays, and manage cart transactions seamlessly.',
    keyContributions: [
      'Developed native Android architecture utilizing Java, Android SDK, and MVVM design patterns.',
      'Integrated physical RFID scanning hardware to allow instant batch reading of jewelry tags from showcase trays.',
      'Engineered high-speed QR code scanner module for instant product lookup and SKU identification.',
      'Built bi-directional REST API synchronization with PHP/MySQL backend for inventory status, prices, and orders.',
      'Implemented robust offline cache to allow seamless showroom operation during intermittent network drops.',
    ],
    outcome:
      'Reduced customer checkout and item identification time by over 60%, drastically minimizing inventory shrinkage in multi-counter showrooms.',
    technologies: ['Native Android', 'Java', 'RFID Integration', 'QR Scanning', 'MVVM', 'PHP/MySQL', 'REST APIs'],
    iconType: 'cart',
  },
  {
    id: 'gla-canteen-app',
    title: 'GLA Canteen Smart App',
    category: 'Android',
    shortDescription:
      'RFID-enabled campus food ordering and digital wallet app with transaction ledgers and dual payment gateways.',
    longOverview:
      'GLA Canteen is an automated food-ordering and cashless campus wallet application built for university cafeterias. It integrates student ID RFID cards with online meal ticketing, real-time kitchen display systems, and payment gateway infrastructure.',
    keyContributions: [
      'Developed responsive native Android interfaces with custom RecyclerViews and reactive ViewBinding.',
      'Integrated RFID hardware scanner for tap-and-pay meal redemption at cafeteria collection counters.',
      'Implemented dual payment gateway flows with HDFC Payment Gateway and Paytm SDK for instant wallet top-ups.',
      'Built transaction history, detailed statement ledger views, and receipt generation.',
      'Integrated Firebase Cloud Messaging (FCM) for instant push notifications on food readiness and wallet deductions.',
    ],
    outcome:
      'Eliminated lunch rush congestion, allowing thousands of students and staff to order in advance and collect meals with simple RFID card verification.',
    technologies: ['Native Android', 'Java', 'RFID', 'HDFC Gateway', 'Paytm', 'Firebase FCM', 'REST APIs'],
    iconType: 'food',
  },
  {
    id: 'enterprise-mobile-solutions',
    title: 'Enterprise Cross-Platform Architecture',
    category: 'Enterprise',
    shortDescription:
      'Reusable clean architecture components, modular networking layers, and enterprise device integration templates.',
    longOverview:
      'A collection of production-grade architectural components developed across multiple client deployments at MMI Softwares. Focuses on modular Clean Architecture, reusable ViewModels, custom hardware communication layers, and test-driven mobile development.',
    keyContributions: [
      'Architected reusable Clean Architecture & MVVM boilerplates with domain, data, and presentation layer boundaries.',
      'Created standardized networking and error-handling interceptors for resilient REST/HTTP API consumption.',
      'Built unified payment integration bridge compatible across Razorpay, Paytm, and UPI deep-linking.',
      'Implemented unit and instrumentation test suites with JUnit and Espresso for critical business pathways.',
      'Mentored junior developers on Git workflows, code reviews, and Android lifecycle best practices.',
    ],
    outcome:
      'Standardized app architecture across client projects, reducing time-to-market for new mobile initiatives by approximately 35%.',
    technologies: ['Flutter', 'Kotlin', 'Java', 'Clean Architecture', 'MVVM', 'JUnit', 'Espresso', 'CI/CD'],
    iconType: 'code',
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'mmi-softwares',
    role: 'Mobile Application Developer',
    company: 'MMI Softwares Pvt. Ltd.',
    location: 'Mathura, Uttar Pradesh, India',
    period: 'Aug 2022 — Present',
    isCurrent: true,
    summary:
      'Lead development and maintenance of customer-facing Android and mobile applications using Kotlin, Java, and Flutter cross-platform frameworks.',
    highlights: [
      'Develop and maintain customer-facing Android & mobile applications using Kotlin and Java, with hands-on contributions to Flutter cross-platform applications.',
      'Apply Clean Architecture and MVVM with Android SDK and Jetpack to build modular, reusable features with clear separation of concerns.',
      'Integrate REST/HTTP APIs, JSON data flows, Firebase services, and PHP/MySQL backend workflows, including validation, synchronization, and status handling.',
      'Develop payment & device integrations using Razorpay, Paytm, BBPS, HDFC, UPI, RFID, QR, and Google Maps, focusing on secure transaction handling.',
      'Build responsive mobile UI, debug UI/networking/lifecycle/integration issues, and optimize application performance and stability.',
      'Own features end-to-end from requirements and design through implementation, testing, Play Store release, and production troubleshooting.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'Kotlin',
      'Java',
      'Android Jetpack',
      'Clean Architecture',
      'MVVM',
      'Firebase',
      'Razorpay',
      'RFID',
      'BBPS',
    ],
  },
  {
    id: 'elano-infotech',
    role: 'Web Developer',
    company: 'Elano Infotech Software Solution',
    location: 'Mathura, Uttar Pradesh, India',
    period: 'Jun 2021 — Jul 2022',
    isCurrent: false,
    summary:
      'Engineered backend services, RESTful APIs, and responsive data-driven web applications deployed on cloud infrastructure.',
    highlights: [
      'Developed backend services and REST APIs using Flask (Python), MySQL, and PostgreSQL for data-driven application workflows.',
      'Built responsive interfaces using AngularJS, HTML5, CSS3, Bootstrap, and jQuery.',
      'Configured and deployed web applications on AWS and VPS infrastructure with automated service monitors.',
      'Collaborated closely with stakeholders and cross-functional teams to translate business requirements into maintainable technical solutions.',
    ],
    technologies: ['Flask (Python)', 'MySQL', 'PostgreSQL', 'REST APIs', 'AngularJS', 'AWS', 'Bootstrap', 'Git'],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Uttar Pradesh Technical University (UPTU)',
    period: 'Graduated 2021',
    score: 'CGPA: 8.39 / 10',
    details: 'Specialized in Advanced Software Engineering, Mobile Computing, and Distributed Systems.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Dr. B. R. Ambedkar University, Agra',
    period: 'Graduated 2019',
    score: 'CGPA: 7.2 / 10',
    details: 'Foundational coursework in Object-Oriented Programming, Database Management, and Data Structures.',
  },
];

