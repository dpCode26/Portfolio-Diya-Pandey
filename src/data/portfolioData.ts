import { SkillItem, ProjectItem, ExperienceItem, CodingProfileItem, StatItem } from '../types';

export const personalInfo = {
  name: "Diya Pandey",
  title: "Full-Stack Developer & SDE Aspirant",
  college: "Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar, Odisha",
  degree: "B.Tech in Computer Science & Engineering",
  graduationYear: "2027",
  cgpa: 9.5,
  cgpaSemesters: "through 4th semester",
  email: "diyawork05@gmail.com",
  location: "Bhubaneswar, Odisha, India",
  statusBadge: "Open to SDE internships",
  heroSubtitlePhrases: [
    "Full-Stack Developer",
    "SDE Aspirant",
    "DSA Problem Solver",
    "AI/ML Enthusiast"
  ],
  bio: "I'm Diya, a 3rd-year B.Tech student at KIIT, Bhubaneswar. I'm preparing for SDE internships and jobs, building full-stack applications, and learning AI/ML along the way. I care about clean architecture, real deployments, and turning ideas into products people can actually use.",
  heroPhoto: "images/diya1-hero.jpeg",
  aboutPhoto: "images/diya1-hero.jpeg",
  resumeUrl: "#resume",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Object-Oriented Programming (OOP)"
  ],
  socials: {
    github: "https://github.com/dpCode26",
    linkedin: "https://linkedin.com/in/diya-pandey",
    leetcode: "https://leetcode.com/u/dpCode26",
    codechef: "https://www.codechef.com/users/dpcode26",
    codeforces: "https://codeforces.com/profile/dpCode26"
  }
};

export const statsData: StatItem[] = [
  {
    label: "Cumulative GPA",
    value: 9.5,
    suffix: "",
    description: "Through 4th Semester at KIIT"
  },
  {
    label: "Live Projects",
    value: 3,
    suffix: "+",
    description: "Production deployed web apps"
  },
  {
    label: "Active Roles",
    value: 2,
    suffix: "",
    description: "K1000 & KSAC Web Teams"
  }
];

export const skillsData: SkillItem[] = [
  // Languages
  { name: "Java", category: "Languages", proficiency: "Advanced", percentage: 92, iconName: "Coffee" },
  { name: "C", category: "Languages", proficiency: "Proficient", percentage: 85, iconName: "Cpu" },
  { name: "Python", category: "Languages", proficiency: "Intermediate", percentage: 80, iconName: "Binary" },
  { name: "JavaScript", category: "Languages", proficiency: "Advanced", percentage: 94, iconName: "FileCode" },
  { name: "TypeScript", category: "Languages", proficiency: "Advanced", percentage: 90, iconName: "Code" },
  { name: "SQL", category: "Languages", proficiency: "Proficient", percentage: 88, iconName: "Database" },
  { name: "HTML / CSS", category: "Languages", proficiency: "Advanced", percentage: 95, iconName: "Layout" },

  // Frontend
  { name: "React.js", category: "Frontend", proficiency: "Advanced", percentage: 93, iconName: "Boxes" },
  { name: "Next.js", category: "Frontend", proficiency: "Proficient", percentage: 86, iconName: "Flame" },
  { name: "Tailwind CSS", category: "Frontend", proficiency: "Advanced", percentage: 94, iconName: "Palette" },
  { name: "EJS", category: "Frontend", proficiency: "Proficient", percentage: 84, iconName: "Layers" },
  { name: "Bootstrap", category: "Frontend", proficiency: "Proficient", percentage: 82, iconName: "Grid" },

  // Backend
  { name: "Node.js", category: "Backend", proficiency: "Advanced", percentage: 91, iconName: "Server" },
  { name: "Express.js", category: "Backend", proficiency: "Advanced", percentage: 90, iconName: "Network" },
  { name: "REST APIs", category: "Backend", proficiency: "Advanced", percentage: 92, iconName: "Globe" },
  { name: "API Integration", category: "Backend", proficiency: "Advanced", percentage: 89, iconName: "Share2" },
  { name: "Authentication (JWT)", category: "Backend", proficiency: "Advanced", percentage: 90, iconName: "Lock" },
  { name: "MVC Architecture", category: "Backend", proficiency: "Proficient", percentage: 88, iconName: "FolderTree" },

  // Databases
  { name: "MongoDB", category: "Databases", proficiency: "Advanced", percentage: 89, iconName: "Database" },
  { name: "MySQL", category: "Databases", proficiency: "Proficient", percentage: 86, iconName: "HardDrive" },

  // Tools
  { name: "Git & GitHub", category: "Tools", proficiency: "Advanced", percentage: 92, iconName: "GitBranch" },
  { name: "VS Code", category: "Tools", proficiency: "Advanced", percentage: 95, iconName: "Terminal" },
  { name: "Postman", category: "Tools", proficiency: "Advanced", percentage: 88, iconName: "Send" },
  { name: "AWS", category: "Tools", proficiency: "Intermediate", percentage: 76, iconName: "Cloud" },
  { name: "Vercel", category: "Tools", proficiency: "Advanced", percentage: 90, iconName: "UploadCloud" },
  { name: "Render", category: "Tools", proficiency: "Proficient", percentage: 86, iconName: "Server" }
];

export const projectsData: ProjectItem[] = [
  {
    id: "rupix",
    number: "01",
    title: "Rupix",
    subtitle: "Stock Trading Platform",
    date: "May 2026",
    description: "Full-stack trading platform engineered with an MVC-based backend architecture, RESTful API endpoints, and live financial metrics integration.",
    keyFeatures: [
      "Real-time market quotes and candlestick charts powered by Alpha Vantage integration",
      "Gemini API integration for natural-language portfolio analysis and automated P&L insights",
      "Robust JWT-based authentication and route authorization securing user portfolios and transactions",
      "Clean modular Express backend with MongoDB aggregation pipelines for trade execution"
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Alpha Vantage", "Gemini API"],
    githubUrl: "https://github.com/dpCode26/Rupix",
    liveUrl: "https://rupix-frontend.vercel.app/",
    image: "/images/rupix-preview.jpg",
    featured: true
  },
  {
    id: "wanderstay",
    number: "02",
    title: "WanderStay",
    subtitle: "Property Marketplace",
    date: "Dec 2025",
    description: "Full-stack property rental marketplace with comprehensive CRUD operations for listings, customer reviews, dynamic pricing, and booking reservations.",
    keyFeatures: [
      "Rigorous Mongoose data schemas with strict server-side validation and sanitization",
      "Session-based auth flow with role-based authorization for property owners versus guests",
      "Interactive location discovery powered by Mapbox GL and geocoded coordinates",
      "Seamless multi-photo uploads and responsive transformations using Cloudinary"
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "EJS", "REST APIs", "Mapbox", "Cloudinary", "Bootstrap"],
    githubUrl: "https://github.com/dpCode26/WanderStay",
    liveUrl: "https://wanderstay-43vr.onrender.com/listings",
    image: "/images/wanderstay-preview.jpg",
    featured: true
  },
  {
    id: "maatricare",
    number: "03",
    title: "MaatriCare",
    subtitle: "AI Maternal Care Platform",
    date: "June 2026",
    description: "Role-based healthcare platform connecting frontline ASHA workers, pregnant patients, and specialist doctors with intelligent clinical risk assessments.",
    keyFeatures: [
      "Role-segregated portal with protected Next.js API routes and tailored workflows for ASHA workers and doctors",
      "Gemini AI risk evaluation analyzing patient clinical indicators, symptoms, and appointment vitals",
      "Socket.io real-time web alerts alerting healthcare specialists during high-risk obstetric emergencies",
      "Offline-friendly logging interface designed for field health workers in rural regions"
    ],
    stack: ["Next.js", "MongoDB", "REST APIs", "Gemini API", "Socket.io", "Tailwind CSS"],
    githubUrl: "https://github.com/dpCode26/MaatriCare",
    liveUrl: "https://maatricare-esry.onrender.com/",
    image: "/images/maatricare-preview.jpg",
    featured: true
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "k1000",
    role: "Web Developer",
    organization: "K1000",
    period: "Aug 2024 – Present",
    location: "KIIT, Bhubaneswar",
    type: "Student Organization",
    bullets: [
      "Architect and maintain high-performance full-stack web modules and event registration pipelines used by over 3,000+ university students.",
      "Collaborate in an agile team implementing responsive React components, RESTful endpoints in Node.js/Express, and optimized database queries.",
      "Conducted code reviews, streamlined Git branching workflows, and reduced frontend page load times by 28% through lazy loading."
    ]
  },
  {
    id: "ksac",
    role: "Core Team Member",
    organization: "KSAC Web Development Team",
    period: "Oct 2023 – Present",
    location: "KIIT Student Activity Centre",
    type: "University Core Team",
    bullets: [
      "Contribute to official KIIT university cultural, technical, and sports fest portals handling high-concurrency traffic during peak fest days.",
      "Spearheaded database schema design in MongoDB for ticketing, participant verifications, and real-time announcement tickers.",
      "Liaised with senior coordinators and UI/UX designers to implement pixel-perfect, accessible, and cross-browser compatible layouts."
    ]
  }
];

export const profilesAndAchievements: CodingProfileItem[] = [
  {
    platform: "LeetCode",
    handle: "dpCode26",
    stats: "400+ Problems Solved · Top 8% (Knight Candidate)",
    ratingBadge: "Rating 1840+",
    url: "https://leetcode.com/u/dpCode26",
    iconName: "Code",
    type: "profile"
  },
  {
    platform: "CodeChef",
    handle: "dpcode26",
    stats: "3★ Star Rated Coder · Division 2",
    ratingBadge: "Rating 1685",
    url: "https://www.codechef.com/users/dpcode26",
    iconName: "Terminal",
    type: "profile"
  },
  {
    platform: "Codeforces",
    handle: "dpCode26",
    stats: "Pupil · Active participant in Div. 2 & Div. 3 contests",
    ratingBadge: "Rating 1350+",
    url: "https://codeforces.com/profile/dpCode26",
    iconName: "Binary",
    type: "profile"
  },
  {
    platform: "GitHub",
    handle: "dpCode26",
    stats: "50+ Repositories · Active full-stack open source contributions",
    ratingBadge: "Active Contributor",
    url: "https://github.com/dpCode26",
    iconName: "GitBranch",
    type: "profile"
  },
  {
    platform: "AWS Academy Cloud Foundations",
    handle: "AWS Training & Certification",
    stats: "Cloud Architecture, Compute, Storage, Networking & Security",
    ratingBadge: "Verified",
    url: "https://aws.amazon.com/training/",
    iconName: "Award",
    type: "certification",
    issuer: "Amazon Web Services",
    date: "Dec 2024"
  },
  {
    platform: "Postman API Fundamentals Student Expert",
    handle: "Postman Academy",
    stats: "API Design, Testing, Documentation & Automation",
    ratingBadge: "Certified",
    url: "https://badgr.com/",
    iconName: "CheckCircle2",
    type: "certification",
    issuer: "Postman",
    date: "Oct 2024"
  }
];
