import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Workflow } from "@/components/sections/workflow";
import { Pricing } from "@/components/sections/pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-zinc-950 transition-colors dark:bg-zinc-950 dark:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <Pricing />
      <Footer />
    </main>
  );
}
