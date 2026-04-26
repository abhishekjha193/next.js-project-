"use client";

import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="border-t py-10 px-6"
      style={{ borderColor: "var(--border)", color: "var(--text-tertiary)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-sm">
          <span>Built </span>
          <span>by</span>
          <span style={{ color: "var(--text-secondary)" }} className="font-medium">Abhishek Jha</span>
          <span>, Next.js + Framer Motion</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/abhishekjha193/" target="_blank" rel="noopener" className="hover:text-[var(--text-primary)] transition-colors">
            <Github size={16} />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-jha-594b31268" target="_blank" rel="noopener" className="hover:text-[var(--text-primary)] transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="https://x.com/Abhishek_Jha_10" target="_blank" rel="noopener" className="hover:text-[var(--text-primary)] transition-colors">
            <Twitter size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
