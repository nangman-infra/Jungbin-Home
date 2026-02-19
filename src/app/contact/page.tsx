"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="main-wrapper max-w-xl"
        >
            <section className="space-y-12">
                <div className="space-y-4">
                    <h1 className="text-3xl font-black text-zinc-950 tracking-tighter">Connect</h1>
                    <p className="text-[15px] text-zinc-500 font-medium leading-relaxed">
                        새로운 도전과 협업에 언제나 열려 있습니다. <br />
                        아래 채널을 통해 언제든 연락 부탁드립니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 border-t border-slate-50 pt-10">
                    <div className="group flex items-center justify-between py-4 border-b border-zinc-50">
                        <span className="text-xs font-black text-zinc-800 uppercase tracking-widest">Email</span>
                        <a href={`mailto:${portfolioData.email}`} className="text-[15px] font-bold text-zinc-950 hover:underline decoration-zinc-100 decoration-2 underline-offset-4 transition-all flex items-center gap-1.5">
                            {portfolioData.email} <ArrowUpRight className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100" />
                        </a>
                    </div>

                    <div className="group flex items-center justify-between py-4 border-b border-zinc-50">
                        <span className="text-xs font-black text-zinc-800 uppercase tracking-widest">LinkedIn</span>
                        <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="text-[15px] font-bold text-zinc-950 hover:underline decoration-zinc-100 decoration-2 underline-offset-4 transition-all flex items-center gap-1.5">
                            유정빈 (Jeongbin Ryu) <ArrowUpRight className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100" />
                        </a>
                    </div>

                    <div className="group flex items-center justify-between py-4 border-b border-zinc-50">
                        <span className="text-xs font-black text-zinc-800 uppercase tracking-widest">GitHub</span>
                        <a href={portfolioData.github} target="_blank" rel="noreferrer" className="text-[15px] font-bold text-zinc-950 hover:underline decoration-zinc-100 decoration-2 underline-offset-4 transition-all flex items-center gap-1.5">
                            Jungbin7 <ArrowUpRight className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100" />
                        </a>
                    </div>

                    <div className="group flex items-center justify-between py-4 border-b border-zinc-50">
                        <span className="text-xs font-black text-zinc-800 uppercase tracking-widest">Location</span>
                        <span className="text-[15px] font-bold text-zinc-950">Seoul, South Korea</span>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
