import DotGrid from "@/components/ui/DotGrid";

export default function FinalCTA() {
  return (
    <section className="relative py-32 border-t border-[#1f1f1f] overflow-hidden">
      {/* Left: subtle glow only */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#f97316]/4 rounded-full blur-[120px]" />
      </div>

      {/* Right: dot grid — vertically centered around badge area */}
      <div className="absolute right-8 top-[10%] bottom-[30%] w-1/2 pointer-events-none overflow-hidden">
        <DotGrid />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_50%,rgba(249,115,22,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8">
        {/* Top block — headline + G2 badges */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          {/* Left: text */}
          <div className="max-w-[480px]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              World Class <span className="text-[#f97316]">Observability</span>
            </h2>
            <p className="text-[#a1a1aa] leading-relaxed">
              Our customers praise Dash0 as a powerful product with excellent
              user experience and support. Dash0 simplifies observability for
              every developer, providing deep insights into logs, metrics, and
              traces — because details matter.
            </p>
          </div>

          {/* Right: G2 badges */}
          <div className="flex items-center gap-4">
            {[
              { top: "FALL 2025", label: "Best\nSupport", color: "#22c55e" },
              { top: "MILESTONE", label: "Users\nLove Us", color: "#f97316" },
              { top: "FALL 2025", label: "Best\nEst. ROI", color: "#3b82f6" },
            ].map((badge, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center w-[90px]"
              >
                {/* Shield shape */}
                <div
                  className="w-[80px] bg-white rounded-t-lg pt-2 pb-4 px-2 flex flex-col items-center"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)",
                  }}
                >
                  {/* Top bar */}
                  <div
                    className="w-full rounded-sm py-0.5 mb-1 flex items-center justify-between px-1"
                    style={{ backgroundColor: badge.color }}
                  >
                    <span className="text-[7px] text-white font-bold">
                      {badge.top}
                    </span>
                    <span className="text-[7px] text-white font-black">G</span>
                  </div>
                  {/* Label */}
                  <p className="text-[11px] font-black text-gray-900 text-center leading-tight mt-1 whitespace-pre-line">
                    {badge.label}
                  </p>
                  {/* Stars */}
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, s) => (
                      <span
                        key={s}
                        className="text-[8px]"
                        style={{ color: badge.color }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="btn-gradient flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-xl text-base shadow-lg shadow-orange-500/20"
            >
              Start for Free
            </a>

            <a
              href="#"
              className="text-sm text-[#a1a1aa] hover:text-white transition-colors underline underline-offset-4"
            >
              Book a demo
            </a>
          </div>
          <p className="text-xs text-[#71717a] mt-4">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
