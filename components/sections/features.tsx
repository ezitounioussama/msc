"use client";

import { motion } from "framer-motion";
import { BarChart3, Layers3, MousePointerClick, Paintbrush2, Rocket, ShieldCheck } from "lucide-react";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Rocket,
    title: "Fast launch system",
    description: "Reusable sections and a clear hierarchy help you move from idea to live page quickly.",
  },
  {
    icon: Paintbrush2,
    title: "Premium visual rhythm",
    description: "Layered gradients, glass surfaces, and deliberate spacing create a high-end feel.",
  },
  {
    icon: MousePointerClick,
    title: "Action-focused CTA design",
    description: "Buttons, proof points, and content flow are tuned to keep visitors moving forward.",
  },
  {
    icon: BarChart3,
    title: "Built for conversion",
    description: "Stats, trust signals, and feature framing do the heavy lifting across the page.",
  },
  {
    icon: Layers3,
    title: "Composable sections",
    description: "Hero, features, pricing, and footer are separated for easy iteration.",
  },
  {
    icon: ShieldCheck,
    title: "Polished by default",
    description: "The layout is responsive, accessible, and ready to refine with your brand.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-[var(--background)] px-6 py-24 text-[var(--foreground)] transition-colors lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300/80">Why it works</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Motion and structure work together to keep attention.
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:color-mix(in_srgb,var(--foreground),transparent_35%)] sm:text-lg">
            Every section has a job: attract, explain, reassure, and convert.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <Card className="h-full transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--foreground)] text-[var(--background)] ring-1 ring-[var(--border)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-5">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}