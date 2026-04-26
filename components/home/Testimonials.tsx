const testimonials = [
  {
    quote:
      "Dash0's foundation on open source standards ensures future-proof and next-gen observability. Their focus on ease of use empowers all of our developers to gain insights quickly.",
    name: "Patrice Bouillet",
    role: "Solution Architect",
    company: "Porsche Digital",
    initial: "P",
  },
  {
    quote:
      "The tracing UI is amazing. When we switched to Dash0, it significantly cut down the amount of time from a bug being reported to figuring out why it happened and fixing it. Filtering on attributes is extremely intuitive and the tracing tree UI is best in class.",
    name: "Elliot Dauber",
    role: "Software Engineer",
    company: "Vercel",
    initial: "E",
  },
  {
    quote:
      "Despite being a young company, Dash0 delivers enterprise-grade quality and features — automatic instrumentation, spans, logs with semantic context, PromQL support, AI-powered trace triage — all working reliably from day one.",
    name: "Dennis Schulte",
    role: "CTO",
    company: "Hayuno AG",
    initial: "D",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-[#262626]">
      <div className="max-w-[1440px] mx-auto px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-[480px] mx-auto">
            Trusted by engineers at companies of all sizes — from fast-growing
            startups to global enterprises.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative flex flex-col rounded-2xl border border-[#262626] hover:border-[#2a2a2a] bg-[#111111] p-8 transition-all duration-300"
            >
              {/* Quote mark */}
              <span className="text-5xl text-[#f97316]/20 font-serif leading-none mb-4 block">
                "
              </span>

              {/* Quote */}
              <p className="text-[#a1a1aa] text-sm leading-relaxed flex-1 mb-8">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-[#262626]">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 bg-[#2a2a2a] text-white">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-[#8b8b95]">
                    {t.role} - {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
