"use client";

import { motion, type Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Terminal, ActivitySquare, Database, Cloud, GitCommit, GitPullRequest, Workflow, ShieldCheck, Globe, MoveRight, Layers } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useState, useEffect } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const terminalBlueprint = `> RyuJungbin.Initialize()...\n> Loading Architecture Blueprint: [SUCCESS]\n> Syncing Infrastructure Skills:\n  - AWS / Multi-AZ Config\n  - Terraform / IaC Automation\n  - Kubernetes / Auto-healing\n> Establishing Zero-Trust Policies...\n> Status: READY FOR CHALLENGES`;

export default function Home() {
  const { t, lang, setLang } = useI18n();

  const [terminalText, setTerminalText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTerminalText(terminalBlueprint.slice(0, i));
      i++;
      if (i > terminalBlueprint.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: "AWS Architecture", proficiency: "95%", icon: Cloud },
    { name: "Terraform Automation", proficiency: "88%", icon: Terminal },
    { name: "K8s Orchestration", proficiency: "90%", icon: Database }
  ];
  const skillMetrics = skills.map((skill) => ({
    ...skill,
    id: skill.name.toLowerCase().replace(/\s+/g, "-"),
  }));

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="main-wrapper relative max-w-4xl"
    >
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

      <section className="space-y-6 mb-12 pt-6">
        <motion.div variants={fadeInUp} className="space-y-2">
          <Badge className="bg-zinc-950 text-white border-none px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.25em] inline-flex mb-4">
            Infrastructure Engineer
          </Badge>
          <h1 className="tracking-tighter break-keep whitespace-nowrap overflow-hidden text-4xl md:text-5xl font-black text-zinc-950">
            {lang === 'ko' ? '유정빈' : 'Ryu Jungbin'}
          </h1>
          <p className="text-lg font-bold text-zinc-500 tracking-tight max-w-2xl mt-4 leading-relaxed">
            {t(
              "My mission is to build foundations that teams can aggressively scale on, ensuring reliability at every node and network edge.",
              "저의 임무는 다목적 팀이 안정적으로 시스템을 확장할 수 있도록, 모든 노드와 네트워크의 신뢰성을 보장하는 기반을 구축하는 것입니다."
            )}
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-4">
          <Link href="/projects" className="px-6 py-2.5 bg-zinc-950 text-white rounded-xl text-xs font-black transition-all hover:scale-[1.02] flex items-center gap-2 shadow-sm">
            {t("View Projects", "프로젝트 보기")} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a href={`mailto:${portfolioData.email}`} className="px-6 py-2.5 bg-white border border-zinc-200 text-zinc-950 rounded-xl text-xs font-black hover:border-zinc-300 transition-all flex items-center gap-2 shadow-sm">
            {t("Get in touch", "문의하기")}
          </a>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
        <motion.div variants={fadeInUp} className="box-section flex flex-col h-full bg-white relative overflow-hidden p-6 border border-zinc-100 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <ActivitySquare className="w-4 h-4 text-zinc-950" />
              <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-950">Skill Capacity</h2>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500">Live</span>
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
          
          <div className="flex-1 font-mono text-[12px] leading-highlight text-zinc-300 whitespace-pre-wrap">
            {terminalText}
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-3 bg-zinc-300 align-middle ml-1"
            />
          </div>
        </motion.div>
      </section>

      {/* NEW SECTION: VISUAL INFOGRAPHICS (Replacing text sections) */}
      <section className="space-y-6 pt-16">
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-300">{t("Infrastructure Topologies", "인프라 인포그래픽")}</h2>
          <div className="h-[1px] flex-1 bg-zinc-200" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          
          {/* Infographic 1: High Availability Architecture */}
          <motion.div variants={fadeInUp} className="box-section p-8 bg-white border border-zinc-100 rounded-2xl shadow-sm text-center">
             <div className="flex items-center justify-between mb-8">
               <h3 className="text-[13px] font-black text-zinc-950 uppercase tracking-widest flex items-center gap-2">
                 <Layers className="w-4 h-4 text-zinc-400" /> High Availability Design
               </h3>
               <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-50 px-2 py-1 rounded">Multi-AZ Setup</span>
             </div>

             {/* CSS Flowchart */}
             <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mx-auto w-full pb-4">
                
                {/* Traffic Source */}
                <div className="flex flex-col items-center">
                   <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-200 shadow-sm relative z-10">
                      <Globe className="w-5 h-5 text-blue-500" />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mt-3">Route 53</span>
                </div>

                <MoveRight className="hidden md:block w-5 h-5 text-zinc-300" />

                {/* Load Balancer */}
                <div className="flex flex-col items-center">
                   <div className="px-6 py-3 bg-zinc-950 rounded-xl flex items-center justify-center border border-zinc-800 shadow-lg relative z-10">
                      <Workflow className="w-5 h-5 text-white mr-2" />
                      <span className="text-xs font-black text-white tracking-widest">ALB</span>
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mt-3">Distribution</span>
                </div>

                <div className="hidden md:flex flex-col gap-6 justify-center text-zinc-300 px-2 relative">
                   {/* Visual lines for splitting traffic */}
                   <svg width="40" height="80" className="absolute left-0">
                      <path d="M0,40 L20,40 L20,10 L40,10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]" />
                      <path d="M0,40 L20,40 L20,70 L40,70" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]" />
                   </svg>
                   <div className="w-10" />
                </div>

                {/* Availability Zones */}
                <div className="flex flex-col gap-4 relative z-10">
                    <div className="px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-xl flex items-center gap-4 shadow-sm w-48 text-left">
                       <Database className="w-5 h-5 text-emerald-500" />
                       <div>
                          <p className="text-[10px] font-bold text-zinc-400 tracking-widest">ap-northeast-2a</p>
                          <p className="text-xs font-black text-zinc-950 mt-0.5">EKS / K3s Node</p>
                       </div>
                    </div>
                    <div className="px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-xl flex items-center gap-4 shadow-sm w-48 text-left">
                       <Database className="w-5 h-5 text-emerald-500" />
                       <div>
                          <p className="text-[10px] font-bold text-zinc-400 tracking-widest">ap-northeast-2c</p>
                          <p className="text-xs font-black text-zinc-950 mt-0.5">EKS / K3s Node</p>
                       </div>
                    </div>
                </div>

             </div>
          </motion.div>

          {/* Infographic 2: CI/CD Pipeline Flow */}
          <motion.div variants={fadeInUp} className="box-section p-8 bg-zinc-950 border border-zinc-900 rounded-2xl shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Workflow className="w-48 h-48 text-white" />
            </div>
            <div className="flex items-center justify-between mb-8 relative z-10">
               <h3 className="text-[13px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                 <GitPullRequest className="w-4 h-4 text-emerald-500" /> CI/CD Automation Pipeline
               </h3>
             </div>

             <div className="flex flex-col md:flex-row items-center gap-3 relative z-10">
                 {/* Step 1 */}
                 <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col items-center justify-center min-w-[120px]">
                    <GitCommit className="w-5 h-5 text-white mb-2" />
                    <span className="text-[10px] font-bold tracking-widest text-zinc-400">1. Commit</span>
                 </div>
                 <ArrowRight className="w-4 h-4 text-zinc-700 hidden md:block" />
                 
                 {/* Step 2 */}
                 <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col items-center justify-center min-w-[120px]">
                    <ActivitySquare className="w-5 h-5 text-blue-400 mb-2" />
                    <span className="text-[10px] font-bold tracking-widest text-zinc-400">2. Testing</span>
                 </div>
                 <ArrowRight className="w-4 h-4 text-zinc-700 hidden md:block" />

                 {/* Step 3 */}
                 <div className="flex-1 bg-zinc-900 border border-emerald-900 rounded-xl p-4 flex flex-col items-center justify-center min-w-[120px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-emerald-500/10 animate-pulse" />
                    <ShieldCheck className="w-5 h-5 text-emerald-500 mb-2 relative z-10" />
                    <span className="text-[10px] font-bold tracking-widest text-emerald-400 relative z-10">3. Apply (GitOps)</span>
                 </div>
             </div>
          </motion.div>
          
        </div>
      </section>

      <footer className="mt-24 py-8 border-t border-zinc-100 flex justify-between items-center opacity-40 hover:opacity-100 transition-opacity">
        <p className="text-[9px] font-black uppercase tracking-[0.3em]">Infrastructure Systems</p>
        <p className="text-[9px] font-black uppercase tracking-[0.3em]">© 2026 {lang === 'ko' ? '유정빈' : 'RYU JUNGBIN'}</p>
      </footer>

      {/* Global CSS for custom animations inside React component */}
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes dash {
          to { stroke-dashoffset: -8; }
        }
      `}} />

    </motion.div>
  );
}
