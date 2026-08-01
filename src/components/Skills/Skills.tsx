import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { skills } from "@/data/portfolio";
import { staggerContainer } from "@/animations/variants";
import { STAGGER } from "@/utils/constants";
import type { SkillCategory } from "@/types";

const categories: SkillCategory[] = ["SAP", "Programming", "Tools"];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <Reveal className="mb-16 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted/50">Skills</p>
        <TextReveal
          as="h2"
          text="Tools I'm Building With."
          className="mt-3 font-serif text-4xl text-text sm:text-5xl"
        />
      </Reveal>

      <div className="space-y-14">
        {categories.map((category) => (
          <div key={category}>
            <Reveal className="mb-5">
              <h3 className="text-sm uppercase tracking-[0.15em] text-muted/50">{category}</h3>
            </Reveal>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer(STAGGER.cards)}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
            >
              {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <GlassCard key={skill.name} className="flex flex-col gap-2 !p-5">
                    <span className="text-sm font-medium text-text">{skill.name}</span>
                    {skill.learning ? (
                      <span className="w-fit rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-muted/70">
                        Currently Learning
                      </span>
                    ) : (
                      <span className="w-fit rounded-full bg-success/15 px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-success">
                        Comfortable
                      </span>
                    )}
                  </GlassCard>
                ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
