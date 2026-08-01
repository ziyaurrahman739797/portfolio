import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap, prefersReducedMotion } from "@/animations/gsap";

const SESSION_KEY = "portfolio_visited";
const FULL_NAME = "ZIYA UR RAHMAN";
const STEPS = ["Z", "ZI", "ZIY", "ZIYA", FULL_NAME];

interface LoaderProps {
  onComplete: () => void;
}

/** Black screen -> stepped name reveal (Z, ZI, ZIY, ZIYA, ZIYA UR RAHMAN) -> dissolve. ~2.5-3s total. */
export function Loader({ onComplete }: LoaderProps) {
  const [visible, setVisible] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const alreadyVisited = sessionStorage.getItem(SESSION_KEY);
    const reduced = prefersReducedMotion();

    if (alreadyVisited || reduced) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setVisible(false);
      onComplete();
      return;
    }

    sessionStorage.setItem(SESSION_KEY, "1");

    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false);
        onComplete();
      },
    });

    // Step through Z -> ZI -> ZIY -> ZIYA -> full name, ~130ms per step.
    STEPS.forEach((_, i) => {
      tl.call(() => setStepIndex(i), undefined, i * 0.13);
    });

    // Hold on the full name briefly, then let the exit transition (below) dissolve it.
    tl.to({}, { duration: 1.4 });

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          aria-hidden="true"
        >
          <span className="font-serif text-3xl tracking-[0.2em] text-text sm:text-5xl">
            {STEPS[stepIndex]}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
