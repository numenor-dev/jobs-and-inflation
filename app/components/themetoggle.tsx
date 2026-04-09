'use client';

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/16/solid";

export function ThemeToggle() {
  const [ mounted, setMounted ] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="rounded-md text-blue-700 dark:text-yellow-300/80 transition-colors"
      aria-label="Toggle dark mode"
    >
      {resolvedTheme === "dark" ? <SunIcon className="w-7 h-7" /> : <MoonIcon className="w-7 h-7" />}
    </button>
  );
}