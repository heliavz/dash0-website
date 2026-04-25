import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Features from "@/components/home/Features";
import OpenStandards from "@/components/home/OpenStandards";

export default function Home() {
  return (
    <main className="pt-[88px]">
      <Hero />
      <TrustedBy />
      <Features />
      <OpenStandards />
    </main>
  );
}
