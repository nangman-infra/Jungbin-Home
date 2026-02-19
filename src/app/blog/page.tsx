"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    ArrowRight,
    Clock,
    Cloud,
    Terminal,
    Box,
    Shield,
    Database,
    Server,
    Activity,
    GitPullRequest
} from "lucide-react";

const CategoryIconMap: Record<string, any> = {
    "Cloud (AWS/NCP/GCP)": Cloud,
    "IaC & Automation": Terminal,
    "Container & K8s": Box,
    "Network & Security": Shield,
    "Database (RDBMS/NoSQL)": Database,
    "OS & Server": Server,
    "Monitoring & Logging": Activity,
    "CI/CD & DevOps": GitPullRequest
};

export default function BlogPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="main-wrapper"
        >
            <section className="space-y-4">
                <h1 className="tracking-tighter">Technical Log.</h1>
                <p className="text-lg font-medium text-zinc-500 max-w-xl">
                    인프라 설계와 자동화 과정에서의 기술적 고찰을 기록합니다.
                </p>
            </section>

            {/* Modern Card-style Categories */}
            <section className="grid grid-cols-1 gap-4 mt-12">
                {portfolioData.blogCategories.map((cat) => {
                    const Icon = CategoryIconMap[cat.name] || Terminal;
                    return (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="box-section p-0 overflow-hidden border-zinc-100"
                        >
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value={cat.name} className="border-none">
                                    <AccordionTrigger className="hover:no-underline py-6 px-6 group">
                                        <div className="flex items-center gap-4 text-left w-full overflow-hidden">
                                            <div className="w-10 h-10 bg-zinc-950 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-105 shadow-sm shrink-0">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-base font-black text-zinc-950 mb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">{cat.name}</h3>
                                                <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Total {cat.posts.length} Posts</p>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="bg-zinc-50 border-t border-zinc-100 px-6 py-2">
                                        <div className="space-y-1">
                                            {cat.posts.map(post => (
                                                <div key={post.id} className="group flex items-center justify-between py-4 px-4 rounded-xl hover:bg-white transition-all cursor-pointer">
                                                    <div className="flex-1 min-w-0 pr-4">
                                                        <h4 className="font-bold text-zinc-900 text-[14px] group-hover:text-black whitespace-nowrap overflow-hidden text-ellipsis">
                                                            {post.title}
                                                        </h4>
                                                        <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                            <span className="font-mono text-[9px] font-bold uppercase tracking-tighter">{post.date}</span>
                                                        </div>
                                                    </div>
                                                    <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-zinc-950 transition-all group-hover:translate-x-1 shrink-0" />
                                                </div>
                                            ))}
                                            {cat.posts.length === 0 && (
                                                <p className="py-6 text-zinc-600 text-[11px] font-bold uppercase tracking-widest text-center">In Progress</p>
                                            )}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </motion.div>
                    );
                })}
            </section>
        </motion.div>
    );
}
