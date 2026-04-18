import { u as useRouter, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-B3kq8tww.js";
import { M as MapPin, B as Badge } from "./map-pin-8DwJssmb.js";
import { c as createLucideIcon, L as Layout, m as motion, B as Button, S as STATIC_DESTINATIONS } from "./Layout-Bo9rvvdz.js";
import { I as Input } from "./index-pSPXpKns.js";
import { L as Label } from "./label-B-6sJ_u2.js";
import { D as DollarSign } from "./dollar-sign-jHW0slV_.js";
import { S as Search } from "./search-BLCrFJJ1.js";
import { A as ArrowRight } from "./arrow-right-BZEm3pqD.js";
import { S as Star } from "./star-auzUG8zo.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M17 14h-6", key: "bkmgh3" }],
  ["path", { d: "M13 18H7", key: "bb0bb7" }],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 18h.01", key: "1bdyru" }]
];
const CalendarRange = createLucideIcon("calendar-range", __iconNode);
const FEATURES = [
  {
    icon: "🗺️",
    title: "Smart Itineraries",
    desc: "Day-by-day plans tailored to your interests, budget, and travel style. Every detail handled."
  },
  {
    icon: "📍",
    title: "Virtual Guide",
    desc: "Rich destination profiles, local tips, weather insights, and activity recommendations."
  },
  {
    icon: "✈️",
    title: "Save & Discover",
    desc: "Keep all your trips organised in a personal dashboard, accessible anywhere, anytime."
  }
];
const budgetLabel = (budget) => {
  if (budget < BigInt(80))
    return { text: "$", cls: "bg-muted text-muted-foreground" };
  if (budget < BigInt(150))
    return { text: "$$", cls: "bg-secondary/10 text-secondary" };
  return { text: "$$$", cls: "bg-primary/10 text-primary" };
};
function HomePage() {
  const router = useRouter();
  const [destination, setDestination] = reactExports.useState("");
  const [startDate, setStartDate] = reactExports.useState("");
  const [endDate, setEndDate] = reactExports.useState("");
  const [budget, setBudget] = reactExports.useState("");
  const featured = STATIC_DESTINATIONS.slice(0, 6);
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (destination.trim()) params.set("q", destination.trim());
    if (startDate) params.set("from", startDate);
    if (endDate) params.set("to", endDate);
    if (budget) params.set("budget", budget);
    const query = params.toString();
    router.navigate({ to: `/destinations${query ? `?${query}` : ""}` });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { noTopPad: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[80vh] flex items-center hero-overlay overflow-hidden",
        style: {
          backgroundImage: `url('/assets/generated/santorini-hero.dim_1400x800.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%"
        },
        "data-ocid": "home.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 32 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] },
              className: "max-w-2xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm font-medium uppercase tracking-widest mb-4", children: "Your world, curated" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-5", children: [
                  "Curate Your Next",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary", children: "Extraordinary" }),
                  " Journey"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 text-lg md:text-xl mb-10 max-w-lg font-body leading-relaxed", children: "Discover handpicked destinations, build personalised itineraries, and travel with confidence." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 16 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.25, duration: 0.5 },
                    className: "bg-white/97 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden",
                    "data-ocid": "home.search_bar",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-[1fr_auto_auto_auto] divide-y sm:divide-y-0 sm:divide-x divide-border", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center px-4 py-3 gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "text-primary shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-wider text-muted-foreground block mb-0.5", children: "Where to?" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              value: destination,
                              onChange: (e) => setDestination(e.target.value),
                              onKeyDown: handleKeyDown,
                              placeholder: "Destination or country…",
                              className: "border-0 shadow-none bg-transparent focus-visible:ring-0 p-0 h-auto text-sm text-foreground placeholder:text-muted-foreground",
                              "data-ocid": "home.destination_input"
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center px-4 py-3 gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarRange, { size: 16, className: "text-primary shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-wider text-muted-foreground block mb-0.5", children: "Dates" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                type: "date",
                                value: startDate,
                                onChange: (e) => setStartDate(e.target.value),
                                className: "border-0 bg-transparent text-sm text-foreground focus:outline-none w-[130px]",
                                "data-ocid": "home.start_date_input"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "–" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                type: "date",
                                value: endDate,
                                onChange: (e) => setEndDate(e.target.value),
                                min: startDate,
                                className: "border-0 bg-transparent text-sm text-foreground focus:outline-none w-[130px]",
                                "data-ocid": "home.end_date_input"
                              }
                            )
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center px-4 py-3 gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 16, className: "text-primary shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] uppercase tracking-wider text-muted-foreground block mb-0.5", children: "Budget / day" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              type: "number",
                              value: budget,
                              onChange: (e) => setBudget(e.target.value),
                              onKeyDown: handleKeyDown,
                              placeholder: "Max $",
                              min: 0,
                              className: "border-0 shadow-none bg-transparent focus-visible:ring-0 p-0 h-auto text-sm text-foreground placeholder:text-muted-foreground w-24",
                              "data-ocid": "home.budget_input"
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          onClick: handleSearch,
                          size: "lg",
                          className: "gap-2 px-6 h-12 rounded-xl w-full sm:w-auto",
                          "data-ocid": "home.search_submit_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16 }),
                            "Search"
                          ]
                        }
                      ) })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs mt-3", children: "8 curated destinations · plan your next adventure" })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-16",
        "data-ocid": "home.destinations_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "flex items-end justify-between mb-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-sm font-medium uppercase tracking-wide mb-1", children: "Trending Now" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground", children: "Popular Destinations" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/destinations",
                    className: "hidden sm:flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-colors",
                    "data-ocid": "home.view_all_link",
                    children: [
                      "View all ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: featured.map((dest, i) => {
            const budget2 = budgetLabel(dest.estimatedDailyBudget);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.4, delay: i * 0.08 },
                "data-ocid": `home.destination_card.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/destinations/$id",
                    params: { id: dest.id.toString() },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl overflow-hidden bg-card card-elevated hover:shadow-xl transition-smooth cursor-pointer h-full", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: dest.imageUrl,
                            alt: dest.name,
                            className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 right-3 flex items-center gap-1 bg-black/60 text-white text-xs px-2 py-1 rounded-full font-medium", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Star,
                            {
                              size: 10,
                              fill: "currentColor",
                              className: "text-yellow-400"
                            }
                          ),
                          dest.rating.toFixed(1)
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground text-xs mb-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 11 }),
                          dest.country
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2", children: dest.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed", children: dest.description }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              className: `text-xs font-medium border-0 ${budget2.cls}`,
                              children: budget2.text
                            }
                          ),
                          dest.tags.slice(0, 2).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              variant: "outline",
                              className: "text-xs capitalize",
                              children: tag
                            },
                            tag
                          ))
                        ] })
                      ] })
                    ] })
                  }
                )
              },
              dest.id.toString()
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/destinations", "data-ocid": "home.explore_all_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "lg", className: "gap-2 px-8", children: [
            "Explore All Destinations ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ] }) }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 py-20 border-y border-border",
        "data-ocid": "home.features_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "text-center mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-sm font-medium uppercase tracking-wide mb-2", children: "Built for curious travellers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4", children: "Why WanderPlan?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto text-base", children: "Everything you need to plan and enjoy the perfect trip — in one place." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: FEATURES.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.13, duration: 0.45 },
              className: "bg-card rounded-2xl p-7 card-subtle hover:card-elevated transition-smooth border border-border/50",
              "data-ocid": `home.feature_card.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-5", children: feature.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground mb-2", children: feature.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: feature.desc })
              ]
            },
            feature.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative bg-primary py-20 overflow-hidden",
        "data-ocid": "home.cta_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-10",
              style: {
                backgroundImage: `url('/assets/generated/patagonia-mountains.dim_800x600.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.55 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-5 leading-tight", children: "Ready to start your adventure?" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 mb-10 text-lg", children: "Join thousands of travellers who plan smarter, travel better." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/destinations", "data-ocid": "home.cta_primary_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "lg",
                    className: "bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10 h-12 text-base",
                    children: "Get Started — It's Free"
                  }
                ) })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
export {
  HomePage as default
};
