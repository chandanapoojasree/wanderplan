import { e as useInternetIdentity, f as useQueryClient, j as jsxRuntimeExports, N as Navigate, L as Link } from "./index-B3kq8tww.js";
import { c as createLucideIcon, L as Layout, m as motion, B as Button } from "./Layout-Bo9rvvdz.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const TRUST_POINTS = [
  { icon: Shield, text: "No password required — fully passwordless" },
  { icon: Zap, text: "Instant sign-in with Internet Identity" },
  { icon: Sparkles, text: "Your data stays private and secure" }
];
function LoginPage() {
  const { login, isAuthenticated, isInitializing, isLoggingIn } = useInternetIdentity();
  const queryClient = useQueryClient();
  if (isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/dashboard" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { noTopPad: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen grid md:grid-cols-2", "data-ocid": "login.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative hidden md:flex flex-col justify-end overflow-hidden min-h-screen",
        style: {
          backgroundImage: `url('/assets/generated/amalfi-coast.dim_800x600.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 p-10 pb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3, duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs font-medium uppercase tracking-widest mb-3", children: "WanderPlan" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl font-bold text-white leading-tight mb-4", children: [
                  "Every great journey",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "starts with a plan."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm max-w-xs leading-relaxed", children: "Join thousands of travellers who use WanderPlan to discover destinations, build itineraries, and travel with confidence." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex gap-3", children: ["Santorini", "Kyoto", "Patagonia"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs text-white bg-white/15 backdrop-blur px-3 py-1 rounded-full border border-white/20",
                    children: d
                  },
                  d
                )) })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center bg-background px-6 py-16 pt-24 md:pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-primary font-display font-bold", children: "✦" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground mb-2", children: "Welcome back" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Sign in to access your trips, saved destinations, and personalised itineraries." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl overflow-hidden h-36 mb-8 md:hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/travel-hero-flatlay.dim_1200x700.jpg",
                alt: "Travel planning",
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 flex gap-2", children: ["Santorini", "Kyoto", "Amalfi"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs text-white bg-black/40 px-2 py-0.5 rounded-full",
                children: d
              },
              d
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-8", children: TRUST_POINTS.map(({ icon: Icon, text }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 13, className: "text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: text })
          ] }, text)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => {
                queryClient.clear();
                login();
              },
              disabled: isInitializing || isLoggingIn,
              size: "lg",
              className: "w-full text-base font-semibold h-12",
              "data-ocid": "login.login_button",
              children: isInitializing ? "Initialising…" : isLoggingIn ? "Opening login…" : "Sign in with Internet Identity"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground mt-4 leading-relaxed", children: "WanderPlan uses Internet Identity — a secure, passwordless authentication system. No email or password required." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-6 border-t border-border text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            "Just exploring?",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/destinations",
                className: "text-primary hover:underline font-medium",
                "data-ocid": "login.browse_link",
                children: "Browse destinations without signing in"
              }
            )
          ] }) })
        ]
      }
    ) }) })
  ] }) });
}
export {
  LoginPage as default
};
