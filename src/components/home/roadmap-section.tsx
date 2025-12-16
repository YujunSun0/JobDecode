import type { RoadmapHighlight } from "@/data/home-page";

type RoadmapSectionProps = {
  highlights: RoadmapHighlight[];
  progress: { label: string; percent: number; color: string }[];
};

export function RoadmapSection({ highlights, progress }: RoadmapSectionProps) {
  return (
    <section className="grid gap-6 rounded-3xl border border-slate-100/80 bg-white/90 p-6 shadow-xl shadow-blue-900/5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          개인화 로드맵
        </div>
        <h2 className="text-2xl font-semibold text-slate-900">현재 역량 → 목표 포지션 스킬 갭을 한눈에</h2>
        <p className="text-sm text-slate-600">
          맞춤 로드맵을 생성하고 주차별 과제를 받으세요. AI 면접과 코드 리뷰로 마무리합니다.
        </p>
        <div className="grid gap-3">
          {highlights.map((item) => (
            <article
              key={item.label}
              className="flex flex-col gap-1 rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50/70 p-4 ring-1 ring-slate-100 shadow-sm"
            >
              <p className="text-xs font-semibold text-slate-500">{item.label}</p>
              <p className="text-lg font-semibold text-slate-900">{item.value}</p>
              <p className="text-sm text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-3">
          <button className="rounded-xl bg-gradient-to-r from-[#246BFD] to-[#7B4DFF] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/20 transition hover:translate-y-[-1px] hover:shadow-xl">
            맞춤 로드맵 생성하기
          </button>
          <button className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400">
            데모 로드맵 보기
          </button>
        </div>
      </div>
      <aside className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-xl ring-1 ring-slate-100">
        <p className="text-sm font-semibold text-slate-700">진행 현황</p>
        <div className="mt-4 space-y-4">
          {progress.map((item) => (
            <div key={item.label} className="space-y-2">
              <div className="flex items-center justify-between text-sm text-slate-700">
                <span>{item.label}</span>
                <span className="font-semibold">{item.percent}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-600">이번 주 목표</p>
          <p className="text-sm text-slate-700">테스트 커버리지 70% 달성 · E2E 2건 작성 · 접근성 점검</p>
        </div>
      </aside>
    </section>
  );
}
