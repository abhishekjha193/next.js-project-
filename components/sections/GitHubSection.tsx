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
      {/* Header */}
      <div className="mb-10">
        <p className="section-label mb-2">Developer Profile</p>

        <h2 className="text-4xl font-bold text-white">
          GitHub
        </h2>

        {user && (
          <p className="mt-2 text-sm text-neutral-400">
            @{user.login}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Main Stats Card */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-6 border border-white/5 flex flex-col gap-6"
          >
            {/* Top */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-neutral-400 text-sm">
                <Activity size={16} className="text-red-400" />
                GitHub Overview
              </div>

              <a
                href={user.html_url}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition"
              >
                Profile <ExternalLink size={12} />
              </a>
            </div>

            {/* Repo Count */}
            <div>
              <div className="text-3xl font-bold text-white">
                {user.public_repos}
              </div>
              <div className="text-xs text-neutral-400 mt-1">
                Public Repositories
              </div>
            </div>

            {/* Tech Focus */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/5 rounded-xl p-3 text-center">
                <Code size={14} className="mx-auto text-red-400" />
                <p className="text-xs text-neutral-400 mt-2">Clean Code</p>
              </div>

              <div className="bg-white/5 rounded-xl p-3 text-center">
                <Zap size={14} className="mx-auto text-red-400" />
                <p className="text-xs text-neutral-400 mt-2">Fast Builds</p>
              </div>

              <div className="bg-white/5 rounded-xl p-3 text-center">
                <Layers size={14} className="mx-auto text-red-400" />
                <p className="text-xs text-neutral-400 mt-2">Scalable</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Engineering Highlights (NEW CORE SECTION) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="col-span-1 lg:col-span-2 rounded-2xl p-6 border border-white/5 bg-gradient-to-br from-white/5 to-transparent"
        >
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-sm font-semibold text-white">
              Engineering Highlights
            </h3>
            <span className="text-xs text-neutral-400">
              Curated impact
            </span>
          </div>

          <div className="flex flex-col gap-4">

            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <h4 className="text-sm font-semibold text-white">
                Full-Stack Development
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Built scalable web applications with authentication, APIs, and modern UI systems.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <h4 className="text-sm font-semibold text-white">
                API Design & Backend Systems
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Designed RESTful APIs with focus on performance, security, and maintainability.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
              <h4 className="text-sm font-semibold text-white">
                Software Engineering Focus
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Strong emphasis on clean architecture, reusable components, and scalable systems.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}

