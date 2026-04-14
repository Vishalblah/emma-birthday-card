import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode } from "react";

interface ParallaxBackgroundProps {
  children: ReactNode;
  className?: string;
}

export function ParallaxBackground({ children, className = "" }: ParallaxBackgroundProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
