"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "var(--bg)" }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-14 h-14">
                <img
                  src="/a.png"
                  alt="logo"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
              {/* Orbit ring */}
              <motion.div
                className="absolute -inset-2 rounded-3xl border border-red-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Loading bar */}
            <div className="w-40 h-px bg-[var(--border)] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "var(--accent)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
