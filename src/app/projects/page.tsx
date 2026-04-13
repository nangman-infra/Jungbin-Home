"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Server, Combine, Users, LayoutTemplate, ArrowRight } from "lucide-react";

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

            <section className="space-y-8">
                {portfolioData.projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="box-section border border-zinc-200 group flex flex-col lg:flex-row gap-6 p-0 overflow-hidden bg-white hover:border-zinc-300 transition-all shadow-sm"
                    >
                        {/* Left Panel: Aesthetic Typography & Stack */}
                        <div className="lg:w-1/3 bg-zinc-50 border-b border-zinc-200 lg:border-b-0 lg:border-r border-zinc-200 p-8 flex flex-col justify-between">
                           <div>
                              <div className="w-10 h-10 bg-white shadow-sm border border-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 mb-6">
                                 {project.tag === "Team" ? <Combine className="w-5 h-5" /> : <Server className="w-5 h-5" />}
                              </div>
                              <h3 className="text-2xl font-black text-zinc-950 leading-tight mb-2">
                                  {project.title}
                              </h3>
                              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{project.category}</span>
                           </div>
                           
                           <div className="mt-12 flex flex-wrap gap-2">
                               {project.tech.map(t => (
                                   <span key={t} className="text-[9px] font-black text-zinc-600 uppercase border border-zinc-200 bg-white px-2.5 py-1 rounded-sm shadow-sm">
                                       {t}
                                   </span>
                               ))}
                           </div>
                        </div>

                        {/* Right Panel: Content Details */}
                        <div className="lg:w-2/3 p-8 flex flex-col">
                            <div className="flex items-center gap-2 mb-6 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Arch. Summary
                            </div>
                            
                            <p className="text-[14px] text-zinc-600 font-medium leading-relaxed mb-8 flex-1">
                                {project.desc}
                            </p>

                            <div className="w-full h-px bg-zinc-100 my-6"></div>

                            <button className="flex items-center gap-2 text-xs font-black text-zinc-900 hover:text-blue-600 transition-colors w-fit border border-zinc-200 rounded-lg px-4 py-2 hover:bg-zinc-50">
                                View Architecture Spec <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </section>
        </motion.div>
    );
}
