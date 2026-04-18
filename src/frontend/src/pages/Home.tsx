import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useRouter } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarRange,
  DollarSign,
  MapPin,
  Search,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { STATIC_DESTINATIONS } from "../types";

const FEATURES = [
  {
    icon: "🗺️",
    title: "Smart Itineraries",
    desc: "Day-by-day plans tailored to your interests, budget, and travel style. Every detail handled.",
  },
  {
    icon: "📍",
    title: "Virtual Guide",
    desc: "Rich destination profiles, local tips, weather insights, and activity recommendations.",
  },
  {
    icon: "✈️",
    title: "Save & Discover",
    desc: "Keep all your trips organised in a personal dashboard, accessible anywhere, anytime.",
  },
];

const budgetLabel = (budget: bigint) => {
  if (budget < BigInt(80))
    return { text: "$", cls: "bg-muted text-muted-foreground" };
  if (budget < BigInt(150))
    return { text: "$$", cls: "bg-secondary/10 text-secondary" };
  return { text: "$$$", cls: "bg-primary/10 text-primary" };
};

export default function HomePage() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <Layout noTopPad>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[80vh] flex items-center hero-overlay overflow-hidden"
        style={{
          backgroundImage: `url('/assets/generated/santorini-hero.dim_1400x800.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
        data-ocid="home.hero_section"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-2xl"
          >
            <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-4">
              Your world, curated
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-5">
              Curate Your Next
              <br />
              <span className="text-secondary">Extraordinary</span> Journey
            </h1>
            <p className="text-white/75 text-lg md:text-xl mb-10 max-w-lg font-body leading-relaxed">
              Discover handpicked destinations, build personalised itineraries,
              and travel with confidence.
            </p>

            {/* ── Search Bar ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="bg-white/97 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden"
              data-ocid="home.search_bar"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto_auto] divide-y sm:divide-y-0 sm:divide-x divide-border">
                {/* Destination */}
                <div className="flex items-center px-4 py-3 gap-3">
                  <MapPin size={16} className="text-primary shrink-0" />
                  <div className="flex-1 min-w-0">
                    <Label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-0.5">
                      Where to?
                    </Label>
                    <Input
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Destination or country…"
                      className="border-0 shadow-none bg-transparent focus-visible:ring-0 p-0 h-auto text-sm text-foreground placeholder:text-muted-foreground"
                      data-ocid="home.destination_input"
                    />
                  </div>
                </div>

                {/* Date range */}
                <div className="flex items-center px-4 py-3 gap-3">
                  <CalendarRange size={16} className="text-primary shrink-0" />
                  <div className="flex-1 min-w-0">
                    <Label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-0.5">
                      Dates
                    </Label>
                    <div className="flex items-center gap-1">
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="border-0 bg-transparent text-sm text-foreground focus:outline-none w-[130px]"
                        data-ocid="home.start_date_input"
                      />
                      <span className="text-muted-foreground text-xs">–</span>
                      <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        min={startDate}
                        className="border-0 bg-transparent text-sm text-foreground focus:outline-none w-[130px]"
                        data-ocid="home.end_date_input"
                      />
                    </div>
                  </div>
                </div>

                {/* Budget */}
                <div className="flex items-center px-4 py-3 gap-3">
                  <DollarSign size={16} className="text-primary shrink-0" />
                  <div className="flex-1 min-w-0">
                    <Label className="text-[10px] uppercase tracking-wider text-muted-foreground block mb-0.5">
                      Budget / day
                    </Label>
                    <Input
                      type="number"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Max $"
                      min={0}
                      className="border-0 shadow-none bg-transparent focus-visible:ring-0 p-0 h-auto text-sm text-foreground placeholder:text-muted-foreground w-24"
                      data-ocid="home.budget_input"
                    />
                  </div>
                </div>

                {/* Search CTA */}
                <div className="flex items-center px-3 py-2">
                  <Button
                    onClick={handleSearch}
                    size="lg"
                    className="gap-2 px-6 h-12 rounded-xl w-full sm:w-auto"
                    data-ocid="home.search_submit_button"
                  >
                    <Search size={16} />
                    Search
                  </Button>
                </div>
              </div>
            </motion.div>

            <p className="text-white/50 text-xs mt-3">
              8 curated destinations · plan your next adventure
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Destinations ── */}
      <section
        className="bg-background py-16"
        data-ocid="home.destinations_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <p className="text-primary text-sm font-medium uppercase tracking-wide mb-1">
                Trending Now
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Popular Destinations
              </h2>
            </div>
            <Link
              to="/destinations"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-colors"
              data-ocid="home.view_all_link"
            >
              View all <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((dest, i) => {
              const budget = budgetLabel(dest.estimatedDailyBudget);
              return (
                <motion.div
                  key={dest.id.toString()}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  data-ocid={`home.destination_card.${i + 1}`}
                >
                  <Link
                    to="/destinations/$id"
                    params={{ id: dest.id.toString() }}
                  >
                    <div className="group rounded-2xl overflow-hidden bg-card card-elevated hover:shadow-xl transition-smooth cursor-pointer h-full">
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={dest.imageUrl}
                          alt={dest.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                        />
                        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 text-white text-xs px-2 py-1 rounded-full font-medium">
                          <Star
                            size={10}
                            fill="currentColor"
                            className="text-yellow-400"
                          />
                          {dest.rating.toFixed(1)}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
                          <MapPin size={11} />
                          {dest.country}
                        </div>
                        <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {dest.name}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">
                          {dest.description}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge
                            className={`text-xs font-medium border-0 ${budget.cls}`}
                          >
                            {budget.text}
                          </Badge>
                          {dest.tags.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs capitalize"
                            >
                              {tag}
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

          <div className="flex justify-center mt-12">
            <Link to="/destinations" data-ocid="home.explore_all_button">
              <Button variant="outline" size="lg" className="gap-2 px-8">
                Explore All Destinations <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why WanderPlan ── */}
      <section
        className="bg-muted/30 py-20 border-y border-border"
        data-ocid="home.features_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">
              Built for curious travellers
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why WanderPlan?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base">
              Everything you need to plan and enjoy the perfect trip — in one
              place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.13, duration: 0.45 }}
                className="bg-card rounded-2xl p-7 card-subtle hover:card-elevated transition-smooth border border-border/50"
                data-ocid={`home.feature_card.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-5">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative bg-primary py-20 overflow-hidden"
        data-ocid="home.cta_section"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/assets/generated/patagonia-mountains.dim_800x600.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-5 leading-tight">
              Ready to start your adventure?
            </h2>
            <p className="text-primary-foreground/80 mb-10 text-lg">
              Join thousands of travellers who plan smarter, travel better.
            </p>
            <Link to="/destinations" data-ocid="home.cta_primary_button">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10 h-12 text-base"
              >
                Get Started — It's Free
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
