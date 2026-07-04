"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_NUMBER = "25453274728";
const PREFILLED_MESSAGE =
  "Hi Kelvins! 👋 I have a project in mind. My budget is around... and I'd love to build...";

const WhatsAppFloat = () => {
  const [open, setOpen] = React.useState(false);

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    PREFILLED_MESSAGE
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-[9998] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-72 rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
          >
            <div className="bg-[#25D366] text-white px-4 py-3 flex items-center gap-3">
              <SiWhatsapp className="w-6 h-6" />
              <div>
                <p className="font-semibold text-sm leading-tight">
                  Kelvins Ontiri
                </p>
                <p className="text-xs opacity-90">Usually replies quickly</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground font-mono mb-4">
                Got a project in mind? Tell me a bit about it — and your
                budget — and let&apos;s chat on WhatsApp. 💬
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5b] text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
              >
                <SiWhatsapp className="w-4 h-4" />
                Start Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center text-white"
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60" />
        )}
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative z-10"
            >
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative z-10"
            >
              <SiWhatsapp className="w-7 h-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default WhatsAppFloat;
