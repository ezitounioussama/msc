import { notFound } from "next/navigation";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PrivateProduct {
  slug: string;
  name: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  fullDescription: string;
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
    fullDescription: "Unlock the power of data with Analytics Pro. Get real-time insights, custom dashboards, and detailed reports that help you make informed decisions. Perfect for teams that need actionable insights fast.",
    tier: "pro",
  },
  {
    slug: "team-enterprise",
    name: "Team Enterprise",
    description: "Full enterprise solution with priority support.",
    price: "$299/mo",
    category: "Enterprise",
    features: ["Unlimited users", "Priority support", "Custom integrations", "SLA guarantee"],
    fullDescription: "The ultimate solution for large organizations. Get everything in Analytics Pro plus unlimited users, dedicated account management, custom integrations with your existing tools, and a guaranteed SLA for mission-critical operations.",
    tier: "enterprise",
  },
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return privateProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = privateProducts.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | Private Products`,
    description: product.description,
  };
}

export default async function PrivateProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = privateProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-zinc-950 transition-colors dark:bg-zinc-950 dark:text-white">
      <Navbar />
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            Members Only
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400">
            {product.category}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-zinc-600 dark:text-white/65">
            {product.fullDescription}
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm text-zinc-600 dark:text-white/65">Monthly Price</p>
                  <p className="mt-1 text-4xl font-semibold tracking-tight">{product.price}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-600 dark:text-white/65">What&apos;s included</p>
                  <ul className="mt-4 space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full">Subscribe Now</Button>
              </div>
            </Card>

            <div className="flex flex-col justify-center gap-6">
              <h2 className="text-2xl font-semibold tracking-tight">Member Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                  <div>
                    <p className="font-medium">Early Access</p>
                    <p className="text-sm text-zinc-600 dark:text-white/65">
                      Get access to new features before anyone else
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                  <div>
                    <p className="font-medium">Priority Support</p>
                    <p className="text-sm text-zinc-600 dark:text-white/65">
                      Dedicated support channel for members
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                  <div>
                    <p className="font-medium">Exclusive Content</p>
                    <p className="text-sm text-zinc-600 dark:text-white/65">
                      Access to member-only resources and tutorials
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}