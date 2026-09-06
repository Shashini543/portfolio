"use client";

import type { ComponentType } from "react";
import { motion } from "motion/react";
import { Braces, Code2, Sparkles, TerminalSquare } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";

type IconComponent = ComponentType<{
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}>;

interface FloatingIcon {
  Icon: IconComponent;
  className: string;
  color: string;
  duration: number;
  delay: number;
}

const ICONS: FloatingIcon[] = [
  { Icon: Braces, className: "left-[2%] top-[12%]", color: "#f2c94c", duration: 5, delay: 0 },
  { Icon: Code2, className: "right-[0%] top-[6%]", color: "#3b82f6", duration: 6, delay: 0.4 },
  { Icon: TerminalSquare, className: "right-[6%] top-[52%]", color: "#38bdf8", duration: 5.5, delay: 0.8 },
  { Icon: GithubIcon, className: "left-[0%] bottom-[16%]", color: "#e8e6e3", duration: 6.5, delay: 1.2 },
];

const PARTICLES = [
  { className: "left-[8%] top-[4%]", size: 8, duration: 4 },
  { className: "right-[14%] top-[30%]", size: 6, duration: 5 },
  { className: "left-[16%] bottom-[8%]", size: 5, duration: 4.5 },
  { className: "right-[2%] bottom-[28%]", size: 7, duration: 5.5 },
];

export default function FloatingTech() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute inset-[6%] rounded-full border border-dashed border-accent/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-[14%] rounded-full border border-accent/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      {ICONS.map(({ Icon, className, color, duration, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/90 shadow-lg backdrop-blur-sm ${className}`}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon size={20} color={color} strokeWidth={1.75} />
        </motion.div>
      ))}

      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className={`absolute rounded-full bg-accent/70 ${p.className}`}
          style={{ width: p.size, height: p.size }}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -10, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-border bg-card/90 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="inline-flex items-center gap-1.5">
          <Sparkles size={12} />
          React
        </span>
      </motion.div>
    </div>
  );
}
