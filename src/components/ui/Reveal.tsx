import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp } from "@/animations/variants";
import { SCROLL_REVEAL_AMOUNT } from "@/utils/constants";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}

/** Wraps content so it fades/translates/blurs into view once, the first time it crosses ~25% into viewport. */
export function Reveal({ children, variants = fadeUp, className, delay = 0, as = "div" }: RevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: SCROLL_REVEAL_AMOUNT,
  });

  const MotionTag = as === "section" ? motion.section : motion.div;

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
