import { motion, AnimatePresence } from "motion/react";
import { useNavigate, useLocation } from "react-router";
import { Home, Image, Mail, Gift, Heart } from "lucide-react";
import { useState } from "react";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/memories", icon: Image, label: "Memories" },
  { path: "/letter", icon: Mail, label: "Letter" },
  { path: "/surprise", icon: Gift, label: "Surprise" },
  { path: "/final", icon: Heart, label: "Final" },
];

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.div
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <div className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-full px-1.5 md:px-3 py-2 md:py-3 shadow-2xl flex flex-col gap-1 md:gap-2 pointer-events-auto">  {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <div key={item.path} className="relative">
              <motion.button
                onClick={() => navigate(item.path)}
                onHoverStart={() => setHoveredItem(item.path)}
                onHoverEnd={() => setHoveredItem(null)}
                className={`relative p-2 md:p-3 rounded-full transition-colors ${
                  isActive ? "text-pink-500" : "text-gray-600 hover:text-pink-400"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-pink-200/50 rounded-full -z-10"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="sr-only">{item.label}</span>
              </motion.button>

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredItem === item.path && !isActive && (
                  <motion.div
                    className="hidden md:block absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap pointer-events-none"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}