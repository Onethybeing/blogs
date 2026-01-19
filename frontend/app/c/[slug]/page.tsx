import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import PostCard from "@/components/PostCard";
import { Cpu, Users } from "lucide-react";

export default function ChannelPage({ params }: { params: { slug: string } }) {
    // In a real app, fetch channel details & posts from Supabase based on params.slug
    const slug = params.slug;

    return (
        <main className="min-h-screen bg-black text-zinc-100">
            <Navbar />
            <div className="flex">
                <Sidebar />

                <div className="flex-1 lg:ml-60">
                    {/* Header */}
                    <div className="h-48 bg-gradient-to-r from-indigo-900/20 to-cyan-900/20 border-b border-zinc-800">
                        <div className="container mx-auto max-w-5xl h-full flex items-end px-6 pb-6">
                            <div className="flex items-end gap-6">
                                <div className="h-24 w-24 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-2xl">
                                    <Cpu className="w-12 h-12 text-indigo-400" />
                                </div>
                                <div className="mb-2">
                                    <h1 className="text-3xl font-bold text-white">c/{slug}</h1>
                                    <p className="text-zinc-400">The hub for everything {slug}. Join the discussion.</p>
                                </div>
                                <div className="mb-4 ml-auto flex gap-3">
                                    <button className="px-4 py-2 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors">
                                        Join Channel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="container mx-auto max-w-5xl py-8 px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Posts Feed */}
                        <div className="lg:col-span-2 space-y-4">
                            <PostCard
                                title="Llama 3 Local Setup Guide - 8GB VRAM optimized"
                                author="GPU_Wizard"
                                channel={slug}
                                votes={420}
                                comments={69}
                                timeAgo="2 hours ago"
                                type="repo-test"
                            />
                            <PostCard
                                title="Understanding Attention Mechanisms in Transformers (Whitepaper review)"
                                author="AI_Researcher"
                                channel={slug}
                                votes={156}
                                comments={24}
                                timeAgo="5 hours ago"
                                type="review"
                            />
                            <PostCard
                                title="Anyone tried the new quantization method?"
                                author="Newbie_Dev"
                                channel={slug}
                                votes={45}
                                comments={12}
                                timeAgo="7 hours ago"
                                type="discussion"
                            />
                        </div>

                        {/* Right Sidebar (Antigravity Widget) */}
                        <div className="space-y-6">
                            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                                <h3 className="font-bold text-white mb-4">About Community</h3>
                                <p className="text-sm text-zinc-400 mb-4">
                                    Welcome to c/{slug}. A place to share, learn, and discuss the latest in AI technology.
                                </p>
                                <div className="flex items-center gap-2 text-zinc-400 text-sm mb-6">
                                    <Users className="w-4 h-4" />
                                    <span>14.2k Members</span>
                                </div>
                                <div className="border-t border-zinc-800 pt-4">
                                    <h4 className="font-bold text-xs uppercase text-zinc-500 mb-2">Top Contributors</h4>
                                    {/* List of avatars/names would go here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
