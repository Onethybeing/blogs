import Link from "next/link";
import { Hash, Home, Zap, Server, Code2, Cpu } from "lucide-react";

const channels = [
    { name: "Local LLMs", slug: "local-llms", icon: Cpu },
    { name: "Stable Diffusion", slug: "stable-diffusion", icon: Zap },
    { name: "Sonic", slug: "sonic", icon: Server },
    { name: "Paper Reviews", slug: "papers", icon: Hash },
    { name: "Repo Tests", slug: "repo-tests", icon: Code2 },
];

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-60 border-r border-zinc-800 bg-zinc-950/50 backdrop-blur-xl hidden lg:block">
            <div className="h-full overflow-y-auto px-4 py-6">
                <ul className="space-y-2">
                    <li>
                        <Link
                            href="/"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-800/50 hover:text-white transition-colors"
                        >
                            <Home className="h-5 w-5" />
                            <span className="font-medium">Home</span>
                        </Link>
                    </li>

                    <li className="pt-4 pb-2">
                        <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                            Channels
                        </h3>
                    </li>

                    {channels.map((channel) => (
                        <li key={channel.slug}>
                            <Link
                                href={`/c/${channel.slug}`}
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-800/50 hover:text-white transition-colors"
                            >
                                <channel.icon className="h-5 w-5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                                <span className="font-medium">{channel.name}</span>
                            </Link>
                        </li>
                    ))}

                    <li className="pt-4 pb-2">
                        <button className="flex w-full items-center gap-2 rounded-lg border border-dashed border-zinc-800 px-3 py-2 text-sm text-zinc-500 hover:border-zinc-700 hover:text-zinc-400 transition-colors bg-transparent">
                            <span>+ Create Channel</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
