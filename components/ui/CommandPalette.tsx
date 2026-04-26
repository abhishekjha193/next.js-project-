"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, Briefcase, Award, Mail, Code, Github, Linkedin, Twitter, X } from "lucide-react";

const commands = [
  { id: "hero", label: "Go to Home", icon: Home, action: () => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "github", label: "GitHub Activity", icon: Github, action: () => document.getElementById("github")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "projects", label: "Projects", icon: Code, action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "experience", label: "Experience", icon: Briefcase, action: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "certificates", label: "Certificates", icon: Award, action: () => document.getElementById("certificates")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "contact", label: "Contact", icon: Mail, action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "gh-link", label: "Open GitHub Profile", icon: Github, action: () => window.open("https://github.com/abhishekjha193", "_blank") },
  { id: "li-link", label: "Open LinkedIn", icon: Linkedin, action: () => window.open("https://www.linkedin.com/in/abhishek-jha-594b31268", "_blank") },
  { id: "tw-link", label: "Open Twitter / X", icon: Twitter, action: () => window.open("https://x.com/Abhishek_Jha_10", "_blank") },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const execute = useCallback((cmd: (typeof commands)[0]) => {
    setOpen(false);
    setQuery("");
    cmd.action();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        setSelected(0);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSelected((s) => Math.min(s + 1, filtered.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
    if (e.key === "Enter" && filtered[selected]) execute(filtered[selected]);
  };

  return (
    <>
      {/* Keyboard shortcut hint */}
      <button
        onClick={() => setOpen(true)}
        className="hidden lg:flex fixed bottom-6 right-6 z-50 items-center gap-2 glass rounded-xl px-3 py-2 text-xs transition-all hover:border-[var(--border-strong)]"
        style={{ color: "var(--text-tertiary)" }}
        aria-label="Open command palette"
      >
        <Search size={12} />
        <span>Command</span>
        <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono" style={{ background: "var(--bg-secondary)", color: "var(--text-tertiary)" }}>⌘K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[160] w-full max-w-lg glass-strong rounded-2xl overflow-hidden shadow-2xl"
              onKeyDown={handleKeyDown}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b" style={{ borderColor: "var(--border)" }}>
                <Search size={16} style={{ color: "var(--text-tertiary)" }} />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--text-tertiary)]"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
                />
                <button onClick={() => setOpen(false)} className="p-1 rounded-lg hover:bg-[var(--surface-hover)] transition-colors" style={{ color: "var(--text-tertiary)" }}>
                  <X size={14} />
                </button>
              </div>

              {/* Commands list */}
              <div className="py-2 max-h-72 overflow-y-auto">
                {filtered.length === 0 ? (
                  <div className="px-4 py-8 text-center text-sm" style={{ color: "var(--text-tertiary)" }}>No results found</div>
                ) : (
                  filtered.map((cmd, i) => (
                    <button
                      key={cmd.id}
                      onClick={() => execute(cmd)}
                      onMouseEnter={() => setSelected(i)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors"
                      style={{
                        background: selected === i ? "var(--surface-hover)" : "transparent",
                        color: selected === i ? "var(--text-primary)" : "var(--text-secondary)",
                      }}
                    >
                      <cmd.icon size={15} style={{ color: selected === i ? "var(--accent)" : "var(--text-tertiary)" }} />
                      {cmd.label}
                    </button>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t flex items-center gap-3 text-[11px]" style={{ borderColor: "var(--border)", color: "var(--text-tertiary)" }}>
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span>esc close</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
