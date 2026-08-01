import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { BUTTON_MAX_SCALE } from "@/utils/constants";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type MotionConflictKeys =
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  showArrow?: boolean;
  className?: string;
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, MotionConflictKeys> & { href?: undefined };

type LinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, MotionConflictKeys> & { href: string };

const base =
  "group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-300 focus-visible:outline-none";

const variants = {
  primary: "glass-strong text-text hover:shadow-glow-md",
  secondary: "glass text-muted/90 hover:text-text hover:shadow-glow-sm",
};

export function Button(props: ButtonProps | LinkProps) {
  const { children, variant = "primary", showArrow = true, className = "", ...rest } = props;
  const magneticRef = useMagnetic<HTMLAnchorElement & HTMLButtonElement>();

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, MotionConflictKeys>;
    return (
      <motion.a
        ref={magneticRef}
        href={href}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: BUTTON_MAX_SCALE }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={classes}
        {...anchorRest}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={magneticRef}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: BUTTON_MAX_SCALE }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={classes}
      {...(rest as Omit<ButtonHTMLAttributes<HTMLButtonElement>, MotionConflictKeys>)}
    >
      {content}
    </motion.button>
  );
}