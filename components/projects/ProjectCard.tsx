import Image from "next/image";
import { ArrowRight, Clock, ImageOff, Play } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const hasMedia = Boolean(project.image);
  const meta = [project.projectType, project.duration].filter(Boolean).join(" · ");

  return (
    <div className="grid grid-cols-1 gap-8 rounded-3xl border border-border bg-card p-5 sm:p-7 lg:grid-cols-2 lg:gap-10 lg:p-9">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-background-soft">
        {hasMedia ? (
          <Image
            src={project.image as string}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-muted-soft">
            <ImageOff size={32} strokeWidth={1.5} />
            <span className="text-sm">Preview coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-foreground sm:text-3xl">{project.title}</h3>
        {meta && (
          <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-muted-soft">
            {meta}
          </p>
        )}
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        {project.contributions.length > 0 && (
          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {project.contributionsLabel ?? "My Contributions"}
            </p>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {project.contributions.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <ArrowRight size={14} className="mt-1 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.technologies.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-background-soft px-3 py-1 font-mono text-xs text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
          {project.comingSoon && (
            <span className="flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm text-muted-soft">
              <Clock size={15} />
              Full case study coming soon
            </span>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon size={16} />
              View Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              <Play size={16} />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
