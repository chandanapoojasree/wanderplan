import { r as reactExports, j as jsxRuntimeExports, c as cn, a as useSearch, b as useNavigate, L as Link } from "./index-B3kq8tww.js";
import { B as Badge, M as MapPin } from "./map-pin-8DwJssmb.js";
import { c as createLucideIcon, u as useDestinations, L as Layout, m as motion, B as Button, X } from "./Layout-Bo9rvvdz.js";
import { P as Primitive, I as Input } from "./index-pSPXpKns.js";
import { S as Search } from "./search-BLCrFJJ1.js";
import { S as Star } from "./star-auzUG8zo.js";
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
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode);
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator$1.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator$1;
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
const ALL_TAGS = [
  "romantic",
  "beach",
  "luxury",
  "culture",
  "nature",
  "history",
  "food",
  "adventure",
  "affordable",
  "hiking",
  "wildlife",
  "relaxation"
];
const RATING_OPTIONS = [
  { label: "Any", value: void 0 },
  { label: "4.0+", value: 4 },
  { label: "4.5+", value: 4.5 },
  { label: "4.8+", value: 4.8 }
];
const budgetDisplay = (budget) => {
  if (budget < BigInt(80))
    return { label: "Budget", cls: "bg-muted text-muted-foreground" };
  if (budget < BigInt(150))
    return { label: "Mid-Range", cls: "bg-secondary/10 text-secondary" };
  return { label: "Luxury", cls: "bg-primary/10 text-primary" };
};
function DestinationsPage() {
  const rawSearch = useSearch({ strict: false });
  const navigate = useNavigate();
  const [searchText, setSearchText] = reactExports.useState(rawSearch.q ?? "");
  const [selectedTags, setSelectedTags] = reactExports.useState([]);
  const [minRatingIdx, setMinRatingIdx] = reactExports.useState(0);
  const [minBudgetStr, setMinBudgetStr] = reactExports.useState("");
  const [maxBudgetStr, setMaxBudgetStr] = reactExports.useState(rawSearch.budget ?? "");
  const [filterOpen, setFilterOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (rawSearch.q) setSearchText(rawSearch.q);
    if (rawSearch.budget) setMaxBudgetStr(rawSearch.budget);
  }, [rawSearch.q, rawSearch.budget]);
  const minBudget = minBudgetStr ? BigInt(minBudgetStr) : void 0;
  const maxBudget = maxBudgetStr ? BigInt(maxBudgetStr) : void 0;
  const filter = {
    minBudget,
    maxBudget,
    minRating: RATING_OPTIONS[minRatingIdx].value,
    tags: selectedTags
  };
  const { data: allDestinations = [] } = useDestinations(filter);
  const destinations = searchText.trim() ? allDestinations.filter(
    (d) => d.name.toLowerCase().includes(searchText.toLowerCase()) || d.country.toLowerCase().includes(searchText.toLowerCase())
  ) : allDestinations;
  const toggleTag = (tag) => setSelectedTags(
    (prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
  );
  const hasFilters = selectedTags.length > 0 || minRatingIdx !== 0 || !!minBudgetStr || !!maxBudgetStr;
  const clearFilters = () => {
    setSelectedTags([]);
    setMinRatingIdx(0);
    setMinBudgetStr("");
    setMaxBudgetStr("");
    setSearchText("");
    navigate({ to: "/destinations" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative bg-card border-b border-border overflow-hidden",
        "data-ocid": "destinations.hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                backgroundImage: `url('/assets/generated/destinations-hero-banner.dim_1600x500.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center 40%"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.45 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-xs font-medium uppercase tracking-widest mb-2", children: "Explore the world" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-white mb-2", children: "Destinations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/75 text-base max-w-lg", children: [
                  destinations.length,
                  " curated destinations around the world — find your next adventure."
                ] })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-7xl mx-auto px-4 sm:px-6 py-8",
        "data-ocid": "destinations.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col sm:flex-row gap-3 mb-6",
              "data-ocid": "destinations.filters_bar",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Search,
                    {
                      size: 15,
                      className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: searchText,
                      onChange: (e) => setSearchText(e.target.value),
                      placeholder: "Search destinations…",
                      className: "pl-9",
                      "data-ocid": "destinations.search_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => setFilterOpen(!filterOpen),
                    className: "gap-2 h-10 self-start",
                    "data-ocid": "destinations.filter_toggle",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { size: 14 }),
                      "Filters",
                      hasFilters && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary text-primary-foreground text-xs h-4 w-4 p-0 flex items-center justify-center rounded-full", children: selectedTags.length + (minRatingIdx !== 0 ? 1 : 0) + (minBudgetStr ? 1 : 0) + (maxBudgetStr ? 1 : 0) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 flex-wrap", children: RATING_OPTIONS.map((opt, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: minRatingIdx === idx ? "default" : "outline",
                    size: "sm",
                    onClick: () => setMinRatingIdx(idx),
                    className: "h-10 gap-1",
                    "data-ocid": `destinations.rating_filter.${idx + 1}`,
                    children: opt.value ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 11, fill: "currentColor" }),
                      opt.label
                    ] }) : opt.label
                  },
                  opt.label
                )) }),
                hasFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: clearFilters,
                    className: "gap-1 text-muted-foreground h-10 self-start",
                    "data-ocid": "destinations.clear_filters",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 }),
                      "Clear all"
                    ]
                  }
                )
              ]
            }
          ),
          filterOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: -8 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -8 },
              className: "bg-card rounded-xl p-5 mb-6 card-subtle border border-border",
              "data-ocid": "destinations.filter_panel",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground uppercase tracking-wider mb-3", children: "Budget per day ($)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "number",
                        value: minBudgetStr,
                        onChange: (e) => setMinBudgetStr(e.target.value),
                        placeholder: "Min",
                        min: 0,
                        className: "h-9 text-sm",
                        "data-ocid": "destinations.min_budget_input"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "–" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        type: "number",
                        value: maxBudgetStr,
                        onChange: (e) => setMaxBudgetStr(e.target.value),
                        placeholder: "Max",
                        min: 0,
                        className: "h-9 text-sm",
                        "data-ocid": "destinations.max_budget_input"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground uppercase tracking-wider mb-3", children: "Minimum rating" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: RATING_OPTIONS.map((opt, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setMinRatingIdx(idx),
                      className: `px-3 py-1.5 rounded-full text-xs transition-smooth flex items-center gap-1 ${minRatingIdx === idx ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/70"}`,
                      "data-ocid": `destinations.rating_select.${idx + 1}`,
                      children: [
                        opt.value && /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 10, fill: "currentColor" }),
                        opt.label
                      ]
                    },
                    opt.label
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground uppercase tracking-wider mb-3", children: "Interests" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: ALL_TAGS.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => toggleTag(tag),
                      className: `px-2.5 py-1 rounded-full text-xs transition-smooth capitalize ${selectedTags.includes(tag) ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/70"}`,
                      "data-ocid": `destinations.tag_filter.${tag}`,
                      children: tag
                    },
                    tag
                  )) })
                ] })
              ] })
            }
          ),
          selectedTags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-5", children: selectedTags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              className: "bg-primary/10 text-primary capitalize cursor-pointer hover:bg-primary/20 transition-smooth gap-1",
              onClick: () => toggleTag(tag),
              "data-ocid": `destinations.active_tag.${tag}`,
              children: [
                tag,
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10 })
              ]
            },
            tag
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            "Showing",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: destinations.length }),
            " ",
            "destination",
            destinations.length !== 1 ? "s" : "",
            searchText ? ` for "${searchText}"` : ""
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mb-8" }),
          destinations.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-20",
              "data-ocid": "destinations.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: "🔭" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-2 font-display font-semibold", children: "No destinations match your filters" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-5", children: "Try adjusting your search or clearing the active filters." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: clearFilters,
                    "data-ocid": "destinations.clear_filters_empty",
                    children: "Clear all filters"
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: destinations.map((dest, i) => {
            const budget = budgetDisplay(dest.estimatedDailyBudget);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.35, delay: i * 0.06 },
                "data-ocid": `destinations.destination_card.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/destinations/$id",
                    params: { id: dest.id.toString() },
                    className: "block h-full",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl overflow-hidden bg-card card-elevated hover:shadow-xl transition-smooth h-full flex flex-col", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden shrink-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: dest.imageUrl,
                            alt: dest.name,
                            className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 right-3 flex items-center gap-1 bg-black/65 text-white text-xs px-2 py-1 rounded-full font-medium", children: [
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
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex-1 flex flex-col", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground text-xs mb-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 11 }),
                          dest.country
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2", children: dest.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm line-clamp-2 mb-4 flex-1 leading-relaxed", children: dest.description }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              className: `text-xs font-medium border-0 ${budget.cls}`,
                              children: budget.label
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                            "~$",
                            dest.estimatedDailyBudget.toString(),
                            "/day"
                          ] }),
                          dest.activities.slice(0, 3).map((act) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              variant: "outline",
                              className: "text-xs",
                              children: act
                            },
                            act
                          ))
                        ] })
                      ] })
                    ] })
                  }
                )
              },
              dest.id.toString()
            );
          }) })
        ]
      }
    )
  ] });
}
export {
  DestinationsPage as default
};
