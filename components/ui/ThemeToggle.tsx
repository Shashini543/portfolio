"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { getServerThemeSnapshot, getThemeSnapshot, setTheme, subscribeTheme } from "@/lib/theme";

export default function ThemeToggle() {
  const isLight = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);

  return (
    <button
      type="button"
      onClick={() => setTheme(!isLight)}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={isLight}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-accent hover:text-accent cursor-pointer"
    >
      <motion.span
        key={String(isLight)}
        initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        {isLight ? <Moon size={18} /> : <Sun size={18} />}
      </motion.span>
    </button>
  );
}
