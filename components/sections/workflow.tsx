"use client";

import { motion } from "framer-motion";
import { ArrowRight, PencilRuler, Rocket, Search, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Define the offer, audience, and conversion goal before any layout work begins.",
  },
  {
    icon: PencilRuler,
    title: "Design",
    description: "Shape the sections, motion, and visual hierarchy around the story you want to tell.",
  },
  {
    icon: Sparkles,
    title: "Refine",
    description: "Polish micro-interactions, contrast, and spacing for a premium feel.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Ship the page with responsive sections, theme support, and fast iteration in mind.",
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="bg-[var(--surface-muted)] px-6 py-24 text-[var(--foreground)] transition-colors lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <Badge>
            <Sparkles className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-300" />
            Workflow made visible
          </Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            A clean process, now turned into a page and a section.
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:color-mix(in_srgb,var(--foreground),transparent_35%)] sm:text-lg">
            The landing page keeps the workflow in view, while the route page gives it more room to breathe.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <Card className="h-full transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--foreground)] text-[var(--background)] ring-1 ring-[var(--border)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-5">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 lg:flex-row lg:items-center"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[color:color-mix(in_srgb,var(--foreground),transparent_45%)]">Workflow page</p>
            <h3 className="mt-2 text-xl font-semibold text-[var(--foreground)]">A more detailed view of the process</h3>
          </div>
          <Button>
            Explore the workflow page
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}