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
    <div className="relative min-h-screen bg-white text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(36,107,253,0.06),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(123,77,255,0.08),transparent_30%)]" />
      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 sm:px-10 lg:px-16">
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
