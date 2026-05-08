import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { Card } from "@/components/ui/card";

interface PrivateProduct {
  slug: string;
  name: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  tier: "pro" | "enterprise";
}

const privateProducts: PrivateProduct[] = [
  {
    slug: "analytics-pro",
    name: "Analytics Pro",
    description: "Advanced analytics with real-time dashboards.",
    price: "$99/mo",
    category: "Analytics",
    features: ["Real-time data", "Custom reports", "API access", "Team collaboration"],
    tier: "pro",
  },
  {
    slug: "team-enterprise",
    name: "Team Enterprise",
    description: "Full enterprise solution with priority support.",
    price: "$299/mo",
    category: "Enterprise",
    features: ["Unlimited users", "Priority support", "Custom integrations", "SLA guarantee"],
    tier: "enterprise",
  },
];

export async function generateStaticParams() {
  return privateProducts.map((product) => ({
    slug: product.slug,
  }));
}

export const metadata = {
  title: "Private Products | Member Area",
  description: "Exclusive products available to authenticated members.",
};

export default function PrivateProductsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 transition-colors dark:bg-zinc-950 dark:text-white">
      <Navbar />
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            Members Only
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Exclusive Products
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-white/65 sm:text-lg">
            Premium features and tools available to our authenticated members.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {privateProducts.map((product) => (
              <Card key={product.slug} className="relative overflow-hidden">
                {product.tier === "enterprise" && (
                  <div className="absolute right-0 top-0 rounded-bl-lg bg-gradient-to-l from-amber-500 to-amber-600 px-3 py-1 text-xs font-medium text-white">
                    Best Value
                  </div>
                )}
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
                      {product.category}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-white/65">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-3xl font-semibold tracking-tight">{product.price}</p>
                    <ul className="mt-4 space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-white/65">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}