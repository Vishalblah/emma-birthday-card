import { motion } from "motion/react";

interface FloatingParticlesProps {
  count?: number;
  emoji?: string;
}

export function FloatingParticles({ count = 15, emoji = "✨" }: FloatingParticlesProps) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            y: [0, -100],
            x: [0, Math.random() * 50 - 25],
          }}
          transition={{
            duration: Math.random() * 3 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeOut",
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </>
  );
}
