"use client";

import { motion } from "framer-motion";
import { Star, Github, ExternalLink, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

import { projects } from "@/lib/data";

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
  return (
    <SectionWrapper id="projects">

      <div className="mb-14">
        <p className="text-red-500 text-xs tracking-[0.35em] uppercase mb-3">
          Tech Stack
        </p>

        <div className="overflow-hidden">
          <div className="flex gap-4 w-max animate-[scroll_22s_linear_infinite]">
            {[...techStack, ...techStack].map((t, i) => {
              const Icon = t.icon;
              return (
                <div
                  key={i}
                  className="
                    flex items-center gap-2
                    px-5 py-2.5
                    rounded-full
                    bg-[var(--surface)]
                    border border-[var(--border)]
                    text-[var(--text-secondary)] text-sm
                    backdrop-blur-xl
                    hover:border-red-500/40
                    hover:text-[var(--text-primary)]
                    transition
                  "
                >
                  <Icon size={16} className="text-red-500" />
                  {t.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mb-10">
        <p className="text-red-500 text-xs tracking-[0.35em] uppercase mb-3">
          Work
        </p>

        <h2 className="text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
          Featured Projects
        </h2>

        <p className="text-[var(--text-secondary)] mt-3 text-sm max-w-xl leading-relaxed">
          A collection of production-grade applications built with modern full-stack engineering practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

        {projects.slice(0, 6).map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="
              relative group
              rounded-2xl p-6
              bg-[var(--surface)]
              border border-[var(--border)]
              backdrop-blur-2xl
              overflow-hidden
              transition-all duration-300
            "
          >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-red-500/10 blur-2xl transition" />

            {project.featured && (
              <div className="
                absolute top-4 right-4
                text-[10px]
                px-2 py-1
                rounded-full
                bg-red-500/10
                border border-red-500/30
                text-red-500
                flex items-center gap-1
              ">
                <Star size={10} />
                Featured
              </div>
            )}

            <h3 className="text-[var(--text-primary)] font-semibold text-base">
              {project.title}
            </h3>

            <p className="text-[var(--text-secondary)] text-sm mt-2 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="
                    text-[11px]
                    px-2.5 py-1
                    rounded-full
                    bg-[var(--surface)]
                    border border-[var(--border)]
                    text-[var(--text-tertiary)]
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-6">

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="
                    flex items-center gap-1.5
                    px-4 py-2
                    rounded-xl
                    text-xs font-medium
                    bg-red-500
                    text-white
                    hover:bg-red-600
                    hover:scale-105 active:scale-95
                    transition
                  "
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-xl
                    text-xs
                    bg-[var(--surface)]
                    border border-[var(--border)]
                    text-[var(--text-secondary)]
                    hover:text-[var(--text-primary)]
                    hover:border-red-500/30
                    transition
                  "
                >
                  <Github size={14} />
                  Code
                </a>
              )}

            </div>

          </motion.div>
        ))}

      </div>

      <div className="flex justify-center mt-14">

        <a
          href="https://github.com/abhishekjha193"
          target="_blank"
          className="
            flex items-center gap-2
            px-7 py-3
            rounded-xl
            bg-[var(--surface)]
            border border-[var(--border)]
            text-[var(--text-secondary)] text-sm
            backdrop-blur-xl
            hover:bg-red-500/10
            hover:border-red-500/30
            hover:text-[var(--text-primary)]
            hover:scale-105 active:scale-95
            transition
          "
        >
          <Github size={16} />
          View More on GitHub
          <ArrowRight size={14} />
        </a>

      </div>

    </SectionWrapper>
  );
}