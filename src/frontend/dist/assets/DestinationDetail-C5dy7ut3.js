import { d as useParams, e as useInternetIdentity, j as jsxRuntimeExports, S as Skeleton, L as Link } from "./index-B3kq8tww.js";
import { M as MapPin, B as Badge } from "./map-pin-8DwJssmb.js";
import { c as createLucideIcon, a as useDestination, L as Layout, B as Button, m as motion } from "./Layout-Bo9rvvdz.js";
import { A as ArrowLeft, C as CircleCheck } from "./circle-check-DRZ3WYY-.js";
import { S as Star } from "./star-auzUG8zo.js";
import { D as DollarSign } from "./dollar-sign-jHW0slV_.js";
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
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
function DestinationDetailPage() {
  const { id } = useParams({ from: "/destinations/$id" });
  const destId = BigInt(id);
  const { data: dest, isLoading } = useDestination(destId);
  const { isAuthenticated } = useInternetIdentity();
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { noTopPad: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "animate-pulse",
        "data-ocid": "destination_detail.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-full h-[420px] rounded-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-64" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2" })
          ] })
        ]
      }
    ) });
  }
  if (!dest) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center",
        "data-ocid": "destination_detail.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🌍" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Destination not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "This destination doesn't exist or has been removed." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/destinations",
              "data-ocid": "destination_detail.back_to_list_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "Browse Destinations" })
            }
          )
        ]
      }
    ) });
  }
  const budgetText = dest.estimatedDailyBudget < BigInt(80) ? "Budget-friendly" : dest.estimatedDailyBudget < BigInt(150) ? "Mid-Range" : "Luxury";
  const budgetBadgeCls = dest.estimatedDailyBudget < BigInt(80) ? "bg-muted text-muted-foreground" : dest.estimatedDailyBudget < BigInt(150) ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { noTopPad: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6 },
        className: "relative h-[55vh] md:h-[60vh] overflow-hidden",
        "data-ocid": "destination_detail.hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: dest.imageUrl,
              alt: dest.name,
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-4 sm:left-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/destinations",
              className: "inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white bg-black/30 hover:bg-black/50 backdrop-blur px-3 py-1.5 rounded-full transition-smooth",
              "data-ocid": "destination_detail.back_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 13 }),
                "All Destinations"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-20 right-4 sm:right-8 flex items-center gap-1.5 bg-black/55 text-white px-3 py-1.5 rounded-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 13, fill: "currentColor", className: "text-yellow-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm", children: dest.rating.toFixed(1) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 left-4 sm:left-8 right-4 sm:right-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-white/70" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/70 text-sm", children: dest.country })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl font-bold text-white leading-tight", children: dest.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-3 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `border-0 ${budgetBadgeCls} text-xs`, children: budgetText }),
              dest.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "text-xs capitalize text-white border-white/40 bg-transparent",
                  children: tag
                },
                tag
              ))
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "max-w-5xl mx-auto px-4 sm:px-6 py-10",
        "data-ocid": "destination_detail.page",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "md:col-span-2 space-y-8",
              initial: { opacity: 0, x: -16 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.45, delay: 0.15 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-semibold text-foreground mb-3", children: [
                    "About ",
                    dest.name
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-base", children: dest.description })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-foreground mb-4", children: "Activities" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: dest.activities.map((act) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2.5 bg-muted/40 rounded-lg px-3 py-2.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 15, className: "text-primary shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: act })
                      ]
                    },
                    act
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-foreground mb-3", children: "Travel Style" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: dest.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Badge,
                    {
                      variant: "outline",
                      className: "text-sm capitalize px-3 py-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 11, className: "mr-1.5" }),
                        tag
                      ]
                    },
                    tag
                  )) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 16 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.45, delay: 0.2 },
              className: "space-y-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-5 card-subtle border border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-foreground mb-4", children: "Quick Info" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 15, className: "text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Estimated Budget" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
                          "~$",
                          dest.estimatedDailyBudget.toString(),
                          " / day"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: budgetText })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Star,
                        {
                          size: 15,
                          className: "text-primary",
                          fill: "currentColor"
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Traveller Rating" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
                          dest.rating.toFixed(1),
                          " / 5.0"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "★".repeat(Math.round(dest.rating)) })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 15, className: "text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Location" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: dest.country })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/8 border border-primary/25 rounded-2xl p-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-base font-semibold text-foreground mb-1", children: [
                    "Ready to visit ",
                    dest.name,
                    "?"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mb-4", children: "Build a personalised day-by-day itinerary tailored to your budget and interests." }),
                  isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/trips/new",
                      search: { destinationId: dest.id.toString() },
                      "data-ocid": "destination_detail.plan_trip_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full", children: "Plan Your Trip" })
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/login",
                      "data-ocid": "destination_detail.login_to_plan_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full", children: "Login to Plan Trip" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/destinations",
                    className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
                    "data-ocid": "destination_detail.back_link_bottom",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
                      "Back to all destinations"
                    ]
                  }
                )
              ]
            }
          )
        ] })
      }
    )
  ] });
}
export {
  DestinationDetailPage as default
};
