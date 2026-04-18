import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  DollarSign,
  MapPin,
  Pencil,
  Plus,
  Trash2,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import {
  useAddActivity,
  useRemoveActivity,
  useTrip,
  useUpdateActivity,
  useUpdateTripStatus,
} from "../hooks/use-backend";
import type { Activity, TripStatus } from "../types";
import { STATIC_DESTINATIONS } from "../types";

type ActivityForm = {
  dayNumber: string;
  date: string;
  time: string;
  title: string;
  description: string;
  durationMinutes: string;
};

const EMPTY_FORM: ActivityForm = {
  dayNumber: "1",
  date: "",
  time: "09:00",
  title: "",
  description: "",
  durationMinutes: "60",
};

const STATUS_CONFIG: Record<
  TripStatus,
  { label: string; icon: React.ReactNode; className: string }
> = {
  planned: {
    label: "Planned",
    icon: <Circle size={12} />,
    className: "bg-secondary/10 text-secondary border-secondary/30",
  },
  ongoing: {
    label: "Ongoing",
    icon: <TrendingUp size={12} />,
    className: "bg-primary/10 text-primary border-primary/30",
  },
  completed: {
    label: "Completed",
    icon: <CheckCircle2 size={12} />,
    className: "bg-muted text-muted-foreground border-border",
  },
};

export default function TripDetailPage() {
  const { id } = useParams({ from: "/trips/$id" });
  const tripId = BigInt(id);

  const { data: trip, isLoading } = useTrip(tripId);
  const addActivity = useAddActivity();
  const updateActivity = useUpdateActivity();
  const removeActivity = useRemoveActivity();
  const updateTripStatus = useUpdateTripStatus();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<{
    dayNumber: bigint;
    activityId: bigint;
  } | null>(null);
  const [editingActivity, setEditingActivity] = useState<{
    dayNumber: bigint;
    activity: Activity;
  } | null>(null);
  const [form, setForm] = useState<ActivityForm>(EMPTY_FORM);
  const [activeDay, setActiveDay] = useState<number>(1);

  const dest = trip
    ? STATIC_DESTINATIONS.find((d) => d.id === trip.destinationId)
    : null;

  const sortedDays = trip
    ? [...trip.itinerary].sort((a, b) => Number(a.dayNumber - b.dayNumber))
    : [];

  const currentDayData = sortedDays.find(
    (d) => Number(d.dayNumber) === activeDay,
  );

  const openAddDialog = (dayNum?: number) => {
    setEditingActivity(null);
    const dayDate =
      sortedDays.find((d) => Number(d.dayNumber) === (dayNum ?? activeDay))
        ?.date ?? "";
    setForm({
      ...EMPTY_FORM,
      dayNumber: String(dayNum ?? activeDay),
      date: dayDate,
    });
    setDialogOpen(true);
  };

  const openEditDialog = (dayNumber: bigint, activity: Activity) => {
    setEditingActivity({ dayNumber, activity });
    setForm({
      dayNumber: dayNumber.toString(),
      date: trip?.itinerary.find((d) => d.dayNumber === dayNumber)?.date ?? "",
      time: activity.time,
      title: activity.title,
      description: activity.description,
      durationMinutes: activity.durationMinutes.toString(),
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.title.trim()) {
      toast.error("Activity title is required");
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
          durationMinutes: BigInt(Number(form.durationMinutes) || 60),
        });
        toast.success("Activity updated");
      } else {
        await addActivity.mutateAsync({
          tripId,
          dayNumber: BigInt(Number(form.dayNumber) || 1),
          date: form.date,
          time: form.time,
          title: form.title.trim(),
          description: form.description.trim(),
          durationMinutes: BigInt(Number(form.durationMinutes) || 60),
        });
        toast.success("Activity added");
        setActiveDay(Number(form.dayNumber) || 1);
      }
      setDialogOpen(false);
    } catch {
      toast.error("Failed to save activity");
    }
  };

  const handleRemove = async (dayNumber: bigint, activityId: bigint) => {
    try {
      await removeActivity.mutateAsync({ tripId, dayNumber, activityId });
      toast.success("Activity removed");
      setDeleteConfirmId(null);
    } catch {
      toast.error("Failed to remove activity");
    }
  };

  // ── Loading state ──
  if (isLoading) {
    return (
      <Layout>
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6"
          data-ocid="trip_detail.loading_state"
        >
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-48 rounded-2xl" />
          <Skeleton className="h-10 w-full rounded-xl" />
          {[1, 2].map((i) => (
            <Skeleton key={i} className="h-24 rounded-xl" />
          ))}
        </div>
      </Layout>
    );
  }

  // ── Not found ──
  if (!trip) {
    return (
      <Layout>
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center"
          data-ocid="trip_detail.error_state"
        >
          <p className="text-5xl mb-4">🗺️</p>
          <h2 className="font-display text-2xl font-bold mb-2 text-foreground">
            Trip not found
          </h2>
          <p className="text-muted-foreground mb-6">
            This trip may have been removed or doesn't exist.
          </p>
          <Link to="/dashboard">
            <Button data-ocid="trip_detail.back_to_dashboard_button">
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const statusCfg = STATUS_CONFIG[trip.status];

  return (
    <Layout>
      <div data-ocid="trip_detail.page">
        {/* ── Destination hero image ── */}
        <div className="relative h-52 sm:h-64 overflow-hidden">
          {dest ? (
            <img
              src={dest.imageUrl}
              alt={dest.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 pb-5">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition-colors mb-3"
              data-ocid="trip_detail.back_link"
            >
              <ArrowLeft size={12} /> Back to Dashboard
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl sm:text-4xl font-bold text-white"
            >
              {trip.name}
            </motion.h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* ── Trip meta strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl card-subtle px-5 py-4 -mt-5 relative z-10 flex flex-wrap items-center gap-x-6 gap-y-3 mb-6"
          >
            {dest && (
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin size={13} className="text-primary" />
                <span className="text-foreground font-medium">
                  {dest.name}, {dest.country}
                </span>
              </span>
            )}
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar size={13} className="text-primary" />
              {trip.startDate} → {trip.endDate}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <DollarSign size={13} className="text-primary" />$
              {trip.budget.toString()} budget
            </span>

            {/* Status badge + edit dropdown */}
            <div className="flex items-center gap-2 ml-auto">
              <Badge
                className={`flex items-center gap-1 capitalize border px-2.5 py-1 text-xs font-medium ${statusCfg.className}`}
                data-ocid="trip_detail.status_badge"
              >
                {statusCfg.icon}
                {statusCfg.label}
              </Badge>
              <select
                value={trip.status}
                onChange={async (e) => {
                  const newStatus = e.target.value as TripStatus;
                  try {
                    await updateTripStatus.mutateAsync({
                      tripId,
                      status: newStatus,
                    });
                    toast.success(
                      `Trip status updated to ${STATUS_CONFIG[newStatus].label}`,
                    );
                  } catch {
                    toast.error("Failed to update status");
                  }
                }}
                title="Change trip status"
                className="text-xs border border-input rounded-lg px-2 py-1 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer"
                data-ocid="trip_detail.status_select"
              >
                <option value="planned">Planned</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </motion.div>

          {/* Interests */}
          {trip.interests.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {trip.interests.map((interest) => (
                <Badge
                  key={interest}
                  variant="outline"
                  className="text-xs capitalize"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          )}

          {/* ── Itinerary section ── */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Itinerary
            </h2>
            <Button
              onClick={() => openAddDialog()}
              size="sm"
              className="gap-1.5"
              data-ocid="trip_detail.add_activity_button"
            >
              <Plus size={14} /> Add Activity
            </Button>
          </div>

          {sortedDays.length === 0 ? (
            /* Empty state */
            <div
              className="bg-card rounded-2xl p-12 text-center card-subtle border border-border mb-10"
              data-ocid="trip_detail.itinerary_empty_state"
            >
              <p className="text-4xl mb-4">📅</p>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                No activities yet
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xs mx-auto">
                Start building your day-by-day itinerary — add activities,
                times, and notes.
              </p>
              <Button
                onClick={() => openAddDialog()}
                className="gap-2"
                data-ocid="trip_detail.empty_add_activity_button"
              >
                <Plus size={16} /> Add First Activity
              </Button>
            </div>
          ) : (
            <div className="mb-10">
              {/* Day tabs */}
              <div
                className="flex gap-1.5 overflow-x-auto pb-1 mb-5 no-scrollbar"
                data-ocid="trip_detail.day_tabs"
              >
                {sortedDays.map((day) => {
                  const num = Number(day.dayNumber);
                  const isActive = num === activeDay;
                  return (
                    <button
                      key={day.dayNumber.toString()}
                      type="button"
                      onClick={() => setActiveDay(num)}
                      className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-smooth border ${
                        isActive
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                      }`}
                      data-ocid={`trip_detail.day_tab.${num}`}
                    >
                      <span>Day {num}</span>
                      {day.date && (
                        <span
                          className={`block text-[10px] mt-0.5 ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                        >
                          {new Date(`${day.date}T00:00:00`).toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric" },
                          )}
                        </span>
                      )}
                    </button>
                  );
                })}
                {/* Add new day button */}
                <button
                  type="button"
                  onClick={() => {
                    const nextDay = sortedDays.length + 1;
                    setActiveDay(nextDay);
                    openAddDialog(nextDay);
                  }}
                  className="flex-shrink-0 px-3 py-2 rounded-xl text-sm border border-dashed border-border text-muted-foreground hover:border-primary/50 hover:text-foreground transition-smooth"
                  data-ocid="trip_detail.add_day_button"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Active day content */}
              {currentDayData ? (
                <motion.div
                  key={activeDay}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  data-ocid={`trip_detail.day_panel.${activeDay}`}
                >
                  {currentDayData.activities.length === 0 ? (
                    <div className="bg-card rounded-2xl border border-dashed border-border p-8 text-center">
                      <p className="text-muted-foreground text-sm mb-3">
                        No activities for Day {activeDay} yet
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openAddDialog(activeDay)}
                        className="gap-1.5"
                        data-ocid={`trip_detail.day_add_activity_button.${activeDay}`}
                      >
                        <Plus size={13} /> Add Activity
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {[...currentDayData.activities]
                        .sort((a, b) => a.time.localeCompare(b.time))
                        .map((activity, ai) => (
                          <motion.div
                            key={activity.id.toString()}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: ai * 0.05 }}
                            className="bg-card rounded-xl border border-border card-subtle flex items-start gap-4 px-4 py-4 group hover:border-primary/20 transition-smooth"
                            data-ocid={`trip_detail.activity.${activeDay}.${ai + 1}`}
                          >
                            {/* Time chip */}
                            <div className="flex-shrink-0 bg-primary/8 border border-primary/15 rounded-lg px-2.5 py-2 text-center min-w-[56px]">
                              <p className="text-xs font-mono text-primary font-semibold leading-none">
                                {activity.time}
                              </p>
                            </div>
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-foreground text-sm leading-snug">
                                {activity.title}
                              </p>
                              {activity.description && (
                                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                  {activity.description}
                                </p>
                              )}
                              <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                                <Clock size={10} />
                                <span>
                                  {activity.durationMinutes.toString()} min
                                </span>
                              </div>
                            </div>
                            {/* Actions */}
                            <div className="flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-smooth flex-shrink-0">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 hover:bg-secondary/10 hover:text-secondary"
                                onClick={() =>
                                  openEditDialog(
                                    currentDayData.dayNumber,
                                    activity,
                                  )
                                }
                                aria-label="Edit activity"
                                data-ocid={`trip_detail.activity_edit_button.${activeDay}.${ai + 1}`}
                              >
                                <Pencil size={13} />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                                onClick={() =>
                                  setDeleteConfirmId({
                                    dayNumber: currentDayData.dayNumber,
                                    activityId: activity.id,
                                  })
                                }
                                aria-label="Delete activity"
                                data-ocid={`trip_detail.activity_delete_button.${activeDay}.${ai + 1}`}
                              >
                                <Trash2 size={13} />
                              </Button>
                            </div>
                          </motion.div>
                        ))}
                      {/* Add activity to this day */}
                      <button
                        type="button"
                        onClick={() => openAddDialog(activeDay)}
                        className="w-full py-3 rounded-xl border border-dashed border-border text-muted-foreground text-sm hover:border-primary/40 hover:text-foreground transition-smooth flex items-center justify-center gap-1.5"
                        data-ocid={`trip_detail.day_inline_add_button.${activeDay}`}
                      >
                        <Plus size={14} /> Add activity to Day {activeDay}
                      </button>
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="bg-card rounded-2xl border border-dashed border-border p-8 text-center">
                  <p className="text-muted-foreground text-sm mb-3">
                    Day {activeDay} has no activities yet
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openAddDialog(activeDay)}
                    className="gap-1.5"
                    data-ocid={`trip_detail.day_add_activity_button.${activeDay}`}
                  >
                    <Plus size={13} /> Add Activity
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Add / Edit activity dialog ── */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          className="max-w-md"
          data-ocid="trip_detail.activity_dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display">
              {editingActivity ? "Edit Activity" : "Add Activity"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            {!editingActivity && (
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>Day Number</Label>
                  <Input
                    type="number"
                    min="1"
                    value={form.dayNumber}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, dayNumber: e.target.value }))
                    }
                    data-ocid="trip_detail.activity_day_input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>Date (optional)</Label>
                  <Input
                    type="date"
                    value={form.date}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, date: e.target.value }))
                    }
                    data-ocid="trip_detail.activity_date_input"
                  />
                </div>
              </div>
            )}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Time (HH:MM)</Label>
                <Input
                  type="time"
                  value={form.time}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, time: e.target.value }))
                  }
                  data-ocid="trip_detail.activity_time_input"
                />
              </div>
              <div className="space-y-1.5">
                <Label>Duration (min)</Label>
                <Input
                  type="number"
                  min="1"
                  value={form.durationMinutes}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, durationMinutes: e.target.value }))
                  }
                  data-ocid="trip_detail.activity_duration_input"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Activity Title *</Label>
              <Input
                value={form.title}
                onChange={(e) =>
                  setForm((p) => ({ ...p, title: e.target.value }))
                }
                placeholder="e.g. Visit Acropolis"
                data-ocid="trip_detail.activity_title_input"
              />
            </div>
            <div className="space-y-1.5">
              <Label>Description (optional)</Label>
              <Textarea
                value={form.description}
                onChange={(e) =>
                  setForm((p) => ({ ...p, description: e.target.value }))
                }
                placeholder="Notes, tips, or details…"
                rows={2}
                className="resize-none"
                data-ocid="trip_detail.activity_description_input"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDialogOpen(false)}
              data-ocid="trip_detail.activity_cancel_button"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={addActivity.isPending || updateActivity.isPending}
              data-ocid="trip_detail.activity_save_button"
            >
              {addActivity.isPending || updateActivity.isPending
                ? "Saving…"
                : editingActivity
                  ? "Update Activity"
                  : "Add Activity"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Delete confirmation dialog ── */}
      <Dialog
        open={!!deleteConfirmId}
        onOpenChange={(open) => !open && setDeleteConfirmId(null)}
      >
        <DialogContent
          className="max-w-sm"
          data-ocid="trip_detail.delete_dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display">Remove Activity?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground py-2">
            This activity will be permanently removed from your itinerary.
          </p>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteConfirmId(null)}
              data-ocid="trip_detail.delete_cancel_button"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() =>
                deleteConfirmId &&
                handleRemove(
                  deleteConfirmId.dayNumber,
                  deleteConfirmId.activityId,
                )
              }
              disabled={removeActivity.isPending}
              data-ocid="trip_detail.delete_confirm_button"
            >
              {removeActivity.isPending ? "Removing…" : "Remove"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
