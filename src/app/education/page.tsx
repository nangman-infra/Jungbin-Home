"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function EducationPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="main-wrapper"
        >
            <div className="mb-12">
                <h1 className="tracking-tightest whitespace-nowrap overflow-hidden text-ellipsis">
                    Background & Credentials.
                </h1>
            </div>

            <div className="space-y-16">
                {/* 01. EDUCATION */}
                <section className="space-y-6">
                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-950">01. Chronicle</h2>
                        <div className="h-[1px] flex-1 bg-zinc-950/10" />
                    </div>
                    {portfolioData.education.map((edu, idx) => (
                        <div key={idx} className="box-section border border-zinc-100 p-6 md:p-8 space-y-3 bg-white/50 hover:border-zinc-200 transition-all">
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                                <h3 className="text-base font-black text-zinc-950 whitespace-nowrap overflow-hidden text-ellipsis">{edu.school}</h3>
                                <div className="hidden md:block h-[1px] flex-1 bg-zinc-50 mx-4" />
                                <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest whitespace-nowrap shrink-0">{edu.period}</span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[13px] text-zinc-600 font-bold">{edu.degree}</p>
                                <p className="text-[12px] text-zinc-400 max-w-none line-clamp-1">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* 02. CERTIFICATES */}
                <section className="space-y-6">
                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-950">02. Credentials</h2>
                        <div className="h-[1px] flex-1 bg-zinc-950/10" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {portfolioData.certificates.map((cert, idx) => (
                            <div key={idx} className="box-section border border-zinc-100 p-6 md:p-8 hover:border-zinc-200 hover:scale-[1.01] bg-white transition-all">
                                <div className="space-y-1">
                                    <span className="font-mono text-[9px] font-black text-zinc-400 uppercase tracking-widest">{cert.issuer}</span>
                                    <h3 className="text-[15px] font-black text-zinc-950 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">{cert.title}</h3>
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <span className="font-mono text-[10px] font-bold text-zinc-400">{cert.date}</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </motion.div>
    );
}
