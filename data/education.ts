export interface EducationItem {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  current: boolean;
  icon: "graduation" | "school";
}

export const education: EducationItem[] = [
  {
    id: "moratuwa",
    period: "2024 — Present",
    title: "University of Moratuwa",
    subtitle: "B.Sc. (Hons) Information Technology",
    description:
      "Software Engineering undergraduate. Focused on algorithms, distributed systems, software architecture, and full-stack development.",
    current: true,
    icon: "graduation",
  },
  {
    id: "secondary",
    period: "2019 — 2022",
    title: "Sivali Central College , Rathnapura",
    subtitle: "Advanced Level — Physical Science Stream",
    description:
      "Achieved AAC grades in the Physical Science stream with a Z-score of 1.5579.",
    current: false,
    icon: "school",
  },
];
