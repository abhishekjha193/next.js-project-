"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X, Search } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";

const navLinks = [
  { label: "GitHub", href: "#github" },
  { label: "TechStack & Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b py-3" : "py-5"
      }`}
      style={{ borderColor: scrolled ? "var(--border)" : "transparent" }}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105"
            style={{
              background: "linear-gradient(135deg, var(--accent), #8b5cf6)",
            }}
          >
            <img
              src="/a.png"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>

          <span
            className="text-sm font-semibold hidden sm:block"
            style={{ color: "var(--text-primary)" }}
          >
            Abhishek Jha
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:bg-[var(--surface-hover)]"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="p-2 rounded-xl glass transition-all hover:scale-105 active:scale-95"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* CMD+K hint (mobile) */}
          <button
            onClick={() => {
              const event = new KeyboardEvent("keydown", {
                key: "k",
                metaKey: true,
                bubbles: true,
              });
              window.dispatchEvent(event);
            }}
            className="p-2 rounded-xl glass transition-all hover:scale-105 active:scale-95 hidden sm:flex"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Open search"
          >
            <Search size={16} />
          </button>

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-xl glass transition-all"
            style={{ color: "var(--text-secondary)" }}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-strong border-t px-6 py-4 flex flex-col gap-1"
          style={{ borderColor: "var(--border)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-[var(--surface-hover)]"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
