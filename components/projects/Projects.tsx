"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function goTo(next: number) {
    const total = projects.length;
    setDirection(next > index ? 1 : -1);
    setIndex(((next % total) + total) % total);
  }

  const current = projects[index];

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Featured Work" title="Projects" align="left" />

          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-muted">
              {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => goTo(index - 1)}
                aria-label="Previous project"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => goTo(index + 1)}
                aria-label="Next project"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform hover:scale-105 cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <ProjectCard project={current} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {projects.map((project, i) => (
            <button
              key={project.id}
              onClick={() => goTo(i)}
              aria-label={`Go to ${project.title}`}
              aria-current={i === index}
              className={cn(
                "h-2 rounded-full transition-all cursor-pointer",
                i === index ? "w-8 bg-accent" : "w-2 bg-border hover:bg-accent/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
