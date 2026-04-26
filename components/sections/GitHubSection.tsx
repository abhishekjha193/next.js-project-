"use client";

import { motion } from "framer-motion";
import { Star, GitFork, GitCommit, Clock, ExternalLink, Activity } from "lucide-react";
import { GitHubUser, GitHubRepo, GitHubEvent } from "@/types";
import { formatTimeAgo } from "@/lib/github";
import { GITHUB_USERNAME } from "@/lib/data";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface Props {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  events: GitHubEvent[];
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Vue: "#41b883",
  "C++": "#f34b7d",
  Swift: "#ffac45",
};

export default function GitHubSection({ user, repos, events }: Props) {
  const recentCommits = events
    .filter((e) => e.type === "PushEvent" && e.payload.commits?.length)
    .slice(0, 5);

  return (
    <SectionWrapper id="github">
      <div className="mb-12">
        <p className="section-label mb-3">Live Activity</p>
        <h2 className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
          GitHub
        </h2>
        {user && (
          <p className="mt-3 text-sm" style={{ color: "var(--text-tertiary)" }}>
            @{user.login} · {user.public_repos} repos · {user.followers} followers
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Stats */}
        {user && (
          <motion.a
            href={user.html_url}
            target="_blank"
            rel="noopener"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
            className="glass card-glow rounded-2xl p-6 flex flex-col gap-4 transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <Activity size={16} style={{ color: "var(--accent)" }} />
              <ExternalLink size={12} style={{ color: "var(--text-tertiary)" }} />
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                {user.public_repos}
              </div>
              <div className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>Public Repositories</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="glass rounded-xl p-3">
                <div className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{user.followers}</div>
                <div className="text-xs" style={{ color: "var(--text-tertiary)" }}>Followers</div>
              </div>
              <div className="glass rounded-xl p-3">
                <div className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{user.following}</div>
                <div className="text-xs" style={{ color: "var(--text-tertiary)" }}>Following</div>
              </div>
            </div>
          </motion.a>
        )}


        {/* Repo cards */}
        {repos.length > 1 ? (
           repos.slice(0, 2).map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="glass card-glow rounded-2xl p-5 flex flex-col gap-3 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold truncate" style={{ color: "var(--text-primary)" }}>
                  {repo.name}
                </h3>
                <ExternalLink size={12} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--text-tertiary)" }} />
              </div>
              <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--text-tertiary)" }}>
                {repo.description || "No description available"}
              </p>
              <div className="flex items-center gap-3 mt-auto pt-1">
                {repo.language && (
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-tertiary)" }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: languageColors[repo.language] || "#6b7280" }} />
                    {repo.language}
                  </div>
                )}
                <div className="flex items-center gap-1 text-xs" style={{ color: "var(--text-tertiary)" }}>
                  <Star size={11} />
                  {repo.stargazers_count}
                </div>
                <div className="flex items-center gap-1 text-xs" style={{ color: "var(--text-tertiary)" }}>
                  <GitFork size={11} />
                  {repo.forks_count}
                </div>
              </div>
            </motion.a>
          ))
        ) : (
          // Skeleton placeholders
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="glass rounded-2xl p-5 flex flex-col gap-3">
              <div className="skeleton h-4 w-3/4 rounded" />
              <div className="skeleton h-3 w-full rounded" />
              <div className="skeleton h-3 w-2/3 rounded" />
            </div>
          ))
        )}
      </div>
    </SectionWrapper>
  );
}
