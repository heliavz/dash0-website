const pillars = [
  {
    icon: (
      <svg
        viewBox="0 0 50 50"
        className="w-16 h-16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="18" r="8" fill="#f97316" />
        <path
          d="M10 42c0-8.284 6.716-15 15-15s15 6.716 15 15"
          stroke="#f97316"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="38" cy="20" r="5" fill="#f97316" opacity="0.6" />
        <path
          d="M43 34c0-5.523-4.477-10-10-10"
          stroke="#f97316"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    ),
    headline: "Built to Empower Engineers",
    description:
      "Agent0 enhances human expertise. It doesn't guess — it guides. Each agent works with your telemetry, in context, and shows exactly which data and tools it used.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 50 50"
        className="w-16 h-16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="8"
          y="8"
          width="34"
          height="34"
          rx="4"
          fill="#f97316"
          opacity="0.15"
        />
        <rect
          x="8"
          y="8"
          width="34"
          height="34"
          rx="4"
          stroke="#f97316"
          strokeWidth="2"
        />
        <line
          x1="16"
          y1="18"
          x2="34"
          y2="18"
          stroke="#f97316"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="25"
          x2="34"
          y2="25"
          stroke="#f97316"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="32"
          x2="26"
          y2="32"
          stroke="#f97316"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="38" cy="38" r="8" fill="#f97316" />
        <path
          d="M34 38l3 3 5-5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    headline: "Explainable. Transparent. Secure.",
    description:
      "Agent0 is deeply integrated inside Dash0. You always see what the agent did, how it reasoned, and which telemetry powered the insight. No black boxes.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 50 50"
        className="w-16 h-16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 35l8-12 6 8 6-16 6 10 4-6"
          stroke="#f97316"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="40" cy="14" r="6" fill="#f97316" />
        <path
          d="M37 14l2 2 4-4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    headline: "Force Multiplier for Your Team",
    description:
      "By removing troubleshooting bottlenecks and query barriers, Agent0 empowers every developer to act like a senior engineer — freeing experts to focus on deeper challenges.",
  },
];

export default function WhyAgent0() {
  return (
    <section className="py-24 border-b border-[#262626] bg-[#0e0e0e]">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why <span className="text-[#f97316]">Agent0</span>
          </h2>
          <p className="text-xl text-[#a1a1aa] max-w-[560px] mx-auto leading-relaxed">
            Agent0 brings clarity and speed to engineers at all levels of
            expertise — turning complex observability tasks into guided,
            explainable workflows.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.headline}
              className="bg-[#212121] border border-[#262626] hover:border-[#2a2a2a] rounded-2xl p-10 transition-colors duration-300 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-8">{pillar.icon}</div>

              {/* Text */}
              <h3 className="text-xl font-bold text-white mb-4">
                {pillar.headline}
              </h3>
              <p className="text-base text-[#a1a1aa] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
