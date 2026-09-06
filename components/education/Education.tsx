"use client";

import { motion } from "motion/react";
import { GraduationCap, School } from "lucide-react";
import { education } from "@/data/education";
import SectionHeading from "@/components/ui/SectionHeading";

const icons = { graduation: GraduationCap, school: School };

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="My Journey" title="Education" />

        <div className="relative mt-16">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />

          <ol className="space-y-12">
            {education.map((item, index) => {
              const Icon = icons[item.icon];
              const alignRight = index % 2 === 1;

              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="relative grid grid-cols-1 gap-6 pl-16 sm:grid-cols-2 sm:gap-10 sm:pl-0"
                >
                  <div
                    className="absolute left-6 top-1.5 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-accent/40 bg-card text-accent sm:left-1/2"
                    aria-hidden="true"
                  >
                    <Icon size={16} />
                  </div>

                  <div className={alignRight ? "sm:col-start-2" : "sm:col-start-1 sm:row-start-1"}>
                    <EducationCard item={item} />
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function EducationCard({ item }: { item: (typeof education)[number] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40 sm:p-7">
      {item.current && (
        <span className="mb-3 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          Current
        </span>
      )}
      <p className="font-mono text-sm text-accent">{item.period}</p>
      <h3 className="mt-2 text-xl font-bold text-foreground">{item.title}</h3>
      <p className="mt-1 text-sm font-semibold text-accent-soft">{item.subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
    </div>
  );
}
