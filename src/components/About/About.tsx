import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { fadeLeft, staggerChild, staggerContainer } from "@/animations/variants";
import { profile, stats } from "@/data/portfolio";
import { STAGGER } from "@/utils/constants";

function StatCounter({ value, numeric }: { value: string; numeric?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200 });

  useEffect(() => {
    if (inView && numeric !== undefined) {
      motionValue.set(numeric);
    }
  }, [inView, numeric, motionValue]);

  useEffect(() => {
    if (!ref.current || numeric === undefined) return;
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(Math.round(v));
    });
  }, [spring, numeric]);

  if (numeric === undefined) {
    return <span>{value}</span>;
  }

  const suffix = value.replace(String(numeric), "");
  return (
    <>
      <span ref={ref}>0</span>
      {suffix}
    </>
  );
}

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid gap-16 md:grid-cols-2 md:items-center md:gap-12">
        <Reveal variants={fadeLeft} className="order-1">
  <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[var(--radius-lg)]">
    <img
      src="/images/portrait.jpg"
      alt="Portrait of Ziya Ur Rahman"
      className="h-full w-full animate-float-slow object-cover shadow-glass"
      loading="lazy"
      width={480}
      height={600}
    />
  </div>
</Reveal>

        <div className="order-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-muted/50">About Me</p>
          </Reveal>

          <TextReveal
            as="h2"
            text={profile.aboutHeading}
            className="mt-3 font-serif text-4xl leading-[1.1] text-text sm:text-5xl"
          />

          <Reveal delay={0.1} className="mt-6 space-y-4">
            {profile.aboutParagraphs.map((p) => (
              <p key={p.slice(0, 20)} className="text-sm leading-relaxed text-muted/75 sm:text-base">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(STAGGER.cards)}
        className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={staggerChild}
            className="glass rounded-[var(--radius-md)] p-6 text-center"
          >
            <p className="font-serif text-2xl text-text sm:text-3xl">
              <StatCounter value={stat.value} numeric={stat.numeric} />
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted/50">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
