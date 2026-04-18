import { Toaster } from "@/components/ui/sonner";
import type { ReactNode } from "react";
import { NavBar } from "./NavBar";

interface LayoutProps {
  children: ReactNode;
  /** Remove top padding (for full-bleed hero pages) */
  noTopPad?: boolean;
}

export function Layout({ children, noTopPad = false }: LayoutProps) {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const footerLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />

      <main className={`flex-1 ${noTopPad ? "" : "pt-16"}`}>{children}</main>

      <footer className="bg-card border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-primary font-display font-semibold text-base">
              ✦ WanderPlan
            </span>
            <span className="text-border">·</span>
            <span>Your world, curated.</span>
          </div>
          <span>
            © {year}.{" "}
            <a
              href={footerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Built with love using caffeine.ai
            </a>
          </span>
        </div>
      </footer>

      <Toaster position="bottom-right" richColors />
    </div>
  );
}
