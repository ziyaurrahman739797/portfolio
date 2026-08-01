import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Background } from "@/components/Background/Background";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/portfolio";
import { EASE_PREMIUM } from "@/utils/constants";

const lineVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.15 * i, ease: EASE_PREMIUM },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <Background />

      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          className="font-serif text-5xl leading-[1.05] text-text sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          className="mt-5 text-lg text-muted/85 sm:text-xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: EASE_PREMIUM }}
          className="mx-auto mt-6 max-w-xl text-balance text-sm leading-relaxed text-muted/70 sm:text-base"
        >
          {profile.heroSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.75, ease: EASE_PREMIUM }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href="#contact" variant="secondary" showArrow={false}>
            Contact Me
          </Button>
          <Button href="/resume.pdf" variant="secondary" showArrow={false}>
            Download Resume
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted/50"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
