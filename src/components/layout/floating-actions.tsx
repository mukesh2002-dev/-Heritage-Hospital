"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  MessageCircle,
  ArrowUp,
  Bot,
  CalendarCheck,
  X,
  Send,
} from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [showTop, setShowTop] = React.useState(false);
  const [chatOpen, setChatOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<{ from: "bot" | "user"; text: string }[]>([
    { from: "bot", text: "Namaste! I'm SKH Assistant. How can I help you today?" },
  ]);

  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const quickReplies = [
    { label: "Book Appointment", action: () => window.open("/appointment", "_self") },
    { label: "Emergency Help", action: () => window.location.href = site.phone.emergencyHref },
    { label: "Find a Doctor", action: () => window.open("/doctor", "_self") },
  ];

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: "bot",
          text:
            "Thank you! One of our care coordinators will contact you shortly. For immediate assistance, please call us at " + site.phone.appointments + ".",
        },
      ]);
    }, 700);
  };

  return (
    <>
     
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${site.whatsapp}?text=Hello%20${encodeURIComponent(site.name)}%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp chat"
        className="fixed bottom-20 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-500/30 transition-all hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Chatbot */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-5 z-50 flex h-[28rem] w-[21rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl"
          >
            <div className="flex items-center gap-3 bg-gradient-to-r from-primary to-secondary px-4 py-3.5 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <Bot className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-bold">SKH Assistant</p>
                <p className="flex items-center gap-1.5 text-[11px] text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Online now
                </p>
              </div>
              <button onClick={() => setChatOpen(false)} aria-label="Close chat" className="rounded-full p-1.5 hover:bg-white/20">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.from === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                      m.from === "user"
                        ? "rounded-br-md bg-primary text-white"
                        : "rounded-bl-md bg-surface text-foreground",
                    )}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 border-t border-border p-3">
              {quickReplies.map((q) => (
                <button key={q.label} onClick={q.action} className="rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-white">
                  {q.label}
                </button>
              ))}
            </div>
            <form
              className="flex items-center gap-2 border-t border-border p-3"
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.querySelector("input");
                if (input) {
                  send(input.value);
                  input.value = "";
                }
              }}
            >
              <input
                placeholder="Type your message…"
                className="h-10 flex-1 rounded-full bg-surface px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              <button type="submit" aria-label="Send" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat toggle */}
      <button
        onClick={() => setChatOpen((c) => !c)}
        aria-label="Open medical chatbot"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-xl shadow-primary/40 transition-all hover:scale-110"
      >
        {chatOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </button>

      {/* Emergency floating button */}
      

      {/* Appointment floating pill */}
      <Link
        href="/appointment"
        className="fixed bottom-5 left-5 z-40 hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105 md:flex"
      >
        <CalendarCheck className="h-4 w-4" /> Book Appointment
      </Link>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-5 right-[5.5rem] z-40 hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary shadow-lg transition-all hover:bg-primary hover:text-white sm:flex"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
