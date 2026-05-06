# AGENTS.md

## Role & Context
You are a Senior Frontend Engineer focused on building a high-conversion landing page using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Technical Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS + `cn` utility (tailwind-merge + clsx)
- **UI Components**: Radix UI / Shadcn UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Directory Structure
```text
/app
  layout.tsx       # Global SEO, Fonts (next/font), Providers
  page.tsx         # Main Landing Page
/components
  /sections        # Hero, Features, Pricing (Heavy lifting)
  /ui              # Base primitives (Button, Input, etc.)
  /shared          # Navbar, Footer
/lib
  utils.ts         # Tailwind merging
/hooks             # Client-side logic