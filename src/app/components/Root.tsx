import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { Navigation } from "./Navigation";
import { CursorGlow } from "./CursorGlow";

export function Root() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <CursorGlow />
      <AnimatePresence mode="wait">
        <motion.div 
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.5, 
            ease: [0.22, 1, 0.36, 1] 
          }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Navigation />
    </div>
  );
}