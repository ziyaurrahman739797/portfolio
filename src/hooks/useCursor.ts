import { useEffect, useRef, useState } from "react";

/** Tracks cursor position for the ambient spotlight. Disabled on touch devices. */
export function useCursor() {
  const [enabled, setEnabled] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const [, forceRender] = useState(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setEnabled(!isTouch);
    if (isTouch) return;

    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(() => {
          forceRender((n) => n + 1);
          rafId.current = null;
        });
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return { enabled, position: pos.current };
}
