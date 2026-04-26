"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter, Mail } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "919960485406";

    const text = `👋 New Message from Portfolio

Name: ${form.name}
Email: ${form.email}
Message: ${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/abhishekjha193",
      handle: "@abhishekjha193",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/abhishek-jha-594b31268",
      handle: "in/abhishek-jha-594b31268",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/Abhishek_Jha_10",
      handle: "@Abhishek_Jha_10",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:abhibj2003@gmail.com",
      handle: "abhibj2003@gmail.com",
    },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="mb-12">
        <p className="section-label mb-3">Reach Out</p>

        <h2
          className="text-4xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          Contact
        </h2>

        <p
          className="mt-3 max-w-md text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          Message directly goes to my WhatsApp 🚀
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="lg:col-span-3 glass rounded-2xl p-10 flex flex-col gap-6 max-w-2xl w-full mx-auto"
        >
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="px-5 py-4 rounded-xl text-sm glass border outline-none focus:border-[var(--accent)]"
            style={{
              background: "var(--surface)",
              color: "var(--text-primary)",
              borderColor: "var(--border)",
            }}
            required
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="px-5 py-4 rounded-xl text-sm glass border outline-none focus:border-[var(--accent)]"
            style={{
              background: "var(--surface)",
              color: "var(--text-primary)",
              borderColor: "var(--border)",
            }}
            required
          />

          <textarea
            placeholder="Message"
            rows={6}
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            className="px-5 py-4 rounded-xl text-sm glass border outline-none focus:border-[var(--accent)] resize-none"
            style={{
              background: "var(--surface)",
              color: "var(--text-primary)",
              borderColor: "var(--border)",
            }}
            required
          />

          {/* 🔴 RED BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold"
            style={{
              background: "linear-gradient(135deg, #ef4444, #b91c1c)",
              boxShadow: "0 0 25px rgba(239, 68, 68, 0.25)",
            }}
          >
            <Send size={16} />
            Send Message
          </motion.button>
        </motion.form>

        {/* SOCIALS */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              className="glass card-glow rounded-2xl p-4 flex items-center gap-4"
            >
              <s.icon size={18} color="var(--accent)" />
              <div>
                <div style={{ color: "var(--text-primary)" }}>{s.label}</div>
                <div
                  className="text-xs"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {s.handle}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
