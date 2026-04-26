import Link from "next/link";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right.mjs";
import DotGrid from "@/components/ui/DotGrid";

export default function AgentHero() {
  return (
    <section className="relative py-24 border-b border-[#262626] overflow-hidden">
      {/* Background dot grid - bottom half only */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none overflow-hidden">
        <DotGrid />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_80%,rgba(249,115,22,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-12">
        {/* Top: centered text */}
        <div className="text-center max-w-[760px] mx-auto mb-12">
          {/* Category pill */}
          <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
            <span className="text-sm text-[#f97316] font-medium">
              Agentic AI for Observability
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
            Meet <span className="text-[#f97316]">Agent0</span> — Your AI
            Specialists for Observability
          </h1>

          {/* Body */}
          <p className="text-lg text-[#a1a1aa] leading-relaxed mb-8 max-w-[600px] mx-auto">
            Agent0 is Dash0's agentic AI platform — a team of specialized AI
            agents that transform how engineers work with observability. From
            incident triage to query building and onboarding, each agent acts
            like an expert teammate, built directly into Dash0.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href="#"
              className="btn-gradient flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-xl text-base shadow-lg shadow-orange-500/20"
            >
              Get Started Free
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-[#a1a1aa] hover:text-white bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#3a3a3a] px-7 py-3 rounded-xl text-base transition-all"
            >
              Book a Demo
            </Link>
          </div>

          {/* Beta badge */}
          <p className="text-sm text-[#a1a1aa]">
            Agent0 is available today in{" "}
            <span className="text-[#f97316] font-medium">Beta</span> for all
            Dash0 users — no extra cost.
          </p>
        </div>

        {/* Bottom: image */}
        <div className="relative rounded-2xl overflow-hidden border border-[#2a2a2a] shadow-2xl shadow-black/60">
          <img
            src="/dash0-website/images/agent-hero.avif"
            alt="Agent0 — Dash0's agentic AI observability platform"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
