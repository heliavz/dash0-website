import DotGrid from "@/components/ui/LazyDotGrid";

export default function FinalCTA() {
  return (
    <section className="relative py-32 border-t border-[#262626] overflow-hidden">
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

      <div className="relative z-10 max-w-[1440px] mx-auto px-12">
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
          <div className="flex items-center gap-1">
            {[
              {
                src: "/dash0-website/images/badges/g2-best-support.svg",
                alt: "G2 Best Support Fall 2025",
                size: "h-24 w-24",
              },
              {
                src: "/dash0-website/images/badges/g2-users-love-us.svg",
                alt: "G2 Users Love Us",
                size: "h-32 w-32",
              },
              {
                src: "/dash0-website/images/badges/g2-best-roi.svg",
                alt: "G2 Best Estimated ROI Fall 2025",
                size: "h-24 w-24",
              },
            ].map((badge) => (
              <img
                key={badge.alt}
                src={badge.src}
                alt={badge.alt}
                className={`${badge.size} object-contain`}
              />
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
              className="flex items-center gap-2 text-[#a1a1aa] hover:text-white border border-[#2a2a2a] hover:border-[#3a3a3a] px-7 py-3 rounded-xl text-base transition-all"
            >
              Book a Demo
            </a>
          </div>
          <p className="text-xs text-[#8b8b95] mt-4">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
