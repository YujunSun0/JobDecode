import type { CommunityCard } from "@/data/home-page";

type CommunitySectionProps = {
  items: CommunityCard[];
};

export function CommunitySection({ items }: CommunitySectionProps) {
  return (
    <section className="grid gap-6">
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
        <span className="h-2 w-2 rounded-full bg-indigo-400" />
        커뮤니티 티저
      </div>
      <h2 className="text-2xl font-semibold text-slate-900">함께 준비하는 공간 (COMING SOON)</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col gap-2 rounded-2xl border border-dashed border-slate-200 bg-white/90 p-4"
          >
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {item.badge}
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
