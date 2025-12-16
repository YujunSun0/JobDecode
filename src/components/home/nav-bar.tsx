type NavBarProps = {
  items: string[];
};

export function NavBar({ items }: NavBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl shadow-blue-900/5 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-slate-900 text-white shadow-md shadow-blue-900/20 ring-1 ring-slate-200">
          <div className="absolute inset-0 bg-[conic-gradient(from_120deg,rgba(36,107,253,0.65),rgba(123,77,255,0.65),rgba(48,227,202,0.5),rgba(36,107,253,0.65))] opacity-70" />
          <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900">
            <span className="text-sm font-semibold">JD</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-slate-900">JobDecode</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
            talent prep os
          </span>
        </div>
      </div>
      <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700">
        {items.map((item) => (
          <button
            key={item}
            className="rounded-full px-3 py-1 transition hover:bg-slate-100 hover:text-slate-900"
            type="button"
          >
            {item}
          </button>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <span className="hidden rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 sm:inline-flex">
          Beta
        </span>
        <button className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
          로그인
        </button>
        <button className="rounded-full bg-gradient-to-r from-[#246BFD] to-[#7B4DFF] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:translate-y-[-1px] hover:shadow-xl">
          무료로 시작
        </button>
      </div>
    </div>
  );
}
