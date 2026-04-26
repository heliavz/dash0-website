import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import DotGrid from "@/components/ui/LazyDotGrid";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-32 pb-20">
      {/* Background — subtle glow only, no dot grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#f97316]/5 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6">
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
        <p className="font-medium text-[#8b8b95]">
          Trusted by engineers at{" "}
          <span className="text-[#a1a1aa] font-medium">Vercel</span>,{" "}
          <span className="text-[#a1a1aa] font-medium">Porsche Digital</span>,{" "}
          <span className="text-[#a1a1aa] font-medium">Telegraph</span> and more
        </p>
      </div>

      {/* Hero product screenshot */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-12 mt-16">
        {/* Dot grid behind dashboard — right-contained, short height */}
        <div className="absolute inset-x-6 inset-y-0 pointer-events-none overflow-hidden">
          <DotGrid />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_80%_at_15%_50%,rgba(249,115,22,0.12)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-30" />
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-[#2a2a2a] shadow-2xl shadow-black/60">
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
