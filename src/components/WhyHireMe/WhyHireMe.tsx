import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { whyHireCards } from "@/data/portfolio";
import { staggerContainer } from "@/animations/variants";
import { STAGGER } from "@/utils/constants";

export function WhyHireMe() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <Reveal className="mb-16 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted/50">Why Hire Me</p>
        <TextReveal
          as="h2"
          text="Mindset Over Résumé Lines."
          className="mt-3 font-serif text-4xl text-text sm:text-5xl"
        />
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(STAGGER.cards)}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {whyHireCards.map((card) => (
          <GlassCard key={card.id}>
            <h3 className="font-serif text-xl text-text">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted/70">{card.description}</p>
          </GlassCard>
        ))}
      </motion.div>
    </section>
  );
}
