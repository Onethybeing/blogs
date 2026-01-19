'use client'

import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";

interface CopySnippetProps {
    code: string;
    label?: string;
}

export default function CopySnippet({ code, label = "Run this command" }: CopySnippetProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="my-4 rounded-lg border border-zinc-800 bg-black overflow-hidden">
            {label && (
                <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 px-4 py-2 text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                        <Terminal className="w-3 h-3" />
                        <span>{label}</span>
                    </div>
                </div>
            )}
            <div className="flex items-center justify-between p-4">
                <code className="font-mono text-sm text-green-400">{code}</code>
                <button
                    onClick={handleCopy}
                    className="rounded p-1.5 text-zinc-500 hover:bg-zinc-800 hover:text-white transition-colors"
                >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
            </div>
        </div>
    )
}
