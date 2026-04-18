import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { Filter, MapPin, Search, Star, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { useDestinations } from "../hooks/use-backend";
import type { DestinationFilter } from "../types";

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
  "relaxation",
];

const RATING_OPTIONS = [
  { label: "Any", value: undefined },
  { label: "4.0+", value: 4.0 },
  { label: "4.5+", value: 4.5 },
  { label: "4.8+", value: 4.8 },
];

const budgetDisplay = (budget: bigint) => {
  if (budget < BigInt(80))
    return { label: "Budget", cls: "bg-muted text-muted-foreground" };
  if (budget < BigInt(150))
    return { label: "Mid-Range", cls: "bg-secondary/10 text-secondary" };
  return { label: "Luxury", cls: "bg-primary/10 text-primary" };
};

export default function DestinationsPage() {
  // Read URL search params
  const rawSearch = useSearch({ strict: false }) as Record<string, string>;
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState(rawSearch.q ?? "");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [minRatingIdx, setMinRatingIdx] = useState(0);
  const [minBudgetStr, setMinBudgetStr] = useState("");
  const [maxBudgetStr, setMaxBudgetStr] = useState(rawSearch.budget ?? "");
  const [filterOpen, setFilterOpen] = useState(false);

  // Sync URL params on mount
  useEffect(() => {
    if (rawSearch.q) setSearchText(rawSearch.q);
    if (rawSearch.budget) setMaxBudgetStr(rawSearch.budget);
  }, [rawSearch.q, rawSearch.budget]);

  const minBudget = minBudgetStr ? BigInt(minBudgetStr) : undefined;
  const maxBudget = maxBudgetStr ? BigInt(maxBudgetStr) : undefined;

  const filter: DestinationFilter = {
    minBudget,
    maxBudget,
    minRating: RATING_OPTIONS[minRatingIdx].value,
    tags: selectedTags,
  };

  const { data: allDestinations = [] } = useDestinations(filter);

  const destinations = searchText.trim()
    ? allDestinations.filter(
        (d) =>
          d.name.toLowerCase().includes(searchText.toLowerCase()) ||
          d.country.toLowerCase().includes(searchText.toLowerCase()),
      )
    : allDestinations;

  const toggleTag = (tag: string) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );

  const hasFilters =
    selectedTags.length > 0 ||
    minRatingIdx !== 0 ||
    !!minBudgetStr ||
    !!maxBudgetStr;

  const clearFilters = () => {
    setSelectedTags([]);
    setMinRatingIdx(0);
    setMinBudgetStr("");
    setMaxBudgetStr("");
    setSearchText("");
    navigate({ to: "/destinations" });
  };

  return (
    <Layout>
      {/* ── Hero Banner ── */}
      <div
        className="relative bg-card border-b border-border overflow-hidden"
        data-ocid="destinations.hero"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/assets/generated/destinations-hero-banner.dim_1600x500.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-white/60 text-xs font-medium uppercase tracking-widest mb-2">
              Explore the world
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
              Destinations
            </h1>
            <p className="text-white/75 text-base max-w-lg">
              {destinations.length} curated destinations around the world — find
              your next adventure.
            </p>
          </motion.div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 py-8"
        data-ocid="destinations.page"
      >
        {/* ── Search + Filters Bar ── */}
        <div
          className="flex flex-col sm:flex-row gap-3 mb-6"
          data-ocid="destinations.filters_bar"
        >
          {/* Text search */}
          <div className="relative flex-1 max-w-sm">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search destinations…"
              className="pl-9"
              data-ocid="destinations.search_input"
            />
          </div>

          {/* Filter toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setFilterOpen(!filterOpen)}
            className="gap-2 h-10 self-start"
            data-ocid="destinations.filter_toggle"
          >
            <Filter size={14} />
            Filters
            {hasFilters && (
              <Badge className="bg-primary text-primary-foreground text-xs h-4 w-4 p-0 flex items-center justify-center rounded-full">
                {selectedTags.length +
                  (minRatingIdx !== 0 ? 1 : 0) +
                  (minBudgetStr ? 1 : 0) +
                  (maxBudgetStr ? 1 : 0)}
              </Badge>
            )}
          </Button>

          {/* Rating quick filters */}
          <div className="flex gap-1.5 flex-wrap">
            {RATING_OPTIONS.map((opt, idx) => (
              <Button
                key={opt.label}
                variant={minRatingIdx === idx ? "default" : "outline"}
                size="sm"
                onClick={() => setMinRatingIdx(idx)}
                className="h-10 gap-1"
                data-ocid={`destinations.rating_filter.${idx + 1}`}
              >
                {opt.value ? (
                  <>
                    <Star size={11} fill="currentColor" />
                    {opt.label}
                  </>
                ) : (
                  opt.label
                )}
              </Button>
            ))}
          </div>

          {hasFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="gap-1 text-muted-foreground h-10 self-start"
              data-ocid="destinations.clear_filters"
            >
              <X size={12} />
              Clear all
            </Button>
          )}
        </div>

        {/* ── Expanded Filter Panel ── */}
        {filterOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="bg-card rounded-xl p-5 mb-6 card-subtle border border-border"
            data-ocid="destinations.filter_panel"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Budget range */}
              <div>
                <p className="text-xs font-medium text-foreground uppercase tracking-wider mb-3">
                  Budget per day ($)
                </p>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={minBudgetStr}
                    onChange={(e) => setMinBudgetStr(e.target.value)}
                    placeholder="Min"
                    min={0}
                    className="h-9 text-sm"
                    data-ocid="destinations.min_budget_input"
                  />
                  <span className="text-muted-foreground text-xs">–</span>
                  <Input
                    type="number"
                    value={maxBudgetStr}
                    onChange={(e) => setMaxBudgetStr(e.target.value)}
                    placeholder="Max"
                    min={0}
                    className="h-9 text-sm"
                    data-ocid="destinations.max_budget_input"
                  />
                </div>
              </div>

              {/* Min rating */}
              <div>
                <p className="text-xs font-medium text-foreground uppercase tracking-wider mb-3">
                  Minimum rating
                </p>
                <div className="flex gap-2 flex-wrap">
                  {RATING_OPTIONS.map((opt, idx) => (
                    <button
                      type="button"
                      key={opt.label}
                      onClick={() => setMinRatingIdx(idx)}
                      className={`px-3 py-1.5 rounded-full text-xs transition-smooth flex items-center gap-1 ${
                        minRatingIdx === idx
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/70"
                      }`}
                      data-ocid={`destinations.rating_select.${idx + 1}`}
                    >
                      {opt.value && <Star size={10} fill="currentColor" />}
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <p className="text-xs font-medium text-foreground uppercase tracking-wider mb-3">
                  Interests
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {ALL_TAGS.map((tag) => (
                    <button
                      type="button"
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-2.5 py-1 rounded-full text-xs transition-smooth capitalize ${
                        selectedTags.includes(tag)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/70"
                      }`}
                      data-ocid={`destinations.tag_filter.${tag}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Active tag chips ── */}
        {selectedTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {selectedTags.map((tag) => (
              <Badge
                key={tag}
                className="bg-primary/10 text-primary capitalize cursor-pointer hover:bg-primary/20 transition-smooth gap-1"
                onClick={() => toggleTag(tag)}
                data-ocid={`destinations.active_tag.${tag}`}
              >
                {tag}
                <X size={10} />
              </Badge>
            ))}
          </div>
        )}

        {/* ── Results count ── */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-medium text-foreground">
              {destinations.length}
            </span>{" "}
            destination{destinations.length !== 1 ? "s" : ""}
            {searchText ? ` for "${searchText}"` : ""}
          </p>
        </div>

        <Separator className="mb-8" />

        {/* ── Grid ── */}
        {destinations.length === 0 ? (
          <div
            className="text-center py-20"
            data-ocid="destinations.empty_state"
          >
            <div className="text-4xl mb-4">🔭</div>
            <p className="text-muted-foreground text-lg mb-2 font-display font-semibold">
              No destinations match your filters
            </p>
            <p className="text-muted-foreground text-sm mb-5">
              Try adjusting your search or clearing the active filters.
            </p>
            <Button
              variant="outline"
              onClick={clearFilters}
              data-ocid="destinations.clear_filters_empty"
            >
              Clear all filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, i) => {
              const budget = budgetDisplay(dest.estimatedDailyBudget);
              return (
                <motion.div
                  key={dest.id.toString()}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  data-ocid={`destinations.destination_card.${i + 1}`}
                >
                  <Link
                    to="/destinations/$id"
                    params={{ id: dest.id.toString() }}
                    className="block h-full"
                  >
                    <div className="group rounded-2xl overflow-hidden bg-card card-elevated hover:shadow-xl transition-smooth h-full flex flex-col">
                      <div className="relative h-52 overflow-hidden shrink-0">
                        <img
                          src={dest.imageUrl}
                          alt={dest.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                        />
                        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/65 text-white text-xs px-2 py-1 rounded-full font-medium">
                          <Star
                            size={10}
                            fill="currentColor"
                            className="text-yellow-400"
                          />
                          {dest.rating.toFixed(1)}
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
                          <MapPin size={11} />
                          {dest.country}
                        </div>
                        <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {dest.name}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1 leading-relaxed">
                          {dest.description}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge
                            className={`text-xs font-medium border-0 ${budget.cls}`}
                          >
                            {budget.label}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            ~${dest.estimatedDailyBudget.toString()}/day
                          </span>
                          {dest.activities.slice(0, 3).map((act) => (
                            <Badge
                              key={act}
                              variant="outline"
                              className="text-xs"
                            >
                              {act}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
