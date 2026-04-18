import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { Calendar, DollarSign, MapPin, Plane } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import { useCreateTrip, useDestinations } from "../hooks/use-backend";

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
  { label: "Wellness", emoji: "💆" },
];

export default function NewTripPage() {
  const navigate = useNavigate();
  const search = useSearch({ strict: false }) as { destinationId?: string };
  const createTrip = useCreateTrip();
  const { data: destinations = [] } = useDestinations();

  const [form, setForm] = useState({
    name: "",
    destinationId: search.destinationId ?? "",
    startDate: "",
    endDate: "",
    budget: "",
    interests: [] as string[],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleInterest = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
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

  const handleSubmit = async (e: React.FormEvent) => {
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
        interests: form.interests,
      });
      toast.success("Trip created! Let's build your itinerary.");
      navigate({ to: "/trips/$id", params: { id: trip.id.toString() } });
    } catch {
      toast.error("Failed to create trip. Please try again.");
    }
  };

  const selectedDest = destinations.find(
    (d) => d.id.toString() === form.destinationId,
  );

  // Compute trip duration in days
  const tripDays =
    form.startDate && form.endDate
      ? Math.max(
          1,
          Math.round(
            (new Date(form.endDate).getTime() -
              new Date(form.startDate).getTime()) /
              86400000,
          ),
        )
      : null;

  return (
    <Layout>
      <div
        className="min-h-[calc(100vh-4rem)] bg-background"
        data-ocid="new_trip.page"
      >
        {/* Hero banner */}
        <div className="relative h-36 overflow-hidden">
          {selectedDest ? (
            <img
              src={selectedDest.imageUrl}
              alt={selectedDest.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
          <div className="absolute inset-0 flex items-end px-6 pb-5">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="font-display text-3xl font-bold text-white"
              >
                Plan Your Next Journey
              </motion.h1>
              <p className="text-white/75 text-sm mt-0.5">
                Fill in the details below — no complex steps, just a clean form.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Trip name */}
            <div className="bg-card rounded-2xl border border-border card-subtle p-5 space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wide">
                <Plane size={14} />
                Trip Details
              </div>
              <div className="space-y-2">
                <Label htmlFor="trip-name">Trip Name</Label>
                <Input
                  id="trip-name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="e.g. Greek Island Escape 2026"
                  data-ocid="new_trip.name_input"
                />
                {errors.name && (
                  <p
                    className="text-destructive text-xs"
                    data-ocid="new_trip.name_field_error"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <Label htmlFor="destination">
                  <MapPin size={12} className="inline mr-1" />
                  Destination
                </Label>
                <select
                  id="destination"
                  value={form.destinationId}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, destinationId: e.target.value }))
                  }
                  className="w-full border border-input rounded-lg px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                  data-ocid="new_trip.destination_select"
                >
                  <option value="">Select a destination…</option>
                  {destinations.map((d) => (
                    <option key={d.id.toString()} value={d.id.toString()}>
                      {d.name}, {d.country}
                    </option>
                  ))}
                </select>
                {errors.destinationId && (
                  <p
                    className="text-destructive text-xs"
                    data-ocid="new_trip.destination_field_error"
                  >
                    {errors.destinationId}
                  </p>
                )}

                {/* Destination preview card */}
                {selectedDest && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 bg-primary/5 border border-primary/15 rounded-xl p-3 mt-2"
                  >
                    <img
                      src={selectedDest.imageUrl}
                      alt={selectedDest.name}
                      className="w-16 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {selectedDest.name}, {selectedDest.country}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        ~${selectedDest.estimatedDailyBudget.toString()}/day ·{" "}
                        {selectedDest.rating.toFixed(1)} ★
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {selectedDest.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-[10px] px-1.5 py-0 capitalize"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Dates & budget */}
            <div className="bg-card rounded-2xl border border-border card-subtle p-5 space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wide">
                <Calendar size={14} />
                Dates & Budget
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input
                    id="start-date"
                    type="date"
                    value={form.startDate}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, startDate: e.target.value }))
                    }
                    data-ocid="new_trip.start_date_input"
                  />
                  {errors.startDate && (
                    <p
                      className="text-destructive text-xs"
                      data-ocid="new_trip.start_date_field_error"
                    >
                      {errors.startDate}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Input
                    id="end-date"
                    type="date"
                    value={form.endDate}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, endDate: e.target.value }))
                    }
                    data-ocid="new_trip.end_date_input"
                  />
                  {errors.endDate && (
                    <p
                      className="text-destructive text-xs"
                      data-ocid="new_trip.end_date_field_error"
                    >
                      {errors.endDate}
                    </p>
                  )}
                </div>
              </div>

              {tripDays && (
                <p className="text-xs text-muted-foreground bg-muted/60 rounded-lg px-3 py-2">
                  📅 {tripDays} day{tripDays !== 1 ? "s" : ""} trip
                  {selectedDest && tripDays
                    ? ` · Estimated cost at destination: ~$${(Number(selectedDest.estimatedDailyBudget) * tripDays).toLocaleString()}`
                    : ""}
                </p>
              )}

              <div className="space-y-2">
                <Label htmlFor="budget">
                  <DollarSign size={12} className="inline mr-1" />
                  Total Budget (USD)
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium">
                    $
                  </span>
                  <Input
                    id="budget"
                    type="number"
                    min="1"
                    value={form.budget}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, budget: e.target.value }))
                    }
                    placeholder="e.g. 2500"
                    className="pl-7"
                    data-ocid="new_trip.budget_input"
                  />
                </div>
                {errors.budget && (
                  <p
                    className="text-destructive text-xs"
                    data-ocid="new_trip.budget_field_error"
                  >
                    {errors.budget}
                  </p>
                )}
              </div>
            </div>

            {/* Interests */}
            <div className="bg-card rounded-2xl border border-border card-subtle p-5 space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Interests{" "}
                  <span className="normal-case font-normal">
                    (optional — select all that apply)
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {INTEREST_OPTIONS.map(({ label, emoji }) => {
                  const active = form.interests.includes(label);
                  return (
                    <button
                      type="button"
                      key={label}
                      onClick={() => toggleInterest(label)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-smooth border ${
                        active
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background text-foreground border-border hover:border-primary/50 hover:bg-muted/50"
                      }`}
                      data-ocid={`new_trip.interest_toggle.${label.toLowerCase()}`}
                    >
                      <span>{emoji}</span> {label}
                    </button>
                  );
                })}
              </div>
              {form.interests.length > 0 && (
                <p className="text-xs text-muted-foreground">
                  {form.interests.length} interest
                  {form.interests.length !== 1 ? "s" : ""} selected
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pb-6">
              <Button
                type="submit"
                size="lg"
                className="flex-1 font-semibold"
                disabled={createTrip.isPending}
                data-ocid="new_trip.submit_button"
              >
                {createTrip.isPending ? "Creating Trip…" : "Create Trip →"}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => window.history.back()}
                data-ocid="new_trip.cancel_button"
              >
                Cancel
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </Layout>
  );
}
