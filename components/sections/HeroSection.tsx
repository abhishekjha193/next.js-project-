"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, ExternalLink } from "lucide-react";

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.12, delayChildren: 2.1 } } },
  item: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 mesh-bg overflow-hidden"
    >
      {/* Radial gradient backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(14,165,233,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)" }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={stagger.container}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-4xl"
      >
        {/* Badge */}
        <motion.div variants={stagger.item} className="flex justify-center mb-8">
          <div className="glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border" style={{ color: "var(--accent)", borderColor: "var(--accent-glow)" }}>
            <Sparkles size={13} />
            Open to new opportunities
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={stagger.item}
          className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          <span className="gradient-text">Abhishek Jha</span>
          <span className="block mt-1" style={{ color: "var(--text-secondary)", fontSize: "0.7em", fontWeight: 300 }}>
            Full Stack Web Developer
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={stagger.item}
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--text-secondary)", fontWeight: 300 }}
        >
          I build{" "}
          <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>performant</span>,{" "}
          <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>scalable</span>, and{" "}
          <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>beautiful</span>{" "}
          web experiences — from zero to production.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={stagger.item} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, var(--accent), #b91c1c)" }}
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium transition-all hover:scale-105 active:scale-95 border"
            style={{
              color: "var(--text-primary)",
              borderColor: "var(--border)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <ExternalLink size={16} />
            Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium glass transition-all hover:scale-105 active:scale-95"
            style={{ color: "var(--text-secondary)" }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stack badges */}
        <motion.div
          variants={stagger.item}
          className="flex flex-wrap items-center justify-center gap-2 mt-12"
        >
          {["React", "MongoDB", "TypeScript", "Node.js", "Express.js", "GitHub"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-mono glass"
              style={{ color: "var(--text-tertiary)" }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--text-tertiary)" }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}