import { GitHubRepo, GitHubEvent, GitHubUser } from "@/types";
import { GITHUB_USERNAME } from "./data";

const GITHUB_API = "https://api.github.com";

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

export async function getGitHubUser(): Promise<GitHubUser | null> {
  try {
    const res = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, {
      headers,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6&type=public`,
      { headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const repos: GitHubRepo[] = await res.json();
    return repos
      .filter((r) => !r.name.includes(GITHUB_USERNAME))
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);
  } catch {
    return [];
  }
}

export async function getGitHubEvents(): Promise<GitHubEvent[]> {
  try {
    const res = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/events/public?per_page=10`,
      { headers, next: { revalidate: 1800 } }
    );
    if (!res.ok) return [];
    const events: GitHubEvent[] = await res.json();
    return events.filter(
      (e) => e.type === "PushEvent" || e.type === "CreateEvent"
    );
  } catch {
    return [];
  }
}

export function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
