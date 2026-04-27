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

        <h2 className="text-4xl font-bold text-black dark:text-white">
          Contact
        </h2>

        <p className="mt-3 max-w-md text-sm text-gray-600 dark:text-white/60">
          Send a message, let’s build something together
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="
            lg:col-span-3
            w-full max-w-2xl mx-auto
            rounded-3xl
            p-8 sm:p-10
            flex flex-col gap-5
            bg-white dark:bg-white/5
            border border-gray-200 dark:border-white/10
            backdrop-blur-2xl
            shadow-xl
          "
        >

          <input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="
              px-5 py-4
              rounded-xl
              text-sm
              bg-gray-100 dark:bg-white/5
              border border-gray-200 dark:border-white/10
              text-black dark:text-white
              outline-none
              transition
              focus:border-red-400
              focus:ring-2 focus:ring-red-500/20
              placeholder:text-gray-400 dark:placeholder:text-white/30
            "
            required
          />

          <input
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="
              px-5 py-4
              rounded-xl
              text-sm
              bg-gray-100 dark:bg-white/5
              border border-gray-200 dark:border-white/10
              text-black dark:text-white
              outline-none
              transition
              focus:border-red-400
              focus:ring-2 focus:ring-red-500/20
              placeholder:text-gray-400 dark:placeholder:text-white/30
            "
            required
          />

          <textarea
            placeholder="Your Message..."
            rows={6}
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            className="
              px-5 py-4
              rounded-xl
              text-sm
              bg-gray-100 dark:bg-white/5
              border border-gray-200 dark:border-white/10
              text-black dark:text-white
              outline-none
              resize-none
              transition
              focus:border-red-400
              focus:ring-2 focus:ring-red-500/20
              placeholder:text-gray-400 dark:placeholder:text-white/30
            "
            required
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="
              mt-2
              flex items-center justify-center gap-2
              px-6 py-4
              rounded-xl
              text-sm font-medium
              text-black dark:text-white
              bg-gray-100 dark:bg-white/10
              border border-gray-200 dark:border-white/10
              backdrop-blur-xl
              transition
              hover:bg-red-500/10
              hover:border-red-500/30
              hover:text-red-500
            "
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
              className="
                rounded-2xl p-4
                flex items-center gap-4
                bg-white dark:bg-white/5
                border border-gray-200 dark:border-white/10
                hover:border-red-400/30
                transition
              "
            >
              <s.icon size={18} className="text-red-500" />

              <div>
                <div className="text-black dark:text-white">
                  {s.label}
                </div>

                <div className="text-xs text-gray-500 dark:text-white/50">
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