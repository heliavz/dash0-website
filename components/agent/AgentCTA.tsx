import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DotGrid from "@/components/ui/DotGrid";

export default function AgentCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background dot grid - center radial */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <DotGrid />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,transparent_20%,#0a0a0a_80%)]" />
        {/* Center orange glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#f97316]/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-12 text-center">
        {/* Category pill */}
        <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
          <span className="text-sm text-[#f97316] font-medium">
            Available now in Beta
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
          Agentic Observability{" "}
          <span className="text-[#f97316]">Starts Here</span>
        </h2>

        {/* Body */}
        <p className="text-xl text-[#a1a1aa] leading-relaxed mb-10 max-w-[640px] mx-auto">
          Join the next chapter of observability — where data works with you,
          not against you. Agent0 is available today in Beta for all Dash0
          users, at no extra cost.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="#"
            className="btn-gradient flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-xl text-base shadow-lg shadow-orange-500/20"
          >
            Try Agent0 Free
            <ArrowRight size={16} />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-[#a1a1aa] hover:text-white bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#3a3a3a] px-8 py-3.5 rounded-xl text-base transition-all"
          >
            Book a Demo
          </Link>
        </div>

        {/* Trust line */}
        <p className="font-medium text-[#71717a]">
          No credit card required · Built directly into Dash0 · Cancel anytime
        </p>
      </div>
    </section>
  );
}
