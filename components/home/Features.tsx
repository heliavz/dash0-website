const features = [
  {
    pill: "Logs",
    headline: "Instant log filtering and search",
    description:
      "Manage diverse logs with the fastest search and filtering capabilities. Leverage OpenTelemetry semantic conventions for context, traces, and metrics — spot patterns in a blink.",
  },
  {
    pill: "Metrics",
    headline: "Monitor the metrics that matter",
    description:
      "Centralize Prometheus & OpenTelemetry metrics to monitor your infrastructure and services with ease. Use proven dashboards, integrations and alerts with full context.",
  },
  {
    pill: "Traces",
    headline: "Each request, explained",
    description:
      "Spot errors and bottlenecks with real-time search and filtering for all high cardinality attributes. Get heatmap drilldowns, trace details, and full context on one page.",
  },
  {
    pill: "Dashboards",
    headline: "Visualize your data with ease",
    description:
      "Perses lets you build powerful dashboards to visualize metrics, logs, and traces. Customize with built-in variables, use pre-made dashboards, and manage them as code.",
  },
  {
    pill: "Integrations",
    headline: "Instant observability for your entire stack",
    description:
      "Leverage pre-built integrations, dashboards, alerts, and views. Get started instantly with one click — no customization required.",
  },
];

export default function Features() {
  return (
    <section className="py-24 border-t border-[#1f1f1f]">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Observability in Minutes,{" "}
            <span className="text-[#f97316]">not Months</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-[520px] mx-auto">
            No complex setups, no maintenance — all the context for your logs,
            metrics and traces.
          </p>
        </div>

        {/* Feature rows */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={feature.pill}
              className={`group flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-10 bg-[#111111] border border-[#1f1f1f] hover:border-[#2a2a2a] rounded-2xl p-8 md:p-10 transition-all duration-300`}
            >
              {/* Text */}
              <div className="flex-1 min-w-0">
                <span className="inline-block text-xs font-semibold tracking-widest text-[#f97316] uppercase border border-[#f97316]/20 bg-[#f97316]/10 rounded-full px-3 py-1 mb-4">
                  {feature.pill}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                  {feature.headline}
                </h3>
                <p className="text-[#a1a1aa] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Feature visual placeholder */}
              <div className="flex-1 w-full rounded-xl overflow-hidden border border-[#2a2a2a] bg-[#0f0f0f] aspect-[16/9] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#161616] to-[#0f0f0f]" />
                {/* Decorative grid lines */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
