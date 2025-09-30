export const siteContent = {
  name: "Niraj Sonawane",
  hero: {
    tagline: "Building intelligent, data-driven web applications.",
    subtext:
      "I create AI-powered digital products that are fast, reliable, and user-focused — blending web engineering with innovation.",
    cta: {
      label: "See My Work",
      targetId: "projects",
    },
  },
  about:
    "I’m an IT student and aspiring full-stack developer passionate about turning complex ideas into clean, functional, and scalable digital products. My focus is on blending web technologies with data and AI to deliver seamless, accessible, and impactful user experiences.",
  socials: {
    email: "sonawaneniraj575@gmail.com",
    linkedin: "https://www.linkedin.com/in/niraj-sonawane",
    github: "https://github.com/sonawaneniraj575-stack",
  },
  skills: [
   { key: "MongoDB", level: 90, icon: "database" },
{ key: "Express.js", level: 88, icon: "node" },
{ key: "React", level: 92, icon: "react" },
{ key: "Node.js", level: 90, icon: "node" },
{ key: "C", level: 80, icon: "code" },
{ key: "C++", level: 82, icon: "code" },
{ key: "Java", level: 80, icon: "coffee" },
{ key: "React Native", level: 75, icon: "mobile" },
{ key: "Firebase", level: 85, icon: "firebase" },
{ key: "SQL", level: 78, icon: "database" },
  ],
  education: [
    {
      period: "2025–Present",
      title: "BE in Information Technology",
      institution: "YADAVRAO TASGAONKAR COLLEGE OF ENGINEERING AND MANAGEMENT",
      details: "Focusing on Artificial Intelligence and Full-Stack Web Development.",
      highlights: ["AI", "MERN STACK"],
    },
    {
      period: "2021–2024",
      title: "BSc in Information Technology",
      institution: "R.K.TALREJA COLLEGE",
      details: "Graduated with distinction. Built strong foundations in software engineering, databases, and networking.",
      highlights: ["Java", "SQL", "JAVASCRIPT"],
    },
  ],
projects: [
  {
    id: "resume-analyzer-ai",
    title: "RESUMEANALYZER AI PRO",
    problem:
      "Recruiters spend excessive time manually reviewing resumes, often missing key candidate qualifications and insights.",
    approach:
      "Developed an AI-powered resume analysis tool that parses, evaluates, and scores resumes based on job descriptions. Provides instant feedback and recommendations to improve candidate shortlisting efficiency.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "LOCAL AI MODEL API"],
    metrics: [
      { label: "Screening Time Reduced", value: 50, suffix: "%" },
      { label: "Candidate Match Accuracy", value: 92, suffix: "%" },
    ],
    links: { live: "Offline", repo: "#" },
  },
  {
    id: "guardiance-home-care",
    title: "Guardiance Home Care",
    problem:
      "Many families struggle to find reliable and easily accessible home care information online.",
    approach:
      "Built a responsive, SEO-optimized static website that showcases services, client testimonials, and contact forms to improve visibility and trust for the home care business.",
    stack: ["React", "Tailwind CSS"],
    metrics: [
      { label: "Website Load Time", value: 1.1, suffix: "s", decimals: 1 },
      { label: "Inquiries Increased", value: 35, suffix: "%" },
    ],
    links: { live: "https://guardianshomecare.in/" },
  },
  {
    id: "luxury-ecommerce",
    title: "VALMORE",
    problem:
      "BUILT FOR SELLING LUXURY ITEMS LIKE WATCHES AND PERFUMES",
    approach:
      "Developing a full-featured e-commerce platform for luxury goods with secure payments, product filtering, and a premium UI/UX. The site will be launched soon.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    metrics: [
      { label: "Expected Launch", value: 7, suffix: "days" },
      { label: "Projected User Growth", value: 45, suffix: "%" },
    ],
    links: { live: "Coming Soon", repo: "#" },
  },
]
};

export type SiteContent = typeof siteContent;
