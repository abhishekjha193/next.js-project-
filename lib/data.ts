import { Project, Experience, Certificate } from "@/types";

export const GITHUB_USERNAME = "abhishekjha193"; // ← Replace with your GitHub username

export const projects: Project[] = [
  {
    id: "1",
    title: "Creator Platform (SaaS Lite)",
    description:
      "Full-stack creator platform with authentication, analytics, and real-time engagement features.",
    longDescription:
      "Built a scalable creator platform with JWT authentication and role-based access (user/admin). Developed REST APIs for posts, likes, comments, and follow system. Implemented infinite scroll feed improving load speed by ~30%. Designed analytics dashboard using MongoDB aggregation and added cron-based scheduled posting with real-time notifications.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux",
      "JavaScript",
      "JWT",
      "REST APIs",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/creator-platform",
    featured: true,
    gradient: "from-red-600/20 to-red-500/20",
  },
  {
    id: "2",
    title: "Emotion Aware Music Player",
    description:
      "Mood-based music player with real-time emotion detection using facial recognition.",
    longDescription:
      "Developed a full-stack application that detects user emotions via webcam using MediaPipe face landmarks. Processed facial expressions to classify mood and deliver personalized music recommendations. Built custom audio player and optimized authentication using Redis caching (~40% faster validation).",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "MediaPipe",
      "Redis",
      "JavaScript",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/emotion-music-player",
    featured: true,
    gradient: "from-red-600/20 to-red-500/20",
  },
  {
    id: "3",
    title: "AI Model Arena",
    description:
      "Platform to compare outputs from multiple LLMs and determine optimal responses.",
    longDescription:
      "Built a system that integrates multiple LLM APIs to generate responses in parallel. Designed an intuitive UI for side-by-side comparison and evaluation, helping users identify the most accurate and useful answer.",
    tech: ["Node.js", "Express.js", "React.js", "JavaScript", "LLM APIs"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/ai-model-arena",
    featured: false,
    gradient: "from-red-600/20 to-red-500/20",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Shree L.R. Tiwari College of Engineering",
    role: "B.E. Information Technology",
    duration: "Jun 2022 – 2026",
    location: "Maharashtra, India",
    achievements: [
      "Pursuing Bachelor of Engineering in Information Technology",
      "Strong focus on full-stack web development and system design",
      "Built multiple MERN stack projects including SaaS and AI-based applications",
      "Active in competitive programming and web development practice",
    ],
  },
  {
    id: "2",
    company: "Technohacks Solution Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    duration: "Jan 2026",
    location: "Remote, India",
    achievements: [
      "Developed features for a task management platform using MERN stack",
      "Implemented JWT-based authentication and role-based access control (RBAC)",
      "Built RESTful APIs with MongoDB for CRUD operations and data handling",
      "Created reusable React components for improved UI maintainability",
      "Used Git/GitHub for version control and Postman for API testing",
      "Debugged frontend-backend integration issues for smooth API communication",
    ],
  },
  {
    id: "3",
    company: "Shreyain's Coding School",
    role: "MERN Stack Trainee (Apprenticeship)",
    duration: "Aug 2025 – Present",
    location: "Remote, India",
    achievements: [
      "Undergoing full-stack MERN training with hands-on project development",
      "Working on real-world applications using React, Node.js, Express, and MongoDB",
      "Practicing authentication systems, REST APIs, and scalable backend architecture",
      "Improving problem-solving and production-level coding skills",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Full Stack Web Development",
    issuer: "Apna College",
    date: "2024",
    badgeColor: "from-blue-500 to-cyan-500",
    credentialUrl: "#",
  },
  {
    id: "2",
    title: "UI/UX Design (Figma)",
    issuer: "Physics Wallah",
    date: "2024",
    badgeColor: "from-pink-500 to-purple-500",
    credentialUrl: "#",
  },
  {
    id: "3",
    title: "SQL Bootcamp",
    issuer: "LetsUpgrade",
    date: "2023",
    badgeColor: "from-green-500 to-emerald-500",
    credentialUrl: "#",
  },
  {
    id: "4",
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    date: "2023",
    badgeColor: "from-yellow-500 to-orange-500",
    credentialUrl: "#",
  },
  {
    id: "5",
    title: "Machine Learning Basics",
    issuer: "Vodafone Idea Foundation",
    date: "2023",
    badgeColor: "from-indigo-500 to-blue-500",
    credentialUrl: "#",
  },
  {
    id: "6",
    title: "Generative AI",
    issuer: "Physics Wallah",
    date: "2024",
    badgeColor: "from-purple-500 to-fuchsia-500",
    credentialUrl: "#",
  },
];
