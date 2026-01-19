import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import HardwareWidget from "@/components/HardwareWidget";
import CopySnippet from "@/components/CopySnippet";
import { ArrowBigUp, MessageSquare, Share2 } from "lucide-react";

export default function PostPage({ params }: { params: { id: string } }) {
    // Mock data - in real app would fetch from Supabase based on params.id
    const post = {
        title: "Testing LLaMA-3-8B on a single GPU",
        author: "musicqueen",
        content: "I finally managed to get LLaMA-3 running on my local rig. The performance is surprisingly good even with 4-bit quantization. Here is the setup I used...",
        channel: "local-llms"
    };

    return (
        <main className="min-h-screen bg-black text-zinc-100">
            <Navbar />
            <div className="flex">
                <Sidebar />

                <div className="flex-1 lg:ml-60">
                    <div className="container mx-auto max-w-5xl py-8 px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Post Content */}
                        <div className="lg:col-span-2">
                            <div className="flex gap-4">
                                {/* Vote Sidebar */}
                                <div className="flex flex-col items-center gap-1">
                                    <button className="text-zinc-500 hover:text-indigo-400 p-1 mb-1">
                                        <ArrowBigUp className="w-8 h-8" />
                                    </button>
                                    <span className="font-bold text-lg">88</span>
                                </div>

                                <div className="flex-1">
                                    <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
                                    <div className="flex items-center gap-2 text-sm text-zinc-400 mb-6">
                                        <span>Posted by u/{post.author}</span>
                                        <span>•</span>
                                        <span>4 hours ago</span>
                                    </div>

                                    {/* Post Body */}
                                    <div className="prose prose-invert prose-zinc max-w-none text-zinc-300">
                                        <p className="mb-4">{post.content}</p>

                                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Installation</h3>
                                        <p>First, clone the repository:</p>
                                        <CopySnippet code="git clone https://github.com/meta-llama/llama3" label="Clone Repo" />

                                        <p className="mt-4">Then run the Docker container:</p>
                                        <CopySnippet code="docker run -it --gpus all -v $(pwd):/app llama3-runner" label="Run Container" />

                                        <p className="mt-8">The inference speed is around 45 t/s on my card.</p>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-4 mt-8 pt-4 border-t border-zinc-800">
                                        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white transition-colors">
                                            <MessageSquare className="w-5 h-5" />
                                            <span>16 Comments</span>
                                        </button>
                                        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white transition-colors">
                                            <Share2 className="w-5 h-5" />
                                            <span>Share</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="space-y-6">
                            <HardwareWidget
                                gpu="NVIDIA RTX 4090"
                                vram="24 GB GDDR6X"
                                ram="64 GB DDR5"
                                platform="Ubuntu 22.04 (WSL2)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
