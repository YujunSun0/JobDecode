type HeroSectionProps = {
  quickChips: string[];
};

const snapshot = {
  core: "React · TypeScript · 테스트",
  fitScore: "적합도 78%",
  gaps: "E2E 테스트 · 성능 최적화 · 접근성",
  roadmapLabel: "로드맵 (4주)",
  roadmapDetail: "주당 6시간 · 실습/리뷰 포함",
  progress: 60,
};

export function HeroSection({ quickChips }: HeroSectionProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="flex flex-col gap-4">
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Beta · URL 기반 역량 분석
        </div>
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[40px]">
          채용 공고 URL 하나로
          <br />
          스킬 갭 분석과 맞춤 로드맵을 받아보세요.
        </h1>
        <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
          “입력 → 로딩 → 결과” 3단 흐름. 부족한 역량을 즉시 찾아 AI 추천 학습과 모의면접으로 채우세요.
        </p>
        <div className="rounded-2xl bg-white/90 p-4 shadow-md ring-1 ring-slate-100">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#246BFD]">
              <span className="text-slate-400">🔗</span>
              <input
                className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none"
                placeholder="채용 공고 URL을 입력하면 필요한 스킬을 분석해 드립니다"
                aria-label="채용 공고 URL 입력"
              />
            </div>
            <div className="flex w-full flex-row gap-2 lg:w-auto">
              <button className="w-full rounded-xl bg-gradient-to-r from-[#246BFD] to-[#7B4DFF] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:brightness-110 lg:w-auto">
                분석 시작하기
              </button>
              <button className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-slate-300 lg:w-auto">
                데모 보기
              </button>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {quickChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      <AnalysisSnapshot />
    </div>
  );
}

function AnalysisSnapshot() {
  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#0f172a] to-[#101826] shadow-2xl ring-1 ring-black/10">
      <div className="border-b border-white/10 px-6 py-4 text-white">
        <p className="text-sm font-semibold">실시간 분석 스냅샷</p>
        <p className="text-xs text-slate-300">URL → 요약 → 스킬 갭 → 학습 추천 → 로드맵</p>
      </div>
      <div className="grid gap-4 p-6 text-white">
        <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-300">핵심 요구</p>
            <p className="text-sm font-semibold">{snapshot.core}</p>
          </div>
          <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
            {snapshot.fitScore}
          </div>
        </div>
        <div className="rounded-xl bg-gradient-to-r from-blue-500/15 to-indigo-500/15 px-4 py-3 ring-1 ring-white/5">
          <p className="text-xs font-semibold text-indigo-100">부족 역량</p>
          <p className="text-sm text-slate-100">{snapshot.gaps}</p>
          <div className="mt-2 flex items-center gap-2 text-xs text-slate-200">
            <span className="h-2 w-2 rounded-full bg-indigo-300" />
            학습 추천 5개 생성 완료
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <p className="text-xs font-semibold text-slate-200">{snapshot.roadmapLabel}</p>
          <div className="mt-2 flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#246BFD] to-[#7B4DFF]"
                style={{ width: `${snapshot.progress}%` }}
              />
            </div>
            <span className="text-xs font-semibold text-white">{snapshot.progress}%</span>
          </div>
          <p className="mt-2 text-xs text-slate-200">{snapshot.roadmapDetail}</p>
        </div>
      </div>
    </div>
  );
}
