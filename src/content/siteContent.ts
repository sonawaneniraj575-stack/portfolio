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
    { key: "React", level: 85, icon: "react" },
    { key: "Python", level: 75, icon: "python" },
    { key: "Node.js", level: 80, icon: "node" },
    { key: "TensorFlow", level: 70, icon: "tensorflow" },
    { key: "SQL", level: 80, icon: "database" },
  ],
  education: [
    {
      period: "2025–Present",
      title: "BE in Information Technology",
      institution: "ABC Institute of Engineering",
      details: "Focusing on Artificial Intelligence, Cloud Computing, and Full-Stack Web Development.",
      highlights: ["AI", "React", "Cloud"],
    },
    {
      period: "2021–2024",
      title: "BSc in Information Technology",
      institution: "XYZ University",
      details: "Graduated with distinction. Built strong foundations in software engineering, databases, and networking.",
      highlights: ["Java", "SQL", "Networks"],
    },
  ],
  projects: [
    {
      id: "smart-health-dashboard",
      title: "Smart Health Dashboard",
      problem:
        "Hospitals face delays in responding to critical patient conditions due to limited real-time monitoring of vital signs.",
      approach:
        "Built a responsive health dashboard that streams patient data (heart rate, BP, oxygen) in real time using sockets. Integrated charts, alerts, and animations for intuitive monitoring, enabling doctors to react instantly.",
      stack: [
        "React",
        "Tailwind CSS",
        "Chart.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "GSAP",
        "Framer Motion",
      ],
      metrics: [
        { label: "Dashboard load", value: 1.2, suffix: "s", decimals: 1 },
        { label: "Faster response", value: 30, suffix: "%" },
      ],
      links: { live: "#", repo: "#" },
    },
    {
      id: "smart-task-manager",
      title: "Smart Task Manager",
      problem:
        "Managing tasks manually often leads to missed deadlines and poor prioritization.",
      approach:
        "Developed a task manager that uses scoring logic and deadline tracking to auto-prioritize tasks. Designed an intuitive interface for easy organization and productivity.",
      stack: ["React", "Node.js", "Tailwind CSS"],
      metrics: [
        { label: "Time Saved", value: 40, suffix: "%" },
        { label: "User Productivity", value: 25, suffix: "%" },
      ],
      links: { live: "#", repo: "#" },
    },
    {
      id: "ai-recommender",
      title: "AI Recommender",
      problem:
        "Users struggle to find relevant content in large datasets, leading to poor engagement and retention.",
      approach:
        "Built a prototype recommendation engine using TensorFlow for user-behavior analysis. Integrated with a React frontend to deliver personalized suggestions in real time.",
      stack: ["Python", "TensorFlow", "React"],
      metrics: [
        { label: "Accuracy Gain", value: 15, suffix: "%" },
        { label: "Engagement Increase", value: 20, suffix: "%" },
      ],
      links: { live: "#", repo: "#" },
    },
  ],
};

export type SiteContent = typeof siteContent;
