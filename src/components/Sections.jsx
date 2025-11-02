import { CreditCard, Shield, LineChart, Coins } from 'lucide-react';
import { motion } from 'framer-motion';

function Stat({ label, value }) {
  return (
    <div className="px-6 py-5 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] backdrop-blur-sm text-center">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="text-xs text-zinc-400 mt-1">{label}</div>
    </div>
  );
}

function ProductCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E0E]">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
      <div className="p-6">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-slate-200 to-zinc-300 text-black shadow-inner">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
        <p className="mt-2 text-sm text-zinc-400">{desc}</p>
      </div>
    </div>
  );
}

export default function Sections() {
  return (
    <div className="relative">
      {/* Subtle floating 3D-like icons as background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-10 top-10 opacity-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-zinc-200 to-slate-300 shadow-2xl" />
        </motion.div>
        <motion.div
          className="absolute left-10 bottom-10 opacity-10"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-slate-100 to-zinc-300 shadow-xl" />
        </motion.div>
      </div>

      {/* Products */}
      <section id="products" className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Products</h2>
            <p className="mt-2 text-zinc-400 max-w-2xl">Cards, payments, and treasury—modular building blocks with enterprise security.</p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-xl">
            <Stat label="API uptime" value="99.99%" />
            <Stat label="Cleared volume" value="$12B+" />
            <Stat label="Countries" value="40+" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard icon={CreditCard} title="Issuing" desc="Create virtual & physical cards with programmable controls and real‑time auth." />
          <ProductCard icon={LineChart} title="Payments" desc="Accept, route, and reconcile funds instantly with transparent FX." />
          <ProductCard icon={Coins} title="Treasury" desc="Safeguard funds with segregated accounts, yield, and cash management." />
          <ProductCard icon={Shield} title="Compliance" desc="KYC/KYB, AML screening, and PCI‑DSS baked into the stack." />
        </div>
      </section>

      {/* Company Overview */}
      <section id="company" className="relative max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Company Overview</h2>
            <p className="mt-4 text-zinc-300">
              We are a team of security engineers and fintech operators building the most reliable
              banking platform for software companies. Our systems are audited, encrypted at rest
              and in transit, and deployed across redundant regions.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-300">
              <li>• Regulated partners and bank‑level controls</li>
              <li>• SOC 2 Type II, ISO 27001, PCI‑DSS</li>
              <li>• 24/7 risk monitoring and anomaly detection</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl p-6 border border-white/10 bg-[#111111]">
              <h3 className="text-white font-medium">Security First</h3>
              <p className="mt-2 text-sm text-zinc-400">Hardware-backed keys, fine-grained permissions, and audit trails.</p>
            </div>
            <div className="rounded-2xl p-6 border border-white/10 bg-[#111111]">
              <h3 className="text-white font-medium">Scalable by Design</h3>
              <p className="mt-2 text-sm text-zinc-400">Multi-region, horizontally scalable services with strict SLOs.</p>
            </div>
            <div className="rounded-2xl p-6 border border-white/10 bg-[#111111]">
              <h3 className="text-white font-medium">Developer‑Centric</h3>
              <p className="mt-2 text-sm text-zinc-400">SDKs, webhooks, and pristine docs to move from idea to prod fast.</p>
            </div>
            <div className="rounded-2xl p-6 border border-white/10 bg-[#111111]">
              <h3 className="text-white font-medium">Global by Default</h3>
              <p className="mt-2 text-sm text-zinc-400">Local compliance and FX rails across key markets worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-zinc-400">Pay as you grow with volume discounts. No hidden fees.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Starter', price: '$0/mo', points: ['Virtual cards', 'Sandbox access', 'Basic limits'], cta: 'Start Free'
            },
            {
              name: 'Growth', price: '$299/mo', points: ['Physical cards', 'Priority support', 'Higher limits'], cta: 'Choose Growth'
            },
            {
              name: 'Enterprise', price: 'Custom', points: ['Dedicated support', 'Custom controls', 'SLAs & compliance'], cta: 'Contact Sales'
            }
          ].map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-white/10 bg-[#0F0F0F] p-6 flex flex-col">
              <div className="flex-1">
                <h3 className="text-white font-medium text-lg">{tier.name}</h3>
                <div className="mt-3 text-3xl font-semibold text-white">{tier.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {tier.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
              <a
                href="#get-started"
                className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium text-black bg-gradient-to-r from-teal-400 to-emerald-400"
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Resources for Accountants */}
      <section id="resources" className="relative max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Resources for Accountants</h2>
            <p className="mt-3 text-zinc-300">Close the books faster with automated categorization, exportable ledgers, and direct integrations.</p>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-300">
              <li className="rounded-xl border border-white/10 bg-[#101010] px-4 py-3">• Real‑time reconciliation</li>
              <li className="rounded-xl border border-white/10 bg-[#101010] px-4 py-3">• Rules & approvals</li>
              <li className="rounded-xl border border-white/10 bg-[#101010] px-4 py-3">• Export to Xero, NetSuite</li>
              <li className="rounded-xl border border-white/10 bg-[#101010] px-4 py-3">• Multi‑entity support</li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a href="#get-started" className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium text-black bg-gradient-to-r from-teal-400 to-emerald-400">Get the guide</a>
              <a href="#" className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium text-white border border-white/20 bg-white/5 hover:bg-white/10">Partner program</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(45,212,191,0.15),transparent,rgba(59,130,246,0.15),transparent,rgba(45,212,191,0.15))] blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#121212] to-[#0B0B0B] p-6">
              <div className="grid grid-cols-3 gap-3 text-xs text-zinc-300">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="aspect-[4/3] rounded-xl border border-white/10 bg-[#0E0E0E] flex items-center justify-center">CSV {i + 1}</div>
                ))}
              </div>
              <div className="mt-4 text-zinc-400 text-xs">Sample exports and templates</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
