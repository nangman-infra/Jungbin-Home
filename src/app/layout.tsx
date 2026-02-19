import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/ui/Sidebar";

export const metadata: Metadata = {
  title: "유정빈 | 클라우드 인프라 아키텍트 포트폴리오",
  description: "인프라 전문가 유정빈의 경력과 기술 블로그를 제공하는 포트폴리오 대시보드입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 h-screen overflow-hidden flex font-sans antialiased">
        {/* 고기능 사이드바 */}
        <Sidebar />

        {/* 메인 대시보드 영역 */}
        <main className="flex-1 overflow-y-auto custom-scrollbar bg-[#F8FAFC]">
          <div className="container mx-auto px-6 py-10 md:px-10 md:py-12 max-w-6xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
