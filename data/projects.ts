export interface Project {
  id: string;
  title: string;
  /** e.g. "Group Project", "Individual Project". Omit if not documented. */
  projectType?: string;
  /** e.g. "December 2025 - August 2026". Omit if not documented. */
  duration?: string;
  description: string;
  /** Specific contributions made on this project (empty if not yet documented). */
  contributions: string[];
  /** Heading shown above the contributions list, e.g. "Key Features" for solo projects. */
  contributionsLabel?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  /** Path under /public, e.g. "/images/projects/dms.png". Omit to show a fallback. */
  image?: string;
  /** Set when full case-study details haven't been written up yet. */
  comingSoon?: boolean;
}

export const projects: Project[] = [
  {
    id: "voice-vault",
    title: "Voice Vault",
    projectType: "Individual Project",
    duration: "Aug 2026 - Sep 2026",
    description:
      "AI-powered study platform that transforms study materials into structured study notes, conversational scripts, and audio for flexible and accessible learning.",
    contributionsLabel: "Key Features",
    contributions: [
      "Multi-format note upload",
      "AI-generated study notes",
      "AI conversational study scripts",
      "Text-to-speech audio generation",
      "PDF & image OCR",
      "Audio playback & download",
      "Secure user authentication",
      "Google Sign-In",
      "Cloud-based document storage",
      "Asynchronous AI processing",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Gemini AI",
      "Amazon Polly",
      "AWS Lambda",
      "Amazon S3",
      "Docker",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Shashini543/voice-vault",
    image: "/images/projects/voice-vault.png",
  },
  {
    id: "universal-dms",
    title: "Universal DMS for ERP Integration",
    projectType: "Group Project",
    duration: "Dec 2025 - Aug 2026",
    description:
      "A secure web-based Universal Document Management System integrated with ERP environments to centralize document storage, metadata-based search, document lifecycle and version management, approval workflows, secure collaboration, OCR-based processing, role-based access control, audit logging, and ERP integration. Developed collaboratively as part of a 5-member Agile team at the University of Moratuwa with Informatics.",
    contributions: [
      "Approval workflow engine",
      "Workflow task management",
      "Secure document sharing",
      "Tokenized / expiring share links",
      "Edit permissions system",
      "PDF annotations layer",
      "Versioned collaboration",
      "Document locking",
      "SLA monitoring",
    ],
    technologies: ["Java 21", "Spring Boot", "REST APIs", "JWT", "TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui", "React Hook Form", "PostgreSQL", "AWS S3", "Apache PDFBox", "Tesseract.js"],
    githubUrl: "https://github.com/Group-CyberX",
    image: "/images/projects/universal-dms.png",
  },
  {
    id: "todo-web-app",
    title: "ToDo Web Application",
    projectType: "Group Project",
    duration: "Oct 2025 - Dec 2025",
    description:
      "A full-stack task management web application that allows users to securely create, manage, and track personal tasks. The application supports task status management, due-date tracking, a dedicated Today view, and reminders through a responsive web interface.",
    contributions: [
      "Today page",
      "Weekly date navigation",
      "Due-date-based task tracking",
      "Task progress tracking",
      "Reminders feature",
      "Responsive task management UI",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Tailwind CSS",
      "Zustand",
      "REST APIs",
      "React Hook Form",
      "Zod",
    ],
    githubUrl: "https://github.com/Shashini543/ToDo-Web-Application",
    image: "/images/projects/todo-web-app.png",
  },
  {
    id: "quickfix-hub",
    title: "QuickFix Hub – Home Services Booking Platform",
    projectType: "Group Project",
    duration: "Mar 2025 - Jun 2025",
    description:
      "A full-stack home services booking platform that allows customers to browse services, schedule appointments, and manage bookings. The system also provides administrators with centralized management of users, services, bookings, reviews, and contact messages.",
    contributionsLabel: "Key Features",
    contributions: [
      "Role-based customer and administrator access",
      "Secure session-based authentication",
      "Admin dashboard",
      "User, service, booking, review, and message management",
      "CRUD functionality and reporting",
      "Service browsing and appointment booking",
      "MySQL database integration using PDO",
    ],
    technologies: ["PHP", "MySQL", "PDO", "HTML", "CSS", "JavaScript", "Apache/XAMPP"],
    githubUrl: "https://github.com/Shashini543/quickfix-hub",
    image: "/images/projects/quickfix-hub.png",
  },
  {
    id: "cloth-steaming-machine",
    title: "Automatic Cloth Steaming and Folding Machine",
    projectType: "Group Project",
    duration: "Aug 2024 - Aug 2025",
    description:
      "An automated garment care system combining steaming and folding mechanisms to automate the clothing preparation process. The system integrates motors, sensors, a conveyor mechanism, and an Arduino-based control system for automated operation.",
    contributions: [
      "Conveyor belt mechanism assembly",
      "Gear motor mounting and wiring",
      "L298N motor driver configuration",
      "IR sensor mounting and wiring",
      "IR sensor positioning for cloth detection",
    ],
    technologies: [
      "Arduino Mega 2560",
      "Servo Motors",
      "Gear Motor",
      "L298N Motor Driver",
      "DS18B20",
      "IR Sensors",
      "Load Cell HX711",
      "Solenoid Valve",
      "Heating Coil",
      "Power Converters",
      "Embedded C",
    ],
    githubUrl: "https://github.com/Shashini543/steamx-arduino-system",
    liveUrl: "https://youtu.be/tu64GMI6wig",
    image: "/images/projects/cloth-steaming-machine.png",
  },
];
