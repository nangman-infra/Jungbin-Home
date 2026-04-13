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
    FolderGit2
} from "lucide-react";

const CategoryIconMap: Record<string, any> = {
    "Cloud Architecture": Cloud,
    "IaC & Automation": Terminal,
    "Container Orchestration": Box,
    "Network": Network,
    "Security": Shield,
    "Database": Database,
    "OS & Systems": Server,
    "Observability": Activity,
    "DevOps & CI/CD": GitPullRequest
};

export default function BlogPage() {
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
            </section>

            {/* 4-Column Compact Grid */}
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {portfolioData.blogCategories.map((cat, idx) => {
                    const Icon = CategoryIconMap[cat.name] || FolderGit2;
                    return (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group box-section p-5 flex flex-col items-center justify-center text-center h-[140px] bg-white border border-zinc-100 rounded-3xl hover:border-zinc-300 hover:shadow-md transition-all cursor-pointer"
                        >
                            <div className="w-12 h-12 bg-zinc-50 group-hover:bg-zinc-950 rounded-2xl flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors duration-300 mb-4 shadow-sm">
                                <Icon className="w-6 h-6" />
                            </div>
                            
                            <h3 className="text-[13px] font-black text-zinc-950 mb-1 leading-tight">{cat.name}</h3>
                            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mt-1">
                                {cat.posts.length} Posts
                            </span>
                        </motion.div>
                    );
                })}
            </section>
        </motion.div>
    );
}
