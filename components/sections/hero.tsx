"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Wand2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const stats = [
  { value: "3.4x", label: "More qualified leads" },
  { value: "42%", label: "Higher demo clicks" },
  { value: "8 days", label: "From brief to live" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.16),transparent_24%),radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.10),transparent_24%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.28),transparent_24%),radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.16),transparent_24%)]" />
      <motion.div
        aria-hidden="true"
        className="absolute left-10 top-24 h-24 w-24 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-400/20"
        animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0 }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-10 top-48 h-36 w-36 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-500/20"
        animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <Badge className="px-4 py-2">
            <Sparkles className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-300" />
            Motion-first websites that convert
          </Badge>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Launch a landing page that feels alive.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[color:color-mix(in_srgb,var(--foreground),transparent_35%)] sm:text-xl">
            Tailwind-powered visuals, Shadcn-inspired components, and polished motion
            to turn attention into demos, trials, and revenue.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg">
              Start your project
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg">
              <Wand2 className="h-4 w-4" />
              See the motion system
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-4">
                <p className="text-2xl font-semibold text-[var(--foreground)]">{stat.value}</p>
                <p className="mt-1 text-sm text-[color:color-mix(in_srgb,var(--foreground),transparent_45%)]">{stat.label}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <Card className="relative overflow-hidden p-0">
            <div className="border-b border-[var(--border)] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400/90" />
                <span className="h-3 w-3 rounded-full bg-amber-300/90" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
              </div>
            </div>

            <div className="grid gap-4 p-6">
              <div className="rounded-3xl bg-[var(--foreground)] p-5 text-[var(--background)] ring-1 ring-[var(--border)]">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Live preview</p>
                <h2 className="mt-3 text-2xl font-semibold">Conversion-ready storytelling</h2>
                <p className="mt-2 text-sm leading-6 text-[color:color-mix(in_srgb,var(--background),transparent_20%)]">
                  Hero copy, social proof, feature cards, and CTA sections arranged for
                  clarity and momentum.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["118K", "monthly visitors"],
                  ["24 min", "average scroll time"],
                  ["97%", "design consistency"],
                  ["1 place", "for every CTA"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)] p-4">
                    <p className="text-xl font-semibold text-[var(--foreground)]">{value}</p>
                    <p className="mt-1 text-sm text-[color:color-mix(in_srgb,var(--foreground),transparent_45%)]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <motion.div
            className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 shadow-2xl shadow-black/10 lg:block"
            animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-[color:color-mix(in_srgb,var(--foreground),transparent_45%)]">Animation</p>
            <p className="mt-1 text-sm font-medium text-[var(--foreground)]">Micro-interactions included</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}