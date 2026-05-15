"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  Github,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { projects } from "@/lib/data";

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

const techStack = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ProjectCard = memo(
  ({ project, i }: { project: (typeof projects)[0]; i: number }) => {
    return (
      <motion.article
        custom={i}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        whileHover={{ y: -6 }}
        className="
          group relative overflow-hidden
          rounded-[28px]
          border
          p-6
          backdrop-blur-2xl
          transition-all duration-300
          will-change-transform
        "
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
          boxShadow:
            "0 10px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* PREMIUM GLOW */}
        <div
          className="
            absolute inset-0 opacity-0
            group-hover:opacity-100
            transition duration-500
            bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.14),transparent_38%)]
          "
        />

        {/* FEATURED */}
        {project.featured && (
          <div
            className="
              absolute right-5 top-5
              inline-flex items-center gap-1.5
              rounded-full
              border
              px-3 py-1
              text-[10px]
              font-medium
              backdrop-blur-xl
            "
            style={{
              borderColor: "rgba(239,68,68,0.2)",
              background: "rgba(239,68,68,0.08)",
              color: "rgb(239 68 68)",
            }}
          >
            <Star size={10} fill="currentColor" />
            Featured
          </div>
        )}

        {/* CONTENT */}
        <div className="relative z-10 flex h-full flex-col">
          {/* TOP */}
          <div className="mb-5">
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border
                px-3 py-1
                text-[11px]
                font-medium
                mb-4
              "
              style={{
                borderColor: "var(--border)",
                background: "rgba(255,255,255,0.03)",
                color: "var(--text-tertiary)",
              }}
            >
              <Sparkles size={11} className="text-red-500" />
              Production Project
            </div>

            <h3
              className="
                text-xl font-bold
                tracking-tight
                leading-tight
              "
              style={{
                color: "var(--text-primary)",
              }}
            >
              {project.title}
            </h3>

            <p
              className="
                mt-3 text-sm leading-relaxed
              "
              style={{
                color: "var(--text-secondary)",
              }}
            >
              {project.description}
            </p>
          </div>

          {/* TECH */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  px-3 py-1.5
                  text-[11px]
                  font-medium
                  transition-all
                "
                style={{
                  borderColor: "var(--border)",
                  background: "rgba(255,255,255,0.03)",
                  color: "var(--text-secondary)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="mt-auto flex items-center gap-3">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  rounded-2xl
                  px-4 py-2.5
                  text-xs font-semibold
                  text-white
                  transition-all duration-200
                  hover:scale-[1.03]
                  active:scale-[0.97]
                "
                style={{
                  background:
                    "linear-gradient(135deg, rgb(239 68 68), rgb(220 38 38))",
                  boxShadow: "0 10px 30px rgba(239,68,68,0.25)",
                }}
              >
                <ExternalLink size={14} />
                Live Demo
              </Link>
            )}

            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  rounded-2xl
                  border
                  px-4 py-2.5
                  text-xs font-medium
                  transition-all duration-200
                  hover:scale-[1.03]
                  active:scale-[0.97]
                "
                style={{
                  borderColor: "var(--border)",
                  background: "rgba(255,255,255,0.03)",
                  color: "var(--text-secondary)",
                }}
              >
                <Github size={14} />
                Source
              </Link>
            )}
          </div>
        </div>
      </motion.article>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default function ProjectsSection() {
  const visibleProjects = useMemo(() => projects.slice(0, 6), []);

  return (
    <SectionWrapper id="projects">
      {/* TECH STACK */}
      <div className="mb-16 overflow-hidden">
        <div
          className="
            inline-flex items-center gap-2
            rounded-full
            border
            px-4 py-1.5
            text-xs font-medium
            mb-6
            backdrop-blur-xl
          "
          style={{
            borderColor: "var(--border)",
            background: "rgba(255,255,255,0.03)",
            color: "var(--text-secondary)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Modern Tech Stack
        </div>

        {/* MARQUEE */}
        <div className="relative">
          {/* FADE LEFT */}
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[var(--background)] to-transparent" />

          {/* FADE RIGHT */}
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[var(--background)] to-transparent" />

          <div className="flex w-max gap-4 animate-[scroll_24s_linear_infinite] hover:[animation-play-state:paused]">
            {[...techStack, ...techStack].map((tech, i) => {
              const Icon = tech.icon;

              return (
                <div
                  key={i}
                  className="
                    flex items-center gap-2
                    rounded-2xl
                    border
                    px-5 py-3
                    text-sm font-medium
                    backdrop-blur-2xl
                    transition-all
                    hover:-translate-y-1
                  "
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <Icon size={18} className="text-red-500" />
                  {tech.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* HEADER */}
      <div className="mb-12">
        <div
          className="
            inline-flex items-center gap-2
            rounded-full
            border
            px-4 py-1.5
            text-xs font-medium
            backdrop-blur-xl
          "
          style={{
            borderColor: "var(--border)",
            background: "rgba(255,255,255,0.03)",
            color: "var(--text-secondary)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Selected Work
        </div>

        <h2
          className="
            mt-5
            text-4xl md:text-5xl
            font-bold tracking-tight
          "
          style={{
            color: "var(--text-primary)",
          }}
        >
          Featured Projects
        </h2>

        <p
          className="
            mt-4 max-w-2xl
            text-sm leading-relaxed
          "
          style={{
            color: "var(--text-secondary)",
          }}
        >
          A curated collection of high-performance full-stack applications,
          crafted with scalable architecture, modern UI systems, and production
          engineering standards.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {visibleProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} i={i} />
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-16">
        <Link
          href="https://github.com/abhishekjha193"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group inline-flex items-center gap-3
            rounded-2xl
            border
            px-7 py-3.5
            text-sm font-medium
            backdrop-blur-2xl
            transition-all duration-300
            hover:-translate-y-1
          "
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
            color: "var(--text-primary)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <Github size={17} />

          View More on GitHub

          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </SectionWrapper>
  );
}