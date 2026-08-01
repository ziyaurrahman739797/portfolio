import { motion } from "framer-motion";
import { useRef, useState, type ReactNode, type CSSProperties } from "react";
import { cardReveal } from "@/animations/variants";
import { prefersReducedMotion } from "@/animations/gsap";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}

/** Premium glass surface: hover lift, border glow, and a soft cursor-tracked reflection. */
export function GlassCard({ children, className = "", tilt = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || prefersReducedMotion() || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - py) * 6;
    const rotateY = (px - 0.5) * 6;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`,
      backgroundImage: `radial-gradient(400px circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.06), transparent 60%)`,
    });
  };

  const handleLeave = () => setStyle({});

  return (
    <motion.div
      ref={ref}
      variants={cardReveal}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={`glass rounded-[var(--radius-lg)] p-6 transition-[transform,box-shadow] duration-300 ease-premium hover:shadow-glow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
