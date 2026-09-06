import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-soft">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-8 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <p className="text-sm text-muted">
          © {year} {site.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={16} />
          </a>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
