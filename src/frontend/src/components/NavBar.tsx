import { Button } from "@/components/ui/button";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useProfile } from "../hooks/use-backend";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/trips/new", label: "Plan Trip" },
] as const;

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { login, clear, isAuthenticated, isInitializing, isLoggingIn } =
    useInternetIdentity();
  const queryClient = useQueryClient();
  const { data: profile } = useProfile();

  const handleAuth = () => {
    if (isAuthenticated) {
      clear();
      queryClient.clear();
    } else {
      login();
    }
  };

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-subtle">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-xl font-semibold text-foreground hover:text-primary transition-colors"
          data-ocid="nav.logo_link"
        >
          <span className="text-primary">✦</span>
          WanderPlan
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                isActive(link.to)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
              data-ocid={`nav.${link.label.toLowerCase().replace(" ", "_")}_link`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated && (
            <Link
              to="/dashboard"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-ocid="nav.dashboard_link"
            >
              {profile?.displayName ?? "Dashboard"}
            </Link>
          )}
          <Button
            onClick={handleAuth}
            disabled={isInitializing || isLoggingIn}
            variant={isAuthenticated ? "outline" : "default"}
            size="sm"
            data-ocid="nav.auth_button"
          >
            {isInitializing
              ? "Loading…"
              : isLoggingIn
                ? "Signing in…"
                : isAuthenticated
                  ? "Logout"
                  : "Login"}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          data-ocid="nav.mobile_menu_toggle"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4 pt-2 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-smooth ${
                isActive(link.to)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
              data-ocid={`nav.mobile_${link.label.toLowerCase().replace(" ", "_")}_link`}
            >
              {link.label}
            </Link>
          ))}
          {isAuthenticated && (
            <Link
              to="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
              data-ocid="nav.mobile_dashboard_link"
            >
              Dashboard
            </Link>
          )}
          <Button
            onClick={() => {
              handleAuth();
              setMobileOpen(false);
            }}
            disabled={isInitializing || isLoggingIn}
            variant={isAuthenticated ? "outline" : "default"}
            size="sm"
            className="mt-2"
            data-ocid="nav.mobile_auth_button"
          >
            {isInitializing
              ? "Loading…"
              : isLoggingIn
                ? "Signing in…"
                : isAuthenticated
                  ? "Logout"
                  : "Login"}
          </Button>
        </div>
      )}
    </header>
  );
}
