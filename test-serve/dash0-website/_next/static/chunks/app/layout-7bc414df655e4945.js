(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    257: function (e, t, a) {
      (Promise.resolve().then(a.t.bind(a, 7960, 23)),
        Promise.resolve().then(a.bind(a, 9828)),
        Promise.resolve().then(a.t.bind(a, 2972, 23)));
    },
    9828: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return g;
        },
      });
      var s = a(7437),
        r = a(2265),
        l = a(2972),
        n = a.n(l),
        i = a(6775);
      let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        c = (e) =>
          e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, a) =>
            a ? a.toUpperCase() : t.toLowerCase(),
          ),
        d = (e) => {
          let t = c(e);
          return t.charAt(0).toUpperCase() + t.slice(1);
        };
      var h = a(2228);
      let x = (e, t) => {
          let a = (0, r.forwardRef)((a, s) => {
            let { className: l, ...n } = a;
            return (0, r.createElement)(h.default, {
              ref: s,
              iconNode: t,
              className: (0, i.z)(
                "lucide-".concat(o(d(e))),
                "lucide-".concat(e),
                l,
              ),
              ...n,
            });
          });
          return ((a.displayName = d(e)), a);
        },
        m = x("chevron-down", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]),
        b = x("search", [
          ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
          ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ]),
        p = x("x", [
          ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
          ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
        ]),
        u = x("menu", [
          ["path", { d: "M4 5h16", key: "1tepv9" }],
          ["path", { d: "M4 12h16", key: "1lakjw" }],
          ["path", { d: "M4 19h16", key: "1djgab" }],
        ]),
        f = {
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
      function g() {
        let [e, t] = (0, r.useState)(!1),
          [a, l] = (0, r.useState)(!1),
          [i, o] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let e = () => o(window.scrollY > 10);
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, r.useEffect)(() => {
            let e = (e) => {
              (e.ctrlKey || e.metaKey) && "k" === e.key && e.preventDefault();
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, []),
          (0, s.jsxs)("nav", {
            className: "fixed top-0 left-0 right-0 z-50",
            children: [
              (0, s.jsxs)("div", {
                className:
                  "announcement-bar py-3 px-6 text-center text-base text-white font-medium",
                children: [
                  "Dash0 Raises ",
                  (0, s.jsx)("span", {
                    className: "font-bold",
                    children: "$110M Series B",
                  }),
                  " at $1B Valuation",
                  " ",
                  (0, s.jsx)("a", {
                    href: "#",
                    className: "underline hover:no-underline ml-1",
                    children: "Read more →",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "px-2 pt-2",
                children: (0, s.jsx)("div", {
                  className:
                    "border border-[#2a2a2a] rounded-xl transition-all duration-200 ".concat(
                      i ? "bg-[#0f0f0f]/95 backdrop-blur-md" : "bg-[#0f0f0f]",
                    ),
                  children: (0, s.jsxs)("div", {
                    className:
                      "w-full h-[64px] flex items-center justify-between gap-6 px-6 relative",
                    children: [
                      (0, s.jsx)(n(), {
                        href: "/",
                        className: "flex items-center gap-2.5 shrink-0 z-10",
                        children: (0, s.jsxs)("span", {
                          className:
                            "text-white font-semibold text-lg tracking-tight",
                          children: [
                            "dash",
                            (0, s.jsx)("span", {
                              className: "text-[#f97316]",
                              children: "0",
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, s.jsxs)("button", {
                                className:
                                  "flex items-center gap-1.5 text-base text-[#c4c4c4] hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-white/5",
                                onMouseEnter: () => l(!0),
                                onMouseLeave: () => l(!1),
                                children: [
                                  "Product",
                                  " ",
                                  (0, s.jsx)(m, {
                                    size: 15,
                                    className:
                                      "transition-transform duration-200 ".concat(
                                        a ? "rotate-180" : "",
                                      ),
                                  }),
                                ],
                              }),
                              a &&
                                (0, s.jsx)("div", {
                                  className:
                                    "absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[520px] bg-[#161616] border border-[#2a2a2a] rounded-xl p-6 shadow-2xl shadow-black/50",
                                  onMouseEnter: () => l(!0),
                                  onMouseLeave: () => l(!1),
                                  children: (0, s.jsxs)("div", {
                                    className: "grid grid-cols-2 gap-6",
                                    children: [
                                      (0, s.jsxs)("div", {
                                        children: [
                                          (0, s.jsx)("p", {
                                            className:
                                              "text-xs font-semibold tracking-widest text-[#8b8b95] uppercase mb-3",
                                            children: "Use Cases",
                                          }),
                                          (0, s.jsx)("ul", {
                                            className: "space-y-1",
                                            children: f.useCases.map((e) =>
                                              (0, s.jsx)(
                                                "li",
                                                {
                                                  children: (0, s.jsx)(n(), {
                                                    href: e.href,
                                                    className:
                                                      "block text-base text-[#a1a1aa] hover:text-white transition-colors py-1.5 px-2 rounded-md hover:bg-white/5",
                                                    children: e.label,
                                                  }),
                                                },
                                                e.label,
                                              ),
                                            ),
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("div", {
                                        children: [
                                          (0, s.jsx)("p", {
                                            className:
                                              "text-xs font-semibold tracking-widest text-[#8b8b95] uppercase mb-3",
                                            children: "Platform Features",
                                          }),
                                          (0, s.jsx)("ul", {
                                            className: "space-y-1",
                                            children: f.platformFeatures.map(
                                              (e) =>
                                                (0, s.jsx)(
                                                  "li",
                                                  {
                                                    children: (0, s.jsx)(n(), {
                                                      href: e.href,
                                                      className:
                                                        "block text-base text-[#a1a1aa] hover:text-white transition-colors py-1.5 px-2 rounded-md hover:bg-white/5",
                                                      children: e.label,
                                                    }),
                                                  },
                                                  e.label,
                                                ),
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                          ["Pricing", "Docs"].map((e) =>
                            (0, s.jsx)(
                              n(),
                              {
                                href: "#",
                                className:
                                  "text-base text-[#c4c4c4] hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-white/5",
                                children: e,
                              },
                              e,
                            ),
                          ),
                          (0, s.jsxs)("button", {
                            className:
                              "flex items-center gap-1.5 text-base text-[#c4c4c4] hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-white/5",
                            children: [
                              "Resources ",
                              (0, s.jsx)(m, { size: 15 }),
                            ],
                          }),
                          (0, s.jsxs)("button", {
                            className:
                              "flex items-center gap-1.5 text-base text-[#c4c4c4] hover:text-white transition-colors px-4 py-2 rounded-md hover:bg-white/5",
                            children: ["About ", (0, s.jsx)(m, { size: 15 })],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "hidden md:flex items-center gap-3",
                        children: [
                          (0, s.jsxs)("button", {
                            className:
                              "flex items-center gap-2 text-sm text-[#8b8b95] hover:text-white transition-colors bg-white/5 hover:bg-white/10 border border-[#2a2a2a] rounded-md px-3 py-2",
                            children: [
                              (0, s.jsx)(b, { size: 15 }),
                              (0, s.jsx)("span", {
                                className: "hidden lg:inline",
                                children: "Search",
                              }),
                              (0, s.jsx)("kbd", {
                                className:
                                  "hidden lg:inline text-xs bg-[#2a2a2a] px-1.5 py-0.5 rounded font-mono",
                                children: "Ctrl K",
                              }),
                            ],
                          }),
                          (0, s.jsx)(n(), {
                            href: "#",
                            className:
                              "text-base text-[#c4c4c4] hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5",
                            children: "Sign In",
                          }),
                          (0, s.jsx)(n(), {
                            href: "#",
                            className:
                              "text-base text-[#c4c4c4] hover:text-white transition-colors px-4 py-2 border border-[#2a2a2a] rounded-lg hover:border-[#3a3a3a]",
                            children: "Book a Demo",
                          }),
                          (0, s.jsx)(n(), {
                            href: "#",
                            className:
                              "btn-gradient text-base font-medium text-white px-5 py-2 rounded-lg transition-colors",
                            children: "Start Free Trial",
                          }),
                        ],
                      }),
                      (0, s.jsx)("button", {
                        className: "md:hidden text-[#a1a1aa] hover:text-white",
                        onClick: () => t(!e),
                        children: e
                          ? (0, s.jsx)(p, { size: 22 })
                          : (0, s.jsx)(u, { size: 22 }),
                      }),
                    ],
                  }),
                }),
              }),
              e &&
                (0, s.jsxs)("div", {
                  className:
                    "md:hidden bg-[#111111] border-t border-[#262626] px-6 py-4 space-y-3",
                  children: [
                    (0, s.jsx)("p", {
                      className:
                        "text-xs font-semibold tracking-widest text-[#8b8b95] uppercase",
                      children: "Use Cases",
                    }),
                    f.useCases.map((e) =>
                      (0, s.jsx)(
                        n(),
                        {
                          href: e.href,
                          className:
                            "block text-base text-[#a1a1aa] hover:text-white py-1",
                          children: e.label,
                        },
                        e.label,
                      ),
                    ),
                    (0, s.jsx)("p", {
                      className:
                        "text-xs font-semibold tracking-widest text-[#8b8b95] uppercase pt-2",
                      children: "Platform Features",
                    }),
                    f.platformFeatures.map((e) =>
                      (0, s.jsx)(
                        n(),
                        {
                          href: e.href,
                          className:
                            "block text-base text-[#a1a1aa] hover:text-white py-1",
                          children: e.label,
                        },
                        e.label,
                      ),
                    ),
                    (0, s.jsxs)("div", {
                      className:
                        "pt-4 flex flex-col gap-3 border-t border-[#262626]",
                      children: [
                        ["Pricing", "Docs", "Resources", "About"].map((e) =>
                          (0, s.jsx)(
                            n(),
                            {
                              href: "#",
                              className:
                                "text-base text-[#a1a1aa] hover:text-white",
                              children: e,
                            },
                            e,
                          ),
                        ),
                        (0, s.jsx)(n(), {
                          href: "#",
                          className:
                            "btn-gradient text-base font-medium text-white px-4 py-2.5 rounded-lg text-center mt-2",
                          children: "Start Free Trial",
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          })
        );
      }
    },
    7960: function () {},
  },
  function (e) {
    (e.O(0, [587, 717, 971, 117, 744], function () {
      return e((e.s = 257));
    }),
      (_N_E = e.O()));
  },
]);
