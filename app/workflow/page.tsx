import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { Workflow } from "@/components/sections/workflow";

export default function WorkflowPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 transition-colors dark:bg-zinc-950 dark:text-white">
      <Navbar />
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300/80">Workflow</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            The same workflow, expanded into its own page.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-white/65 sm:text-lg">
            Use this page to explain process, stages, and expectations while preserving the section on the landing page.
          </p>
        </div>
      </section>
      <Workflow />
      <Footer />
    </main>
  );
}