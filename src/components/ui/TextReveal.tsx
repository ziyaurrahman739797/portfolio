import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { textRevealContainer, textRevealWord } from "@/animations/variants";

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  triggerOnMount?: boolean;
}

/** Splits text into words and reveals each with opacity + Y + blur, staggered ~80ms apart. */
export function TextReveal({ text, as = "h2", className, triggerOnMount = false }: TextRevealProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const words = text.split(" ");
  const Tag = motion[as];
  const animate = triggerOnMount ? "visible" : inView ? "visible" : "hidden";

  return (
    <Tag
      ref={ref}
      initial="hidden"
      animate={animate}
      variants={textRevealContainer}
      className={className}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={textRevealWord}
          style={{ display: "inline-block", marginRight: "0.28em" }}
          aria-hidden="true"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
