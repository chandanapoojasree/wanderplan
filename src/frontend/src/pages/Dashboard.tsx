import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  DollarSign,
  Globe2,
  MapPin,
  Plus,
  Trash2,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import {
  useDeleteTrip,
  useProfile,
  useSaveProfile,
  useTrips,
} from "../hooks/use-backend";
import { STATIC_DESTINATIONS } from "../types";
import type { Trip } from "../types";

/* ─── Status badge styles ─────────────────────────────────────────────────── */
const STATUS_BADGE: Record<
  Trip["status"],
  { label: string; className: string }
> = {
  planned: {
    label: "Planned",
    className: "bg-secondary/15 text-secondary border-secondary/25",
  },
  ongoing: {
    label: "Ongoing",
    className:
      "bg-emerald-500/15 text-emerald-700 border-emerald-500/25 dark:text-emerald-400",
  },
  completed: {
    label: "Completed",
    className: "bg-muted text-muted-foreground border-border",
  },
};

/* ─── Helpers ─────────────────────────────────────────────────────────────── */
function getDestinationName(id: bigint) {
  return STATIC_DESTINATIONS.find((d) => d.id === id)?.name ?? "Unknown";
}

function getDestinationImage(id: bigint) {
  return (
    STATIC_DESTINATIONS.find((d) => d.id === id)?.imageUrl ??
    "/assets/generated/travel-hero-flatlay.dim_1200x700.jpg"
  );
}

function formatBudget(budget: bigint) {
  return `$${Number(budget).toLocaleString()}`;
}

function isUpcoming(trip: Trip) {
  if (trip.status === "completed") return false;
  const start = new Date(trip.startDate);
  return start >= new Date();
}

/* ─── Next Trip Highlight Card ────────────────────────────────────────────── */
function NextTripCard({ trip }: { trip: Trip }) {
  const destImage = getDestinationImage(trip.destinationId);
  const destName = getDestinationName(trip.destinationId);
  const badge = STATUS_BADGE[trip.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl overflow-hidden card-elevated"
      data-ocid="dashboard.next_trip_card"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={destImage}
          alt={destName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 min-h-[260px]">
        <div className="flex-1">
          <Badge
            className={`mb-3 text-xs font-medium border ${badge.className}`}
          >
            {badge.label}
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-1 leading-tight">
            {trip.name}
          </h2>
          <div className="flex items-center gap-1 text-white/80 text-sm mb-4">
            <MapPin size={13} />
            <span>{destName}</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {trip.startDate} → {trip.endDate}
            </span>
            <span className="flex items-center gap-1.5">
              <DollarSign size={14} />
              Budget: {formatBudget(trip.budget)}
            </span>
          </div>
        </div>
        <Link to="/trips/$id" params={{ id: trip.id.toString() }}>
          <Button
            size="lg"
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            data-ocid="dashboard.next_trip_view_button"
          >
            View Itinerary <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

/* ─── Trip Card ───────────────────────────────────────────────────────────── */
function TripCard({
  trip,
  index,
  onDelete,
}: {
  trip: Trip;
  index: number;
  onDelete: (id: bigint) => void;
}) {
  const badge = STATUS_BADGE[trip.status];

  return (
    <motion.div
      key={trip.id.toString()}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      className="group bg-card rounded-2xl overflow-hidden card-elevated hover:shadow-xl transition-smooth border border-border/50"
      data-ocid={`dashboard.trip_card.${index + 1}`}
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={getDestinationImage(trip.destinationId)}
          alt={trip.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 right-3">
          <Badge
            className={`text-xs font-medium capitalize border ${badge.className}`}
          >
            {badge.label}
          </Badge>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground mb-1 truncate">
          {trip.name}
        </h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
          <MapPin size={10} />
          <span>{getDestinationName(trip.destinationId)}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
          <Calendar size={10} />
          <span>
            {trip.startDate} → {trip.endDate}
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
          <DollarSign size={10} />
          <span>{formatBudget(trip.budget)}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            to="/trips/$id"
            params={{ id: trip.id.toString() }}
            className="flex-1"
            data-ocid={`dashboard.trip_view_button.${index + 1}`}
          >
            <Button variant="outline" size="sm" className="w-full gap-1">
              View <ArrowRight size={12} />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(trip.id)}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
            data-ocid={`dashboard.trip_delete_button.${index + 1}`}
            aria-label="Delete trip"
          >
            <Trash2 size={14} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Dashboard Page ──────────────────────────────────────────────────────── */
export default function DashboardPage() {
  const { identity } = useInternetIdentity();
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: trips = [], isLoading: tripsLoading } = useTrips();
  const deleteTrip = useDeleteTrip();
  const saveProfile = useSaveProfile();

  const [tripToDelete, setTripToDelete] = useState<bigint | null>(null);
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState("");

  const principalShort = identity?.getPrincipal().toText().slice(0, 12);
  const displayName = profile?.displayName ?? `${principalShort}…`;

  // Stats derived from trips
  const totalTrips = trips.length;
  const upcomingTrips = trips.filter(isUpcoming).length;
  const completedTrips = trips.filter((t) => t.status === "completed").length;
  const ongoingTrips = trips.filter((t) => t.status === "ongoing").length;

  // Next upcoming trip = soonest future trip
  const nextTrip = trips
    .filter(isUpcoming)
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    )[0];

  // All trips for the grid (exclude next trip if showing it separately)
  const gridTrips = nextTrip
    ? trips.filter((t) => t.id !== nextTrip.id).slice(0, 6)
    : trips.slice(0, 6);

  const handleDeleteConfirm = async () => {
    if (tripToDelete === null) return;
    try {
      await deleteTrip.mutateAsync(tripToDelete);
      toast.success("Trip deleted successfully");
    } catch {
      toast.error("Failed to delete trip");
    }
    setTripToDelete(null);
  };

  const handleSaveName = async () => {
    if (!nameInput.trim()) return;
    try {
      await saveProfile.mutateAsync({ displayName: nameInput.trim() });
      toast.success("Profile updated");
      setEditingName(false);
    } catch {
      toast.error("Failed to update profile");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background" data-ocid="dashboard.page">
        {/* Page header band */}
        <div className="bg-card border-b border-border/60 pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-start justify-between flex-wrap gap-4"
            >
              <div>
                {profileLoading ? (
                  <Skeleton className="h-10 w-64 mb-2" />
                ) : (
                  <h1 className="font-display text-4xl font-bold text-foreground">
                    Welcome back,{" "}
                    <span className="text-gradient-primary">{displayName}</span>{" "}
                    👋
                  </h1>
                )}
                <p className="text-muted-foreground mt-1 text-sm">
                  {totalTrips === 0
                    ? "Ready to plan your first adventure?"
                    : `You have ${upcomingTrips} upcoming trip${upcomingTrips !== 1 ? "s" : ""} and ${completedTrips} completed`}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-wrap">
                {!editingName ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setNameInput(profile?.displayName ?? "");
                      setEditingName(true);
                    }}
                    data-ocid="dashboard.edit_profile_button"
                  >
                    Edit Name
                  </Button>
                ) : (
                  <div className="flex items-center gap-2">
                    <input
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSaveName()}
                      placeholder="Your display name"
                      className="border border-input rounded-lg px-3 py-1.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      data-ocid="dashboard.name_input"
                    />
                    <Button
                      size="sm"
                      onClick={handleSaveName}
                      data-ocid="dashboard.save_name_button"
                    >
                      Save
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setEditingName(false)}
                      data-ocid="dashboard.cancel_name_button"
                    >
                      Cancel
                    </Button>
                  </div>
                )}
                <Link
                  to="/trips/new"
                  data-ocid="dashboard.plan_new_trip_button"
                >
                  <Button className="gap-2">
                    <Plus size={16} />
                    Plan New Trip
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-muted/40 border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  label: "Total Trips",
                  value: totalTrips,
                  icon: <Globe2 size={18} className="text-primary" />,
                },
                {
                  label: "Upcoming",
                  value: upcomingTrips,
                  icon: <Calendar size={18} className="text-secondary" />,
                },
                {
                  label: "Ongoing",
                  value: ongoingTrips,
                  icon: (
                    <span className="w-[18px] h-[18px] flex items-center justify-center text-emerald-600 text-base leading-none">
                      ✈
                    </span>
                  ),
                },
                {
                  label: "Completed",
                  value: completedTrips,
                  icon: (
                    <span className="w-[18px] h-[18px] flex items-center justify-center text-muted-foreground text-base leading-none">
                      ✓
                    </span>
                  ),
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-card rounded-xl px-4 py-3 flex items-center gap-3 card-subtle border border-border/50"
                  data-ocid={`dashboard.stat_card.${i + 1}`}
                >
                  <div className="shrink-0">{stat.icon}</div>
                  <div>
                    <p className="font-display text-xl font-bold text-foreground leading-none">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
          {/* Next trip highlight */}
          {!tripsLoading && nextTrip && (
            <section data-ocid="dashboard.next_trip_section">
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Next Adventure
              </h2>
              <NextTripCard trip={nextTrip} />
            </section>
          )}

          {/* Trips grid */}
          <section data-ocid="dashboard.trips_section">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-xl font-semibold text-foreground">
                {nextTrip ? "All Saved Trips" : "Your Saved Trips"}
              </h2>
              {trips.length > 0 && (
                <span className="text-sm text-muted-foreground">
                  {trips.length} trip{trips.length !== 1 ? "s" : ""}
                </span>
              )}
            </div>

            {tripsLoading ? (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                data-ocid="dashboard.trips_loading_state"
              >
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-64 rounded-2xl" />
                ))}
              </div>
            ) : trips.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-2xl p-12 text-center card-subtle border border-border"
                data-ocid="dashboard.trips_empty_state"
              >
                <div className="text-5xl mb-4">🗺️</div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  No trips yet
                </h3>
                <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                  Start planning your first adventure. Explore destinations and
                  build a day-by-day itinerary tailored to you.
                </p>
                <Link
                  to="/trips/new"
                  data-ocid="dashboard.empty_plan_trip_button"
                >
                  <Button className="gap-2" size="lg">
                    <Plus size={16} />
                    Plan Your First Trip
                  </Button>
                </Link>
              </motion.div>
            ) : gridTrips.length === 0 ? (
              // All trips shown in next trip card, no grid items
              <div
                className="bg-muted/30 rounded-2xl p-8 text-center border border-border/40"
                data-ocid="dashboard.trips_empty_state"
              >
                <p className="text-muted-foreground text-sm">
                  Your upcoming trip is highlighted above.
                </p>
                <Link to="/trips/new" className="mt-4 inline-block">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 mt-3"
                    data-ocid="dashboard.empty_plan_trip_button"
                  >
                    <Plus size={14} />
                    Plan another trip
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gridTrips.map((trip, i) => (
                  <TripCard
                    key={trip.id.toString()}
                    trip={trip}
                    index={i}
                    onDelete={setTripToDelete}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Delete confirm dialog */}
      <AlertDialog
        open={tripToDelete !== null}
        onOpenChange={(open) => !open && setTripToDelete(null)}
      >
        <AlertDialogContent data-ocid="dashboard.delete_trip_dialog">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this trip?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The trip and all its activities will
              be permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel data-ocid="dashboard.delete_trip_cancel_button">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              data-ocid="dashboard.delete_trip_confirm_button"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Layout>
  );
}
