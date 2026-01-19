import { Cpu, HardDrive, Zap } from "lucide-react";

interface HardwareSpecsProps {
    gpu: string;
    vram: string;
    ram: string;
    platform: string;
}

export default function HardwareWidget({ gpu, vram, ram, platform }: HardwareSpecsProps) {
    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                Test Bench Specs
            </h3>
            <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-zinc-400">
                        <Cpu className="w-4 h-4" />
                        <span>GPU</span>
                    </div>
                    <span className="font-mono text-zinc-200">{gpu}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-zinc-400">
                        <HardDrive className="w-4 h-4" />
                        <span>VRAM</span>
                    </div>
                    <span className="font-mono text-zinc-200">{vram}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-zinc-400">
                        <HardDrive className="w-4 h-4" />
                        <span>RAM</span>
                    </div>
                    <span className="font-mono text-zinc-200">{ram}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-800">
                    <span className="text-xs text-zinc-500 uppercase font-bold">Platform</span>
                    <p className="text-sm text-zinc-300 mt-1">{platform}</p>
                </div>
            </div>
        </div>
    )
}
