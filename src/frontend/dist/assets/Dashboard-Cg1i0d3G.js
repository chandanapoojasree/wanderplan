import { j as jsxRuntimeExports, r as reactExports, c as cn, e as useInternetIdentity, S as Skeleton, L as Link } from "./index-B3kq8tww.js";
import { R as Root, W as WarningProvider, C as Content, c as composeEventHandlers, T as Title, D as Description, a as Close, b as createDialogScope, P as Portal, O as Overlay, d as createSlottable, e as createContextScope, f as Trigger, g as Plus, h as Trash2 } from "./index-CUmfFquk.js";
import { c as createLucideIcon, b as useComposedRefs, d as buttonVariants, e as useProfile, f as useTrips, g as useDeleteTrip, h as useSaveProfile, L as Layout, m as motion, B as Button, i as ue, S as STATIC_DESTINATIONS } from "./Layout-Bo9rvvdz.js";
import { B as Badge, M as MapPin } from "./map-pin-8DwJssmb.js";
import { C as Calendar } from "./calendar-D6uF6bGa.js";
import { D as DollarSign } from "./dollar-sign-jHW0slV_.js";
import { A as ArrowRight } from "./arrow-right-BZEm3pqD.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
      key: "1tzkfa"
    }
  ],
  ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "14pb5j" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const Earth = createLucideIcon("earth", __iconNode);
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext] = createContextScope(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var AlertDialog$1 = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ...dialogScope, ...alertDialogProps, modal: true });
};
AlertDialog$1.displayName = ROOT_NAME;
var TRIGGER_NAME = "AlertDialogTrigger";
var AlertDialogTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "AlertDialogPortal";
var AlertDialogPortal$1 = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { ...dialogScope, ...portalProps });
};
AlertDialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
  }
);
AlertDialogOverlay$1.displayName = OVERLAY_NAME;
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var Slottable = createSlottable("AlertDialogContent");
var AlertDialogContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = reactExports.useRef(null);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      WarningProvider,
      {
        contentName: CONTENT_NAME,
        titleName: TITLE_NAME,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Content,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
              var _a;
              event.preventDefault();
              (_a = cancelRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
            }),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Slottable, { children }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent$1.displayName = CONTENT_NAME;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription$1.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction$1.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel$1.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  reactExports.useEffect(() => {
    var _a;
    const hasDescription = document.getElementById(
      (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
    );
    if (!hasDescription) console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Root2 = AlertDialog$1;
var Portal2 = AlertDialogPortal$1;
var Overlay2 = AlertDialogOverlay$1;
var Content2 = AlertDialogContent$1;
var Action = AlertDialogAction$1;
var Cancel = AlertDialogCancel$1;
var Title2 = AlertDialogTitle$1;
var Description2 = AlertDialogDescription$1;
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay2,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content2,
      {
        "data-slot": "alert-dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title2,
    {
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Description2,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Action,
    {
      className: cn(buttonVariants(), className),
      ...props
    }
  );
}
function AlertDialogCancel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}
const STATUS_BADGE = {
  planned: {
    label: "Planned",
    className: "bg-secondary/15 text-secondary border-secondary/25"
  },
  ongoing: {
    label: "Ongoing",
    className: "bg-emerald-500/15 text-emerald-700 border-emerald-500/25 dark:text-emerald-400"
  },
  completed: {
    label: "Completed",
    className: "bg-muted text-muted-foreground border-border"
  }
};
function getDestinationName(id) {
  var _a;
  return ((_a = STATIC_DESTINATIONS.find((d) => d.id === id)) == null ? void 0 : _a.name) ?? "Unknown";
}
function getDestinationImage(id) {
  var _a;
  return ((_a = STATIC_DESTINATIONS.find((d) => d.id === id)) == null ? void 0 : _a.imageUrl) ?? "/assets/generated/travel-hero-flatlay.dim_1200x700.jpg";
}
function formatBudget(budget) {
  return `$${Number(budget).toLocaleString()}`;
}
function isUpcoming(trip) {
  if (trip.status === "completed") return false;
  const start = new Date(trip.startDate);
  return start >= /* @__PURE__ */ new Date();
}
function NextTripCard({ trip }) {
  const destImage = getDestinationImage(trip.destinationId);
  const destName = getDestinationName(trip.destinationId);
  const badge = STATUS_BADGE[trip.status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      className: "relative rounded-2xl overflow-hidden card-elevated",
      "data-ocid": "dashboard.next_trip_card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: destImage,
              alt: destName,
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 min-h-[260px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: `mb-3 text-xs font-medium border ${badge.className}`,
                children: badge.label
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-white mb-1 leading-tight", children: trip.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-white/80 text-sm mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 13 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: destName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 text-white/90 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 14 }),
                trip.startDate,
                " → ",
                trip.endDate
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 14 }),
                "Budget: ",
                formatBudget(trip.budget)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/trips/$id", params: { id: trip.id.toString() }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "lg",
              className: "gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg",
              "data-ocid": "dashboard.next_trip_view_button",
              children: [
                "View Itinerary ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
function TripCard({
  trip,
  index,
  onDelete
}) {
  const badge = STATUS_BADGE[trip.status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.07 },
      className: "group bg-card rounded-2xl overflow-hidden card-elevated hover:shadow-xl transition-smooth border border-border/50",
      "data-ocid": `dashboard.trip_card.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-40 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: getDestinationImage(trip.destinationId),
              alt: trip.name,
              className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              className: `text-xs font-medium capitalize border ${badge.className}`,
              children: badge.label
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-foreground mb-1 truncate", children: trip.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 10 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: getDestinationName(trip.destinationId) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 10 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              trip.startDate,
              " → ",
              trip.endDate
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 10 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatBudget(trip.budget) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/trips/$id",
                params: { id: trip.id.toString() },
                className: "flex-1",
                "data-ocid": `dashboard.trip_view_button.${index + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "w-full gap-1", children: [
                  "View ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => onDelete(trip.id),
                className: "text-destructive hover:text-destructive hover:bg-destructive/10",
                "data-ocid": `dashboard.trip_delete_button.${index + 1}`,
                "aria-label": "Delete trip",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 })
              }
            )
          ] })
        ] })
      ]
    },
    trip.id.toString()
  );
}
function DashboardPage() {
  const { identity } = useInternetIdentity();
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: trips = [], isLoading: tripsLoading } = useTrips();
  const deleteTrip = useDeleteTrip();
  const saveProfile = useSaveProfile();
  const [tripToDelete, setTripToDelete] = reactExports.useState(null);
  const [editingName, setEditingName] = reactExports.useState(false);
  const [nameInput, setNameInput] = reactExports.useState("");
  const principalShort = identity == null ? void 0 : identity.getPrincipal().toText().slice(0, 12);
  const displayName = (profile == null ? void 0 : profile.displayName) ?? `${principalShort}…`;
  const totalTrips = trips.length;
  const upcomingTrips = trips.filter(isUpcoming).length;
  const completedTrips = trips.filter((t) => t.status === "completed").length;
  const ongoingTrips = trips.filter((t) => t.status === "ongoing").length;
  const nextTrip = trips.filter(isUpcoming).sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  )[0];
  const gridTrips = nextTrip ? trips.filter((t) => t.id !== nextTrip.id).slice(0, 6) : trips.slice(0, 6);
  const handleDeleteConfirm = async () => {
    if (tripToDelete === null) return;
    try {
      await deleteTrip.mutateAsync(tripToDelete);
      ue.success("Trip deleted successfully");
    } catch {
      ue.error("Failed to delete trip");
    }
    setTripToDelete(null);
  };
  const handleSaveName = async () => {
    if (!nameInput.trim()) return;
    try {
      await saveProfile.mutateAsync({ displayName: nameInput.trim() });
      ue.success("Profile updated");
      setEditingName(false);
    } catch {
      ue.error("Failed to update profile");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "dashboard.page", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border/60 pt-20 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: -12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4 },
          className: "flex items-start justify-between flex-wrap gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              profileLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-64 mb-2" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl font-bold text-foreground", children: [
                "Welcome back,",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: displayName }),
                " ",
                "👋"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: totalTrips === 0 ? "Ready to plan your first adventure?" : `You have ${upcomingTrips} upcoming trip${upcomingTrips !== 1 ? "s" : ""} and ${completedTrips} completed` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              !editingName ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => {
                    setNameInput((profile == null ? void 0 : profile.displayName) ?? "");
                    setEditingName(true);
                  },
                  "data-ocid": "dashboard.edit_profile_button",
                  children: "Edit Name"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    value: nameInput,
                    onChange: (e) => setNameInput(e.target.value),
                    onKeyDown: (e) => e.key === "Enter" && handleSaveName(),
                    placeholder: "Your display name",
                    className: "border border-input rounded-lg px-3 py-1.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring",
                    "data-ocid": "dashboard.name_input"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    onClick: handleSaveName,
                    "data-ocid": "dashboard.save_name_button",
                    children: "Save"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    onClick: () => setEditingName(false),
                    "data-ocid": "dashboard.cancel_name_button",
                    children: "Cancel"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/trips/new",
                  "data-ocid": "dashboard.plan_new_trip_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
                    "Plan New Trip"
                  ] })
                }
              )
            ] })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 border-b border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
        {
          label: "Total Trips",
          value: totalTrips,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Earth, { size: 18, className: "text-primary" })
        },
        {
          label: "Upcoming",
          value: upcomingTrips,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 18, className: "text-secondary" })
        },
        {
          label: "Ongoing",
          value: ongoingTrips,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-[18px] h-[18px] flex items-center justify-center text-emerald-600 text-base leading-none", children: "✈" })
        },
        {
          label: "Completed",
          value: completedTrips,
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-[18px] h-[18px] flex items-center justify-center text-muted-foreground text-base leading-none", children: "✓" })
        }
      ].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.07 },
          className: "bg-card rounded-xl px-4 py-3 flex items-center gap-3 card-subtle border border-border/50",
          "data-ocid": `dashboard.stat_card.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: stat.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-bold text-foreground leading-none", children: stat.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: stat.label })
            ] })
          ]
        },
        stat.label
      )) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10", children: [
        !tripsLoading && nextTrip && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "dashboard.next_trip_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground mb-4", children: "Next Adventure" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NextTripCard, { trip: nextTrip })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "dashboard.trips_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground", children: nextTrip ? "All Saved Trips" : "Your Saved Trips" }),
            trips.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
              trips.length,
              " trip",
              trips.length !== 1 ? "s" : ""
            ] })
          ] }),
          tripsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
              "data-ocid": "dashboard.trips_loading_state",
              children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 rounded-2xl" }, i))
            }
          ) : trips.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.97 },
              animate: { opacity: 1, scale: 1 },
              className: "bg-card rounded-2xl p-12 text-center card-subtle border border-border",
              "data-ocid": "dashboard.trips_empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "🗺️" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold text-foreground mb-2", children: "No trips yet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 max-w-sm mx-auto", children: "Start planning your first adventure. Explore destinations and build a day-by-day itinerary tailored to you." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/trips/new",
                    "data-ocid": "dashboard.empty_plan_trip_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "gap-2", size: "lg", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
                      "Plan Your First Trip"
                    ] })
                  }
                )
              ]
            }
          ) : gridTrips.length === 0 ? (
            // All trips shown in next trip card, no grid items
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "bg-muted/30 rounded-2xl p-8 text-center border border-border/40",
                "data-ocid": "dashboard.trips_empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Your upcoming trip is highlighted above." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/trips/new", className: "mt-4 inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      className: "gap-2 mt-3",
                      "data-ocid": "dashboard.empty_plan_trip_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
                        "Plan another trip"
                      ]
                    }
                  ) })
                ]
              }
            )
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: gridTrips.map((trip, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TripCard,
            {
              trip,
              index: i,
              onDelete: setTripToDelete
            },
            trip.id.toString()
          )) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AlertDialog,
      {
        open: tripToDelete !== null,
        onOpenChange: (open) => !open && setTripToDelete(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { "data-ocid": "dashboard.delete_trip_dialog", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Delete this trip?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: "This action cannot be undone. The trip and all its activities will be permanently deleted." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { "data-ocid": "dashboard.delete_trip_cancel_button", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AlertDialogAction,
              {
                onClick: handleDeleteConfirm,
                className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                "data-ocid": "dashboard.delete_trip_confirm_button",
                children: "Delete"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  DashboardPage as default
};
