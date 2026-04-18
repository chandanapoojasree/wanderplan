import { Button } from "@/components/ui/button";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQueryClient } from "@tanstack/react-query";
import { Link, Navigate } from "@tanstack/react-router";
import { Shield, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Layout } from "../components/Layout";

const TRUST_POINTS = [
  { icon: Shield, text: "No password required — fully passwordless" },
  { icon: Zap, text: "Instant sign-in with Internet Identity" },
  { icon: Sparkles, text: "Your data stays private and secure" },
];

export default function LoginPage() {
  const { login, isAuthenticated, isInitializing, isLoggingIn } =
    useInternetIdentity();
  const queryClient = useQueryClient();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Layout noTopPad>
      <div className="min-h-screen grid md:grid-cols-2" data-ocid="login.page">
        {/* ── Left: Hero panel ── */}
        <div
          className="relative hidden md:flex flex-col justify-end overflow-hidden min-h-screen"
          style={{
            backgroundImage: `url('/assets/generated/amalfi-coast.dim_800x600.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="relative z-10 p-10 pb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-white/60 text-xs font-medium uppercase tracking-widest mb-3">
                WanderPlan
              </p>
              <h2 className="font-display text-4xl font-bold text-white leading-tight mb-4">
                Every great journey
                <br />
                starts with a plan.
              </h2>
              <p className="text-white/70 text-sm max-w-xs leading-relaxed">
                Join thousands of travellers who use WanderPlan to discover
                destinations, build itineraries, and travel with confidence.
              </p>

              <div className="mt-8 flex gap-3">
                {["Santorini", "Kyoto", "Patagonia"].map((d) => (
                  <span
                    key={d}
                    className="text-xs text-white bg-white/15 backdrop-blur px-3 py-1 rounded-full border border-white/20"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Right: Login form ── */}
        <div className="flex items-center justify-center bg-background px-6 py-16 pt-24 md:pt-16">
          <div className="w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo */}
              <div className="mb-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-5">
                  <span className="text-2xl text-primary font-display font-bold">
                    ✦
                  </span>
                </div>
                <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                  Welcome back
                </h1>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sign in to access your trips, saved destinations, and
                  personalised itineraries.
                </p>
              </div>

              {/* Travel preview image — mobile only */}
              <div className="relative rounded-xl overflow-hidden h-36 mb-8 md:hidden">
                <img
                  src="/assets/generated/travel-hero-flatlay.dim_1200x700.jpg"
                  alt="Travel planning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {["Santorini", "Kyoto", "Amalfi"].map((d) => (
                    <span
                      key={d}
                      className="text-xs text-white bg-black/40 px-2 py-0.5 rounded-full"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Trust points */}
              <div className="space-y-3 mb-8">
                {TRUST_POINTS.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={13} className="text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                onClick={() => {
                  queryClient.clear();
                  login();
                }}
                disabled={isInitializing || isLoggingIn}
                size="lg"
                className="w-full text-base font-semibold h-12"
                data-ocid="login.login_button"
              >
                {isInitializing
                  ? "Initialising…"
                  : isLoggingIn
                    ? "Opening login…"
                    : "Sign in with Internet Identity"}
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-4 leading-relaxed">
                WanderPlan uses Internet Identity — a secure, passwordless
                authentication system. No email or password required.
              </p>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  Just exploring?{" "}
                  <Link
                    to="/destinations"
                    className="text-primary hover:underline font-medium"
                    data-ocid="login.browse_link"
                  >
                    Browse destinations without signing in
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
