"use client";

import { motion, type Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, ChevronRight, Users, User as UserIcon, ArrowUpRight } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="main-wrapper"
    >
      {/* Hero Section */}
      <section className="space-y-6 mb-12">
        <motion.div variants={fadeInUp} className="space-y-2">
          <Badge className="bg-zinc-950 text-white border-none px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.25em] inline-flex mb-4">
            Cloud Architect
          </Badge>
          <h1 className="tracking-tightest break-keep whitespace-nowrap overflow-hidden">
            인프라 아키텍처의 가치를 설계합니다.
          </h1>
          <p className="text-lg font-bold text-zinc-400 tracking-tight">
            {portfolioData.tagline}
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-4">
          <Link href="/projects" className="px-6 py-2.5 bg-zinc-950 text-white rounded-xl text-xs font-black transition-all hover:scale-[1.02] flex items-center gap-2 shadow-sm">
            Selected Work <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a href={`mailto:${portfolioData.email}`} className="px-6 py-2.5 bg-white border border-zinc-100 text-zinc-950 rounded-xl text-xs font-black hover:border-zinc-300 transition-all flex items-center gap-2">
            Get in touch
          </a>
        </motion.div>
      </section>

      {/* Metrics Section */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-24">
        {portfolioData.metrics.map((metric, idx) => (
          <motion.div key={idx} variants={fadeInUp} className="box-section p-6 flex flex-col justify-between h-36">
            <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em]">{metric.label}</span>
            <div className="space-y-0.5">
              <span className="text-lg font-black text-zinc-950 block whitespace-nowrap">{metric.value}</span>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter whitespace-nowrap">{metric.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Featured Projects Highlight */}
      <section className="space-y-4 pt-16">
        <div className="flex items-center gap-4">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-300">Selected Work</h2>
          <div className="h-[1px] flex-1 bg-zinc-50" />
          <Link href="/projects" className="text-[10px] font-black text-zinc-400 hover:text-zinc-950 transition-colors flex items-center gap-1 uppercase tracking-widest">
            View All <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        {/* Grid with Small Professional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioData.projects.slice(0, 2).map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="group box-section flex flex-col h-full bg-white transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-400 group-hover:text-zinc-950 group-hover:bg-zinc-100 transition-all shrink-0">
                    {project.tag === "Team" ? <Users className="w-4 h-4" /> : <UserIcon className="w-4 h-4" />}
                  </div>
                  <span className="text-[9px] font-black text-zinc-300 uppercase tracking-[0.2em]">{project.tag}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-100 group-hover:text-zinc-950 transition-colors" />
              </div>

              <div className="space-y-1 flex-1 min-w-0">
                <h3 className="text-base font-black text-zinc-950 leading-tight group-hover:underline decoration-zinc-100 decoration-2 underline-offset-4 transition-all whitespace-nowrap overflow-hidden text-ellipsis">
                  {project.title}
                </h3>
                <p className="text-[12px] text-zinc-400 font-medium leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
                  {project.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-50 flex flex-nowrap gap-2 overflow-x-auto no-scrollbar">
                {project.tech.map(t => (
                  <span key={t} className="text-[9px] font-black text-zinc-300 uppercase bg-zinc-50 px-2 py-0.5 rounded shrink-0">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-24 py-8 border-t border-zinc-50 flex justify-between items-center opacity-30 hover:opacity-100 transition-opacity">
        <p className="text-[9px] font-black uppercase tracking-[0.3em]">Infrastructure Systems</p>
        <p className="text-[9px] font-black uppercase tracking-[0.3em]">© 2026 RYU JEONGBIN</p>
      </footer>
    </motion.div>
  );
}
