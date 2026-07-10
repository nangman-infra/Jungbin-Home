"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {
    Terminal,
    Box,
    Shield,
    Database,
    Server,
    Activity,
    GitPullRequest,
    Network,
    Cloud,
    FolderGit2,
    ExternalLink,
    ChevronDown,
    ChevronUp,
    type LucideIcon
} from "lucide-react";
import { useState } from "react";

const CategoryIconMap: Record<string, LucideIcon> = {
    "Cloud Architecture": Cloud,
    "IaC & Automation": Terminal,
    "Container & Virtualization": Box,
    "Container Orchestration": Box,
    "Network": Network,
    "Security": Shield,
    "Database": Database,
    "OS & Systems": Server,
    "Observability": Activity,
    "DevOps & CI/CD": GitPullRequest
};

export default function BlogPage() {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="main-wrapper"
        >
            <section className="space-y-4 mb-16">
                <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Technical Log.</h1>
                <p className="text-sm font-medium text-zinc-500 max-w-xl">
                    인프라 설계와 자동화 과정에서의 기술적 고찰을 기록합니다.
                </p>
                <div className="pt-4 flex gap-4">
                    <a href="https://velog.io/@jungbin99/posts" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-50 text-emerald-600 rounded-xl font-bold text-sm hover:bg-emerald-100 transition-colors">
                        Go to Velog <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </section>

            <section className="space-y-6">
                {portfolioData.blogCategories.map((cat, idx) => {
                    const Icon = CategoryIconMap[cat.name] || FolderGit2;
                    const isExpanded = expandedCategory === cat.name;

                    return (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="box-section border border-zinc-100 bg-white rounded-3xl overflow-hidden shadow-sm"
                        >
                            <div 
                                className="p-6 flex items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors"
                                onClick={() => setExpandedCategory(isExpanded ? null : cat.name)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-500">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-[16px] font-black text-zinc-950 mb-1">{cat.name}</h3>
                                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{cat.posts.length} Posts</span>
                                    </div>
                                </div>
                                <div className="text-zinc-400 mr-2">
                                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </div>
                            </div>
                            
                            {isExpanded && (
                                <div className="px-6 pb-6 pt-2 border-t border-zinc-50">
                                    <div className="space-y-3">
                                        {cat.posts.map(post => (
                                            <a 
                                                key={post.id} 
                                                href={post.url || "https://velog.io/@jungbin99"} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="group flex items-center justify-between p-4 bg-zinc-50 hover:bg-zinc-100 rounded-2xl transition-colors"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                    <span className="text-[15px] font-bold text-zinc-800">{post.title}</span>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[11px] font-mono font-bold text-zinc-400">{post.date}</span>
                                                    <ExternalLink className="w-4 h-4 text-zinc-300 group-hover:text-emerald-500 transition-colors" />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </section>
        </motion.div>
    );
}
