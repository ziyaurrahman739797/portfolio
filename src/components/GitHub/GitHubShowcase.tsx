import { motion } from "framer-motion";
import { Github, FolderGit2, Sparkles, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { profile, featuredProject } from "@/data/portfolio";
import { staggerContainer } from "@/animations/variants";
import { STAGGER } from "@/utils/constants";

const cards = [
  {
    icon: Github,
    title: "Profile",
    body: `@${profile.githubUsername}`,
    href: profile.github,
  },
  {
    icon: FolderGit2,
    title: "Pinned Repository",
    body: featuredProject.name,
    href: featuredProject.githubUrl,
  },
  {
    icon: Sparkles,
    title: "Open Source Journey",
    body: "Learning in public, one commit at a time.",
    href: profile.github,
  },
];

export function GitHubShowcase() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <Reveal className="mb-16 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted/50">GitHub</p>
        <TextReveal
          as="h2"
          text="Active on GitHub."
          className="mt-3 font-serif text-4xl text-text sm:text-5xl"
        />
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(STAGGER.cards)}
        className="grid gap-5 sm:grid-cols-3"
      >
        {cards.map((card) => (
          <GlassCard key={card.title}>
            <card.icon size={22} className="text-text/80" aria-hidden="true" />
            <h3 className="mt-4 text-sm uppercase tracking-wide text-muted/50">{card.title}</h3>
            <p className="mt-1 text-base text-text">{card.body}</p>
            <a
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted/70 transition-colors hover:text-text"
            >
              View <ArrowRight size={14} aria-hidden="true" />
            </a>
          </GlassCard>
        ))}
      </motion.div>

      <div className="mt-12 flex justify-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="glass group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm text-text transition-shadow duration-300 hover:shadow-glow-md"
        >
          Visit GitHub
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
