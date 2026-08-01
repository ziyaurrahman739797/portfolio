import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Menu, X, FileDown } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#about");

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY && y > 200);
      lastY = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <nav
          className={`flex w-full max-w-3xl items-center justify-between rounded-full px-5 transition-all duration-300 ease-premium ${
            scrolled ? "glass-strong py-2 shadow-glass" : "glass py-3"
          }`}
          aria-label="Primary"
        >
          <a href="#top" className="font-serif text-lg text-text" aria-label="Ziya Ur Rahman, home">
            ZUR
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative text-sm transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-text after:transition-all after:duration-300 hover:after:w-full ${
                    activeHref === link.href ? "text-text" : "text-muted/70 hover:text-text"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="/resume.pdf"
              className="flex items-center gap-1.5 text-sm text-muted/80 transition-colors hover:text-text"
              aria-label="Download resume"
            >
              <FileDown size={15} aria-hidden="true" />
              Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted/80 transition-colors hover:text-text"
              aria-label="Open GitHub profile"
            >
              <Github size={17} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="rounded-full glass px-4 py-1.5 text-sm text-text transition-shadow hover:shadow-glow-sm"
            >
              Contact
            </a>
          </div>

          <button
            className="text-text md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="glass-strong fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              className="absolute right-6 top-6 text-text"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-text"
              >
                {link.label}
              </a>
            ))}
            <a href="/resume.pdf" className="text-muted/80" onClick={() => setMobileOpen(false)}>
              Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted/80"
              onClick={() => setMobileOpen(false)}
            >
              GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
