import AgentHero from "@/components/agent/AgentHero";
import WhyAgent0 from "@/components/agent/WhyAgent0";
import AgentGuild from "@/components/agent/AgentGuild";
import AgentInAction from "@/components/agent/AgentInAction";
import AgentCTA from "@/components/agent/AgentCTA";

export default function AgentPage() {
  return (
    <main className="pt-[88px]">
      <AgentHero />
      <WhyAgent0 />
      <AgentGuild />
      <AgentInAction />
      <AgentCTA />
    </main>
  );
}
