import type { DiagnosticCard } from "@/data/home-page";

type DiagnosticsSectionProps = {
  diagnostics: DiagnosticCard[];
};

export function DiagnosticsSection({ diagnostics }: DiagnosticsSectionProps) {
  return (
    <section className="grid gap-4 rounded-3xl border border-slate-100/80 bg-white/90 p-6 shadow-xl shadow-blue-900/5 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <span className="h-2 w-2 rounded-full bg-[#7B4DFF]" />
          진단 · 테스트 허브
        </div>
        <span className="hidden rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-600 sm:inline-flex">
          베타 실습 공간
        </span>
      </div>
      <h2 className="text-2xl font-semibold text-slate-900">한 번에 핵심 기능에 진입하세요</h2>
      <p className="text-sm text-slate-600">
        스킬 레벨 측정부터 모의면접까지 이어지는 흐름을 빠르게 시작할 수 있는 테스트 벤치입니다.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {diagnostics.map((item) => (
          <article
            key={item.title}
            className="group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50/70 p-5 ring-1 ring-slate-100 shadow-md transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="flex items-center gap-2 text-xl text-indigo-500" aria-hidden>
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-base font-semibold ring-1 ring-indigo-100">
                {item.icon}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">start</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
            <span className="text-xs font-semibold text-[#246BFD] opacity-0 transition group-hover:opacity-100">
              바로 실행 →
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
