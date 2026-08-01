import { useCursor } from "@/hooks/useCursor";

/** Ambient radial spotlight that follows the cursor. Disabled on touch devices automatically. */
export function Spotlight() {
  const { enabled, position } = useCursor();

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 70%)`,
      }}
      aria-hidden="true"
    />
  );
}
