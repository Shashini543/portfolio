"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { skillCategories, skills, type SkillCategory } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function Skills() {
  const [active, setActive] = useState<SkillCategory>(skillCategories[0]);

  const visibleSkills = useMemo(
    () => skills.filter((skill) => skill.category === active),
    [active]
  );

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="What I Work With" title="Skills" />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all cursor-pointer",
                active === category
                  ? "bg-accent text-accent-foreground"
                  : "border border-border text-muted hover:border-accent/40 hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 min-h-[168px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
            >
              {visibleSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 text-center transition-all hover:-translate-y-1 hover:border-accent/40"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold"
                    style={{
                      color: skill.color,
                      backgroundColor: `${skill.color}1a`,
                      border: `1px solid ${skill.color}40`,
                    }}
                  >
                    {skill.badge}
                  </span>
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-muted-soft">
            All Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
