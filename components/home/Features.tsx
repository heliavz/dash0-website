const featureSVGs = {
  Logs: (
    <svg
      viewBox="0 0 400 220"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="400" height="220" fill="#0d0d0d" />
      {/* Search bar */}
      <rect
        x="20"
        y="20"
        width="360"
        height="32"
        rx="6"
        fill="#161616"
        stroke="#2a2a2a"
        strokeWidth="1"
      />
      <circle
        cx="40"
        cy="36"
        r="8"
        fill="none"
        stroke="#f97316"
        strokeWidth="1.5"
      />
      <line
        x1="46"
        y1="42"
        x2="52"
        y2="48"
        stroke="#f97316"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="60" y="30" width="120" height="12" rx="3" fill="#2a2a2a" />
      <rect
        x="320"
        y="28"
        width="50"
        height="16"
        rx="4"
        fill="#f97316"
        opacity="0.2"
      />
      <text
        x="345"
        y="40"
        textAnchor="middle"
        fill="#f97316"
        fontSize="9"
        fontFamily="monospace"
      >
        FILTER
      </text>
      {/* Log rows */}
      {[
        { y: 68, level: "INFO", color: "#22c55e", width: 180 },
        { y: 90, level: "WARN", color: "#f59e0b", width: 220 },
        { y: 112, level: "ERROR", color: "#ef4444", width: 160 },
        { y: 134, level: "INFO", color: "#22c55e", width: 200 },
        { y: 156, level: "INFO", color: "#22c55e", width: 140 },
        { y: 178, level: "DEBUG", color: "#71717a", width: 190 },
        { y: 200, level: "ERROR", color: "#ef4444", width: 170 },
      ].map((row, i) => (
        <g key={i}>
          <rect
            x="20"
            y={row.y - 10}
            width="360"
            height="18"
            rx="3"
            fill={i % 2 === 0 ? "#111111" : "transparent"}
          />
          <rect
            x="24"
            y={row.y - 7}
            width="36"
            height="12"
            rx="3"
            fill={row.color}
            opacity="0.15"
          />
          <text
            x="42"
            y={row.y + 3}
            textAnchor="middle"
            fill={row.color}
            fontSize="8"
            fontFamily="monospace"
            fontWeight="bold"
          >
            {row.level}
          </text>
          <rect
            x="68"
            y={row.y - 4}
            width="60"
            height="8"
            rx="2"
            fill="#2a2a2a"
          />
          <rect
            x="136"
            y={row.y - 4}
            width={row.width}
            height="8"
            rx="2"
            fill="#1f1f1f"
          />
        </g>
      ))}
    </svg>
  ),
  Metrics: (
    <svg
      viewBox="0 0 400 220"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="220" fill="#0d0d0d" />
      {/* Metric cards */}
      {[
        {
          x: 20,
          label: "Requests/s",
          value: "2.4K",
          trend: "+12%",
          color: "#22c55e",
        },
        {
          x: 120,
          label: "Error Rate",
          value: "0.02%",
          trend: "-8%",
          color: "#22c55e",
        },
        {
          x: 220,
          label: "P99 Latency",
          value: "124ms",
          trend: "+3%",
          color: "#ef4444",
        },
        {
          x: 320,
          label: "Uptime",
          value: "99.9%",
          trend: "",
          color: "#22c55e",
        },
      ].map((card, i) => (
        <g key={i}>
          <rect
            x={card.x}
            y="16"
            width="88"
            height="52"
            rx="6"
            fill="#161616"
            stroke="#2a2a2a"
            strokeWidth="1"
          />
          <text
            x={card.x + 8}
            y="30"
            fill="#71717a"
            fontSize="8"
            fontFamily="monospace"
          >
            {card.label}
          </text>
          <text
            x={card.x + 8}
            y="48"
            fill="white"
            fontSize="14"
            fontFamily="monospace"
            fontWeight="bold"
          >
            {card.value}
          </text>
          {card.trend && (
            <text
              x={card.x + 8}
              y="62"
              fill={card.color}
              fontSize="8"
              fontFamily="monospace"
            >
              {card.trend}
            </text>
          )}
        </g>
      ))}
      {/* Main chart area */}
      <rect
        x="20"
        y="80"
        width="360"
        height="124"
        rx="6"
        fill="#161616"
        stroke="#2a2a2a"
        strokeWidth="1"
      />
      {/* Y axis lines */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="40"
          y1={96 + i * 28}
          x2="368"
          y2={96 + i * 28}
          stroke="#1f1f1f"
          strokeWidth="1"
        />
      ))}
      {/* Chart line - metrics */}
      <defs>
        <linearGradient id="metricGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M40,180 C70,170 90,140 120,135 C150,130 170,145 200,120 C230,95 250,130 280,110 C310,90 340,100 368,88"
        fill="none"
        stroke="#f97316"
        strokeWidth="2"
      />
      <path
        d="M40,180 C70,170 90,140 120,135 C150,130 170,145 200,120 C230,95 250,130 280,110 C310,90 340,100 368,88 L368,196 L40,196 Z"
        fill="url(#metricGrad)"
      />
      {/* Second line */}
      <path
        d="M40,160 C70,165 90,155 120,158 C150,161 170,150 200,155 C230,160 250,145 280,150 C310,155 340,148 368,145"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1.5"
        opacity="0.5"
      />
    </svg>
  ),
  Traces: (
    <svg
      viewBox="0 0 400 220"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="220" fill="#0d0d0d" />
      {/* Header */}
      <rect
        x="20"
        y="16"
        width="360"
        height="24"
        rx="4"
        fill="#161616"
        stroke="#2a2a2a"
        strokeWidth="1"
      />
      <rect x="28" y="22" width="80" height="12" rx="3" fill="#2a2a2a" />
      <rect
        x="280"
        y="22"
        width="40"
        height="12"
        rx="3"
        fill="#f97316"
        opacity="0.2"
      />
      <text
        x="300"
        y="32"
        textAnchor="middle"
        fill="#f97316"
        fontSize="8"
        fontFamily="monospace"
      >
        124ms
      </text>
      {/* Trace spans - waterfall */}
      {[
        {
          y: 52,
          x1: 20,
          width: 360,
          label: "GET /api/checkout",
          color: "#f97316",
          depth: 0,
        },
        {
          y: 72,
          x1: 40,
          width: 280,
          label: "auth.validate()",
          color: "#3b82f6",
          depth: 1,
        },
        {
          y: 92,
          x1: 40,
          width: 200,
          label: "db.users.find()",
          color: "#8b5cf6",
          depth: 1,
        },
        {
          y: 112,
          x1: 60,
          width: 140,
          label: "cache.get()",
          color: "#8b5cf6",
          depth: 2,
        },
        {
          y: 132,
          x1: 40,
          width: 320,
          label: "payment.process()",
          color: "#3b82f6",
          depth: 1,
        },
        {
          y: 152,
          x1: 60,
          width: 240,
          label: "stripe.charge()",
          color: "#ef4444",
          depth: 2,
        },
        {
          y: 172,
          x1: 40,
          width: 180,
          label: "db.orders.insert()",
          color: "#8b5cf6",
          depth: 1,
        },
        {
          y: 192,
          x1: 60,
          width: 120,
          label: "cache.invalidate()",
          color: "#22c55e",
          depth: 2,
        },
      ].map((span, i) => (
        <g key={i}>
          <rect
            x={span.x1}
            y={span.y}
            width={span.width}
            height="14"
            rx="3"
            fill={span.color}
            opacity="0.15"
          />
          <rect
            x={span.x1}
            y={span.y}
            width="4"
            height="14"
            rx="1"
            fill={span.color}
            opacity="0.8"
          />
          <text
            x={span.x1 + 10}
            y={span.y + 10}
            fill="#a1a1aa"
            fontSize="8"
            fontFamily="monospace"
          >
            {span.label}
          </text>
        </g>
      ))}
    </svg>
  ),
  Dashboards: (
    <svg
      viewBox="0 0 400 220"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="220" fill="#0d0d0d" />
      {/* Top row - 3 small panels */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={20 + i * 124}
            y="16"
            width="112"
            height="60"
            rx="6"
            fill="#161616"
            stroke="#2a2a2a"
            strokeWidth="1"
          />
          <text
            x={28 + i * 124}
            y="30"
            fill="#71717a"
            fontSize="8"
            fontFamily="monospace"
          >
            {["CPU Usage", "Memory", "Network I/O"][i]}
          </text>
          <text
            x={28 + i * 124}
            y="50"
            fill="white"
            fontSize="18"
            fontFamily="monospace"
            fontWeight="bold"
          >
            {["72%", "4.2GB", "1.2GB"][i]}
          </text>
        </g>
      ))}
      {/* Bottom left - bar chart */}
      <rect
        x="20"
        y="88"
        width="220"
        height="116"
        rx="6"
        fill="#161616"
        stroke="#2a2a2a"
        strokeWidth="1"
      />
      <text x="30" y="104" fill="#71717a" fontSize="8" fontFamily="monospace">
        Request Distribution
      </text>
      {[
        { x: 35, h: 60, color: "#f97316" },
        { x: 65, h: 40, color: "#f97316" },
        { x: 95, h: 75, color: "#f97316" },
        { x: 125, h: 50, color: "#f97316" },
        { x: 155, h: 85, color: "#f97316" },
        { x: 185, h: 45, color: "#f97316" },
        { x: 215, h: 65, color: "#f97316" },
      ].map((bar, i) => (
        <rect
          key={i}
          x={bar.x}
          y={188 - bar.h}
          width="20"
          height={bar.h}
          rx="3"
          fill={bar.color}
          opacity="0.4"
        />
      ))}
      {/* Bottom right - donut */}
      <rect
        x="252"
        y="88"
        width="128"
        height="116"
        rx="6"
        fill="#161616"
        stroke="#2a2a2a"
        strokeWidth="1"
      />
      <text x="262" y="104" fill="#71717a" fontSize="8" fontFamily="monospace">
        Status Codes
      </text>
      <circle
        cx="316"
        cy="158"
        r="36"
        fill="none"
        stroke="#1f1f1f"
        strokeWidth="12"
      />
      <circle
        cx="316"
        cy="158"
        r="36"
        fill="none"
        stroke="#f97316"
        strokeWidth="12"
        strokeDasharray="170 56"
        strokeDashoffset="28"
      />
      <circle
        cx="316"
        cy="158"
        r="36"
        fill="none"
        stroke="#22c55e"
        strokeWidth="12"
        strokeDasharray="40 186"
        strokeDashoffset="-142"
      />
      <circle
        cx="316"
        cy="158"
        r="36"
        fill="none"
        stroke="#ef4444"
        strokeWidth="12"
        strokeDasharray="16 210"
        strokeDashoffset="-182"
      />
      <text
        x="316"
        y="162"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontFamily="monospace"
        fontWeight="bold"
      >
        2xx
      </text>
    </svg>
  ),
  Integrations: (
    <svg
      viewBox="0 0 400 220"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="220" fill="#0d0d0d" />
      {/* Center node - Dash0 */}
      <circle
        cx="200"
        cy="110"
        r="28"
        fill="#161616"
        stroke="#f97316"
        strokeWidth="1.5"
      />
      <text
        x="200"
        y="107"
        textAnchor="middle"
        fill="white"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="bold"
      >
        dash0
      </text>
      <text
        x="200"
        y="119"
        textAnchor="middle"
        fill="#f97316"
        fontSize="7"
        fontFamily="monospace"
      >
        OTel native
      </text>
      {/* Satellite nodes */}
      {[
        { x: 60, y: 50, label: "Kubernetes", color: "#3b82f6" },
        { x: 340, y: 50, label: "Prometheus", color: "#f59e0b" },
        { x: 50, y: 170, label: "AWS", color: "#f97316" },
        { x: 350, y: 170, label: "Grafana", color: "#f97316" },
        { x: 200, y: 20, label: "GitHub", color: "#a1a1aa" },
        { x: 200, y: 200, label: "PagerDuty", color: "#22c55e" },
        { x: 80, y: 110, label: "Datadog", color: "#71717a" },
        { x: 320, y: 110, label: "Slack", color: "#8b5cf6" },
      ].map((node, i) => (
        <g key={i}>
          <line
            x1={node.x}
            y1={node.y}
            x2="200"
            y2="110"
            stroke="#2a2a2a"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r="18"
            fill="#161616"
            stroke={node.color}
            strokeWidth="1"
            opacity="0.8"
          />
          <text
            x={node.x}
            y={node.y + 4}
            textAnchor="middle"
            fill="#a1a1aa"
            fontSize="7"
            fontFamily="monospace"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  ),
};

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
    <section className="py-24 border-t border-[#262626]">
      <div className="max-w-[1440px] mx-auto px-12">
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
                {featureSVGs[feature.pill as keyof typeof featureSVGs]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
