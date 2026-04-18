import { b as useNavigate, a as useSearch, r as reactExports, j as jsxRuntimeExports } from "./index-B3kq8tww.js";
import { M as MapPin, B as Badge } from "./map-pin-8DwJssmb.js";
import { c as createLucideIcon, j as useCreateTrip, u as useDestinations, L as Layout, m as motion, B as Button, i as ue } from "./Layout-Bo9rvvdz.js";
import { I as Input } from "./index-pSPXpKns.js";
import { L as Label } from "./label-B-6sJ_u2.js";
import { C as Calendar } from "./calendar-D6uF6bGa.js";
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
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8"
    }
  ]
];
const Plane = createLucideIcon("plane", __iconNode);
const INTEREST_OPTIONS = [
  { label: "Adventure", emoji: "🧗" },
  { label: "Relaxation", emoji: "🧘" },
  { label: "Culture", emoji: "🏛️" },
  { label: "Food", emoji: "🍜" },
  { label: "Photography", emoji: "📸" },
  { label: "Hiking", emoji: "🥾" },
  { label: "Beach", emoji: "🏖️" },
  { label: "History", emoji: "📜" },
  { label: "Nightlife", emoji: "🎉" },
  { label: "Nature", emoji: "🌿" },
  { label: "Shopping", emoji: "🛍️" },
  { label: "Wellness", emoji: "💆" }
];
function NewTripPage() {
  const navigate = useNavigate();
  const search = useSearch({ strict: false });
  const createTrip = useCreateTrip();
  const { data: destinations = [] } = useDestinations();
  const [form, setForm] = reactExports.useState({
    name: "",
    destinationId: search.destinationId ?? "",
    startDate: "",
    endDate: "",
    budget: "",
    interests: []
  });
  const [errors, setErrors] = reactExports.useState({});
  const toggleInterest = (interest) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest) ? prev.interests.filter((i) => i !== interest) : [...prev.interests, interest]
    }));
  };
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Trip name is required";
    if (!form.destinationId) e.destinationId = "Please select a destination";
    if (!form.startDate) e.startDate = "Start date is required";
    if (!form.endDate) e.endDate = "End date is required";
    if (form.startDate && form.endDate && form.endDate <= form.startDate) {
      e.endDate = "End date must be after start date";
    }
    if (!form.budget || Number(form.budget) <= 0)
      e.budget = "Enter a valid budget";
    return e;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    try {
      const trip = await createTrip.mutateAsync({
        destinationId: BigInt(form.destinationId),
        name: form.name.trim(),
        startDate: form.startDate,
        endDate: form.endDate,
        budget: BigInt(Math.round(Number(form.budget))),
        interests: form.interests
      });
      ue.success("Trip created! Let's build your itinerary.");
      navigate({ to: "/trips/$id", params: { id: trip.id.toString() } });
    } catch {
      ue.error("Failed to create trip. Please try again.");
    }
  };
  const selectedDest = destinations.find(
    (d) => d.id.toString() === form.destinationId
  );
  const tripDays = form.startDate && form.endDate ? Math.max(
    1,
    Math.round(
      (new Date(form.endDate).getTime() - new Date(form.startDate).getTime()) / 864e5
    )
  ) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-[calc(100vh-4rem)] bg-background",
      "data-ocid": "new_trip.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-36 overflow-hidden", children: [
          selectedDest ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: selectedDest.imageUrl,
              alt: selectedDest.name,
              className: "w-full h-full object-cover"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-end px-6 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.h1,
              {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.35 },
                className: "font-display text-3xl font-bold text-white",
                children: "Plan Your Next Journey"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 text-sm mt-0.5", children: "Fill in the details below — no complex steps, just a clean form." })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto px-4 sm:px-6 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.form,
          {
            onSubmit: handleSubmit,
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4, delay: 0.1 },
            className: "space-y-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border card-subtle p-5 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wide", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plane, { size: 14 }),
                  "Trip Details"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "trip-name", children: "Trip Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "trip-name",
                      value: form.name,
                      onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
                      placeholder: "e.g. Greek Island Escape 2026",
                      "data-ocid": "new_trip.name_input"
                    }
                  ),
                  errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-destructive text-xs",
                      "data-ocid": "new_trip.name_field_error",
                      children: errors.name
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "destination", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 12, className: "inline mr-1" }),
                    "Destination"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      id: "destination",
                      value: form.destinationId,
                      onChange: (e) => setForm((p) => ({ ...p, destinationId: e.target.value })),
                      className: "w-full border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth",
                      "data-ocid": "new_trip.destination_select",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a destination…" }),
                        destinations.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: d.id.toString(), children: [
                          d.name,
                          ", ",
                          d.country
                        ] }, d.id.toString()))
                      ]
                    }
                  ),
                  errors.destinationId && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-destructive text-xs",
                      "data-ocid": "new_trip.destination_field_error",
                      children: errors.destinationId
                    }
                  ),
                  selectedDest && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, scale: 0.97 },
                      animate: { opacity: 1, scale: 1 },
                      className: "flex items-center gap-3 bg-primary/5 border border-primary/15 rounded-xl p-3 mt-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "img",
                          {
                            src: selectedDest.imageUrl,
                            alt: selectedDest.name,
                            className: "w-16 h-12 rounded-lg object-cover flex-shrink-0"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground truncate", children: [
                            selectedDest.name,
                            ", ",
                            selectedDest.country
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                            "~$",
                            selectedDest.estimatedDailyBudget.toString(),
                            "/day ·",
                            " ",
                            selectedDest.rating.toFixed(1),
                            " ★"
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-1.5", children: selectedDest.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              variant: "secondary",
                              className: "text-[10px] px-1.5 py-0 capitalize",
                              children: tag
                            },
                            tag
                          )) })
                        ] })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border card-subtle p-5 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wide", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
                  "Dates & Budget"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "start-date", children: "Start Date" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "start-date",
                        type: "date",
                        value: form.startDate,
                        onChange: (e) => setForm((p) => ({ ...p, startDate: e.target.value })),
                        "data-ocid": "new_trip.start_date_input"
                      }
                    ),
                    errors.startDate && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-destructive text-xs",
                        "data-ocid": "new_trip.start_date_field_error",
                        children: errors.startDate
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "end-date", children: "End Date" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "end-date",
                        type: "date",
                        value: form.endDate,
                        onChange: (e) => setForm((p) => ({ ...p, endDate: e.target.value })),
                        "data-ocid": "new_trip.end_date_input"
                      }
                    ),
                    errors.endDate && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-destructive text-xs",
                        "data-ocid": "new_trip.end_date_field_error",
                        children: errors.endDate
                      }
                    )
                  ] })
                ] }),
                tripDays && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground bg-muted/60 rounded-lg px-3 py-2", children: [
                  "📅 ",
                  tripDays,
                  " day",
                  tripDays !== 1 ? "s" : "",
                  " trip",
                  selectedDest && tripDays ? ` · Estimated cost at destination: ~$${(Number(selectedDest.estimatedDailyBudget) * tripDays).toLocaleString()}` : ""
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "budget", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 12, className: "inline mr-1" }),
                    "Total Budget (USD)"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium", children: "$" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "budget",
                        type: "number",
                        min: "1",
                        value: form.budget,
                        onChange: (e) => setForm((p) => ({ ...p, budget: e.target.value })),
                        placeholder: "e.g. 2500",
                        className: "pl-7",
                        "data-ocid": "new_trip.budget_input"
                      }
                    )
                  ] }),
                  errors.budget && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-destructive text-xs",
                      "data-ocid": "new_trip.budget_field_error",
                      children: errors.budget
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border card-subtle p-5 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-muted-foreground uppercase tracking-wide", children: [
                  "Interests",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "normal-case font-normal", children: "(optional — select all that apply)" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: INTEREST_OPTIONS.map(({ label, emoji }) => {
                  const active = form.interests.includes(label);
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => toggleInterest(label),
                      className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-smooth border ${active ? "bg-primary text-primary-foreground border-primary" : "bg-background text-foreground border-border hover:border-primary/50 hover:bg-muted/50"}`,
                      "data-ocid": `new_trip.interest_toggle.${label.toLowerCase()}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: emoji }),
                        " ",
                        label
                      ]
                    },
                    label
                  );
                }) }),
                form.interests.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  form.interests.length,
                  " interest",
                  form.interests.length !== 1 ? "s" : "",
                  " selected"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    size: "lg",
                    className: "flex-1 font-semibold",
                    disabled: createTrip.isPending,
                    "data-ocid": "new_trip.submit_button",
                    children: createTrip.isPending ? "Creating Trip…" : "Create Trip →"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    size: "lg",
                    onClick: () => window.history.back(),
                    "data-ocid": "new_trip.cancel_button",
                    children: "Cancel"
                  }
                )
              ] })
            ]
          }
        ) })
      ]
    }
  ) });
}
export {
  NewTripPage as default
};
