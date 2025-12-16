import { NextResponse } from "next/server";

type AnalysisSnapshot = {
  core: string;
  fitScore: string;
  gaps: string;
  roadmapLabel: string;
  roadmapDetail: string;
  progress: number;
  nextSteps: string[];
};

type AnalysisDetail = {
  company: {
    name: string;
    brand: string;
    location: string;
    hiringType: string;
    level: string;
    funding: string;
    achievements: string[];
    culture: string[];
  };
  position: {
    title: string;
    summary: string;
    keyPoints: string[];
  };
  responsibilities: string[];
  mustSkills: string[];
  preferred?: string[];
  stack: string[];
  cultureFit: string[];
  summaryTable: { label: string; value: string }[];
  strategy: string[];
};

type AnalysisResponse = {
  snapshot: AnalysisSnapshot;
  detail: AnalysisDetail;
};

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json({ message: "URL이 필요합니다." }, { status: 400 });
    }

    try {
      // 기본 형식 검증
      // eslint-disable-next-line no-new
      new URL(url.trim());
    } catch {
      return NextResponse.json({ message: "올바른 URL 형식을 입력해 주세요." }, { status: 400 });
    }

    // TODO: JD 스크래핑 + DeepSeek 연동. 현재는 목 응답.
    const mock: AnalysisResponse = {
      snapshot: {
        core: "HTML/CSS 퍼블리싱 · 반응형 · Jnut 프레임워크",
        fitScore: "적합도 78%",
        gaps: "Jnut 프레임워크 경험 · JS 실무 사례",
        roadmapLabel: "로드맵 (4주)",
        roadmapDetail: "주당 6시간 · 실습/리뷰 포함",
        progress: 62,
        nextSteps: ["반응형 포트폴리오 정리", "JS DOM 핸들링 사례 보강", "Jnut 프레임워크 랩"],
      },
      detail: {
        company: {
          name: "널리소프트",
          brand: "쌤157",
          location: "서울 영등포구 (사무실)",
          hiringType: "상시채용",
          level: "신입 ~ 3년",
          funding: "누적 투자 약 127억 (스마일게이트, 미래에셋 등)",
          achievements: ["앱 평점 4.8+", "100만 가입자 이상"],
          culture: [
            "도전·주도적 업무 선호",
            "주어진 일만 하는 수동적 스타일 지양",
            "스타트업 템포/자율성 강조",
          ],
        },
        position: {
          title: "퍼블리셔",
          summary: "시안 정적 퍼블리싱을 넘어서 서비스 UI 개발과 기능 연동까지 수행",
          keyPoints: [
            "HTML/CSS 중심, JS는 기본 요구",
            "자체 프레임워크(Jnut) 적응 필요",
            "반응형 웹 퍼블리싱 필수",
          ],
        },
        responsibilities: [
          "HTML / CSS 기반 UI 개발",
          "반응형 웹 퍼블리싱",
          "자체 프레임워크 기반 화면 개발",
          "백엔드 협업 통한 기능 연동",
        ],
        mustSkills: [
          "HTML/CSS 숙련",
          "반응형 퍼블리싱 실무",
          "정확한 시안 구현",
          "JavaScript 기초 이해",
          "Jnut 프레임워크 활용",
        ],
        preferred: [
          "서비스 UI 개발 경험",
          "백엔드 협업 경험",
          "스타트업 환경 적응력",
        ],
        stack: [
          "HTML / CSS",
          "JavaScript (기초 이상)",
          "Jnut 프레임워크",
          "미디어쿼리 기반 반응형 퍼블리싱",
        ],
        cultureFit: [
          "도전 과제를 즐기는 사람",
          "자율적·주도적 업무 스타일",
          "문제 해결/책임감 강조",
        ],
        summaryTable: [
          { label: "난이도", value: "★★☆☆☆ (퍼블리싱 중심, 프레임워크 적응 필요)" },
          { label: "적합 지원자", value: "퍼블리싱 실력 + JS 기초 갖춘 주니어" },
          { label: "느낌", value: "퍼블리셔 + 기능 연결형 프론트" },
          { label: "성장 포인트", value: "UI 전반 경험, 백엔드 협업" },
        ],
        strategy: [
          "포트폴리오에 반응형 퍼블리싱 사례 명확히 (뷰포트 대응·시안 구현 정확도)",
          "JS 기초 능력 강조: DOM 조작/이벤트 처리 예시 제시",
          "Jnut 프레임워크 학습 계획 언급",
          "스타트업 문화 적응력: 주도적 문제 해결 경험 서술",
        ],
      },
    };

    return NextResponse.json(mock);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "분석 처리 중 오류가 발생했습니다." }, { status: 500 });
  }
}
