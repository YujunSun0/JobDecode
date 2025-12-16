import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vooster | 채용 공고 분석과 맞춤 학습 로드맵",
  description:
    "채용 공고를 분석하고 스킬 갭을 줄여 맞춤 학습 로드맵과 AI 모의면접을 제공하는 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
