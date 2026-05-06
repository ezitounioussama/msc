"use client";

import { MoonStar, SunMedium } from "lucide-react";

import { useTheme } from "@/components/shared/theme-provider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "dark" ? (
        <>
          <SunMedium className="h-4 w-4" />
          Light
        </>
      ) : (
        <>
          <MoonStar className="h-4 w-4" />
          Dark
        </>
      )}
    </Button>
  );
}