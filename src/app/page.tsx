import { CommunitySection } from "@/components/home/community-section";
import { DiagnosticsSection } from "@/components/home/diagnostics-section";
import { HeroSection } from "@/components/home/hero-section";
import { NavBar } from "@/components/home/nav-bar";
import { RecommendedSection } from "@/components/home/recommended-section";
import { RoadmapSection } from "@/components/home/roadmap-section";
import {
  communityTeasers,
  diagnostics,
  navItems,
  quickChips,
  recommendedPositions,
  roadmapHighlights,
  roadmapProgress,
} from "@/data/home-page";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f6f7fb] text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(36,107,253,0.12),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(123,77,255,0.12),transparent_28%),radial-gradient(circle_at_20%_72%,rgba(48,227,202,0.1),transparent_22%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:140px_140px]" />
      <div className="pointer-events-none absolute inset-x-12 top-16 h-40 rounded-full bg-gradient-to-r from-white/0 via-white/70 to-white/0 blur-3xl" />
      <main className="relative mx-auto flex min-h-screen max-w-[1660px] flex-col gap-16 px-6 pb-20 pt-10 sm:px-10 lg:px-16">
        <NavBar items={navItems} />
        <HeroSection quickChips={quickChips} />
        <RecommendedSection positions={recommendedPositions} />
        <DiagnosticsSection diagnostics={diagnostics} />
        <RoadmapSection highlights={roadmapHighlights} progress={roadmapProgress} />
        <CommunitySection items={communityTeasers} />
      </main>
    </div>
  );
}
