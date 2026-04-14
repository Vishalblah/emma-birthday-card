import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Heart, ArrowRight } from "lucide-react";

const letterText = `Dear Birthday Person,

So… another year, huh? I guess that means another year of dealing with your questionable music taste, your inability to pick a restaurant, and that thing you do where you leave cabinet doors open. (Seriously, why?)

But here's the thing…

Despite all of that — despite your terrible jokes, your weird obsession with random facts nobody asked for, and the way you somehow always manage to steal the blanket at night — you're still my favorite human.

You're annoying in the best possible way. You're stubborn, but it makes you passionate. You're chaotic, but it keeps life interesting. And you're absolutely, undeniably, the most important person in my world.

I tolerate you… which is basically love. ❤️

Actually, scratch that. I don't just tolerate you. I genuinely, deeply, completely adore you. You make me laugh when I want to scream. You make me feel seen when I want to hide. You make ordinary moments feel extraordinary.

So happy birthday to someone who deserves the world, even if they're terrible at accepting compliments.

Here's to another year of me pretending you're not my favorite person.

(Spoiler: You totally are.)

Forever yours,
Your Favorite Person (obviously)`;

export function LoveLetter() {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < letterText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + letterText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 20); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 py-16 px-6 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-4"
          >
            <Heart className="w-12 h-12 text-pink-400 fill-pink-400" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            A Letter For You
          </h1>
        </motion.div>

        {/* Letter Card */}
        <motion.div
          className="relative backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-10 md:p-16 shadow-2xl shadow-pink-200/50"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-rose-300/30 to-pink-300/30 rounded-full blur-2xl" />

          {/* Letter Content */}
          <div className="relative">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {displayedText}
                {!isComplete && (
                  <motion.span
                    className="inline-block w-0.5 h-6 bg-pink-400 ml-0.5"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={() => navigate("/surprise")}
                className="group px-10 py-5 rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  I'm Ready for the Surprise
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
      </div>

     
    </div>
  );
}