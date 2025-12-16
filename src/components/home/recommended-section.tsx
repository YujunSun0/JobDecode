import type { PositionCard } from "@/data/home-page";

type RecommendedSectionProps = {
  positions: PositionCard[];
};

export function RecommendedSection({ positions }: RecommendedSectionProps) {
  return (
    <section className="grid gap-6 rounded-3xl border border-slate-100/80 bg-white/90 p-6 shadow-xl shadow-blue-900/5 backdrop-blur">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <span className="h-2 w-2 rounded-full bg-[#246BFD]" />
          분석 기반 추천
        </div>
        <h2 className="text-2xl font-semibold text-slate-900">최근 많이 분석된 포지션과 추천 학습</h2>
        <p className="text-sm text-slate-600">
          URL 입력 전에 둘러보고, 비슷한 사용자가 따라간 로드맵과 스택을 먼저 확인하세요.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {positions.map((item) => (
          <article
            key={item.title}
            className="group flex flex-col gap-3 overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50/60 ring-1 ring-slate-100 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative h-28 overflow-hidden bg-gradient-to-r from-[#246BFD] via-[#7B4DFF] to-[#30E3CA] opacity-90">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.2),transparent_34%)]" />
            </div>
            <div className="flex flex-col gap-3 px-4 pb-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                {item.trend}
              </div>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <span className="rounded-full bg-slate-900/5 px-2 py-1 text-[11px] font-semibold text-[#246BFD]">
                  로드맵 샘플
                </span>
              </div>
              <p className="text-sm text-slate-600">{item.skills}</p>
              <div className="mt-auto flex items-center justify-between text-sm font-semibold">
                <button className="inline-flex items-center gap-2 text-[#246BFD] transition group-hover:translate-x-1">
                  상세 분석 보기
                  <span aria-hidden>→</span>
                </button>
                <span className="text-xs text-slate-500">실습 · 코드 리뷰 포함</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
