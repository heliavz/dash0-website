import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Features from "@/components/home/Features";
import OpenStandards from "@/components/home/OpenStandards";
import CostControl from "@/components/home/CostControl";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="pt-[88px]">
      <Hero />
      <TrustedBy />
      <Features />
      <OpenStandards />
      <CostControl />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
