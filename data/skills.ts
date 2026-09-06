export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Database"
  | "Tools & Platforms"
  | "Hardware & Platforms";

export interface Skill {
  name: string;
  category: SkillCategory;
  /** Short badge label used for the monogram tile, e.g. "TS", "JS". */
  badge: string;
  /** Accent color for the monogram tile. */
  color: string;
}

export const skillCategories: SkillCategory[] = [
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "Tools & Platforms",
  "Hardware & Platforms",
];

export const skills: Skill[] = [
  // Languages
  { name: "Java", category: "Languages", badge: "Jv", color: "#e8853a" },
  { name: "TypeScript", category: "Languages", badge: "TS", color: "#3b82f6" },
  { name: "JavaScript", category: "Languages", badge: "JS", color: "#f2c94c" },
  { name: "Python", category: "Languages", badge: "Py", color: "#4c9be8" },
  { name: "PHP", category: "Languages", badge: "PHP", color: "#8b7fd6" },
  { name: "C / C++", category: "Languages", badge: "C++", color: "#a3a8b0" },

  // Frontend
  { name: "HTML5", category: "Frontend", badge: "H5", color: "#e8853a" },
  { name: "CSS", category: "Frontend", badge: "CSS", color: "#4c9be8" },
  { name: "React", category: "Frontend", badge: "Re", color: "#61dafb" },
  { name: "Next.js", category: "Frontend", badge: "Nx", color: "#e8e6e3" },
  { name: "Tailwind CSS", category: "Frontend", badge: "Tw", color: "#38bdf8" },

  // Backend
  { name: "Spring Boot", category: "Backend", badge: "Sb", color: "#6cbf5a" },
  { name: "Node.js", category: "Backend", badge: "Nd", color: "#7fbf5a" },
  { name: "REST APIs", category: "Backend", badge: "API", color: "#e8853a" },

  // Database
  { name: "PostgreSQL", category: "Database", badge: "Pg", color: "#4c9be8" },
  { name: "MySQL", category: "Database", badge: "My", color: "#e8853a" },
  { name: "MS SQL", category: "Database", badge: "Ms", color: "#cc6b3a" },
  { name: "Neon", category: "Database", badge: "Ne", color: "#5ac9a3" },

  // Tools & Platforms
  { name: "Git", category: "Tools & Platforms", badge: "Git", color: "#e8653a" },
  { name: "GitHub", category: "Tools & Platforms", badge: "Gh", color: "#e8e6e3" },
  { name: "Vercel", category: "Tools & Platforms", badge: "Vc", color: "#e8e6e3" },

  // Hardware & Platforms
  { name: "Arduino", category: "Hardware & Platforms", badge: "Ar", color: "#5ac9a3" },
  { name: "EasyEDA", category: "Hardware & Platforms", badge: "PCB", color: "#4c9be8" },
];
