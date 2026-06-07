import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Gift, Sparkles, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

export function SurprisePage() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleOpenGift = () => {
    setIsOpen(true);

    // Fire confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ["#FFB6C1", "#DDA0DD", "#ADD8E6", "#FFD700"],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ["#FFB6C1", "#DDA0DD", "#ADD8E6", "#FFD700"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    setTimeout(() => {
      setShowMessage(true);
    }, 500);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center overflow-hidden px-6">
      {/* Floating Sparkles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 50 - 25],
            x: [0, Math.random() * 50 - 25],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-4 h-4 text-yellow-300" />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto text-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="gift-box"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Your Surprise Awaits
                </h1>
                <p className="text-2xl text-gray-600">
                  Click the gift to reveal your surprise! 🎁
                </p>
              </motion.div>

              <motion.div
                className="inline-block cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenGift}
              >
                <motion.div
                  className="relative backdrop-blur-xl bg-white/40 border border-white/60 rounded-3xl p-16 shadow-2xl"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Gift className="w-32 h-32 text-pink-400" strokeWidth={1.5} />
                  </motion.div>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(236, 72, 153, 0.3)",
                        "0 0 40px rgba(236, 72, 153, 0.5)",
                        "0 0 20px rgba(236, 72, 153, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="surprise-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mb-8"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="inline-block mb-6"
                >
                  <Sparkles className="w-20 h-20 text-yellow-400" />
                </motion.div>

                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Surprise!
                </h2>
              </motion.div>

              <motion.div
                className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-10 md:p-14 shadow-2xl mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                <div className="space-y-6 text-xl md:text-2xl text-gray-700">
                  <p className="leading-relaxed">
                    Your gift is... <span className="font-bold text-pink-500">ME</span>! 🎉
                  </p>
                  <p className="leading-relaxed">
                    Just kidding (kind of). Your real gift is a whole day dedicated to doing
                    whatever you want — no complaints, no arguments, complete freedom.
                  </p>
                  <img src="/image1.png" alt="image" />
                  <p className="text-2xl md:text-3xl font-semibold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text mt-8">
                    It's your day. Make it count. ❤️
                  </p>
                </div>
              </motion.div>

              <AnimatePresence>
                {showMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <button
                      onClick={() => navigate("/final")}
                      className="group px-10 py-5 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <span className="flex items-center gap-2">
                        One More Thing...
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.span>
                      </span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
