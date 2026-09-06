"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, CheckCircle2, Copy, Download, Loader2, Mail, XCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;
type SubmitStatus = "idle" | "submitting" | "success" | "error";

const socialLinks = [
  { label: "GitHub", value: site.github, href: site.githubUrl, Icon: GithubIcon },
  { label: "LinkedIn", value: site.linkedin, href: site.linkedinUrl, Icon: LinkedinIcon },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [copied, setCopied] = useState(false);

  function validate(values: FormState): FormErrors {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email)) next.email = "Please enter a valid email address.";
    if (!values.message.trim()) next.message = "Please enter a message.";
    else if (values.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error(
        "Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY. Add it to .env.local (and in Vercel's project settings) to enable the contact form."
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio inquiry from ${form.name}`,
        }),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (status === "success" || status === "error") setStatus("idle");
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = site.email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Get In Touch
          </p>
          <h2 className="mt-3 text-4xl font-extrabold text-foreground sm:text-5xl">
            Let&apos;s build something <span className="text-gradient-accent">together.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Open to internships, collaborations, and interesting software projects.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8"
          >
            <h3 className="text-lg font-bold text-foreground">Reach me at</h3>
            <div className="mt-5 space-y-3">
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? "Email address copied to clipboard" : "Copy email address to clipboard"}
                className="flex w-full items-center gap-4 rounded-2xl border border-border bg-background-soft px-4 py-3.5 text-left transition-colors hover:border-accent/40 cursor-pointer"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Mail size={17} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] uppercase tracking-wide text-muted-soft">
                    {copied ? "Copied!" : "Email"}
                  </span>
                  <span className="block truncate text-sm font-semibold text-foreground">
                    {site.email}
                  </span>
                </span>
                <span className="shrink-0 text-muted-soft" aria-hidden="true">
                  {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
                </span>
              </button>

              {socialLinks.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-background-soft px-4 py-3.5 transition-colors hover:border-accent/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon size={17} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-wide text-muted-soft">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-semibold text-foreground">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <a
              href={site.cvPath}
              download
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8"
          >
            <h3 className="text-lg font-bold text-foreground">Send a Message</h3>

            <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
              <Field
                id="name"
                label="Name"
                placeholder="Your name"
                value={form.name}
                error={errors.name}
                onChange={(v) => updateField("name", v)}
              />
              <Field
                id="email"
                label="Email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                error={errors.email}
                onChange={(v) => updateField("email", v)}
              />
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-wide text-muted-soft">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(
                    "w-full resize-none rounded-xl border bg-background-soft px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-soft focus:border-accent",
                    errors.message ? "border-red-500/60" : "border-border"
                  )}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                aria-label={status === "submitting" ? "Sending message" : "Send message"}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 cursor-pointer"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent"
                >
                  <CheckCircle2 size={16} />
                  Message sent successfully!
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                >
                  <XCircle size={16} />
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs uppercase tracking-wide text-muted-soft">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full rounded-xl border bg-background-soft px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-soft focus:border-accent",
          error ? "border-red-500/60" : "border-border"
        )}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
