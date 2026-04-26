import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dash0 — OpenTelemetry-Native Observability",
    template: "%s · Dash0",
  },
  description:
    "Dash0 delivers OpenTelemetry-native observability. Logs, metrics, and traces — simple to set up, simple to scale. No vendor lock-in.",
  keywords: [
    "observability",
    "opentelemetry",
    "logs",
    "metrics",
    "traces",
    "monitoring",
    "apm",
    "promql",
    "dash0",
  ],
  authors: [{ name: "Dash0" }],
  openGraph: {
    type: "website",
    title: "Dash0 — OpenTelemetry-Native Observability",
    description:
      "Logs, metrics, and traces — simple to set up, simple to scale. No vendor lock-in.",
    siteName: "Dash0",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dash0 — OpenTelemetry-Native Observability",
    description:
      "Logs, metrics, and traces — simple to set up, simple to scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
