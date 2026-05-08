import Link from "next/link";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { Card } from "@/components/ui/card";

interface Product {
  slug: string;
  name: string;
  description: string;
  price: string;
  category: string;
  features: string[];
}

const products: Product[] = [
  {
    slug: "launch",
    name: "Launch",
    description: "For a focused landing page with the essentials.",
    price: "$1,200",
    category: "Landing Pages",
    features: ["Hero + features sections", "Responsive motion", "CTA + footer"],
  },
  {
    slug: "growth",
    name: "Growth",
    description: "For teams that want extra polish and experimentation.",
    price: "$2,400",
    category: "Landing Pages",
    features: ["Everything in Launch", "A/B-ready CTA variants", "More custom visuals"],
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    description: "Full-featured solution for large organizations.",
    price: "$4,800",
    category: "Enterprise",
    features: ["Everything in Growth", "Priority support", "Custom integrations", "Advanced analytics"],
  },
];

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export const metadata = {
  title: "Products | Our Services",
  description: "Explore our range of products and services tailored to your needs.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 transition-colors dark:bg-zinc-950 dark:text-white">
      <Navbar />
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300/80">Products</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Everything you need to build better landing pages.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-white/65 sm:text-lg">
            Choose the plan that fits your needs. All plans include our core features and dedicated support.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`}>
                <Card className="group h-full cursor-pointer hover:border-cyan-300/30">
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300/80">
                        {product.category}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                        {product.name}
                      </h2>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-white/65">
                        {product.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <p className="text-3xl font-semibold tracking-tight">{product.price}</p>
                      <ul className="mt-4 space-y-2">
                        {product.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-white/65">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}