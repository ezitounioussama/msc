import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Product {
  slug: string;
  name: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  fullDescription: string;
}

const products: Product[] = [
  {
    slug: "launch",
    name: "Launch",
    description: "For a focused landing page with the essentials.",
    price: "$1,200",
    category: "Landing Pages",
    features: ["Hero + features sections", "Responsive motion", "CTA + footer"],
    fullDescription: "Our Launch plan is perfect for businesses just getting started. Get a professionally designed landing page that captures your brand essence and converts visitors into customers. Includes everything you need to establish your online presence with confidence.",
  },
  {
    slug: "growth",
    name: "Growth",
    description: "For teams that want extra polish and experimentation.",
    price: "$2,400",
    category: "Landing Pages",
    features: ["Everything in Launch", "A/B-ready CTA variants", "More custom visuals"],
    fullDescription: "Scale your marketing efforts with our Growth plan. Unlock A/B testing capabilities to optimize your conversion rates and experiment with different visual approaches. Perfect for teams looking to iterate quickly and find what works best for their audience.",
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    description: "Full-featured solution for large organizations.",
    price: "$4,800",
    category: "Enterprise",
    features: ["Everything in Growth", "Priority support", "Custom integrations", "Advanced analytics"],
    fullDescription: "Enterprise-grade solution for organizations requiring maximum flexibility and support. Get dedicated account management, custom integrations with your existing tools, and comprehensive analytics to drive data-informed decisions across your entire organization.",
  },
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | Product Details`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-zinc-950 transition-colors dark:bg-zinc-950 dark:text-white">
      <Navbar />
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/products"
            className="text-sm text-cyan-600 hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200"
          >
            ← Back to Products
          </Link>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300/80">
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
                  <p className="text-sm text-zinc-600 dark:text-white/65">Price</p>
                  <p className="mt-1 text-4xl font-semibold tracking-tight">{product.price}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-600 dark:text-white/65">What&apos;s included</p>
                  <ul className="mt-4 space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-300">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full">Get Started</Button>
              </div>
            </Card>

            <div className="flex flex-col justify-center gap-6">
              <h2 className="text-2xl font-semibold tracking-tight">Why choose {product.name}?</h2>
              <p className="text-zinc-600 dark:text-white/65">
                Every plan comes with our commitment to quality. We ensure fast load times, 
                responsive design, and seamless user experiences across all devices.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500" />
                  <div>
                    <p className="font-medium">Fast Performance</p>
                    <p className="text-sm text-zinc-600 dark:text-white/65">
                      Optimized for speed and Core Web Vitals
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500" />
                  <div>
                    <p className="font-medium">Mobile First</p>
                    <p className="text-sm text-zinc-600 dark:text-white/65">
                      Looks great on every device
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500" />
                  <div>
                    <p className="font-medium">SEO Optimized</p>
                    <p className="text-sm text-zinc-600 dark:text-white/65">
                      Built with search rankings in mind
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