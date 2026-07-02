"use client";

import { motion, type Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Terminal, Globe, Command, Server, Shield, Cloud, ActivitySquare, LayoutGrid, BookOpen, Layers, Database, Cpu } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const terminalBlueprint = `> RyuJungbin.Initialize()...\n> Loading Architecture Blueprint: [SUCCESS]\n> Syncing Infrastructure Skills:\n  - AWS / Multi-AZ Config\n  - Terraform / IaC Automation\n  - Kubernetes / Auto-healing\n> Establishing Zero-Trust Policies...\n> Status: READY FOR CHALLENGES`;

type TerminalOutput = {
  type: "input" | "output" | "error" | "system" | "folder";
  content: string;
};

export default function Home() {
  const { t, lang, setLang } = useI18n();
  const router = useRouter();
  const [history, setHistory] = useState<TerminalOutput[]>([
    { type: "system", content: "Welcome to RyuJungbin's Infrastructure Lab." },
    { type: "system", content: "Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState("");
  const terminalContainerRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "AWS Architecture", proficiency: "95%", icon: Cloud },
    { name: "Terraform Automation", proficiency: "88%", icon: Terminal },
    { name: "K8s Orchestration", proficiency: "90%", icon: Database }
  ];
  const skillMetrics = skills.map((skill) => ({
    ...skill,
    id: skill.name.toLowerCase().replaceAll(/\s+/g, "-"),
  }));

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
        newHistory.push({ type: "folder", content: "education/   projects/   insight/   blog/   contact/" });
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
          const validRoutes = ["projects", "blog", "education", "contact", "insight"];
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
          <h1 className="tracking-tighter whitespace-nowrap overflow-hidden text-5xl md:text-7xl font-black text-zinc-950 drop-shadow-sm">
            {lang === 'ko' ? '유정빈' : 'Ryu Jeongbin'}
          </h1>
          <div className="mt-4 space-y-2 max-w-3xl break-keep">
            {lang === 'ko' ? (
              <>
                <p className="text-lg md:text-xl font-bold text-zinc-700 tracking-tight leading-relaxed">
                  온프레미스의 깊이, 클라우드의 유연성, AI 인프라의 지능화를 융합하여 무한히 확장하는 차세대 DevOps 생태계를 설계합니다.
                </p>
                <p className="text-lg md:text-xl font-bold text-zinc-700 tracking-tight leading-relaxed">
                  단순한 기술 스택을 넘어, 시스템의 근본적인 원리를 바탕으로 비즈니스의 한계를 돌파하는 시스템 아키텍트입니다.
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
              </>
            )}
          </div>
        </motion.div>


      </section>

      {/* Interactive Terminal Section */}
      <section className="mt-12">
        <motion.div variants={fadeInUp} className="bg-white border border-zinc-200 flex flex-col h-[380px] rounded-2xl p-6 shadow-xl relative overflow-hidden group">
          {/* Terminal Hint Badge */}
          <div className="absolute top-4 right-4 bg-zinc-100 border border-zinc-200 text-zinc-600 text-[10px] px-3 py-1.5 rounded-full font-bold flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity z-10 animate-pulse shadow-sm">
            <Command className="w-3 h-3 text-emerald-500" />
            Interactive! Try typing 'ls' or 'cd projects'
          </div>

          <div className="flex items-center justify-between mb-4 border-b border-zinc-100 pb-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-zinc-400" />
              <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 font-mono">jungbin@infra-ops ~ %</h2>
            </div>
            <div className="flex gap-1.5 mr-40">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
            </div>
          </div>
          <div className="space-y-4 flex-1">
            {skillMetrics.map((skill, i) => {
              const SkillIcon = skill.icon;
              return (
                <div key={skill.id} className="flex items-center justify-between p-3 rounded-xl border border-zinc-100 bg-zinc-50/50">
                  <div className="flex items-center gap-3">
                    <SkillIcon className="w-4 h-4 text-zinc-400" />
                    <div>
                      <p className="text-[13px] font-black text-zinc-900 leading-none">{skill.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1.5">{skill.proficiency}</p>
                    <div className="w-20 h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: skill.proficiency }}
                        transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                        className="h-full bg-zinc-950" 
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="box-section bg-zinc-950 border-zinc-900 flex flex-col h-full rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-4">
            <Terminal className="w-4 h-4 text-zinc-500" />
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 font-mono">jungbin@infra-ops ~ %</h2>
          </div>
          
          <div ref={terminalContainerRef} className="flex-1 font-mono text-[13px] leading-relaxed overflow-y-auto overflow-x-hidden flex flex-col gap-1.5 scrollbar-hide" onClick={() => document.getElementById("terminal-input")?.focus()}>
            {history.map((line, idx) => (
              <div 
                key={idx} 
                className={`whitespace-pre-wrap ${
                  line.type === "error" ? "text-red-500 font-bold" : 
                  line.type === "system" ? "text-zinc-500 italic" : 
                  line.type === "input" ? "text-emerald-600 font-bold" : 
                  line.type === "folder" ? "text-zinc-900 font-black text-[14px]" : 
                  "text-zinc-900 font-bold"
                }`}
              >
                {line.content}
              </div>
            ))}
            
            <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
              <span className="text-emerald-600 font-bold shrink-0">jungbin@infra-ops ~ %</span>
              <input 
                id="terminal-input"
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoComplete="off"
                spellCheck="false"
                placeholder="명령어를 입력해보세요 (예: ls, cd projects)"
                className="bg-transparent outline-none flex-1 text-zinc-900 font-black font-mono text-[13px] caret-emerald-500 placeholder:text-zinc-400 placeholder:italic placeholder:font-normal"
              />
            </form>
          </div>
        </motion.div>
      </section>

      {/* Core Competencies (Full Width - Stacked Rows) */}
      <section className="mt-6">
        <motion.div variants={fadeInUp} className="md:col-span-3 bg-white border border-zinc-100 rounded-2xl p-8 shadow-sm relative overflow-hidden group hover:border-zinc-200 transition-colors">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-zinc-100 pb-6">
            <div className="flex items-center gap-2">
              <Layers className="w-6 h-6 text-zinc-950" />
              <h3 className="text-2xl font-black text-zinc-950 uppercase tracking-widest">Tech Stack & Core Competencies</h3>
            </div>
          </div>
          
          <div className="flex flex-col gap-12">
            
            {/* 1. Cloud & Hybrid Infrastructure */}
            <div className="flex flex-col md:flex-row gap-6 border-b border-zinc-50 pb-12 last:border-0 last:pb-0">
              <div className="md:w-1/3 shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                    <Cloud className="w-5 h-5 text-blue-500" />
                  </div>
                  <h4 className="font-black text-zinc-950 text-[18px]">Cloud & Hybrid Infrastructure</h4>
                </div>
                <p className="text-[13px] text-zinc-500 font-bold ml-[52px]">다계층 아키텍처 및 트래픽 분산</p>
              </div>
              <div className="md:w-2/3 flex flex-col gap-4">
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">N-Tier Architecture</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">DMZ(Public), Application(Private), Data(Isolated) 서브넷으로 철저하게 분리된 정석적인 다계층(3/4-Tier) 보안 아키텍처 설계</p>
                </div>
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">Container Orchestration</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">Amazon EKS (Managed), K3s (On-Premises)</p>
                </div>
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">CDN & Global Routing</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">Amazon CloudFront, Route 53 기반 글로벌 트래픽 최적화</p>
                </div>
              </div>
            </div>

            {/* 2. Automation & IaC */}
            <div className="flex flex-col md:flex-row gap-6 border-b border-zinc-50 pb-12 last:border-0 last:pb-0">
              <div className="md:w-1/3 shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                    <Terminal className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h4 className="font-black text-zinc-950 text-[18px]">Automation & IaC</h4>
                </div>
                <p className="text-[13px] text-zinc-500 font-bold ml-[52px]">선언적 인프라 및 자동화</p>
              </div>
              <div className="md:w-2/3 flex flex-col gap-4">
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">Infrastructure as Code (IaC)</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">Terraform 기반 클라우드 리소스 프로비저닝, Ansible 서버 구성 관리</p>
                </div>
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">Immutable Infrastructure</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">Docker 컨테이너 이미지 및 클라우드 머신 이미지(AMI) 기반의 불변 인프라스트럭처 배포 환경 운영</p>
                </div>
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">CI/CD Pipeline</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">GitHub Actions, ArgoCD 기반 선언적 배포 및 EC2 Blue/Green 무중단 배포 아키텍처</p>
                </div>
              </div>
            </div>

            {/* 3. Observability & Monitoring */}
            <div className="flex flex-col md:flex-row gap-6 border-b border-zinc-50 pb-12 last:border-0 last:pb-0">
              <div className="md:w-1/3 shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100">
                    <ActivitySquare className="w-5 h-5 text-orange-500" />
                  </div>
                  <h4 className="font-black text-zinc-950 text-[18px]">Observability & Monitoring</h4>
                </div>
                <p className="text-[13px] text-zinc-500 font-bold ml-[52px]">전체 가시성 확보 및 분석</p>
              </div>
              <div className="md:w-2/3 flex flex-col gap-4">
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">Metrics & Dashboards</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">Prometheus, AWS Managed Grafana 기반 인프라 지표 시각화</p>
                </div>
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">Log Analytics</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">Kinesis Data Streams, Fluent Bit, Amazon Athena 실시간 로그 파이프라인</p>
                </div>
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">L7 Traffic Monitoring</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">HAProxy 및 AWS ALB를 활용한 L7 로드밸런싱 트래픽 분석 및 최적화</p>
                </div>
              </div>
            </div>

            {/* 4. Database & Caching */}
            <div className="flex flex-col md:flex-row gap-6 border-b border-zinc-50 pb-12 last:border-0 last:pb-0">
              <div className="md:w-1/3 shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center border border-sky-100">
                    <Database className="w-5 h-5 text-sky-500" />
                  </div>
                  <h4 className="font-black text-zinc-950 text-[18px]">Database & Caching</h4>
                </div>
                <p className="text-[13px] text-zinc-500 font-bold ml-[52px]">데이터 계층 고가용성 설계</p>
              </div>
              <div className="md:w-2/3 flex flex-col gap-4">
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">RDBMS</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">PostgreSQL 기반 Multi-AZ(다중 가용영역) 고가용성 데이터베이스 아키텍처 운영</p>
                </div>
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">Graph Database</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">Neo4j 기반 복잡한 데이터 관계(Relationship) 모델링 및 지식 그래프 쿼리 성능 최적화</p>
                </div>
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">In-Memory Cache</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">Amazon ElastiCache for Valkey 기반 병목 구간 부하 분산</p>
                </div>
              </div>
            </div>

            {/* 5. Security & Compliance */}
            <div className="flex flex-col md:flex-row gap-6 border-b border-zinc-50 pb-12 last:border-0 last:pb-0">
              <div className="md:w-1/3 shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">
                    <Shield className="w-5 h-5 text-purple-500" />
                  </div>
                  <h4 className="font-black text-zinc-950 text-[18px]">Security & Compliance</h4>
                </div>
                <p className="text-[13px] text-zinc-500 font-bold ml-[52px]">보안 내재화 및 망분리 설계</p>
              </div>
              <div className="md:w-2/3 flex flex-col gap-4">
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">Network Security</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">ISMS-P 등 정보보호 컴플라이언스를 고려한 망분리 아키텍처 설계 및 NAT/NACL 기반 프라이빗망 격리</p>
                </div>
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">Identity & Access Management (IAM)</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">최소 권한(Least Privilege) 원칙을 적용한 세분화된 IAM 정책(Policy) 설계 및 역할(Role) 위임 기반의 철저한 인프라 접근 통제 체계 구축</p>
                </div>
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">Data Protection</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">AWS WAF / Shield 기반 L7 방어, ACM/KMS 기반 엔드투엔드 데이터 암호화</p>
                </div>
              </div>
            </div>

            {/* 6. AI & ML Operations */}
            <div className="flex flex-col md:flex-row gap-6 border-b border-zinc-50 pb-12 last:border-0 last:pb-0">
              <div className="md:w-1/3 shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center border border-pink-100">
                    <Cpu className="w-5 h-5 text-pink-500" />
                  </div>
                  <h4 className="font-black text-zinc-950 text-[18px]">AI & ML Operations</h4>
                </div>
                <p className="text-[13px] text-zinc-500 font-bold ml-[52px]">지능형 AIOps 파이프라인</p>
              </div>
              <div className="md:w-2/3 flex flex-col gap-4">
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">AIOps Pipeline</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">사내 모니터링/보안 시스템(Zabbix, Wazuh) API와 연동해 이벤트 데이터를 수집하고, 오픈소스 Qwen 로컬 LLM을 활용하여 장애 근본 원인(RCA)을 자율 분석하는 지능형 파이프라인 구축</p>
                </div>
                <div className="p-5 bg-white border border-zinc-100 rounded-xl shadow-sm hover:border-zinc-200 transition-colors">
                  <span className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-800 text-[11px] font-black rounded-md mb-2.5 tracking-widest uppercase">Anomaly Detection</span>
                  <p className="text-[14px] text-zinc-600 leading-relaxed font-medium">Random Cut Forest (RCF) 기반 비지도 학습 악성 봇(Bot) 탐지 파이프라인 구축 및 WAF 연동 차단</p>
                </div>
              </div>
            </div>

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
