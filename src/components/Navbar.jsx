import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight text-white">FlarePay</a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300 group">
          {[
            { label: 'Products', href: '#products' },
            { label: 'Company', href: '#company' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Accountants', href: '#resources' },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative hover:text-white transition-colors"
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-teal-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="#pricing" className="text-sm text-zinc-300 hover:text-white">Pricing</a>
          <a
            href="#get-started"
            className="group inline-flex items-center gap-2 text-sm font-medium text-black rounded-full px-4 py-2 bg-gradient-to-r from-teal-400 to-emerald-400 shadow-[0_0_30px_-8px_#34d399] hover:shadow-[0_0_40px_-6px_#34d399] transition"
          >
            Get Started
            <span className="inline-block translate-x-0 group-hover:translate-x-0.5 transition">→</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
