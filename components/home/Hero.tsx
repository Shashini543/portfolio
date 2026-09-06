"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Download, Mail } from "lucide-react";
import { site } from "@/data/site";
import { scrollToId } from "@/lib/utils";
import FloatingTech from "./FloatingTech";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {site.availability}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-muted"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-1 text-5xl font-extrabold uppercase leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            {site.firstName}
            <br />
            <span className="text-gradient-accent">{site.lastName}</span>
            <br />
            <span className="text-gradient-accent">{site.surname}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-accent" />
            <h2 className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {site.role}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollToId("contact")}
              className="flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent cursor-pointer"
            >
              <Mail size={16} />
              Contact Me
            </button>
            <a
              href={site.cvPath}
              download
              className="flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[560px]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-full bg-accent/25 blur-[70px]"
          />
          <div className="relative">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square"
            >
              <Image
                src={site.heroImage}
                alt={`Illustration of ${site.name} with a laptop, surrounded by technology icons`}
                fill
                priority
                sizes="(min-width: 1024px) 560px, (min-width: 640px) 440px, 360px"
                className="object-contain"
              />
            </motion.div>
            <FloatingTech />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToId("education")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        aria-label="Scroll to education section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-soft sm:flex cursor-pointer"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 w-px bg-muted-soft"
        />
      </motion.button>
    </section>
  );
}
