import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Dash0 — OpenTelemetry-Native Observability",
  description:
    "Dash0 delivers OpenTelemetry-native observability. Logs, metrics, and traces — simple to set up, simple to scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
