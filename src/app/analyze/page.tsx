"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Snapshot = {
  core: string;
  fitScore: string;
  gaps: string;
  roadmapLabel: string;
  roadmapDetail: string;
  progress: number;
  nextSteps: string[];
};

type AnalysisDetail = {
  company: {
    name: string;
    brand: string;
    location: string;
    hiringType: string;
    level: string;
    funding: string;
    achievements: string[];
    culture: string[];
  };
  position: {
    title: string;
    summary: string;
    keyPoints: string[];
  };
  responsibilities: string[];
  mustSkills: string[];
  preferred?: string[];
  stack: string[];
  cultureFit: string[];
  summaryTable: { label: string; value: string }[];
  strategy: string[];
};

type AnalyzeResponse = {
  snapshot: Snapshot;
  detail: AnalysisDetail;
};

const shimmer = "animate-pulse bg-slate-200/60";

export default function AnalyzePage() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<AnalyzeResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const queryUrl = searchParams.get("url") ?? "";

  useEffect(() => {
    const fetchData = async () => {
      if (!queryUrl) {
        setError("분석할 URL이 필요합니다. 홈에서 공고 URL을 입력해 주세요.");
        setData(null);
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: queryUrl }),
        });
        if (!response.ok) {
          throw new Error("분석 요청 실패");
        }
        const json = (await response.json()) as AnalyzeResponse;
        setData(json);
      } catch (err) {
        console.error(err);
        setError("분석 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  const snapshot = data?.snapshot;
  const detail = data?.detail;

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 pb-16 pt-12 sm:px-10">
      <header className="flex flex-col gap-4 rounded-3xl border border-slate-100/70 bg-white/90 p-6 shadow-xl backdrop-blur">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          분석 결과
          {queryUrl && (
            <span className="rounded-full bg-slate-900/5 px-2 py-1 text-[11px] font-semibold lowercase text-slate-600">
              {queryUrl}
            </span>
          )}
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-slate-900">채용 공고 분석 결과</h1>
            <p className="text-sm text-slate-600">
              DeepSeek 기반으로 URL을 요약하고 필요한 역량/전략 포인트를 정리했습니다. 아래 내용을 검토하고 포트폴리오와
              지원 전략을 보강해 보세요.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
              <span className="rounded-full bg-slate-900/5 px-3 py-1">로딩/분석 자동 진행</span>
              <span className="rounded-full bg-slate-900/5 px-3 py-1">정리된 요약 · 스택 · 전략</span>
              <span className="rounded-full bg-slate-900/5 px-3 py-1">적합도 스냅샷</span>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-800 shadow-sm">
            <p className="font-semibold text-slate-900">분석 상태</p>
            {isLoading && <p className="mt-1">분석 중... 잠시만 기다려 주세요.</p>}
            {!isLoading && !error && data && <p className="mt-1 text-emerald-600">완료 · 결과가 업데이트되었습니다.</p>}
            {error && <p className="mt-1 text-amber-600">{error}</p>}
          </div>
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/80 bg-gradient-to-br from-slate-900 via-[#0e1630] to-[#0b1120] p-6 text-white shadow-2xl">
          {isLoading ? (
            <div className="h-48 animate-pulse rounded-2xl bg-white/10" />
          ) : snapshot ? (
            <SnapshotCard snapshot={snapshot} />
          ) : (
            <div className={`${shimmer} h-48 rounded-2xl bg-white/5`} />
          )}
        </div>
        <div className="grid gap-4">
          {isLoading ? (
            <>
              <div className="h-40 animate-pulse rounded-2xl bg-white" />
              <div className="h-32 animate-pulse rounded-2xl bg-white" />
            </>
          ) : detail ? (
            <>
              <CompanyCard detail={detail} />
              <StackCard detail={detail} />
            </>
          ) : (
            <>
              <div className={`${shimmer} h-40 rounded-2xl bg-white`} />
              <div className={`${shimmer} h-32 rounded-2xl bg-white`} />
            </>
          )}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg">
          {detail ? <RoleCard detail={detail} /> : <div className={`${shimmer} h-64 rounded-2xl bg-slate-100`} />}
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg">
          {detail ? <StrategyCard detail={detail} /> : <div className={`${shimmer} h-64 rounded-2xl bg-slate-100`} />}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg">
        {detail ? <SummaryTable detail={detail} /> : <div className={`${shimmer} h-40 rounded-2xl bg-slate-100`} />}
      </section>
    </main>
  );
}

function SnapshotCard({ snapshot }: { snapshot: Snapshot }) {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-emerald-100">실시간 스냅샷</p>
          <p className="text-xs text-slate-200">URL → 요약 → 스킬 갭 → 학습 추천 → 로드맵</p>
        </div>
        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-100 ring-1 ring-emerald-400/30">
          {snapshot.fitScore}
        </span>
      </div>
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-inner shadow-black/20">
        <p className="text-xs uppercase tracking-[0.08em] text-slate-300">핵심 요구</p>
        <p className="text-lg font-semibold">{snapshot.core}</p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/20 via-indigo-500/15 to-slate-900/40 px-4 py-3 shadow-inner shadow-black/15">
        <p className="text-xs font-semibold text-indigo-100">부족 역량</p>
        <p className="text-sm text-slate-50">{snapshot.gaps}</p>
        <div className="mt-2 flex items-center gap-2 text-xs text-slate-200">
          <span className="h-2 w-2 rounded-full bg-indigo-300" />
          학습 추천 5개 생성 완료
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-inner shadow-black/10">
        <p className="text-xs font-semibold text-slate-200">{snapshot.roadmapLabel}</p>
        <div className="mt-2 flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#246BFD] via-[#7B4DFF] to-[#30E3CA]"
              style={{ width: `${snapshot.progress}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-white">{snapshot.progress}%</span>
        </div>
        <p className="mt-2 text-xs text-slate-200">{snapshot.roadmapDetail}</p>
      </div>
      <div className="rounded-2xl border border-emerald-300/20 bg-emerald-500/10 px-4 py-3 shadow-inner shadow-emerald-900/20">
        <p className="text-xs font-semibold text-emerald-100">다음 스텝</p>
        <ul className="mt-2 space-y-1 text-sm text-slate-100">
          {snapshot.nextSteps.map((step) => (
            <li key={step} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CompanyCard({ detail }: { detail: AnalysisDetail }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">회사 개요</p>
          <p className="text-lg font-semibold text-slate-900">
            {detail.company.name} ({detail.company.brand})
          </p>
        </div>
        <div className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700">
          {detail.company.hiringType}
        </div>
      </div>
      <div className="mt-3 grid gap-2 text-sm text-slate-700">
        <p>근무지: {detail.company.location}</p>
        <p>레벨: {detail.company.level}</p>
        <p>투자: {detail.company.funding}</p>
        <p>성과: {detail.company.achievements.join(" · ")}</p>
      </div>
      <div className="mt-3 space-y-1 text-sm text-slate-700">
        <p className="font-semibold text-slate-800">문화</p>
        <ul className="list-disc space-y-1 pl-5">
          {detail.company.culture.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StackCard({ detail }: { detail: AnalysisDetail }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">기술 스택 & 도구</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {detail.stack.map((item) => (
          <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
            {item}
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">문화 적합도</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {detail.cultureFit.map((item) => (
          <span key={item} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-100">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function RoleCard({ detail }: { detail: AnalysisDetail }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">포지션</p>
          <p className="text-xl font-semibold text-slate-900">{detail.position.title}</p>
          <p className="text-sm text-slate-600">{detail.position.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {detail.position.keyPoints.map((item) => (
            <span key={item} className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <InfoList title="주요 업무" items={detail.responsibilities} />
        <InfoList title="지원 자격 (필수)" items={detail.mustSkills} />
      </div>
      {detail.preferred && detail.preferred.length > 0 && <InfoList title="우대 / 플러스" items={detail.preferred} />}
    </div>
  );
}

function StrategyCard({ detail }: { detail: AnalysisDetail }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">지원 전략</p>
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">
          포트폴리오 · 인터뷰 준비
        </span>
      </div>
      <InfoList title="핵심 포인트" items={detail.position.keyPoints} />
      <InfoList title="지원 전 전략 포인트" items={detail.strategy} />
    </div>
  );
}

function SummaryTable({ detail }: { detail: AnalysisDetail }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">분석 요약</p>
        <span className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700">LLM 기반</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {detail.summaryTable.map((row) => (
          <div key={row.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">{row.label}</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{row.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
      <p className="text-sm font-semibold text-slate-800">{title}</p>
      <ul className="mt-2 space-y-1 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
