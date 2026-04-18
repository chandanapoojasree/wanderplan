import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  DollarSign,
  MapPin,
  Star,
  Tag,
} from "lucide-react";
import { motion } from "motion/react";
import { Layout } from "../components/Layout";
import { useDestination } from "../hooks/use-backend";

export default function DestinationDetailPage() {
  const { id } = useParams({ from: "/destinations/$id" });
  const destId = BigInt(id);
  const { data: dest, isLoading } = useDestination(destId);
  const { isAuthenticated } = useInternetIdentity();

  if (isLoading) {
    return (
      <Layout noTopPad>
        <div
          className="animate-pulse"
          data-ocid="destination_detail.loading_state"
        >
          <Skeleton className="w-full h-[420px] rounded-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-4">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </Layout>
    );
  }

  if (!dest) {
    return (
      <Layout>
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center"
          data-ocid="destination_detail.error_state"
        >
          <div className="text-5xl mb-4">🌍</div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Destination not found
          </h2>
          <p className="text-muted-foreground mb-6">
            This destination doesn't exist or has been removed.
          </p>
          <Link
            to="/destinations"
            data-ocid="destination_detail.back_to_list_button"
          >
            <Button>Browse Destinations</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const budgetText =
    dest.estimatedDailyBudget < BigInt(80)
      ? "Budget-friendly"
      : dest.estimatedDailyBudget < BigInt(150)
        ? "Mid-Range"
        : "Luxury";

  const budgetBadgeCls =
    dest.estimatedDailyBudget < BigInt(80)
      ? "bg-muted text-muted-foreground"
      : dest.estimatedDailyBudget < BigInt(150)
        ? "bg-secondary/10 text-secondary"
        : "bg-primary/10 text-primary";

  return (
    <Layout noTopPad>
      {/* ── Full-bleed hero image ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[55vh] md:h-[60vh] overflow-hidden"
        data-ocid="destination_detail.hero"
      >
        <img
          src={dest.imageUrl}
          alt={dest.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Back button overlay */}
        <div className="absolute top-20 left-4 sm:left-8">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white bg-black/30 hover:bg-black/50 backdrop-blur px-3 py-1.5 rounded-full transition-smooth"
            data-ocid="destination_detail.back_link"
          >
            <ArrowLeft size={13} />
            All Destinations
          </Link>
        </div>

        {/* Rating badge */}
        <div className="absolute top-20 right-4 sm:right-8 flex items-center gap-1.5 bg-black/55 text-white px-3 py-1.5 rounded-full">
          <Star size={13} fill="currentColor" className="text-yellow-400" />
          <span className="font-medium text-sm">{dest.rating.toFixed(1)}</span>
        </div>

        {/* Destination name overlay */}
        <div className="absolute bottom-8 left-4 sm:left-8 right-4 sm:right-8">
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={14} className="text-white/70" />
            <span className="text-white/70 text-sm">{dest.country}</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
            {dest.name}
          </h1>
          <div className="flex gap-2 mt-3 flex-wrap">
            <Badge className={`border-0 ${budgetBadgeCls} text-xs`}>
              {budgetText}
            </Badge>
            {dest.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs capitalize text-white border-white/40 bg-transparent"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Content ── */}
      <div
        className="max-w-5xl mx-auto px-4 sm:px-6 py-10"
        data-ocid="destination_detail.page"
      >
        <div className="grid md:grid-cols-3 gap-10">
          {/* ── Main Content ── */}
          <motion.div
            className="md:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            {/* About */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                About {dest.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {dest.description}
              </p>
            </div>

            {/* Activities */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Activities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {dest.activities.map((act) => (
                  <div
                    key={act}
                    className="flex items-center gap-2.5 bg-muted/40 rounded-lg px-3 py-2.5"
                  >
                    <CheckCircle2 size={15} className="text-primary shrink-0" />
                    <span className="text-sm text-foreground">{act}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                Travel Style
              </h2>
              <div className="flex flex-wrap gap-2">
                {dest.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-sm capitalize px-3 py-1.5"
                  >
                    <Tag size={11} className="mr-1.5" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Sidebar ── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Quick info card */}
            <div className="bg-card rounded-2xl p-5 card-subtle border border-border">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Quick Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <DollarSign size={15} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Estimated Budget
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      ~${dest.estimatedDailyBudget.toString()} / day
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {budgetText}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Star
                      size={15}
                      className="text-primary"
                      fill="currentColor"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Traveller Rating
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {dest.rating.toFixed(1)} / 5.0
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {"★".repeat(Math.round(dest.rating))}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {dest.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan Trip CTA */}
            <div className="bg-primary/8 border border-primary/25 rounded-2xl p-5">
              <h3 className="font-display text-base font-semibold text-foreground mb-1">
                Ready to visit {dest.name}?
              </h3>
              <p className="text-muted-foreground text-xs mb-4">
                Build a personalised day-by-day itinerary tailored to your
                budget and interests.
              </p>
              {isAuthenticated ? (
                <Link
                  to="/trips/new"
                  search={{ destinationId: dest.id.toString() }}
                  data-ocid="destination_detail.plan_trip_button"
                >
                  <Button className="w-full">Plan Your Trip</Button>
                </Link>
              ) : (
                <Link
                  to="/login"
                  data-ocid="destination_detail.login_to_plan_button"
                >
                  <Button className="w-full">Login to Plan Trip</Button>
                </Link>
              )}
            </div>

            {/* Back link */}
            <Link
              to="/destinations"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-ocid="destination_detail.back_link_bottom"
            >
              <ArrowLeft size={14} />
              Back to all destinations
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
