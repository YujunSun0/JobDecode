/* eslint-disable react/no-array-index-key */
"use client";

import { useCallback, useMemo, useState } from "react";

type HeroSectionProps = {
  quickChips: string[];
};

const snapshot = {
  core: "React · TypeScript · 테스트 자동화",
  fitScore: "적합도 84%",
  gaps: "E2E 테스트 · 성능 최적화 · 접근성",
  roadmapLabel: "로드맵 (4주)",
  roadmapDetail: "주당 6시간 · 실습/리뷰 포함",
  progress: 68,
  nextSteps: ["Playwright 커버리지 70%", "Lighthouse 90점 이상", "LLM 코드 리뷰 적용"],
};

const metrics = [
  { label: "평균 분석 시간", value: "3초", helper: "URL → 결과" },
  { label: "실무 적합도", value: "82%", helper: "JD 매칭 정확도" },
  { label: "커버리지", value: "6개 챕터", helper: "테스트·성능·아키텍처" },
];

export function HeroSection({ quickChips }: HeroSectionProps) {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const urlPlaceholder = useMemo(() => "원티드·링크드인·잡플래닛 링크를 붙여넣으세요", []);

  const inputContainerClass = useMemo(() => {
    const base = "flex w-full items-center gap-3 rounded-xl bg-slate-900/60 px-4 py-3";
    if (error) {
      return `${base} border border-amber-300/80 ring-1 ring-amber-200/60`;
    }
    return `${base} border border-white/10 ring-1 ring-white/10 focus-within:border-[#30E3CA]/80 focus-within:ring-1 focus-within:ring-[#30E3CA]/60`;
  }, [error]);

  const validateUrl = useCallback((value: string) => {
    if (!value.trim()) {
      return "URL을 입력해 주세요.";
    }
    try {
      // URL 생성자로 기본 형식 검증
      // eslint-disable-next-line no-new
      new URL(value.trim());
      return null;
    } catch {
      return "올바른 URL 형식을 입력해 주세요.";
    }
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const validationError = validateUrl(url);
      if (validationError) {
        setError(validationError);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        // 분석 API 연동 시 호출 지점입니다. 응답 데이터를 스냅샷/추천 섹션으로 전달하도록 연결하세요.
      } catch (err) {
        console.error(err);
        setError("분석 중 문제가 발생했습니다. 다시 시도해 주세요.");
      } finally {
        setIsLoading(false);
      }
    },
    [url, validateUrl],
  );

  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-[#0e1630] to-[#0b1120] px-6 py-8 shadow-2xl ring-1 ring-slate-900/40 sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(48,227,202,0.18),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(123,77,255,0.2),transparent_26%),radial-gradient(circle_at_72%_70%,rgba(36,107,253,0.2),transparent_20%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:160px_160px]" />
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="relative z-10 flex flex-col gap-6 text-white">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[13px] font-semibold uppercase tracking-[0.14em] ring-1 ring-white/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.18)]" />
            beta · url 기반 역량 분석
          </div>
          <div className="space-y-3">
            <h1 className="text-[28px] font-semibold leading-[1.2] sm:text-[32px] lg:text-[36px]">
              채용 공고 URL 하나로
              <br />
              스킬 갭을 집요하게 분해하고
              <br />
              실무형 로드맵을 받으세요.
            </h1>
            <p className="max-w-2xl text-[15px] text-slate-200 sm:text-base">
              “입력 → 분석 → 실행” 흐름을 3초 안에. 부족한 역량을 바로 집계하고 학습 · 모의면접 · 코드 리뷰까지 한 번에
              이어집니다.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">채용 공고 URL</p>
            <form className="mt-2 flex flex-col gap-3 lg:flex-row lg:items-center" onSubmit={handleSubmit}>
              <div className={inputContainerClass}>
                <input
                  className="w-full bg-transparent text-slate-100 placeholder:text-slate-500 focus:outline-none"
                  placeholder={urlPlaceholder}
                  aria-label="채용 공고 URL 입력"
                  aria-invalid={Boolean(error)}
                  aria-live="polite"
                  value={url}
                  onChange={(event) => {
                    setUrl(event.target.value);
                    if (error) setError(null);
                  }}
                  disabled={isLoading}
                />
              </div>
              <div className="flex w-full flex-row gap-2 lg:w-auto">
                <button
                  type="submit"
                  className="w-full whitespace-nowrap rounded-xl bg-gradient-to-r from-[#246BFD] to-[#7B4DFF] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:translate-y-[-1px] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 lg:w-auto"
                  disabled={isLoading}
                >
                  {isLoading ? "분석 중..." : "분석 시작하기"}
                </button>
              </div>
            </form>
            {error && (
              <p className="mt-2 text-sm font-semibold text-amber-200" role="alert" aria-live="polite">
                {error}
              </p>
            )}
            <div className="mt-3 flex flex-wrap gap-2">
              {quickChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-100 backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-300">{item.label}</p>
                <p className="text-lg font-semibold">{item.value}</p>
                <p className="text-xs text-slate-300">{item.helper}</p>
              </div>
            ))}
          </div>
        </div>

        <AnalysisSnapshot />
      </div>
    </section>
  );
}

function AnalysisSnapshot() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-2xl backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(123,77,255,0.35),transparent_32%),radial-gradient(circle_at_80%_40%,rgba(48,227,202,0.25),transparent_28%)]" />
      <div className="relative space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold">실시간 분석 스냅샷</p>
            <p className="text-xs text-slate-300">URL → 요약 → 스킬 갭 → 학습 추천 → 로드맵</p>
          </div>
          <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-100 ring-1 ring-emerald-400/30">
            {snapshot.fitScore}
          </span>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-inner shadow-black/20">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-xs uppercase tracking-[0.08em] text-slate-300">핵심 요구</p>
              <p className="text-sm font-semibold">{snapshot.core}</p>
            </div>
            <div className="rounded-lg bg-white/10 px-3 py-1 text-[11px] font-semibold text-slate-100 ring-1 ring-white/15">
              실무 매칭
            </div>
          </div>
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
    </div>
  );
}
