import type { Metadata } from "next";
import AgentHero from "@/components/agent/AgentHero";
import WhyAgent0 from "@/components/agent/WhyAgent0";
import AgentGuild from "@/components/agent/AgentGuild";
import AgentInAction from "@/components/agent/AgentInAction";
import AgentCTA from "@/components/agent/AgentCTA";

export const metadata: Metadata = {
  title: "Agent0 — AI SRE Agents for Observability",
  description:
    "Meet Agent0 — Dash0's agentic AI platform. A team of specialized AI agents for incident triage, query building, instrumentation, and more.",
  openGraph: {
    title: "Agent0 — AI SRE Agents for Observability",
    description:
      "A team of specialized AI agents — built directly into Dash0 — that transform how engineers work with observability.",
  },
};

export default function AgentPage() {
  return (
    <main className="pt-[110px]">
      <AgentHero />
      <WhyAgent0 />
      <AgentGuild />
      <AgentInAction />
      <AgentCTA />
    </main>
  );
}
