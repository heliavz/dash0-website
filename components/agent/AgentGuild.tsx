const agents = [
  {
    name: "The Seeker",
    role: "Troubleshooting & Incident Triage",
    color: "#3b82f6",
    textColor: "#3b82f6",
    icon: "/dash0-website/images/agents/seeker.svg",
    quote:
      "No anomaly can hide. The Seeker traces every ripple in your system, hunts down root causes, and surfaces what others can't see.",
    description:
      "The Seeker acts as your on-call wingman — surfacing what others can't see and guiding you through incident triage with speed and precision.",
  },
  {
    name: "The Oracle",
    role: "PromQL Query Assistant",
    color: "#f97316",
    textColor: "#f97316",
    icon: "/dash0-website/images/agents/oracle.svg",
    quote:
      "The Oracle speaks the language of PromQL fluently. Ask, and it reveals the logic behind the query — with clarity and insight.",
    description:
      "Ask in plain language. Get valid, optimized PromQL queries instantly. The Oracle explains query logic and helps you move from guesswork to precision.",
  },
  {
    name: "The Pathfinder",
    role: "Onboarding & Instrumentation Guide",
    color: "#22c55e",
    textColor: "#22c55e",
    icon: "/dash0-website/images/agents/pathfinder.svg",
    quote:
      "A trusted guide for every new journey. The Pathfinder leads your apps into the world of OpenTelemetry and Dash0 — step by step.",
    description:
      "Instrument apps and connect telemetry in minutes — not weeks. The Pathfinder walks you step-by-step through OpenTelemetry setup and Dash0 integration.",
  },
  {
    name: "The Threadweaver",
    role: "Trace Analyst & Narrative Builder",
    color: "#14b8a6",
    textColor: "#14b8a6",
    icon: "/dash0-website/images/agents/threadweaver.svg",
    quote:
      "The Threadweaver connects every span like strands of fate — revealing how your system's stories truly unfold.",
    description:
      "Weave spans into understanding. The Threadweaver transforms complex traces into clear cause-and-effect chains, uncovering bottlenecks and hidden dependencies.",
  },
  {
    name: "The Artist",
    role: "Dashboard & Alert Builder",
    color: "#94a3b8",
    textColor: "#94a3b8",
    icon: "/dash0-website/images/agents/artist.svg",
    quote:
      "The Artist shapes data into vision. With steady hands, it designs dashboards and creates alert rules that bring order to the chaos.",
    description:
      "Turn signals into stories. The Artist designs dashboards and alert rules that bring clarity to the most complex systems — automatically.",
  },
  {
    name: "The Lookout",
    role: "Web Performance & User Experience",
    color: "#125f12",
    textColor: "#709f70",
    icon: "/dash0-website/images/agents/lookout.svg",
    quote:
      "The Lookout watches over every user's journey — tracking Web Vitals, JavaScript errors, and session flows to reveal what real users experience.",
    description:
      "Transform web analytics into actionable insights. The Lookout analyzes frontend performance, correlates user behavior with backend issues, and helps you optimize experiences.",
  },
];

export default function AgentGuild() {
  return (
    <section className="py-24 border-b border-[#262626]">
      <div className="max-w-[1440px] mx-auto px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the <span className="text-[#f97316]">Agent0 Guild</span>
          </h2>
          <p className="text-xl text-[#a1a1aa] max-w-[560px] mx-auto leading-relaxed">
            Your built-in observability experts — each focused on a single
            mission.
          </p>
        </div>

        {/* Agent cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="bg-[#111111] border border-[#262626] hover:border-[#2a2a2a] rounded-2xl p-8 transition-colors duration-300 flex flex-col items-center text-center"
              style={{ borderTopColor: agent.color + "40" }}
            >
              {/* Icon */}
              <div className="mb-6 w-20 h-20 flex items-center justify-center">
                <img
                  src={agent.icon}
                  alt={agent.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Role pill */}
              <span
                className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                style={{
                  color: agent.textColor,
                  backgroundColor: agent.color + "15",
                  border: `1px solid ${agent.color}30`,
                }}
              >
                {agent.role}
              </span>

              {/* Name */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {agent.name}
              </h3>

              {/* Quote */}
              <p className="text-base italic text-[#8b8b95] leading-relaxed mb-4">
                "{agent.quote}"
              </p>

              {/* Description */}
              <p className="text-base text-[#a1a1aa] leading-relaxed">
                {agent.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
