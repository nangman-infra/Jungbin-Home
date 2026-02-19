"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    User,
    GraduationCap,
    Briefcase,
    BookOpen,
    Mail,
    Linkedin,
    Github,
    ChevronRight
} from "lucide-react";

const IconMap: Record<string, any> = {
    LayoutDashboard,
    User,
    GraduationCap,
    Briefcase,
    BookOpen,
    Mail,
};

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r border-zinc-100 bg-white flex flex-col h-screen sticky top-0 shrink-0 hidden lg:flex">
            {/* Brand - Highly Minimalist Project Name/User Name */}
            <div className="p-10 pb-6">
                <Link href="/" className="group block space-y-1">
                    <h2 className="font-black text-xl tracking-tighter text-zinc-950">Ryu Jeongbin</h2>
                    <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.25em]">Cloud Systems</p>
                </Link>
            </div>

            {/* Nav - Precision Spacing */}
            <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-10 custom-scrollbar">
                {portfolioData.navigation.map((group) => (
                    <div key={group.group} className="space-y-3">
                        <h4 className="text-[9px] font-black text-zinc-800 uppercase tracking-[0.4em] pl-4">{group.group}</h4>
                        <div className="space-y-0.5">
                            {group.items.map((item) => {
                                const Icon = IconMap[item.icon] || LayoutDashboard;
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all group",
                                            isActive
                                                ? "bg-zinc-950 text-white font-black shadow-lg shadow-zinc-200"
                                                : "text-zinc-700 hover:text-zinc-900 font-bold hover:bg-zinc-50"
                                        )}
                                    >
                                        <div className="flex items-center space-x-4">
                                            <Icon className={cn("w-4 h-4 icon-sharp", isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-900")} />
                                            <span className="text-[13px]">{item.name}</span>
                                        </div>
                                        {isActive && <ChevronRight className="w-3.5 h-3.5 text-white/50" />}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div className="p-10 border-t border-zinc-50 space-y-6 bg-zinc-50/30">
                <div className="flex items-center gap-8 justify-center">
                    <a href={`mailto:${portfolioData.email}`} className="text-zinc-500 hover:text-zinc-950 transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                    <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-950 transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={portfolioData.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-950 transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </aside>
    );
}
