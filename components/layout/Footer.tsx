import Link from "next/link";

const footerLinks = {
  Resources: [
    { label: "Pricing", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Guides", href: "#" },
    { label: "Knowledge", href: "#" },
    { label: "Comparisons", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Trust Center", href: "#" },
    { label: "Security", href: "#" },
  ],
  Compare: [
    { label: "vs Datadog", href: "#" },
    { label: "vs Grafana", href: "#" },
    { label: "vs Dynatrace", href: "#" },
    { label: "vs New Relic", href: "#" },
    { label: "vs Elastic", href: "#" },
    { label: "vs Honeycomb", href: "#" },
    { label: "vs Splunk", href: "#" },
  ],
  Contact: [
    { label: "Contact us", href: "#" },
    { label: "Newsletter", href: "#" },
  ],
};

const socialLinks = ["GitHub", "LinkedIn", "X", "YouTube"];

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-[#0a0a0a] pt-20 pb-10 px-2">
      <div className="w-full px-6">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 pb-14 border-b border-[#262626]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-white font-semibold text-xl tracking-tight">
              dash<span className="text-[#f97316]">0</span>
            </span>
            <p className="mt-4 text-base text-[#8b8b95] leading-relaxed">
              OpenTelemetry-native observability. Simple to switch. Built to
              last.
            </p>
            <div className="flex items-center gap-5 mt-6">
              {socialLinks.map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-base text-[#8b8b95] hover:text-white transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-sm font-semibold tracking-widest text-[#8b8b95] uppercase mb-5">
                {category}
              </p>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-white hover:text-[#a1a1aa] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-10">
          <p className="text-base text-[#8b8b95]">©2026 Dash0 Inc.</p>
          <div className="flex items-center gap-8">
            {[
              "Terms and Conditions",
              "Privacy Policy",
              "Data Processing Agreement",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-base text-[#8b8b95] hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
