import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School, Cpu } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { education } from "@/data/portfolio";
import { fadeLeft, fadeRight } from "@/animations/variants";

const icons = [School, GraduationCap, Cpu];

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
      <Reveal className="mb-16 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted/50">Education</p>
        <TextReveal
          as="h2"
          text="A Journey Through Learning."
          className="mt-3 font-serif text-4xl text-text sm:text-5xl"
        />
      </Reveal>

      <div ref={containerRef} className="relative">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10 md:block" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-white/60 to-white/10"
        />

        <div className="relative space-y-14">
          {education.map((item, i) => {
            const Icon = icons[i % icons.length];
            const alignLeft = i % 2 === 0;
            return (
              <div key={item.id} className="grid items-center gap-6 md:grid-cols-2">
                <Reveal
                  variants={alignLeft ? fadeRight : fadeLeft}
                  delay={0.1}
                  className={`${alignLeft ? "md:order-1 md:text-right" : "md:order-2"}`}
                >
                  <div className="glass inline-block w-full rounded-[var(--radius-lg)] p-6 transition-shadow duration-300 hover:shadow-glow-sm md:max-w-sm">
                    <div className={`mb-2 flex items-center gap-2 ${alignLeft ? "md:justify-end" : ""}`}>
                      <h3 className="font-serif text-xl text-text">{item.title}</h3>
                      {item.badge && (
                        <span className="animate-pulse-soft rounded-full bg-success/15 px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-success">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted/80">{item.institution}</p>
                    <p className="text-sm text-muted/60">{item.field}</p>
                  </div>
                </Reveal>

                <div className={`hidden md:flex ${alignLeft ? "order-2 justify-start" : "order-1 justify-end"}`}>
                  <motion.div
                    whileInView={{ rotate: [0, 8, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass-strong flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-glow-sm"
                  >
                    <Icon size={22} className="text-text/80" aria-hidden="true" />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
