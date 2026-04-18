import { j as jsxRuntimeExports, c as cn, d as useParams, r as reactExports, S as Skeleton, L as Link } from "./index-B3kq8tww.js";
import { M as MapPin, B as Badge } from "./map-pin-8DwJssmb.js";
import { c as createLucideIcon, X, k as useTrip, l as useAddActivity, n as useUpdateActivity, o as useRemoveActivity, p as useUpdateTripStatus, S as STATIC_DESTINATIONS, L as Layout, B as Button, m as motion, i as ue } from "./Layout-Bo9rvvdz.js";
import { R as Root, C as Content, a as Close, T as Title, P as Portal, O as Overlay, g as Plus, h as Trash2 } from "./index-CUmfFquk.js";
import { I as Input } from "./index-pSPXpKns.js";
import { L as Label } from "./label-B-6sJ_u2.js";
import { A as ArrowLeft, C as CircleCheck } from "./circle-check-DRZ3WYY-.js";
import { C as Calendar } from "./calendar-D6uF6bGa.js";
import { D as DollarSign } from "./dollar-sign-jHW0slV_.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]];
const Circle = createLucideIcon("circle", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$2);
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
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const EMPTY_FORM = {
  dayNumber: "1",
  date: "",
  time: "09:00",
  title: "",
  description: "",
  durationMinutes: "60"
};
const STATUS_CONFIG = {
  planned: {
    label: "Planned",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { size: 12 }),
    className: "bg-secondary/10 text-secondary border-secondary/30"
  },
  ongoing: {
    label: "Ongoing",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 12 }),
    className: "bg-primary/10 text-primary border-primary/30"
  },
  completed: {
    label: "Completed",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 12 }),
    className: "bg-muted text-muted-foreground border-border"
  }
};
function TripDetailPage() {
  const { id } = useParams({ from: "/trips/$id" });
  const tripId = BigInt(id);
  const { data: trip, isLoading } = useTrip(tripId);
  const addActivity = useAddActivity();
  const updateActivity = useUpdateActivity();
  const removeActivity = useRemoveActivity();
  const updateTripStatus = useUpdateTripStatus();
  const [dialogOpen, setDialogOpen] = reactExports.useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = reactExports.useState(null);
  const [editingActivity, setEditingActivity] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState(EMPTY_FORM);
  const [activeDay, setActiveDay] = reactExports.useState(1);
  const dest = trip ? STATIC_DESTINATIONS.find((d) => d.id === trip.destinationId) : null;
  const sortedDays = trip ? [...trip.itinerary].sort((a, b) => Number(a.dayNumber - b.dayNumber)) : [];
  const currentDayData = sortedDays.find(
    (d) => Number(d.dayNumber) === activeDay
  );
  const openAddDialog = (dayNum) => {
    var _a;
    setEditingActivity(null);
    const dayDate = ((_a = sortedDays.find((d) => Number(d.dayNumber) === (dayNum ?? activeDay))) == null ? void 0 : _a.date) ?? "";
    setForm({
      ...EMPTY_FORM,
      dayNumber: String(dayNum ?? activeDay),
      date: dayDate
    });
    setDialogOpen(true);
  };
  const openEditDialog = (dayNumber, activity) => {
    var _a;
    setEditingActivity({ dayNumber, activity });
    setForm({
      dayNumber: dayNumber.toString(),
      date: ((_a = trip == null ? void 0 : trip.itinerary.find((d) => d.dayNumber === dayNumber)) == null ? void 0 : _a.date) ?? "",
      time: activity.time,
      title: activity.title,
      description: activity.description,
      durationMinutes: activity.durationMinutes.toString()
    });
    setDialogOpen(true);
  };
  const handleSave = async () => {
    if (!form.title.trim()) {
      ue.error("Activity title is required");
      return;
    }
    try {
      if (editingActivity) {
        await updateActivity.mutateAsync({
          tripId,
          dayNumber: editingActivity.dayNumber,
          activityId: editingActivity.activity.id,
          time: form.time,
          title: form.title.trim(),
          description: form.description.trim(),
          durationMinutes: BigInt(Number(form.durationMinutes) || 60)
        });
        ue.success("Activity updated");
      } else {
        await addActivity.mutateAsync({
          tripId,
          dayNumber: BigInt(Number(form.dayNumber) || 1),
          date: form.date,
          time: form.time,
          title: form.title.trim(),
          description: form.description.trim(),
          durationMinutes: BigInt(Number(form.durationMinutes) || 60)
        });
        ue.success("Activity added");
        setActiveDay(Number(form.dayNumber) || 1);
      }
      setDialogOpen(false);
    } catch {
      ue.error("Failed to save activity");
    }
  };
  const handleRemove = async (dayNumber, activityId) => {
    try {
      await removeActivity.mutateAsync({ tripId, dayNumber, activityId });
      ue.success("Activity removed");
      setDeleteConfirmId(null);
    } catch {
      ue.error("Failed to remove activity");
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6",
        "data-ocid": "trip_detail.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-28" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 rounded-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full rounded-xl" }),
          [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 rounded-xl" }, i))
        ]
      }
    ) });
  }
  if (!trip) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center",
        "data-ocid": "trip_detail.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-5xl mb-4", children: "🗺️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold mb-2 text-foreground", children: "Trip not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "This trip may have been removed or doesn't exist." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { "data-ocid": "trip_detail.back_to_dashboard_button", children: "Back to Dashboard" }) })
        ]
      }
    ) });
  }
  const statusCfg = STATUS_CONFIG[trip.status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "trip_detail.page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 sm:h-64 overflow-hidden", children: [
        dest ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: dest.imageUrl,
            alt: dest.name,
            className: "w-full h-full object-cover"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 px-4 sm:px-8 pb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/dashboard",
              className: "inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition-colors mb-3",
              "data-ocid": "trip_detail.back_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 12 }),
                " Back to Dashboard"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h1,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              className: "font-display text-3xl sm:text-4xl font-bold text-white",
              children: trip.name
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.1 },
            className: "bg-card border border-border rounded-2xl card-subtle px-5 py-4 -mt-5 relative z-10 flex flex-wrap items-center gap-x-6 gap-y-3 mb-6",
            children: [
              dest && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 13, className: "text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-medium", children: [
                  dest.name,
                  ", ",
                  dest.country
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 13, className: "text-primary" }),
                trip.startDate,
                " → ",
                trip.endDate
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 13, className: "text-primary" }),
                "$",
                trip.budget.toString(),
                " budget"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 ml-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    className: `flex items-center gap-1 capitalize border px-2.5 py-1 text-xs font-medium ${statusCfg.className}`,
                    "data-ocid": "trip_detail.status_badge",
                    children: [
                      statusCfg.icon,
                      statusCfg.label
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: trip.status,
                    onChange: async (e) => {
                      const newStatus = e.target.value;
                      try {
                        await updateTripStatus.mutateAsync({
                          tripId,
                          status: newStatus
                        });
                        ue.success(
                          `Trip status updated to ${STATUS_CONFIG[newStatus].label}`
                        );
                      } catch {
                        ue.error("Failed to update status");
                      }
                    },
                    title: "Change trip status",
                    className: "text-xs border border-input rounded-lg px-2 py-1 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer",
                    "data-ocid": "trip_detail.status_select",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "planned", children: "Planned" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ongoing", children: "Ongoing" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: "Completed" })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        trip.interests.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-6", children: trip.interests.map((interest) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "outline",
            className: "text-xs capitalize",
            children: interest
          },
          interest
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-foreground", children: "Itinerary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => openAddDialog(),
              size: "sm",
              className: "gap-1.5",
              "data-ocid": "trip_detail.add_activity_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
                " Add Activity"
              ]
            }
          )
        ] }),
        sortedDays.length === 0 ? (
          /* Empty state */
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-2xl p-12 text-center card-subtle border border-border mb-10",
              "data-ocid": "trip_detail.itinerary_empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl mb-4", children: "📅" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground mb-2", children: "No activities yet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 max-w-xs mx-auto", children: "Start building your day-by-day itinerary — add activities, times, and notes." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: () => openAddDialog(),
                    className: "gap-2",
                    "data-ocid": "trip_detail.empty_add_activity_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
                      " Add First Activity"
                    ]
                  }
                )
              ]
            }
          )
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex gap-1.5 overflow-x-auto pb-1 mb-5 no-scrollbar",
              "data-ocid": "trip_detail.day_tabs",
              children: [
                sortedDays.map((day) => {
                  const num = Number(day.dayNumber);
                  const isActive = num === activeDay;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setActiveDay(num),
                      className: `flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-smooth border ${isActive ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"}`,
                      "data-ocid": `trip_detail.day_tab.${num}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "Day ",
                          num
                        ] }),
                        day.date && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `block text-[10px] mt-0.5 ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`,
                            children: (/* @__PURE__ */ new Date(`${day.date}T00:00:00`)).toLocaleDateString(
                              "en-US",
                              { month: "short", day: "numeric" }
                            )
                          }
                        )
                      ]
                    },
                    day.dayNumber.toString()
                  );
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      const nextDay = sortedDays.length + 1;
                      setActiveDay(nextDay);
                      openAddDialog(nextDay);
                    },
                    className: "flex-shrink-0 px-3 py-2 rounded-xl text-sm border border-dashed border-border text-muted-foreground hover:border-primary/50 hover:text-foreground transition-smooth",
                    "data-ocid": "trip_detail.add_day_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 })
                  }
                )
              ]
            }
          ),
          currentDayData ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 12 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.25 },
              "data-ocid": `trip_detail.day_panel.${activeDay}`,
              children: currentDayData.activities.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-dashed border-border p-8 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mb-3", children: [
                  "No activities for Day ",
                  activeDay,
                  " yet"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => openAddDialog(activeDay),
                    className: "gap-1.5",
                    "data-ocid": `trip_detail.day_add_activity_button.${activeDay}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                      " Add Activity"
                    ]
                  }
                )
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                [...currentDayData.activities].sort((a, b) => a.time.localeCompare(b.time)).map((activity, ai) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 6 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: ai * 0.05 },
                    className: "bg-card rounded-xl border border-border card-subtle flex items-start gap-4 px-4 py-4 group hover:border-primary/20 transition-smooth",
                    "data-ocid": `trip_detail.activity.${activeDay}.${ai + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 bg-primary/8 border border-primary/15 rounded-lg px-2.5 py-2 text-center min-w-[56px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-primary font-semibold leading-none", children: activity.time }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm leading-snug", children: activity.title }),
                        activity.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2", children: activity.description }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-2 text-xs text-muted-foreground", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 10 }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                            activity.durationMinutes.toString(),
                            " min"
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-smooth flex-shrink-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            variant: "ghost",
                            size: "sm",
                            className: "h-8 w-8 p-0 hover:bg-secondary/10 hover:text-secondary",
                            onClick: () => openEditDialog(
                              currentDayData.dayNumber,
                              activity
                            ),
                            "aria-label": "Edit activity",
                            "data-ocid": `trip_detail.activity_edit_button.${activeDay}.${ai + 1}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 13 })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            variant: "ghost",
                            size: "sm",
                            className: "h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10",
                            onClick: () => setDeleteConfirmId({
                              dayNumber: currentDayData.dayNumber,
                              activityId: activity.id
                            }),
                            "aria-label": "Delete activity",
                            "data-ocid": `trip_detail.activity_delete_button.${activeDay}.${ai + 1}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
                          }
                        )
                      ] })
                    ]
                  },
                  activity.id.toString()
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => openAddDialog(activeDay),
                    className: "w-full py-3 rounded-xl border border-dashed border-border text-muted-foreground text-sm hover:border-primary/40 hover:text-foreground transition-smooth flex items-center justify-center gap-1.5",
                    "data-ocid": `trip_detail.day_inline_add_button.${activeDay}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
                      " Add activity to Day ",
                      activeDay
                    ]
                  }
                )
              ] })
            },
            activeDay
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-dashed border-border p-8 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mb-3", children: [
              "Day ",
              activeDay,
              " has no activities yet"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => openAddDialog(activeDay),
                className: "gap-1.5",
                "data-ocid": `trip_detail.day_add_activity_button.${activeDay}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                  " Add Activity"
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: dialogOpen, onOpenChange: setDialogOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "max-w-md",
        "data-ocid": "trip_detail.activity_dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: editingActivity ? "Edit Activity" : "Add Activity" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 py-2", children: [
            !editingActivity && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Day Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    min: "1",
                    value: form.dayNumber,
                    onChange: (e) => setForm((p) => ({ ...p, dayNumber: e.target.value })),
                    "data-ocid": "trip_detail.activity_day_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Date (optional)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "date",
                    value: form.date,
                    onChange: (e) => setForm((p) => ({ ...p, date: e.target.value })),
                    "data-ocid": "trip_detail.activity_date_input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Time (HH:MM)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "time",
                    value: form.time,
                    onChange: (e) => setForm((p) => ({ ...p, time: e.target.value })),
                    "data-ocid": "trip_detail.activity_time_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Duration (min)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    min: "1",
                    value: form.durationMinutes,
                    onChange: (e) => setForm((p) => ({ ...p, durationMinutes: e.target.value })),
                    "data-ocid": "trip_detail.activity_duration_input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Activity Title *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: form.title,
                  onChange: (e) => setForm((p) => ({ ...p, title: e.target.value })),
                  placeholder: "e.g. Visit Acropolis",
                  "data-ocid": "trip_detail.activity_title_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: form.description,
                  onChange: (e) => setForm((p) => ({ ...p, description: e.target.value })),
                  placeholder: "Notes, tips, or details…",
                  rows: 2,
                  className: "resize-none",
                  "data-ocid": "trip_detail.activity_description_input"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => setDialogOpen(false),
                "data-ocid": "trip_detail.activity_cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: handleSave,
                disabled: addActivity.isPending || updateActivity.isPending,
                "data-ocid": "trip_detail.activity_save_button",
                children: addActivity.isPending || updateActivity.isPending ? "Saving…" : editingActivity ? "Update Activity" : "Add Activity"
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!deleteConfirmId,
        onOpenChange: (open) => !open && setDeleteConfirmId(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DialogContent,
          {
            className: "max-w-sm",
            "data-ocid": "trip_detail.delete_dialog",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Remove Activity?" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground py-2", children: "This activity will be permanently removed from your itinerary." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    onClick: () => setDeleteConfirmId(null),
                    "data-ocid": "trip_detail.delete_cancel_button",
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "destructive",
                    onClick: () => deleteConfirmId && handleRemove(
                      deleteConfirmId.dayNumber,
                      deleteConfirmId.activityId
                    ),
                    disabled: removeActivity.isPending,
                    "data-ocid": "trip_detail.delete_confirm_button",
                    children: removeActivity.isPending ? "Removing…" : "Remove"
                  }
                )
              ] })
            ]
          }
        )
      }
    )
  ] });
}
export {
  TripDetailPage as default
};
