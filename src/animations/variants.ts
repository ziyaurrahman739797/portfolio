import type { Variants } from "framer-motion";
import { DURATION, EASE_PREMIUM, STAGGER, CARD_ENTER_SCALE } from "@/utils/constants";

/** Fade content upward into place. The default reveal for most content. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_PREMIUM },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE_PREMIUM },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE_PREMIUM },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: CARD_ENTER_SCALE },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.base + 0.2, ease: EASE_PREMIUM },
  },
};

/** Blur-reduces into focus while fading up. Used for hero-weight headings. */
export const blurReveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.slow, ease: EASE_PREMIUM },
  },
};

/** Card entrance: opacity + scale + translateY + blur, per Part 4 card spec. */
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24, scale: CARD_ENTER_SCALE, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
};

export const staggerContainer = (stagger: number = STAGGER.list, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_PREMIUM },
  },
};

/** Splits text into words and reveals them with an 80ms stagger. Consumed by <TextReveal>. */
export const textRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER.text },
  },
};

export const textRevealWord: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.base + 0.15, ease: EASE_PREMIUM },
  },
};
