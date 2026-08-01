import { useEffect } from "react";
import Lenis from "lenis";
import { prefersReducedMotion } from "@/animations/gsap";

/** Initializes buttery-smooth scrolling across desktop, tablet, and mobile. Skips entirely if reduced motion is preferred. */
export function useLenis() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
