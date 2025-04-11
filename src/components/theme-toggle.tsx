"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Only show the toggle after component mounts to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="rounded-full p-2 h-9 w-9 flex items-center justify-center bg-neutral-200 dark:bg-neutral-800"
        aria-label="Loading theme toggle"
      >
        ...
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full p-2 h-9 w-9 flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-700"
    >
      {theme === "light" ? "⏾" : "☼"}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
