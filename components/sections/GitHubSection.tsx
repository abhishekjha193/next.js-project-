"use client";

import { motion } from "framer-motion";
import { ExternalLink, Activity, Code, Zap, Layers } from "lucide-react";
import { GitHubUser } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface Props {
  user: GitHubUser | null;
}

export default function GitHubSection({ user }: Props) {
  return (
    <SectionWrapper id="github">

      <div className="mb-10">
        <p className="section-label mb-2 text-red-500 tracking-widest uppercase text-xs">
          Developer Profile
        </p>

        <h2 className="text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
          GitHub
        </h2>

        {user && (
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            @{user.login}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              rounded-2xl p-6
              glass
              border border-[var(--border)]
              flex flex-col gap-6
            "
          >

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                <Activity size={16} className="text-red-500" />
                GitHub Overview
              </div>

              <a
                href={user.html_url}
                target="_blank"
                className="flex items-center gap-1 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
              >
                Profile <ExternalLink size={12} />
              </a>
            </div>

            <div>
              <div className="text-3xl font-bold text-[var(--text-primary)]">
                {user.public_repos}
              </div>
              <div className="text-xs text-[var(--text-secondary)] mt-1">
                Public Repositories
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">

              <div className="rounded-xl p-3 text-center glass border border-[var(--border)]">
                <Code size={14} className="mx-auto text-red-500" />
                <p className="text-xs text-[var(--text-secondary)] mt-2">
                  Clean Code
                </p>
              </div>

              <div className="rounded-xl p-3 text-center glass border border-[var(--border)]">
                <Zap size={14} className="mx-auto text-red-500" />
                <p className="text-xs text-[var(--text-secondary)] mt-2">
                  Fast Builds
                </p>
              </div>

              <div className="rounded-xl p-3 text-center glass border border-[var(--border)]">
                <Layers size={14} className="mx-auto text-red-500" />
                <p className="text-xs text-[var(--text-secondary)] mt-2">
                  Scalable
                </p>
              </div>

            </div>

          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            lg:col-span-2
            rounded-2xl p-6
            glass
            border border-[var(--border)]
          "
        >

          <div className="flex justify-between items-center mb-5">
            <h3 className="text-sm font-semibold text-[var(--text-primary)]">
              Engineering Highlights
            </h3>
            <span className="text-xs text-[var(--text-secondary)]">
              Curated impact
            </span>
          </div>

          <div className="flex flex-col gap-4">

            <div className="p-4 rounded-xl glass border border-[var(--border)]">
              <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                Full-Stack Development
              </h4>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Built scalable applications with authentication, APIs, and modern UI systems.
              </p>
            </div>

            <div className="p-4 rounded-xl glass border border-[var(--border)]">
              <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                API Design & Backend Systems
              </h4>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Designed REST APIs with focus on performance, security, and maintainability.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
              <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                Software Engineering Focus
              </h4>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Clean architecture, reusable components, and scalable system design.
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </SectionWrapper>
  );
}