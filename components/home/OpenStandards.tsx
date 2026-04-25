const standards = [
  {
    pill: "OpenTelemetry",
    headline: "Interoperability by design",
    description:
      "Dash0 is OpenTelemetry-native, enabling standardized and efficient data collection, transmission, and analysis across distributed systems. Enjoy interoperability with modern observability ecosystems.",
    code: `exporters:
  otlp:
    endpoint: ingress.dash0.com:4317
    headers:
      Authorization: Bearer \${TOKEN}

service:
  pipelines:
    traces:
      exporters: [otlp]
    metrics:
      exporters: [otlp]
    logs:
      exporters: [otlp]`,
  },
  {
    pill: "PromQL",
    headline: "PromQL: the Cloud-native language",
    description:
      "Import your existing Prometheus alerts into Dash0. Take advantage of over 400 pre-built alert templates from open-source knowledge bases. Also query traces and logs with PromQL.",
    code: `# P99 latency by service
histogram_quantile(0.99,
  sum by (le, service) (
    rate(http_request_duration_seconds_bucket[5m])
  )
)

# Error rate alert
sum(rate(http_requests_total{
  status=~"5.."}[5m]))
/ sum(rate(http_requests_total[5m]))`,
  },
  {
    pill: "Perses",
    headline: "Perses: no more vendor lock-in",
    description:
      "Our dashboards are fully compatible with Perses, the open-source platform for creating and managing dashboards. Easily import and export dashboards, providing flexibility and control.",
    code: `kind: Dashboard
metadata:
  name: service-overview
  project: dash0
spec:
  display:
    name: Service Overview
  panels:
    latency:
      kind: TimeSeriesChart
      spec:
        query: http_duration_p99`,
  },
];

export default function OpenStandards() {
  return (
    <section className="py-24 border-t border-[#1f1f1f]">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built for You —{" "}
            <span className="text-[#f97316]">Not for Your Vendor</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-[560px] mx-auto leading-relaxed">
            Dash0 delivers observability on your terms, powered by open
            standards. No lock-in, no black boxes — just full control,
            flexibility, and future-proof telemetry.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {standards.map((item) => (
            <div
              key={item.pill}
              className="group bg-[#111111] border border-[#1f1f1f] hover:border-[#2a2a2a] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* Code block visual */}
              <div className="relative bg-[#0d0d0d] border-b border-[#1f1f1f] p-5 flex-1">
                {/* Fake window chrome */}
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]" />
                  <span className="ml-2 text-[10px] text-[#3a3a3a] font-mono">
                    {item.pill === "OpenTelemetry"
                      ? "otel-collector.yaml"
                      : item.pill === "PromQL"
                        ? "alert.promql"
                        : "dashboard.yaml"}
                  </span>
                </div>
                {/* Code */}
                <pre className="text-[11px] leading-relaxed font-mono text-[#a1a1aa] overflow-hidden">
                  {item.code.split("\n").map((line, i) => {
                    const isKey = line.match(/^[\s]*([\w-]+):/);
                    const isComment = line.trim().startsWith("#");
                    const isValue = line.includes(": ");
                    return (
                      <div key={i}>
                        {isComment ? (
                          <span className="text-[#71717a]">{line}</span>
                        ) : isKey ? (
                          <span>
                            <span className="text-[#f97316]/80">
                              {line.match(/^(\s*)([\w-]+:)/)?.[2] || ""}
                            </span>
                            <span className="text-[#a1a1aa]">
                              {line.replace(
                                /^(\s*)([\w-]+:)/,
                                (_, spaces) => spaces,
                              )}
                            </span>
                          </span>
                        ) : (
                          <span className="text-[#71717a]">{line}</span>
                        )}
                        {"\n"}
                      </div>
                    );
                  })}
                </pre>
              </div>

              {/* Text content */}
              <div className="p-6">
                <span className="inline-block text-[10px] font-semibold tracking-widest text-[#f97316] uppercase border border-[#f97316]/20 bg-[#f97316]/10 rounded-full px-3 py-1 mb-4">
                  {item.pill}
                </span>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {item.headline}
                </h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="btn-gradient inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-xl text-base shadow-lg shadow-orange-500/20"
          >
            Start for Free
          </a>
        </div>
      </div>
    </section>
  );
}
