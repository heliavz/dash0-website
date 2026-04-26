export default function TrustedBy() {
  const companies = [
    "Neo4j",
    "G2",
    "Linearity",
    "Pipe",
    "Tessl",
    "Duna",
    "Telegraph",
    "Chargetrip",
    "EVgo",
    "Vercel",
    "Porsche Digital",
  ];

  return (
    <section className="py-16 border-t border-[#262626]">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Label */}
        <p className="text-center text-lg md:text-xl font-semibold tracking-widest text-[#71717a] uppercase mb-10">
          Trusted by engineering teams at
        </p>

        {/* Logo marquee */}
        <div className="relative overflow-hidden">
          {/* Fade masks on left and right */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex items-center gap-20 marquee-track">
            {/* Render twice for seamless loop */}
            {[...companies, ...companies].map((company, i) => (
              <span
                key={i}
                className="text-[#71717a] font-semibold text-base whitespace-nowrap hover:text-[#a1a1aa] transition-colors cursor-default"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
