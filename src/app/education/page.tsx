"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, ShieldCheck } from "lucide-react";

export default function EducationPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="main-wrapper max-w-4xl"
        >
            <div className="mb-16">
                <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
                    Background & Credentials.
                </h1>
                <p className="text-sm text-slate-500 font-medium max-w-xl leading-relaxed">
                    엔지니어로서의 학술 교육 이력 및 획득한 글로벌 공인 자격증 증명서입니다.
                </p>
            </div>

            {/* 01. EDUCATION */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                    <GraduationCap className="w-5 h-5 text-zinc-900" />
                    <h2 className="text-[12px] font-black uppercase tracking-[0.3em] text-zinc-950">Academic Background</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {portfolioData.education.map((edu, idx) => (
                        <div key={idx} className="box-section border border-zinc-100 p-8 space-y-4 bg-white hover:border-zinc-200 transition-all rounded-3xl">
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-zinc-100 pb-4">
                                <h3 className="text-lg font-black text-zinc-950 whitespace-nowrap overflow-hidden text-ellipsis">{edu.school}</h3>
                                <div className="hidden md:block h-[1px] flex-1 bg-white mx-4" />
                                <span className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-widest whitespace-nowrap shrink-0">{edu.period}</span>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[14px] text-zinc-900 font-bold">{edu.degree}</p>
                                <p className="text-[12px] text-zinc-500 max-w-2xl leading-relaxed">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* DECREASED SPACER FOR AT-A-GLANCE VIEW */}
            <div className="h-16" />

            {/* 02. CERTIFICATES */}
            <section className="space-y-6 mb-24">
                <div className="flex items-center gap-3 mb-8">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <h2 className="text-[12px] font-black uppercase tracking-[0.3em] text-zinc-950">Certified Licenses</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {portfolioData.certificates.map((cert, idx) => (
                        <div key={idx} className="box-section border border-zinc-100 p-8 hover:border-zinc-200 hover:scale-[1.02] bg-white transition-all shadow-sm rounded-3xl">
                            <div className="space-y-2">
                                <span className="font-mono text-[10px] font-black text-zinc-400 uppercase tracking-widest bg-zinc-50 px-2 py-1 rounded inline-block">{cert.issuer}</span>
                                <h3 className="text-[16px] font-black text-zinc-950 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">{cert.title}</h3>
                            </div>
                            <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-4">
                                <span className="font-mono text-[11px] font-bold text-zinc-400">Acquired: {cert.date}</span>
                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
}
