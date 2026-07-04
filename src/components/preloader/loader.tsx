"use client";
import { motion } from "framer-motion";
import { usePreloader } from ".";

export default function Loader() {
  const { loadingPercent } = usePreloader();
  const displayPercent = Math.min(100, Math.round(loadingPercent));

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
      }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6 bg-black text-white"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Logo mark */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-white/15"
          />
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-t-white border-r-white/40 border-b-white/10 border-l-white/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
          />
          <span className="text-2xl font-bold tracking-tight">K.</span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="font-mono text-4xl md:text-5xl tabular-nums">
            {displayPercent}%
          </p>
          <div className="w-48 md:w-64 h-1 rounded-full bg-white/15 overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              style={{ width: `${displayPercent}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            Loading portfolio
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
