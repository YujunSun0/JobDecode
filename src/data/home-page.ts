export type PositionCard = {
  title: string;
  skills: string;
  trend: string;
};

export type RoadmapHighlight = {
  label: string;
  value: string;
  detail: string;
};

export type DiagnosticCard = {
  title: string;
  desc: string;
  icon: string;
};

export type CommunityCard = {
  title: string;
  desc: string;
  badge: string;
};

export const navItems: string[] = ["분석", "추천", "로드맵", "모의면접", "커뮤니티"];

export const quickChips: string[] = [
  "프론트엔드",
  "백엔드",
  "데이터/ML",
  "모의면접",
  "포트폴리오",
  "테스트",
  "A/B 실험",
  "CS 기초",
];

export const recommendedPositions: PositionCard[] = [
  { title: "프론트엔드 엔지니어", skills: "React · TypeScript · Next.js", trend: "최근 분석 128건" },
  { title: "백엔드 엔지니어", skills: "Node · Nest · PostgreSQL", trend: "최근 분석 94건" },
  { title: "ML 엔지니어", skills: "Python · LLM · Vector DB", trend: "최근 분석 61건" },
];

export const roadmapHighlights: RoadmapHighlight[] = [
  { label: "스킬 갭", value: "프론트엔드 → 시니어", detail: "테스팅 · 성능 · 아키텍처" },
  { label: "맞춤 추천", value: "5개 코스", detail: "주당 6시간 · 4주" },
];

export const diagnostics: DiagnosticCard[] = [
  { title: "스킬 레벨 진단", desc: "객관식 + 시나리오 기반", icon: "🎯" },
  { title: "코딩 테스트", desc: "단계별 자동 채점", icon: "⌨️" },
  { title: "AI 코드 리뷰", desc: "LLM 리뷰 + 개선 포인트", icon: "🤖" },
  { title: "포트폴리오 진단", desc: "취약점/스토리 보강", icon: "🗂️" },
  { title: "AI 모의면접", desc: "대화형 피드백", icon: "🎤" },
];

export const communityTeasers: CommunityCard[] = [
  { title: "최신 공고 비교", desc: "원티드/잡플/링크드인 HOT 포지션", badge: "티저" },
  { title: "인기 스레드", desc: "이직 준비 Q&A, 합격 후기", badge: "COMING" },
  { title: "면접 후기 트렌드", desc: "기술/실무/컬쳐핏 질문 모음", badge: "티저" },
];

export const roadmapProgress = [
  { label: "요구사항 분석", percent: 80, color: "from-[#246BFD] to-[#7B4DFF]" },
  { label: "학습 진행도", percent: 45, color: "from-emerald-400 to-teal-500" },
  { label: "모의면접 준비", percent: 20, color: "from-amber-400 to-orange-500" },
];
