import { motion } from "framer-motion";
import { Check, Github } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { Button } from "@/components/ui/Button";
import { featuredProject } from "@/data/portfolio";
import { fadeLeft, fadeRight, staggerChild, staggerContainer } from "@/animations/variants";
import { STAGGER } from "@/utils/constants";

export function FeaturedProject() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <Reveal className="mb-16 text-center">
        <TextReveal
          as="h2"
          text="Featured Project"
          className="font-serif text-4xl text-text sm:text-5xl"
        />
        <p className="mx-auto mt-4 max-w-lg text-sm text-muted/70 sm:text-base">
          Building AI-powered tools that simplify everyday work.
        </p>
      </Reveal>

      <div className="glass grid gap-10 rounded-[var(--radius-lg)] p-6 md:grid-cols-2 md:gap-12 md:p-12">
        <Reveal variants={fadeLeft}>
          {/* Browser mockup */}
          <div className="glass-strong overflow-hidden rounded-[var(--radius-md)] shadow-glass">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex aspect-video items-center justify-center bg-gradient-to-br from-white/5 to-transparent"
            >
              <img
                src="/images/ai-excel-chatbot-preview.jpg"
                alt="AI Excel Chatbot interface preview"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </Reveal>

        <Reveal variants={fadeRight}>
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wide text-muted/70">
            {featuredProject.badge}
          </span>
          <h3 className="mt-4 font-serif text-3xl text-text sm:text-4xl">{featuredProject.name}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted/75 sm:text-base">
            {featuredProject.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {featuredProject.techStack.map((tech) => (
              <span
                key={tech}
                className="glass rounded-full px-3 py-1 text-xs text-muted/80 transition-shadow duration-300 hover:shadow-glow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(STAGGER.list)}
            className="mt-6 space-y-2"
          >
            {featuredProject.features.map((f) => (
              <motion.li key={f.label} variants={staggerChild} className="flex items-center gap-2 text-sm text-muted/80">
                <Check size={15} className="text-success" aria-hidden="true" />
                {f.label}
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={featuredProject.liveUrl ?? featuredProject.githubUrl} target="_blank" rel="noreferrer" variant="primary">
  View Project
</Button>
            <Button href={featuredProject.githubUrl} target="_blank" rel="noreferrer" variant="secondary" showArrow={false}>
              <Github size={15} className="mr-1 inline" aria-hidden="true" />
              GitHub Repository
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
