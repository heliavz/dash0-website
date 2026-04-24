import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-32 pb-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dot grid */}
        <div className="dot-grid absolute inset-0" />
        {/* Radial mask */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_30%,#0a0a0a_100%)]" />
        {/* Center orange glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f97316]/8 rounded-full blur-[100px] animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[860px] mx-auto px-6">
        {/* Category pill */}
        <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
          <span className="text-sm text-[#f97316] font-medium">
            OpenTelemetry-Native
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
          Observability,{" "}
          <span className="relative">
            <span className="text-[#f97316]">Simplified.</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[#a1a1aa] max-w-[600px] mx-auto leading-relaxed mb-10">
          Stop wrestling with complex setups. Dash0 gives your team full
          visibility into logs, metrics, and traces — in minutes, not months. No
          lock-in. No surprises.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="#"
            className="btn-gradient flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-xl text-base shadow-lg shadow-orange-500/20"
          >
            Start for Free
            <ArrowRight size={16} />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-[#a1a1aa] hover:text-white border border-[#2a2a2a] hover:border-[#3a3a3a] px-7 py-3 rounded-xl text-base transition-all"
          >
            Book a Demo
          </Link>
        </div>

        {/* Social proof line */}
        <p className="text-sm text-[#71717a]">
          Trusted by engineers at{" "}
          <span className="text-[#a1a1aa] font-medium">Vercel</span>,{" "}
          <span className="text-[#a1a1aa] font-medium">Porsche Digital</span>,{" "}
          <span className="text-[#a1a1aa] font-medium">Telegraph</span> and more
        </p>
      </div>

      {/* Hero product screenshot */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 mt-16">
        <div className="relative rounded-2xl overflow-hidden border border-[#2a2a2a] shadow-2xl shadow-black/60">
          {/* Fake browser chrome */}
          <div className="bg-[#161616] border-b border-[#2a2a2a] px-4 py-3 flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#2a2a2a]" />
              <div className="w-3 h-3 rounded-full bg-[#2a2a2a]" />
              <div className="w-3 h-3 rounded-full bg-[#2a2a2a]" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-md px-3 py-1 text-xs text-[#71717a] max-w-[300px] mx-auto text-center">
                app.dash0.com
              </div>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/dash0-website/images/hero-dashboard.AVIF"
              alt="Dash0 observability platform — service map and trace explorer"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Glow under the screenshot */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[#f97316]/10 blur-3xl rounded-full pointer-events-none" />
      </div>
    </section>
  );
}
