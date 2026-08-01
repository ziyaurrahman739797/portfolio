import { useMemo } from "react";
import { motion } from "framer-motion";
import { PARTICLE_COUNT } from "@/utils/constants";

interface ParticleSeed {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
}

/** Slow-floating ambient particles. Purely decorative, capped at 20, respawns via infinite loop. */
export function Particles() {
  const particles = useMemo<ParticleSeed[]>(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 2,
        duration: 14 + Math.random() * 12,
        delay: Math.random() * 10,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{ left: p.left, width: p.size, height: p.size, bottom: "-10px", opacity: 0.18 }}
          animate={{ y: ["0%", "-120vh"], opacity: [0, 0.22, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
