type NavBarProps = {
  items: string[];
};

export function NavBar({ items }: NavBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/85 px-4 py-3 shadow-sm ring-1 ring-slate-100 backdrop-blur">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#246BFD] to-[#7B4DFF] text-white font-semibold">
          J
        </div>
        <span className="text-lg font-semibold text-slate-900">JobDecode</span>
      </div>
      <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700">
        {items.map((item) => (
          <button
            key={item}
            className="rounded-full px-3 py-1 transition hover:bg-slate-100"
            type="button"
          >
            {item}
          </button>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <button className="rounded-full border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-700 hover:border-slate-300">
          로그인
        </button>
        <button className="rounded-full bg-gradient-to-r from-[#246BFD] to-[#7B4DFF] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-900/20">
          무료로 시작
        </button>
      </div>
    </div>
  );
}
