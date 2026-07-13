"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, ShieldCheck } from "lucide-react";

export default function EducationPage() {
    const educationItems = portfolioData.education.map((edu) => ({
        ...edu,
        id: `${edu.school}-${edu.period}`,
    }));
    const certificateItems = portfolioData.certificates.map((cert) => ({
        ...cert,
        id: `${cert.issuer}-${cert.title}-${cert.date}`,
    }));

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
                <div className="flex flex-col gap-12">
                    {educationItems.map((edu) => (
                        <div key={edu.id} className="box-section border border-zinc-200 p-8 md:p-10 space-y-6 bg-white shadow-sm hover:shadow-md transition-all rounded-3xl relative overflow-hidden">
                            {/* Subtle top color bar to make it look like a distinct card/panel */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500" />
                            
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-zinc-100 pb-4 pt-2">
                                <h3 className="text-xl font-black text-zinc-950 whitespace-nowrap overflow-hidden text-ellipsis">{edu.school}</h3>
                                <div className="hidden md:block h-[1px] flex-1 bg-zinc-100 mx-4" />
                                <span className="font-mono text-[12px] font-bold text-zinc-500 uppercase tracking-widest whitespace-nowrap shrink-0 bg-zinc-50 px-3 py-1.5 rounded-full">{edu.period}</span>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[17px] text-zinc-900 font-black">{edu.degree}</p>
                                {edu.description && (
                                    <p className="text-[15px] text-zinc-600 max-w-3xl leading-relaxed whitespace-pre-line">{edu.description}</p>
                                )}
                                {(edu as unknown as { link?: string }).link && (
                                    <a href={(edu as unknown as { link?: string }).link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[13px] font-bold text-blue-600 hover:text-blue-700 hover:underline transition-all mt-2">
                                        👉 Nangman 인프라 바로가기
                                    </a>
                                )}
                            </div>
                            {edu.curriculum && (
                                <div className="mt-8 border-l-2 border-zinc-100 ml-2 pl-6 space-y-4">
                                    {edu.curriculum.map((item, idx) => (
                                        <div key={idx} className="relative">
                                            <div className="absolute -left-[31px] top-5 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-white" />
                                            <div className="bg-white border border-zinc-100 p-5 rounded-2xl shadow-sm hover:border-emerald-200 transition-colors">
                                                <h4 className="text-[15px] font-black text-zinc-800">
                                                    <span className="text-emerald-600 mr-2">{item.week}</span>
                                                    {item.title}
                                                </h4>
                                                <p className="text-[14px] text-zinc-600 mt-2 leading-relaxed break-keep">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
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
                    {certificateItems.map((cert) => (
                        <div key={cert.id} className="box-section border border-zinc-100 p-8 hover:border-zinc-200 hover:scale-[1.02] bg-white transition-all shadow-sm rounded-3xl">
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
