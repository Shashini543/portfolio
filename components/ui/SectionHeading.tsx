"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl font-extrabold text-foreground sm:text-5xl">{title}</h2>
      <span
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-accent",
          align === "center" ? "mx-auto block" : "block"
        )}
      />
    </motion.div>
  );
}
