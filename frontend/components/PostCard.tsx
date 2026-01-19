import Link from "next/link";
import { MessageSquare, ArrowBigUp, Share2 } from "lucide-react";

interface PostProps {
    title: string;
    author: string;
    channel: string;
    votes: number;
    comments: number;
    timeAgo: string;
    type?: "discussion" | "review" | "repo-test";
}

export default function PostCard({ title, author, channel, votes, comments, timeAgo, type = "discussion" }: PostProps) {
    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-700 transition-colors cursor-pointer">
            <div className="flex gap-4">
                {/* Vote Column */}
                <div className="flex flex-col items-center gap-1 rounded-lg bg-zinc-950/50 p-2 h-fit min-w-[3rem]">
                    <button className="text-zinc-500 hover:text-indigo-400 transition-colors">
                        <ArrowBigUp className="w-6 h-6" />
                    </button>
                    <span className="text-sm font-bold text-zinc-300">{votes}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                        <Link href={`/c/${channel}`} className="font-bold text-zinc-300 hover:underline">c/{channel}</Link>
                        <span>•</span>
                        <span>Posted by u/{author}</span>
                        <span>•</span>
                        <span>{timeAgo}</span>
                        {type !== 'discussion' && (
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${type === 'review' ? 'border-purple-500/30 text-purple-400 bg-purple-500/10' :
                                    'border-green-500/30 text-green-400 bg-green-500/10'
                                }`}>
                                {type === 'review' ? 'Paper Review' : 'Repo Test'}
                            </span>
                        )}
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-3">
                        {title}
                    </h3>

                    <div className="flex items-center gap-4 text-zinc-500">
                        <button className="flex items-center gap-1.5 p-1 hover:bg-zinc-800 rounded text-xs font-medium transition-colors">
                            <MessageSquare className="w-4 h-4" />
                            {comments} Comments
                        </button>
                        <button className="flex items-center gap-1.5 p-1 hover:bg-zinc-800 rounded text-xs font-medium transition-colors">
                            <Share2 className="w-4 h-4" />
                            Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
