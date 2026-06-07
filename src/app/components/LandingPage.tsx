import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

export function LandingPage() {
  const navigate = useNavigate();
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);

    setTimeout(() => navigate("/memories"), 300);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ["rgba(255,182,193,0.4)", "rgba(221,160,221,0.4)", "rgba(173,216,230,0.4)"][
                  i % 3
                ]
              }, transparent)`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              rotate: [0, 5, -5, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-16 h-16 text-pink-400 mx-auto" strokeWidth={1.5} />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Happy Birthday Emma!
          </motion.h1>

          <motion.div
            className="space-y-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/image22.png" alt="image" />
          </motion.div>

          {/* Glassmorphism Card */}
          <motion.div
            className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl p-8 shadow-2xl shadow-purple-200/50 mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)",
            }}
            style={{
              transition: "box-shadow 0.3s ease",
            }}
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              I made you something special because apparently,{" "}
              <span className="font-semibold text-pink-500">tolerating you</span> has become my
              full-time job. 💕
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={handleButtonClick}
              className="group relative overflow-hidden px-10 py-5 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {ripples.map((ripple) => (
                <motion.span
                  key={ripple.id}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                  }}
                  initial={{ width: 0, height: 0, opacity: 0.6 }}
                  animate={{ width: 300, height: 300, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              ))}
              <span className="relative flex items-center gap-2">
                Let's Begin
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Hearts */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: -50,
          }}
          animate={{
            y: [-50, -window.innerHeight - 50],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}