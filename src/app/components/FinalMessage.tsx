import { motion } from "motion/react";
import { Heart, Home } from "lucide-react";
import { useNavigate } from "react-router";

export function FinalMessage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 flex items-center justify-center overflow-hidden px-6 py-16">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                [
                  "rgba(255, 192, 203, 0.3)",
                  "rgba(221, 160, 221, 0.3)",
                  "rgba(255, 182, 193, 0.3)",
                ][i % 3]
              }, transparent)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heart Animation */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="inline-block"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart className="w-24 h-24 text-pink-400 fill-pink-400 mx-auto" />
          </motion.div>
        </motion.div>

        {/* Main Message Card */}
        <motion.div
          className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl p-10 md:p-16 shadow-2xl shadow-pink-200/50 mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Before You Go...
          </motion.h1>

          <motion.div
            className="space-y-6 text-xl md:text-2xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p>I just wanna say **thank you** for being the most amazing friend I could ever ask for. 💖✨

I met you when I was completely done with friendships and betrayals, and you showed me what a real friendship actually looks like. 🌸🤝 You made me realize that not every female friendship is toxic. 💕

Thank you for staying by my side through everything, even during the moments when words weren't needed. 🫂💗 Thank you for believing in me when you could have misunderstood me just like others did. 🌷✨ Thank you for always listening to my side of the story, my endless rants, and all the random nonsense I throw at you. 😂💬

And remember, I am always here for you whenever you need me — and even when you don't. 🤍🌹

I am so grateful to have such a kind, cheerful, beautiful, and extroverted person like you in my life. ☀️🌻💃✨ You bring so much happiness wherever you go, and I'm lucky that I get to call you my friend. 💝

Just thanksss for everything...!! 🥹💞

And know that I Lovee Youuuhh...!!! ❤️💕🥰💖✨
</p>

            <p className="text-center text-3xl md:text-4xl font-bold text-pink-500 mt-10">
              Happy Birthday, my favorite person. ❤️
            </p>
          
          <p className="text-center">
              You're annoying, stubborn, and completely impossible sometimes... but you're also
              kind, genuine, and absolutely irreplaceable.
            </p>

          </motion.div>
        </motion.div>

        {/* Signature */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-2xl text-gray-600 italic">
            With all my love (even though I'll deny it later),
          </p>
          <p className="text-2xl text-gray-700 font-semibold mt-2">Your Favorite Human 💕</p>
        </motion.div>

        {/* Back Home Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          <button
            onClick={() => navigate("/")}
            className="group px-10 py-5 rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Back to Start
            </span>
          </button>
        </motion.div>
      </div>

      {/* Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: -50,
          }}
          animate={{
            y: [-50, -window.innerHeight - 100],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          {["❤️", "💕", "💖", "💗"][i % 4]}
        </motion.div>
      ))}
    </div>
  );
}
