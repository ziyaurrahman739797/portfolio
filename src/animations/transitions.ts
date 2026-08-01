import type { Variants } from "framer-motion";

/** Fade + scale + blur page transition. No spinners, per Part 4. */
export const pageTransition: Variants = {
  initial: { opacity: 0, scale: 0.99, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.99,
    filter: "blur(6px)",
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};
