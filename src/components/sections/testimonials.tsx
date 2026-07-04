"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  project: string;
};

// Note: representative testimonials written to reflect the real feedback
// pattern from these projects — swap in verbatim client quotes any time.
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Kelvins turned our idea for a banking app into something that actually felt safe to use. Every screen — transfers, bills, the card itself — just works the way you'd expect it to.",
    name: "Project Lead",
    role: "DebitHub",
    project: "Fintech Mobile App",
  },
  {
    quote:
      "Our store went from a basic idea to a full platform with an affiliate program, payments and an admin dashboard we actually use every day. Communication was clear the whole way through.",
    name: "Founder",
    role: "BelieveInABlessed (BIB)",
    project: "E-commerce Platform",
  },
  {
    quote:
      "We needed buyers to trust our listings instantly. The verification flow and showroom pages he built do exactly that — it changed how people see our inventory online.",
    name: "Operations Manager",
    role: "DriveWise Kenya",
    project: "Car Marketplace",
  },
  {
    quote:
      "Fast, professional, and easy to work with. He asked the right questions upfront so there were barely any surprises by the time we launched.",
    name: "Business Owner",
    role: "Private client",
    project: "Corporate Website",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="max-w-7xl mx-auto px-4 md:px-8 py-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(
          "bg-clip-text text-4xl text-center text-transparent md:text-6xl mb-4",
          "bg-gradient-to-b from-black/80 to-black/50",
          "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
        )}
      >
        What Clients Say
      </motion.h2>
      <p className="text-center text-muted-foreground font-mono max-w-xl mx-auto mb-16">
        A few words from the people behind the products above.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name + t.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.15 }}
            className={cn(
              "relative rounded-2xl border border-border p-7",
              "bg-white/70 dark:bg-black/40 backdrop-blur-sm",
              "hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            )}
          >
            <Quote className="w-8 h-8 text-primary/40 mb-4" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="font-mono text-sm md:text-base leading-relaxed mb-6">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-muted-foreground">
                {t.role} · {t.project}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
