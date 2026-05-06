"use client";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "Workflow", href: "/workflow" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--foreground)] text-[var(--background)] shadow-lg shadow-black/10">
            <span className="text-sm font-black">N</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">Nova Studio</p>
            <p className="text-xs text-[color:color-mix(in_srgb,var(--foreground),transparent_45%)]">High-conversion landing pages</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-[color:color-mix(in_srgb,var(--foreground),transparent_40%)] transition hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Badge className="hidden sm:inline-flex">
            Built with motion
          </Badge>
          <ThemeToggle />
          <Button variant="secondary" size="sm">
            Book a demo
          </Button>
        </div>
      </div>
    </header>
  );
}