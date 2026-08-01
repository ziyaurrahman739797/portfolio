import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { learningJourney } from "@/data/portfolio";

export function LearningJourney() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <Reveal className="mb-16 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted/50">Learning Journey</p>
        <TextReveal
          as="h2"
          text="From Curiosity to Career-Ready."
          className="mt-3 font-serif text-4xl text-text sm:text-5xl"
        />
      </Reveal>

      <div className="relative flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-4">
        <div className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] md:block">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="h-full bg-gradient-to-r from-white/50 via-white/20 to-transparent"
          />
        </div>
        <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-white/10 md:hidden" />

        {learningJourney.map((node, i) => (
          <Reveal key={node.id} delay={i * 0.08} className="relative flex flex-1 flex-col items-start gap-3 md:items-center md:text-center">
            <motion.div
              whileInView={{ scale: [0.7, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm text-text shadow-glow-sm transition-shadow duration-300 hover:shadow-glow-md"
            >
              {i + 1}
            </motion.div>
            <div>
              <p className="text-sm font-medium text-text">{node.label}</p>
              <p className="mt-1 max-w-[16ch] text-xs leading-relaxed text-muted/60 md:mx-auto">
                {node.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
