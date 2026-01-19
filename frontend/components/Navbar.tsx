import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { UserCircle } from "lucide-react";

export default async function Navbar() {
    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return (
        <nav className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-xl sticky top-0 z-50">
            <div className="flex h-16 items-center justify-between px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Sonic</span>
                </Link>
                <div className="flex items-center gap-4">
                    <Link href="/discovery" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        Discovery
                    </Link>
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-zinc-400 truncate max-w-[150px]">{user.email}</span>
                            <form action="/auth/signout" method="post">
                                <button className="text-sm font-medium text-red-500 hover:text-red-400 transition-colors">Sign out</button>
                            </form>
                        </div>
                    ) : (
                        <Link href="/login" className="flex items-center gap-2 rounded-lg bg-indigo-600/10 px-4 py-2 text-sm font-semibold text-indigo-400 transition-all hover:bg-indigo-600/20">
                            <UserCircle className="w-4 h-4" />
                            Sign in
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
