import { User, Target, MapPin, GraduationCap, Laptop, Mail, Github } from "lucide-react";
import { profile } from "@/data/portfolio";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  user: User,
  target: Target,
  "map-pin": MapPin,
  "graduation-cap": GraduationCap,
  laptop: Laptop,
  mail: Mail,
};

const rows: { icon: keyof typeof iconMap; label: string }[] = [
  { icon: "user", label: "Fresher" },
  { icon: "target", label: profile.role },
  { icon: "map-pin", label: profile.location },
  { icon: "graduation-cap", label: "B.E Electronics Engineering" },
  { icon: "laptop", label: "AI Excel Chatbot" },
  { icon: "mail", label: "Available for Opportunities" },
];

/** Floating sticky recruiter summary, visible on desktop while scrolling through the page. */
export function RecruiterCard() {
  return (
    <div
      className="glass-strong fixed right-6 top-1/2 z-40 hidden w-64 -translate-y-1/2 rounded-[var(--radius-lg)] p-5 shadow-glass lg:block"
      aria-label="Recruiter quick view"
    >
      <p className="mb-3 text-xs uppercase tracking-[0.15em] text-muted/50">Quick View</p>
      <ul className="space-y-3">
        {rows.map((row) => {
          const Icon = iconMap[row.icon];
          return (
            <li key={row.label} className="flex items-start gap-2.5 text-sm text-muted/85">
              <Icon size={15} className="mt-0.5 shrink-0 text-text/70" aria-hidden="true" />
              <span>{row.label}</span>
            </li>
          );
        })}
      </ul>
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="mt-4 flex items-center gap-2 text-sm text-text/90 transition-colors hover:text-text"
      >
        <Github size={15} aria-hidden="true" />
        GitHub Profile
      </a>
    </div>
  );
}
