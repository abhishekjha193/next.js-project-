import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import LoadingScreen from "@/components/ui/LoadingScreen";
import HeroSection from "@/components/sections/HeroSection";
import GitHubSection from "@/components/sections/GitHubSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import CommandPalette from "@/components/ui/CommandPalette";
import { getGitHubUser, getGitHubRepos, getGitHubEvents } from "@/lib/github";

export default async function Home() {
  // Server-side GitHub fetch with ISR
  const [user, repos, events] = await Promise.all([
    getGitHubUser(),
    getGitHubRepos(),
    getGitHubEvents(),
  ]);

  return (
    <>
      <LoadingScreen />
      <CommandPalette />
      <Navbar />
      <main className="relative">
        <HeroSection />
        <GitHubSection user={user} repos={repos} events={events} />
        <ProjectsSection />
        <ExperienceSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
