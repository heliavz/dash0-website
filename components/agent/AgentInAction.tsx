import CircuitGrid from "@/components/ui/CircuitGrid";
import AnimatedRow from "@/components/ui/AnimatedRow";

const actions = [
  {
    name: "The Seeker",
    role: "Root Cause in Seconds",
    color: "#3b82f6",
    textColor: "#3b82f6",
    icon: "/dash0-website/images/agents/seeker.svg",
    scenario:
      "An engineer receives an alert and asks Agent0 what's going on. The Seeker analyzes recent traces, logs, and metrics to explain the issue — surfacing the affected service, related changes, and likely root cause in moments.",
    image: "/dash0-website/images/agents/seeker-action.png",
  },
  {
    name: "The Oracle",
    role: "From Question to Query",
    color: "#f97316",
    textColor: "#f97316",
    icon: "/dash0-website/images/agents/oracle.svg",
    scenario:
      'An engineer types: "Show me 95th percentile latency for checkout over the last hour." The Oracle instantly generates the correct PromQL, explains what it does, and shows the resulting graph — no syntax errors, no guesswork.',
    image: "/dash0-website/images/agents/oracle-action.png",
  },
  {
    name: "The Pathfinder",
    role: "Onboard in Minutes",
    color: "#22c55e",
    textColor: "#22c55e",
    icon: "/dash0-website/images/agents/pathfinder.svg",
    scenario:
      "A developer asks Agent0 how to instrument a new Java service. The Pathfinder uses Dash0's integrations and documentation to provide clear, step-by-step guidance — helping the team get telemetry flowing in minutes, not hours.",
    image: "/dash0-website/images/agents/pathfinder-action.png",
  },
  {
    name: "The Threadweaver",
    role: "Stories Behind the Spans",
    color: "#14b8a6",
    textColor: "#14b8a6",
    icon: "/dash0-website/images/agents/threadweaver.svg",
    scenario:
      "A developer wonders why checkout latency keeps spiking intermittently. They ask Agent0 to analyze recent traces. The Threadweaver stitches together the full journey across services, highlighting where the slowdown begins.",
    image: "/dash0-website/images/agents/threadweaver-action.png",
  },
  {
    name: "The Artist",
    role: "Dashboards That Build Themselves",
    color: "#94a3b8",
    textColor: "#94a3b8",
    icon: "/dash0-website/images/agents/artist.svg",
    scenario:
      'A developer asks Agent0 to "Create a dashboard and alerts for my ProductCatalog service." The Artist analyzes existing telemetry, then generates a clean, best-practice dashboard with latency, error rate, and throughput.',
    image: "/dash0-website/images/agents/artist-action.png",
  },
  {
    name: "The Lookout",
    role: "Find What's Breaking User Experience",
    color: "#125f12",
    textColor: "#598f59",
    icon: "/dash0-website/images/agents/lookout.svg",
    scenario:
      "A team notices rising abandonment rates. They ask Agent0 which sessions had performance issues during checkout. The Lookout surfaces sessions with poor Web Vitals, linking frontend slowness to a payment API bottleneck.",
    image: "/dash0-website/images/agents/lookout-action.png",
  },
];

export default function AgentInAction() {
  return (
    <section className="relative py-24 border-b border-[#1f1f1f] bg-[#0d0d0d] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <CircuitGrid />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Agent0 <span className="text-[#f97316]">in Action</span>
          </h2>
          <p className="text-xl text-[#a1a1aa] max-w-[560px] mx-auto leading-relaxed">
            Agent0 turns observability from looking for a needle in a haystack
            into a guided experience. Each agent brings specialized expertise —
            helping you troubleshoot, query, instrument, and visualize faster
            than ever.
          </p>
        </div>

        <div className="space-y-8">
          {actions.map((action, index) => (
            <AnimatedRow key={action.name} delay={index * 0.05}>
              <div
                className={`group flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 bg-[#111111] border border-[#1f1f1f] hover:border-[#2a2a2a] rounded-2xl p-10 transition-colors duration-300`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: action.color + "20",
                        border: `1px solid ${action.color}40`,
                      }}
                    >
                      <img
                        src={action.icon}
                        alt={action.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold tracking-widest uppercase"
                        style={{ color: action.textColor }}
                      >
                        {action.name}
                      </p>
                      <h3 className="text-2xl font-bold text-white">
                        {action.role}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg text-[#a1a1aa] leading-relaxed">
                    {action.scenario}
                  </p>
                </div>

                <div
                  className="flex-1 w-full rounded-xl overflow-hidden border-2 border-[#2a2a2a] transition-all duration-300 group-hover:border-[var(--agent-color)] group-hover:shadow-[0_0_40px_var(--agent-glow)]"
                  style={
                    {
                      "--agent-color": action.color,
                      "--agent-glow": action.color + "40",
                    } as React.CSSProperties
                  }
                >
                  <div className="relative w-full aspect-[4/3] bg-[#0d0d0d] flex items-center justify-center">
                    <img
                      src={action.image}
                      alt={`${action.name} — ${action.role}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </AnimatedRow>
          ))}
        </div>
      </div>
    </section>
  );
}
