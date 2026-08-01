import gsap from "gsap";

/**
 * Splits an element's text content into one <span> per character,
 * each wrapped for independent animation. Used as our lightweight
 * SplitText alternative for the loader letter-reveal ("Z" -> "ZI" -> ...).
 */
export function splitIntoChars(el: HTMLElement): HTMLSpanElement[] {
  const text = el.textContent ?? "";
  el.textContent = "";
  const spans: HTMLSpanElement[] = [];
  for (const char of text) {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block";
    span.style.willChange = "transform, opacity, filter";
    el.appendChild(span);
    spans.push(span);
  }
  return spans;
}

export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Standard easing used across every GSAP timeline for visual consistency. */
export const PREMIUM_EASE = "power3.out";

export { gsap };
