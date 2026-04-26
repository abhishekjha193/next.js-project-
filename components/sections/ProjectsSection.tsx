"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star } from "lucide-react";
import { projects } from "@/lib/data";
import { Project } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";

/* TECH ICONS */
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
} from "react-icons/si";

const techFilters = [
  "All",
  "MERN",
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
];

const techStack = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiTailwindcss, name: "Tailwind" },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <SectionWrapper id="projects">

      {/* TECH STACK */}
      <div className="mb-10">
        <p className="section-label mb-3">Tech Stack</p>

        <div className="overflow-hidden py-3">
          <div className="flex gap-6 w-max animate-[scroll_18s_linear_infinite]">
            {[...techStack, ...techStack].map((t, i) => {
              const Icon = t.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm whitespace-nowrap"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Icon size={18} />
                  {t.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* HEADER */}
      <div className="mb-10">
        <p className="section-label mb-3">Work</p>

        <h2
          className="text-4xl font-bold"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--text-primary)",
          }}
        >
          Projects
        </h2>

        <p
          className="mt-3 max-w-xl text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          A selection of things I&apos;ve built — from developer tooling to consumer products.
        </p>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-2 mt-6">
          {techFilters.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className="px-3 py-1 rounded-full text-xs transition-all hover:scale-105"
              style={{
                background:
                  activeFilter === tech ? "var(--accent)" : "var(--surface)",
                color:
                  activeFilter === tech ? "#fff" : "var(--text-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4, scale: 1.01 }}
            onClick={() => setSelected(project)}
            className="relative glass rounded-2xl p-6 cursor-pointer overflow-hidden"
          >
            {/* GRADIENT BACKGROUND */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}
            />

            {project.featured && (
              <div
                className="absolute top-4 right-4 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1"
                style={{
                  background: "var(--accent-glow)",
                  color: "var(--accent)",
                }}
              >
                <Star size={10} /> Featured
              </div>
            )}

            <div className="relative z-10 flex flex-col gap-3">
              <h3
                className="font-semibold text-base"
                style={{ color: "var(--text-primary)" }}
              >
                {project.title}
              </h3>

              <p
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.description}
              </p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[11px] rounded-md glass"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex gap-2 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-1.5 rounded-lg text-xs text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(239,68,68,0.9), rgba(185,28,28,0.9))",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    }}
                  >
                    Demo
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-1.5 rounded-lg glass text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-[100]"
              onClick={() => setSelected(null)}
            />

            <motion.div className="fixed z-[110] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-strong p-8 rounded-3xl w-full max-w-lg">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5"
              >
                <X />
              </button>

              <h3 className="text-2xl font-bold mb-3">
                {selected.title}
              </h3>

              <p className="text-sm text-[var(--text-secondary)]">
                {selected.longDescription || selected.description}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}

