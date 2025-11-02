import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient lighting overlay (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_-10%,rgba(20,184,166,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_500px_at_10%_10%,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-teal-300/90 backdrop-blur-sm">
            Next‑Gen Fintech Platform
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            Banking infrastructure for modern builders.
          </h1>
          <p className="mt-5 text-lg text-zinc-300 max-w-2xl">
            Issue cards, move money, reconcile in real time. Built for scale with bank‑grade security and a developer‑first API.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4" id="get-started">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-black bg-gradient-to-r from-teal-400 to-emerald-400 shadow-[0_0_40px_-10px_#34d399] hover:shadow-[0_0_50px_-8px_#34d399] transition"
            >
              Get Started
            </a>
            <a
              href="#resources"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white border border-white/20 bg-white/5 hover:bg-white/10 transition"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
