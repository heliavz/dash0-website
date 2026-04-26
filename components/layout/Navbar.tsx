"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "lucide-react/dist/esm/icons/menu.mjs";
import X from "lucide-react/dist/esm/icons/x.mjs";
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down.mjs";
import Search from "lucide-react/dist/esm/icons/search.mjs";

const productLinks = {
  useCases: [
    { label: "Infrastructure Monitoring", href: "#" },
    { label: "Log Management", href: "#" },
    { label: "Application Performance Management", href: "#" },
    { label: "Distributed Tracing", href: "#" },
    { label: "Kubernetes Monitoring", href: "#" },
    { label: "Website Monitoring", href: "#" },
    { label: "Synthetic Monitoring", href: "#" },
    { label: "Google Cloud Monitoring", href: "#" },
  ],
  platformFeatures: [
    { label: "AI SRE Agents", href: "/ai-sre-agent" },
    { label: "Dashboards", href: "#" },
    { label: "Alerting", href: "#" },
    { label: "Service Map", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "Transparent Cost", href: "#" },
    { label: "Observability as Code", href: "#" },
  ],
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement bar */}
      <div className="announcement-bar py-3 px-6 text-center text-base text-white font-medium">
        Dash0 Raises <span className="font-bold">$110M Series B</span> at $1B
        Valuation{" "}
        <a href="#" className="underline hover:no-underline ml-1">
          Read more →
        </a>
      </div>

      {/* Main nav */}
      <div className="px-2 pt-2">
        <div
          className={`border border-[#2a2a2a] rounded-xl transition-all duration-200 ${
            scrolled ? "bg-[#0f0f0f]/95 backdrop-blur-md" : "bg-[#0f0f0f]"
          }`}
        >
          <div className="w-full h-[64px] flex items-center justify-between gap-6 px-6 relative">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 z-10">
              <span className="text-white font-semibold text-lg tracking-tight">
                dash<span className="text-[#f97316]">0</span>
              </span>
            </Link>

            {/* Desktop nav links — truly centered */}
            <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              <div className="relative">
                <button
                  aria-haspopup="menu"
                  aria-expanded={productOpen}
                  className="flex items-center gap-1.5 text-base text-[#c4c4c4] hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-white/5"
                  onMouseEnter={() => setProductOpen(true)}
                  onMouseLeave={() => setProductOpen(false)}
                >
                  Product{" "}
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      productOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {productOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[520px] bg-[#161616] border border-[#2a2a2a] rounded-xl p-6 shadow-2xl shadow-black/50"
                    onMouseEnter={() => setProductOpen(true)}
                    onMouseLeave={() => setProductOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-semibold tracking-widest text-[#8b8b95] uppercase mb-3">
                          Use Cases
                        </p>
                        <ul className="space-y-1">
                          {productLinks.useCases.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                className="block text-base text-[#a1a1aa] hover:text-white transition-colors py-1.5 px-2 rounded-md hover:bg-white/5"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-widest text-[#8b8b95] uppercase mb-3">
                          Platform Features
                        </p>
                        <ul className="space-y-1">
                          {productLinks.platformFeatures.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                className="block text-base text-[#a1a1aa] hover:text-white transition-colors py-1.5 px-2 rounded-md hover:bg-white/5"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {["Pricing", "Docs"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-base text-[#c4c4c4] hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-white/5"
                >
                  {item}
                </Link>
              ))}

              <button
                aria-haspopup="menu"
                className="flex items-center gap-1.5 text-base text-[#c4c4c4] hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-white/5"
              >
                Resources <ChevronDown size={15} />
              </button>
              <button
                aria-haspopup="menu"
                className="flex items-center gap-1.5 text-base text-[#c4c4c4] hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-white/5"
              >
                About <ChevronDown size={15} />
              </button>
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-3">
              <button
                aria-label="Search documentation (Ctrl+K)"
                className="flex items-center gap-2 text-sm text-[#8b8b95] hover:text-white transition-colors bg-white/5 hover:bg-white/10 border border-[#2a2a2a] rounded-md px-3 py-2"
              >
                <Search size={15} aria-hidden="true" />
                <span className="hidden lg:inline">Search</span>
                <kbd className="hidden lg:inline text-xs bg-[#2a2a2a] px-1.5 py-0.5 rounded font-mono">
                  Ctrl K
                </kbd>
              </button>

              <Link
                href="#"
                className="text-base text-[#c4c4c4] hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
              >
                Sign In
              </Link>
              <Link
                href="#"
                className="text-base text-[#c4c4c4] hover:text-white transition-colors px-4 py-2 border border-[#2a2a2a] rounded-lg hover:border-[#3a3a3a]"
              >
                Book a Demo
              </Link>
              <Link
                href="#"
                className="btn-gradient text-base font-medium text-white px-5 py-2 rounded-lg transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="md:hidden text-[#a1a1aa] hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X size={22} aria-hidden="true" />
              ) : (
                <Menu size={22} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111111] border-t border-[#262626] px-6 py-4 space-y-3">
          <p className="text-xs font-semibold tracking-widest text-[#8b8b95] uppercase">
            Use Cases
          </p>
          {productLinks.useCases.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-base text-[#a1a1aa] hover:text-white py-1"
            >
              {link.label}
            </Link>
          ))}
          <p className="text-xs font-semibold tracking-widest text-[#8b8b95] uppercase pt-2">
            Platform Features
          </p>
          {productLinks.platformFeatures.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-base text-[#a1a1aa] hover:text-white py-1"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3 border-t border-[#262626]">
            {["Pricing", "Docs", "Resources", "About"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-base text-[#a1a1aa] hover:text-white"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#"
              className="btn-gradient text-base font-medium text-white px-4 py-2.5 rounded-lg text-center mt-2"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
