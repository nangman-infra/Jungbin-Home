"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Server, Combine, LayoutTemplate, ArrowRight, FileText, Globe } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="main-wrapper"
        >
            <section className="space-y-4 mb-16">
                <div className="inline-flex items-center gap-2 bg-zinc-100 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.25em] text-zinc-800 mb-2">
                    <LayoutTemplate className="w-3 h-3" /> Architecture Labs
                </div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Infrastructure Blueprints.</h1>
                <p className="text-sm text-slate-500 font-medium max-w-xl leading-relaxed">
                    실제 환경에 적용 가능하도록 설계된 고가용성 및 자동화 인프라 구성 사례들입니다.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioData.projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="box-section border border-zinc-200 group flex flex-col p-8 overflow-hidden bg-white hover:border-zinc-300 transition-all shadow-sm rounded-2xl relative"
                    >
                        {/* Header: Icon & Status */}
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 bg-zinc-50 shadow-sm border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-900">
                                {project.tag === "Team" ? <Combine className="w-6 h-6" /> : <Server className="w-6 h-6" />}
                            </div>
                            {(project as any).status === "In Progress" && (
                                <span className="px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-200 text-[10px] font-black uppercase tracking-wider rounded-full flex items-center gap-1.5 shadow-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    In Progress
                                </span>
                            )}
                        </div>
                        
                        {/* Title & Category */}
                        <div className="mb-6 flex-1">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{project.category}</span>
                                <span className="text-[10px] font-bold text-zinc-400 bg-zinc-50 px-2 py-0.5 rounded-md border border-zinc-100">{(project as any).period}</span>
                            </div>
                            <h3 className="text-xl font-black text-zinc-900 leading-snug group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h3>
                        </div>

                        {/* Description (Short & Punchy) */}
                        <p className="text-[14px] text-zinc-500 font-medium leading-relaxed mb-8">
                            {(project as any).shortDesc}
                        </p>

                        {/* Tech Stack (Core only) */}
                        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                            {((project as any).coreTech || project.tech).map((t: string) => (
                                <span key={t} className="text-[9.5px] font-black text-zinc-600 uppercase bg-zinc-50 border border-zinc-200 px-2.5 py-1.5 rounded-md shadow-sm">
                                    {t}
                                </span>
                            ))}
                        </div>
                        
                        <div className="w-full h-px bg-zinc-100 mb-6"></div>

                        <div className="flex items-center gap-4 w-full mt-4">
                            {/* Link Button */}
                            <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-[13px] font-black text-zinc-900 hover:text-blue-600 transition-colors w-fit">
                                View Details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>

                            {/* PDF Button (if exists) */}
                            {(project as any).pdfUrl && (
                                <a 
                                    href={(project as any).pdfUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-[12px] font-bold text-white bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-lg transition-colors ml-auto"
                                >
                                    <FileText className="w-3.5 h-3.5" /> PDF 보기
                                </a>
                            )}

                            {/* Live Demo Button (if exists) */}
                            {(project as any).demoUrl && (
                                <a 
                                    href={(project as any).demoUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-[12px] font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg transition-colors ml-auto"
                                >
                                    <Globe className="w-3.5 h-3.5" /> 라이브 서비스 보기
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </section>
        </motion.div>
    );
}
