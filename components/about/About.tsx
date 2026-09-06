"use client";

import { motion } from "motion/react";
import { BookOpen, Code2, Lightbulb, Users } from "lucide-react";
import { projects } from "@/data/projects";
import { skillCategories, skills } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";

const strengths = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Comfortable across the stack, from backend services to responsive UIs.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Breaking down complex requirements into practical, working solutions.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Building software as part of a team, through academic and group projects.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new tools, frameworks, and technologies.",
  },
];

const stats = [
  { label: "Projects", value: String(projects.length) },
  { label: "Technologies", value: String(skills.length) },
  { label: "Skill Areas", value: String(skillCategories.length) },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Get to Know Me" title="About Me" />

        <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="mb-5 block h-1 w-16 rounded-full bg-accent" />
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Third-year Information Technology undergraduate at the University of Moratuwa with
              a strong interest in software engineering and full-stack development. I have
              hands-on experience with Java, Spring Boot, React, Next.js, PHP, PostgreSQL, and
              Git through academic and team-based projects. I enjoy building practical
              applications, developing backend systems, designing responsive interfaces, and
              working with cloud and embedded technologies. I&rsquo;m passionate about solving
              real-world problems, learning continuously, and turning ideas into meaningful
              software.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-accent/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <strength.icon size={18} />
                </span>
                <p className="mt-3 text-sm font-semibold text-foreground">{strength.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-soft">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8 text-center sm:mt-20"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-accent">{stat.value}+</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted-soft">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
