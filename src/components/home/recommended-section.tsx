import type { PositionCard } from "@/data/home-page";

type RecommendedSectionProps = {
  positions: PositionCard[];
};

export function RecommendedSection({ positions }: RecommendedSectionProps) {
  return (
    <section className="grid gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <span className="h-2 w-2 rounded-full bg-[#246BFD]" />
          분석 기반 추천
        </div>
        <h2 className="text-2xl font-semibold text-slate-900">최근 많이 분석된 포지션과 추천 학습</h2>
        <p className="text-sm text-slate-600">URL 입력 전에 둘러보고, 비슷한 사용자가 따라간 로드맵을 확인하세요.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {positions.map((item) => (
          <article
            key={item.title}
            className="group flex flex-col gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="h-28 bg-gradient-to-r from-[#246BFD] to-[#7B4DFF] opacity-70" />
            <div className="flex flex-col gap-2 px-4 pb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                {item.trend}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.skills}</p>
              <button className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#246BFD]">
                상세 분석 보기
                <span aria-hidden>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
