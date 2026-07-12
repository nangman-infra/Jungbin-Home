"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowLeft, Server, Combine, Download, FileText, CheckCircle2, LayoutTemplate, Target, Layers } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const project = portfolioData.projects.find(p => p.id.toString() === resolvedParams.id);

    if (!project) {
        return notFound();
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="main-wrapper max-w-4xl mx-auto pb-24"
        >
            {/* Top Nav */}
            <Link href="/projects" className="inline-flex items-center gap-2 text-[12px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors mb-12">
                <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>

            {/* Header Section */}
            <header className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-zinc-50 shadow-sm border border-zinc-200 rounded-2xl flex items-center justify-center text-zinc-900">
                        {project.tag === "Team" ? <Combine className="w-7 h-7" /> : <Server className="w-7 h-7" />}
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block">{project.category}</span>
                            <span className="text-[10px] font-bold text-zinc-400 bg-zinc-100/50 px-2 py-0.5 rounded-md border border-zinc-100">{(project as any).period}</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                               {project.title}
                           </h1>
                           {(project as any).status === "In Progress" && (
                               <span className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-200 text-[11px] font-black uppercase tracking-wider rounded-full shadow-sm hidden md:inline-block">
                                   In Progress
                               </span>
                           )}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                    {project.tech.map(t => (
                        <span key={t} className="text-[10px] font-black text-zinc-700 uppercase bg-zinc-100/50 border border-zinc-200 px-3 py-1.5 rounded-md shadow-sm">
                            {t}
                        </span>
                    ))}
                </div>
            </header>

            {/* Architecture Image Placeholder (Only if exists) */}
            {(project as any).hasArchitecture && (
                <div className="w-full mb-16 flex flex-col items-center justify-center min-h-[400px] text-center relative overflow-hidden group">
                    {(project as any).images && (project as any).images.length > 0 ? (
                        <div className="flex flex-col gap-6 w-full">
                            <img src={(project as any).images[0]} alt={`${project.title} Architecture Diagram`} className="relative z-10 w-full object-contain rounded-xl shadow-md border border-zinc-200 bg-white" />
                        </div>
                    ) : (project as any).image ? (
                        <img src={(project as any).image} alt={`${project.title} Architecture Diagram`} className="relative z-10 w-full object-contain rounded-xl shadow-md border border-zinc-200 bg-white" />
                    ) : (
                        <div className="w-full bg-zinc-50 border border-zinc-200 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[400px] relative">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                            <LayoutTemplate className="w-12 h-12 text-zinc-300 mb-4 relative z-10" />
                            <h3 className="text-lg font-black text-zinc-400 relative z-10">Architecture Diagram</h3>
                            <p className="text-[13px] text-zinc-400 mt-2 relative z-10">실제 아키텍처 다이어그램 이미지가 들어갈 영역입니다.</p>
                        </div>
                    )}
                </div>
            )}

            {/* Project Details */}
            <div className="prose prose-zinc max-w-none mb-16">
                {/* Overview */}
                <h2 className="text-xl font-black text-zinc-900 mb-6 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-zinc-600" /> Project Overview
                </h2>
                <p className="text-[15px] text-zinc-600 font-medium leading-loose whitespace-pre-wrap mb-10">
                    {project.desc}
                </p>

                {/* Background / Problem */}
                <h2 className="text-xl font-black text-zinc-900 mb-6 flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" /> Background & Problem
                </h2>
                <p className="text-[15px] text-zinc-600 font-medium leading-loose whitespace-pre-wrap mb-10">
                    {(project as any).background}
                </p>

                {/* Architecture / Approach */}
                <h2 className="text-xl font-black text-zinc-900 mb-6 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-violet-600" /> Architecture & Approach
                </h2>
                <ul className="space-y-4 mb-8">
                    {Array.isArray((project as any).architecture) ? (project as any).architecture.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-[14px] text-zinc-600 font-medium leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 shrink-0"></div>
                            <span>{item}</span>
                        </li>
                    )) : (
                        <li className="flex items-start gap-3 text-[14px] text-zinc-600 font-medium leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 shrink-0"></div>
                            <span>{(project as any).architecture}</span>
                        </li>
                    )}
                </ul>

                {/* Detail Images Toggle */}
                {(project as any).images && (project as any).images.length > 1 && (
                    <details className="group border border-zinc-200 rounded-xl bg-white overflow-hidden mb-10 shadow-sm">
                        <summary className="flex items-center justify-between p-4 font-bold text-zinc-800 cursor-pointer bg-zinc-50/50 hover:bg-zinc-50 transition-colors list-none">
                            <span className="flex items-center gap-2">
                                <FileText className="w-4 h-4 text-blue-600" />
                                <span>상세 구현 자료 (슬라이드) 보기</span>
                            </span>
                            <span className="text-zinc-400 group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <div className="p-4 flex flex-col gap-6 bg-zinc-50/30 border-t border-zinc-100">
                            {(project as any).images.slice(1).map((imgSrc: string, idx: number) => (
                                <img key={idx} src={imgSrc} alt={`${project.title} Detail Slide ${idx + 1}`} className="w-full object-contain rounded-xl shadow-sm border border-zinc-200 bg-white" />
                            ))}
                        </div>
                    </details>
                )}
                
                {/* Outcomes / KPI */}
                <h2 className="text-xl font-black text-zinc-900 mb-6 mt-12 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Key Outcomes
                </h2>
                <ul className="space-y-4">
                    {(project as any).outcomes ? (project as any).outcomes.map((outcome: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-[14px] text-zinc-600 font-medium leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                            <span>{outcome}</span>
                        </li>
                    )) : (
                        <li className="flex items-start gap-3 text-[14px] text-zinc-600 font-medium leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                            <span>관련 성과가 업데이트될 예정입니다.</span>
                        </li>
                    )}
                </ul>
            </div>


        </motion.div>
    );
}
