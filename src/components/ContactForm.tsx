"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = [
  "Website",
  "Mobile App",
  "E-commerce Store",
  "Fintech / Banking App",
  "Marketplace",
  "Something else",
];

const BUDGET_RANGES = [
  "Not sure yet",
  "Under $500",
  "$500 - $1,500",
  "$1,500 - $5,000",
  "$5,000+",
];

const ContactForm = () => {
  const { toast } = useToast();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [budget, setBudget] = useState(BUDGET_RANGES[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.trim().length < 2) {
      toast({ description: "Please enter your full name." });
      return;
    }
    if (message.trim().length < 10) {
      toast({ description: "Tell me a bit more about your project (10+ characters)." });
      return;
    }

    setStatus("loading");
    const fullMessage = `Project type: ${projectType}\nBudget: ${budget}\n\n${message}`;

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message: fullMessage }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      toast({ description: "Message sent! I'll get back to you soon. 🎉" });
      setFullName("");
      setEmail("");
      setMessage("");
      setProjectType(PROJECT_TYPES[0]);
      setBudget(BUDGET_RANGES[0]);
    } catch (err) {
      setStatus("idle");
      toast({ description: "Something went wrong. Please email me directly instead." });
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <CheckCircle2 className="w-14 h-14 text-green-500" />
        <h3 className="text-2xl font-bold">Got it! 🚀</h3>
        <p className="text-muted-foreground font-mono max-w-sm">
          Thanks for reaching out — I read every message and usually reply
          within a day.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full name</Label>
          <Input
            id="fullName"
            placeholder="Jane Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="jane@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="projectType">What are we building?</Label>
          <select
            id="projectType"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
              "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
          >
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">Your budget</Label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
              "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
          >
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell me about your project</Label>
        <textarea
          id="message"
          rows={5}
          placeholder="What are you trying to build, and what does success look like?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={cn(
            "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-none",
            "ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          )}
          required
        />
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto px-8"
        size="lg"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
