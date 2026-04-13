import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/ui/Sidebar";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Ryu Jungbin | 인프라 엔지니어 포트폴리오",
  description: "인프라 시스템을 구축하고 운영하는 Infrastructure Engineer Ryu Jungbin의 대시보드입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 h-screen overflow-hidden flex font-sans antialiased selection:bg-zinc-900 selection:text-white">
        <script
          src="https://analytics.nangman.cloud/api/script.js"
          data-site-id="4dc9decb6618"
          defer
        ></script>
        
        <I18nProvider>
          <Sidebar />

          <main className="flex-1 overflow-y-auto custom-scrollbar bg-[#F8FAFC]">
            <div className="container mx-auto px-6 py-10 md:px-10 md:py-12 max-w-6xl relative">
              {children}
            </div>
          </main>
        </I18nProvider>

      </body>
    </html>
  );
}
