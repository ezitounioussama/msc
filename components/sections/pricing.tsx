"use client";

import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Launch",
    price: "$1,200",
    description: "For a focused landing page with the essentials.",
    features: ["Hero + features sections", "Responsive motion", "CTA + footer"],
    accent: false,
  },
  {
    name: "Growth",
    price: "$2,400",
    description: "For teams that want extra polish and experimentation.",
    features: ["Everything in Launch", "A/B-ready CTA variants", "More custom visuals"],
    accent: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Pricing() {
  return (
    <section id="pricing" className="bg-[var(--background)] px-6 py-24 text-[var(--foreground)] transition-colors lg:px-8">
      <motion.div
        aria-hidden="true"
        className="absolute left-1/4 top-1/3 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/15"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-1/4 top-1/2 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/15"
        animate={{ y: [0, -16, 0], x: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300/80">Pricing</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Start simple, then scale the page as the offer evolves.
            </h2>
          </div>
          <p className="max-w-xl text-[color:color-mix(in_srgb,var(--foreground),transparent_35%)]">
            These packages are placeholders you can replace with your own pricing model,
            product tiers, or service offers.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-5 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card
                className={plan.accent
                  ? "border-cyan-300/30 bg-linear-to-b from-cyan-300/10 to-[var(--surface-strong)]"
                  : "hover:border-cyan-300/20"}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-[color:color-mix(in_srgb,var(--foreground),transparent_45%)]">{plan.name}</p>
                    <p className="mt-3 text-4xl font-semibold tracking-tight text-[var(--foreground)]">{plan.price}</p>
                    <p className="mt-3 text-sm leading-6 text-[color:color-mix(in_srgb,var(--foreground),transparent_35%)]">{plan.description}</p>
                  </div>
                  {plan.accent ? (
                    <motion.span
                      className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-medium text-cyan-700 ring-1 ring-cyan-300/25"
                      whileHover={{ scale: 1.05 }}
                    >
                      Most popular
                    </motion.span>
                  ) : null}
                </div>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-[color:color-mix(in_srgb,var(--foreground),transparent_20%)]"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <motion.span
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface-muted)]"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(6, 182, 212, 0.15)" }}
                      >
                        <Check className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-300" />
                      </motion.span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="mt-8 w-full">
                    Get started
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}