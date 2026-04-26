const costFeatures = [
  {
    pill: "Price by telemetry",
    headline: "Pay just for the telemetry you care about",
    description:
      "Our pricing is transparent and based on how many logs, spans, and metric data points you send — not how many bytes, not how many users query them. Send all the metadata you need without hidden costs.",
    svg: (
      <svg
        viewBox="0 0 400 220"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="220" fill="#0d0d0d" />
        {/* Central price display */}
        <rect
          x="120"
          y="30"
          width="160"
          height="80"
          rx="12"
          fill="#161616"
          stroke="#f97316"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <text
          x="200"
          y="65"
          textAnchor="middle"
          fill="white"
          fontSize="28"
          fontFamily="monospace"
          fontWeight="bold"
        >
          $0.60
        </text>
        <text
          x="200"
          y="85"
          textAnchor="middle"
          fill="#71717a"
          fontSize="10"
          fontFamily="monospace"
        >
          per million spans
        </text>
        <text
          x="200"
          y="102"
          textAnchor="middle"
          fill="#f97316"
          fontSize="9"
          fontFamily="monospace"
        >
          no hidden fees
        </text>
        {/* Three pillars */}
        {[
          { x: 40, label: "Logs", price: "$0.60", sub: "per million" },
          { x: 160, label: "Spans", price: "$0.60", sub: "per million" },
          { x: 280, label: "Metrics", price: "$0.20", sub: "per million" },
        ].map((item, i) => (
          <g key={i}>
            <rect
              x={item.x}
              y="130"
              width="100"
              height="70"
              rx="8"
              fill="#161616"
              stroke="#2a2a2a"
              strokeWidth="1"
            />
            <text
              x={item.x + 50}
              y="152"
              textAnchor="middle"
              fill="#71717a"
              fontSize="9"
              fontFamily="monospace"
            >
              {item.label}
            </text>
            <text
              x={item.x + 50}
              y="174"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              fontFamily="monospace"
              fontWeight="bold"
            >
              {item.price}
            </text>
            <text
              x={item.x + 50}
              y="190"
              textAnchor="middle"
              fill="#71717a"
              fontSize="8"
              fontFamily="monospace"
            >
              {item.sub}
            </text>
          </g>
        ))}
        {/* Connecting lines */}
        {[90, 210, 330].map((x, i) => (
          <line
            key={i}
            x1={x}
            y1="110"
            x2={[90, 210, 330][i]}
            y2="130"
            stroke="#2a2a2a"
            strokeWidth="1"
            strokeDasharray="3 2"
          />
        ))}
      </svg>
    ),
  },
  {
    pill: "Cost control",
    headline: "You have all the control",
    description:
      "Take full advantage of open-source OpenTelemetry agents and the OTel collector's robust ingestion pipelines to manage your data instrumentation, ingestion, and sampling strategy.",
    svg: (
      <svg
        viewBox="0 0 400 220"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="220" fill="#0d0d0d" />
        {/* Pipeline visualization */}
        {/* Source boxes */}
        {[
          { y: 30, label: "Your App" },
          { y: 90, label: "Kubernetes" },
          { y: 150, label: "AWS / GCP" },
        ].map((src, i) => (
          <g key={i}>
            <rect
              x="20"
              y={src.y}
              width="90"
              height="30"
              rx="6"
              fill="#161616"
              stroke="#2a2a2a"
              strokeWidth="1"
            />
            <text
              x="65"
              y={src.y + 20}
              textAnchor="middle"
              fill="#a1a1aa"
              fontSize="9"
              fontFamily="monospace"
            >
              {src.label}
            </text>
            <line
              x1="110"
              y1={src.y + 15}
              x2="150"
              y2="110"
              stroke="#2a2a2a"
              strokeWidth="1"
              strokeDasharray="3 2"
            />
          </g>
        ))}
        {/* OTel Collector */}
        <rect
          x="150"
          y="80"
          width="100"
          height="50"
          rx="8"
          fill="#161616"
          stroke="#f97316"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
        <text
          x="200"
          y="102"
          textAnchor="middle"
          fill="#f97316"
          fontSize="9"
          fontFamily="monospace"
          fontWeight="bold"
        >
          OTel
        </text>
        <text
          x="200"
          y="118"
          textAnchor="middle"
          fill="#f97316"
          fontSize="9"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Collector
        </text>
        {/* Arrow to Dash0 */}
        <line
          x1="250"
          y1="105"
          x2="290"
          y2="105"
          stroke="#f97316"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />
        <polygon
          points="290,100 300,105 290,110"
          fill="#f97316"
          opacity="0.6"
        />
        {/* Dash0 box */}
        <rect
          x="300"
          y="75"
          width="80"
          height="60"
          rx="8"
          fill="#161616"
          stroke="#f97316"
          strokeWidth="1.5"
          strokeOpacity="0.8"
        />
        <text
          x="340"
          y="102"
          textAnchor="middle"
          fill="white"
          fontSize="11"
          fontFamily="monospace"
          fontWeight="bold"
        >
          dash0
        </text>
        <text
          x="340"
          y="118"
          textAnchor="middle"
          fill="#f97316"
          fontSize="8"
          fontFamily="monospace"
        >
          ingest
        </text>
        {/* Sample / filter / transform labels */}
        {["Sample", "Filter", "Transform"].map((label, i) => (
          <g key={i}>
            <rect
              x="155"
              y={140 + i * 22}
              width="90"
              height="16"
              rx="4"
              fill="#1a1a1a"
              stroke="#2a2a2a"
              strokeWidth="1"
            />
            <text
              x="200"
              y={152 + i * 22}
              textAnchor="middle"
              fill="#71717a"
              fontSize="8"
              fontFamily="monospace"
            >
              {label}
            </text>
          </g>
        ))}
      </svg>
    ),
  },
];

export default function CostControl() {
  return (
    <section className="py-24 border-t border-[#262626] bg-[#0e0e0e]">
      <div className="max-w-[1440px] mx-auto px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cost Under Control —{" "}
            <span className="text-[#f97316]">No Surprises</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-[520px] mx-auto leading-relaxed">
            Dash0's transparent pricing ensures you always know what you're
            paying for. No hidden fees, no guesswork — just predictable costs.
          </p>
        </div>

        {/* Feature rows */}
        <div className="space-y-6">
          {costFeatures.map((feature, index) => (
            <div
              key={feature.pill}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-10 bg-[#111111] border border-[#262626] hover:border-[#2a2a2a] rounded-2xl p-8 md:p-10 transition-all duration-300`}
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

              {/* SVG Visual */}
              <div className="flex-1 w-full rounded-xl overflow-hidden border border-[#2a2a2a]">
                {feature.svg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
