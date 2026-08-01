import { Github, Mail, Phone } from "lucide-react";
import { footerLinks, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-text">{profile.name}</p>
          <p className="mt-1 text-sm text-muted/60">{profile.role}</p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-3 text-xs uppercase tracking-wide text-muted/50">Quick Links</p>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted/70 transition-colors hover:text-text">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-xs uppercase tracking-wide text-muted/50">Connect</p>
          <ul className="space-y-2">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-muted/70 transition-colors hover:text-text"
              >
                <Github size={15} aria-hidden="true" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-muted/70 transition-colors hover:text-text"
              >
                <Mail size={15} aria-hidden="true" /> {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-muted/70 transition-colors hover:text-text"
              >
                <Phone size={15} aria-hidden="true" /> {profile.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-muted/40">
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and Tailwind CSS.
      </div>
    </footer>
  );
}
