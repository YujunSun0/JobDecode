import type { DiagnosticCard } from "@/data/home-page";

type DiagnosticsSectionProps = {
  diagnostics: DiagnosticCard[];
};

export function DiagnosticsSection({ diagnostics }: DiagnosticsSectionProps) {
  return (
    <section className="grid gap-6">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
        <span className="h-2 w-2 rounded-full bg-[#7B4DFF]" />
        진단 · 테스트 허브
      </div>
      <h2 className="text-2xl font-semibold text-slate-900">한 번에 핵심 기능에 진입하세요</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {diagnostics.map((item) => (
          <article
            key={item.title}
            className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center gap-2 text-xl" aria-hidden>
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
