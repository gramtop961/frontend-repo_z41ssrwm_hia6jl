export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div className="md:col-span-2">
          <div className="text-white text-lg font-semibold">FlarePay</div>
          <p className="mt-3 text-zinc-400 max-w-md">A modern financial platform for builders. Issue, move, and manage money globally with bank‑grade security.</p>
        </div>
        <div>
          <div className="text-white font-medium">Company</div>
          <ul className="mt-3 space-y-2 text-zinc-400">
            <li><a href="#company" className="hover:text-white">About</a></li>
            <li><a href="#resources" className="hover:text-white">Partners</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-medium">Follow</div>
          <ul className="mt-3 space-y-2 text-zinc-400">
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
          <div>© {new Date().getFullYear()} FlarePay, Inc. All rights reserved.</div>
          <div className="flex items-center gap-4 mt-3 sm:mt-0">
            <a href="#" className="hover:text-zinc-300">Privacy</a>
            <a href="#" className="hover:text-zinc-300">Terms</a>
            <a href="#" className="hover:text-zinc-300">Legal & Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
