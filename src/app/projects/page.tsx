"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {
    ArrowUpRight,
    Users,
    User as UserIcon
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="main-wrapper"
        >
            <section className="space-y-4">
                <h1 className="text-3xl font-black text-slate-900">Projects</h1>
                <p className="text-sm text-slate-500 font-medium max-w-xl">
                    인프라 설계 및 자동화 실습을 통해 수행한 도전의 기록입니다.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                {portfolioData.projects.map((project) => (
                    <div
                        key={project.id}
                        className="box-section group flex flex-col h-full bg-white transition-all border-zinc-100"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-400 group-hover:text-zinc-950 group-hover:bg-zinc-100 transition-all">
                                    {project.tag === "Team" ? <Users className="w-4 h-4" /> : <UserIcon className="w-4 h-4" />}
                                </div>
                                <span className="text-[10px] font-black text-zinc-800 uppercase tracking-widest">{project.tag}</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-zinc-200 group-hover:text-zinc-950 transition-colors" />
                        </div>

                        <div className="space-y-3 flex-1">
                            <h3 className="text-lg font-black text-zinc-950 leading-tight group-hover:underline decoration-zinc-100 decoration-2 underline-offset-4 transition-all">
                                {project.title}
                            </h3>
                            <p className="text-[13px] text-zinc-500 font-medium leading-relaxed">
                                {project.desc}
                            </p>
                        </div>

                        <div className="mt-8 pt-4 border-t border-zinc-50 flex flex-wrap gap-1.5">
                            {project.tech.map(t => (
                                <span key={t} className="text-[9px] font-black text-zinc-500 uppercase bg-zinc-50 px-2 py-0.5 rounded transition-colors group-hover:text-zinc-950">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </motion.div>
    );
}
