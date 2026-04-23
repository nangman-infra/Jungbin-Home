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
    ChevronRight,
    type LucideIcon
} from "lucide-react";

function LinkedInBrandIcon({ className }: Readonly<{ className?: string }>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
            <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3C4.17 3 3.5 3.72 3.5 4.67C3.5 5.6 4.15 6.33 5.2 6.33H5.22C6.33 6.33 7 5.6 7 4.67C6.98 3.72 6.33 3 5.25 3ZM20.5 13.14C20.5 9.74 18.69 8.17 16.28 8.17C14.33 8.17 13.46 9.24 12.97 9.99V8.5H9.59C9.64 9.49 9.59 19.5 9.59 19.5H12.97V13.36C12.97 13.03 12.99 12.7 13.09 12.47C13.34 11.82 13.91 11.14 14.88 11.14C16.15 11.14 16.66 12.11 16.66 13.53V19.5H20.03V13.14H20.5Z" />
        </svg>
    );
}

function GitHubBrandIcon({ className }: Readonly<{ className?: string }>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
            <path d="M12 2C6.48 2 2 6.58 2 12.22C2 16.73 4.87 20.55 8.84 21.9C9.34 21.99 9.52 21.68 9.52 21.42C9.52 21.19 9.51 20.43 9.5 19.42C6.73 20.04 6.14 18.2 6.14 18.2C5.68 16.99 5.03 16.66 5.03 16.66C4.12 16.02 5.1 16.03 5.1 16.03C6.11 16.1 6.65 17.09 6.65 17.09C7.55 18.68 9.02 18.22 9.59 17.95C9.68 17.29 9.94 16.84 10.23 16.58C8.02 16.32 5.7 15.45 5.7 11.55C5.7 10.44 6.09 9.53 6.73 8.81C6.62 8.55 6.28 7.49 6.83 6.06C6.83 6.06 7.67 5.79 9.49 7.06C10.29 6.83 11.15 6.72 12 6.72C12.85 6.72 13.71 6.83 14.51 7.06C16.33 5.79 17.17 6.06 17.17 6.06C17.72 7.49 17.38 8.55 17.27 8.81C17.91 9.53 18.3 10.44 18.3 11.55C18.3 15.46 15.98 16.31 13.76 16.57C14.13 16.9 14.46 17.55 14.46 18.56C14.46 20 14.45 21.12 14.45 21.42C14.45 21.68 14.63 22 15.14 21.9C19.11 20.55 22 16.73 22 12.22C22 6.58 17.52 2 12 2Z" />
        </svg>
    );
}

const IconMap: Record<string, LucideIcon> = {
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
                        <LinkedInBrandIcon className="w-5 h-5" />
                    </a>
                    <a href={portfolioData.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-950 transition-colors">
                        <GitHubBrandIcon className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </aside>
    );
}
