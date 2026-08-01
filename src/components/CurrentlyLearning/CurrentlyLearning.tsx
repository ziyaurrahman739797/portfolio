import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { currentlyLearning } from "@/data/portfolio";
import { staggerChild, staggerContainer } from "@/animations/variants";
import { STAGGER } from "@/utils/constants";
import type { LearningStatus } from "@/types";

const statusStyles: Record<LearningStatus, string> = {
  learning: "bg-white/10 text-muted/80",
  upcoming: "bg-white/5 text-muted/50",
  completed: "bg-success/15 text-success",
};

const statusLabel: Record<LearningStatus, string> = {
  learning: "Learning",
  upcoming: "Upcoming",
  completed: "Completed",
};

export function CurrentlyLearning() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
      <Reveal className="mb-16 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted/50">Roadmap</p>
        <TextReveal
          as="h2"
          text="Currently Learning."
          className="mt-3 font-serif text-4xl text-text sm:text-5xl"
        />
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(STAGGER.list)}
        className="glass flex flex-wrap justify-center gap-3 rounded-[var(--radius-lg)] p-8"
      >
        {currentlyLearning.map((item) => (
          <motion.span
            key={item.name}
            variants={staggerChild}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ${statusStyles[item.status]}`}
          >
            {item.name}
            <span className="text-[10px] uppercase tracking-wide opacity-70">{statusLabel[item.status]}</span>
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
