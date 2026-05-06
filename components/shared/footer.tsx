export function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--surface)">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[color-mix(in_srgb,var(--foreground),transparent_45%)] lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 Nova Studio. Crafted for launches that feel premium.</p>
        <div className="flex gap-6">
          <a href="#features" className="transition hover:text-(--foreground)">Features</a>
          <a href="/workflow" className="transition hover:text-(--foreground)">Workflow</a>
          <a href="/pricing" className="transition hover:text-(--foreground)">Pricing</a>
        </div>
      </div>
    </footer>
  );
}