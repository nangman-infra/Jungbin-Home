"use client";

import { motion, type Variants } from "framer-motion";

import { Badge } from "@/components/ui/badge";

import { Terminal, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};


type TerminalOutput = {
  type: "input" | "output" | "error" | "system" | "folder";
  content: string;
};

export default function Home() {
  const { lang, setLang } = useI18n();
  const router = useRouter();
  const [history, setHistory] = useState<TerminalOutput[]>([
    { type: "system", content: "Welcome to RyuJungbin's Infrastructure Lab." },
    { type: "system", content: "Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState("");
  const terminalContainerRef = useRef<HTMLDivElement>(null);



  // Auto-scroll terminal
  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTo({
        top: terminalContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim();
    const args = cmd.split(" ");
    const baseCmd = args[0].toLowerCase();
    
    const newHistory = [...history, { type: "input", content: `jungbin@infra-ops ~ % ${cmd}` } as TerminalOutput];

    switch (baseCmd) {
      case "help":
        newHistory.push({ type: "output", content: "Available commands:\n  ls       - List directories\n  cd [dir] - Navigate to directory\n  whoami   - Display user info\n  clear    - Clear terminal window\n  help     - Show this message" });
        break;
      case "ls":
        newHistory.push({ type: "folder", content: "skills/   education/   projects/   blog/   contact/" });
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "whoami":
        newHistory.push({ type: "output", content: "Ryu Jungbin\nHybrid Infrastructure Engineer\nSpecialties: Cloud, K8s, AI Infra, On-Premises" });
        break;
      case "cd":
        if (args.length < 2) {
          newHistory.push({ type: "error", content: "cd: missing argument" });
        } else {
          const target = args[1].replace("/", "").toLowerCase();
          const validRoutes = ["skills", "projects", "blog", "education", "contact"];
          if (validRoutes.includes(target)) {
            newHistory.push({ type: "system", content: `Routing to /${target}...` });
            router.push(`/${target}`);
          } else if (target === "..") {
            newHistory.push({ type: "output", content: "You are already at the root directory." });
          } else {
            newHistory.push({ type: "error", content: `cd: no such file or directory: ${target}` });
          }
        }
        break;
      default:
        newHistory.push({ type: "error", content: `command not found: ${baseCmd}` });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="main-wrapper relative max-w-5xl mx-auto"
    >
      {/* Background Mesh/Grid Effect */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>

      <div className="absolute top-0 right-0 mt-2 flex items-center gap-1 bg-white border border-zinc-200 p-1 rounded-full shadow-sm z-50">
        <Globe className="w-3 h-3 text-zinc-400 ml-2" />
        <button 
          onClick={() => setLang("en")}
          className={`text-[10px] px-2.5 py-1 rounded-full font-black tracking-widest transition-colors ${lang === 'en' ? 'bg-zinc-950 text-white' : 'text-zinc-500 hover:text-zinc-950'}`}
        >
          EN
        </button>
        <button 
          onClick={() => setLang("ko")}
          className={`text-[10px] px-2.5 py-1 rounded-full font-black tracking-widest transition-colors ${lang === 'ko' ? 'bg-zinc-950 text-white' : 'text-zinc-500 hover:text-zinc-950'}`}
        >
          KO
        </button>
      </div>

      <section className="space-y-8 mb-12 pt-8">
        <motion.div variants={fadeInUp} className="flex flex-col items-center text-center space-y-4">
          <Badge className="bg-zinc-950 text-white border-none px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.25em] inline-flex shadow-sm">
            Hybrid Infrastructure Engineer
          </Badge>
          <h1 className="tracking-tighter whitespace-nowrap overflow-hidden text-5xl md:text-6xl font-black text-zinc-950 drop-shadow-sm">
            {lang === 'ko' ? '유정빈' : 'Ryu Jeongbin'}
          </h1>
          <div className="mt-4 space-y-2 max-w-4xl break-keep">
            {lang === 'ko' ? (
              <>
                <p className="text-lg md:text-xl font-bold text-zinc-700 tracking-tight leading-relaxed">
                  온프레미스의 깊이, 클라우드의 유연성, AI 인프라의 지능화를 융합하여<br className="hidden md:block" /> 무한히 확장하는 차세대 DevOps 생태계를 설계합니다.
                </p>
                <p className="text-lg md:text-xl font-bold text-zinc-700 tracking-tight leading-relaxed">
                  단순한 기술 스택을 넘어, 시스템의 근본적인 원리를 바탕으로<br className="hidden md:block" /> 비즈니스의 한계를 돌파하는 시스템 아키텍트입니다.
                </p>
                <p className="text-lg md:text-xl font-bold text-zinc-700 tracking-tight leading-relaxed">
                  복잡한 문제를 단순하게 정의하고, 비즈니스 가치를 창출하는<br className="hidden md:block" /> 안정적이고 자동화된 인프라 환경을 구축해 나갑니다.
                </p>
              </>
            ) : (
              <>
                <p className="text-lg md:text-xl font-bold text-zinc-700 tracking-tight leading-relaxed">
                  Fusing On-Premises, Cloud, and AI Infra to design infinitely scalable next-generation DevOps ecosystems.
                </p>
                <p className="text-lg md:text-xl font-bold text-zinc-700 tracking-tight leading-relaxed">
                  I am a system architect who breaks through technical limits by mastering fundamental system principles.
                </p>
                <p className="text-lg md:text-xl font-bold text-zinc-700 tracking-tight leading-relaxed">
                  I simplify complex problems to build stable, automated infrastructure that drives business value.
                </p>
              </>
            )}
          </div>
        </motion.div>
      </section>

      {/* Interactive Terminal Section */}
      <section className="mt-12 w-full max-w-5xl mx-auto">
        <motion.div variants={fadeInUp} className="box-section bg-white border-zinc-200 flex flex-col min-h-[500px] rounded-2xl p-6 shadow-md relative overflow-hidden">
          {/* Subtle top bar for terminal look */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-50 border-b border-zinc-100 flex items-center px-4 gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
          </div>
          
          <div className="flex items-center gap-2 mb-4 border-b border-zinc-100 pb-4 pt-6">
            <Terminal className="w-5 h-5 text-emerald-600" />
            <h2 className="text-[13px] font-bold uppercase tracking-[0.2em] text-zinc-500 font-mono">jungbin@infra-ops ~ %</h2>
          </div>
          
          <div ref={terminalContainerRef} className="flex-1 font-mono text-[14px] leading-relaxed overflow-y-auto overflow-x-hidden flex flex-col gap-2 scrollbar-hide" onClick={() => document.getElementById("terminal-input")?.focus()}>
            {history.map((line, idx) => (
              <div 
                key={idx} 
                className={`whitespace-pre-wrap ${
                  line.type === "error" ? "text-red-500 font-bold" : 
                  line.type === "system" ? "text-zinc-500 italic" : 
                  line.type === "input" ? "text-emerald-600 font-bold" : 
                  line.type === "folder" ? "text-zinc-800 font-black text-[15px]" : 
                  "text-zinc-700 font-bold"
                }`}
              >
                {line.content}
              </div>
            ))}
            
            <form onSubmit={handleCommand} className="flex items-center gap-3 mt-4">
              <span className="text-emerald-600 font-bold shrink-0 text-[14px]">jungbin@infra-ops ~ %</span>
              <input 
                id="terminal-input"
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoComplete="off"
                spellCheck="false"
                placeholder="명령어를 입력해보세요 (예: ls, cd projects)"
                className="bg-transparent outline-none flex-1 text-zinc-900 font-black font-mono text-[14px] caret-emerald-500 placeholder:text-zinc-400 placeholder:italic placeholder:font-normal w-full"
              />
            </form>
          </div>
        </motion.div>
      </section>



      <footer className="mt-24 py-8 border-t border-zinc-100 flex justify-between items-center opacity-40 hover:opacity-100 transition-opacity">
        <p className="text-[9px] font-black uppercase tracking-[0.3em]">Infrastructure Systems</p>
        <p className="text-[9px] font-black uppercase tracking-[0.3em]">© 2026 {lang === 'ko' ? '유정빈' : 'RYU JUNGBIN'}</p>
      </footer>

      {/* Global CSS for custom animations inside React component */}
      <style dangerouslySetInnerHTML={{__html:`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />

    </motion.div>
  );
}
