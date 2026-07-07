"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { config } from "@/data/config";

const CONTACT_CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: config.email,
    href: `mailto:${config.email}`,
  },
  {
    icon: Phone,
    label: "Call",
    value: "+254 789 341 086",
    href: "tel:+254789341086",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+254753274728",
    href: "https://wa.me/25453274728?text=Hi%20Kelvins!%20I%20have%20a%20project%20in%20mind%20and%20my%20budget%20is...",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto px-4 md:px-8 pb-24">
      <Link href={"#contact"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          LET&apos;S WORK <br />
          TOGETHER
        </h2>
      </Link>
      <p className="text-center text-muted-foreground font-mono max-w-xl mx-auto mt-6">
        Have a project, an idea, or just a question? Fill in the form or reach
        me directly — I read every message myself.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-12 items-start">
        {/* Quick contact channels */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {CONTACT_CHANNELS.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-4 p-5 rounded-xl border border-border",
                "bg-white/70 dark:bg-black/40 backdrop-blur-sm",
                "hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-200"
              )}
            >
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <channel.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                  {channel.label}
                </p>
                <p className="font-semibold">{channel.value}</p>
              </div>
            </a>
          ))}

          <div className="flex items-center gap-3 p-5 rounded-xl border border-dashed border-border font-mono text-sm text-muted-foreground">
            <Clock className="w-5 h-5 shrink-0" />
            Usually replies within 24 hours — faster on WhatsApp.
          </div>
        </div>

        {/* Contact form */}
        <Card className="lg:col-span-3 bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl">
          <CardHeader>
            <CardTitle className="text-3xl">Start a Project</CardTitle>
            <CardDescription>
              Tell me a bit about what you&apos;re building and your budget —
              I&apos;ll get back to you with next steps.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
