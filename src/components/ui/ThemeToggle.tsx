"use client";

import React, { useEffect, useState } from "react";

const THEME_KEY = "theme";

function getInitialTheme(): "dark" | "light" | null {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "dark" || stored === "light") return stored;
  } catch (e) {
    // ignore
  }

  if (typeof window !== "undefined" && window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  }

  return null;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  useEffect(() => {
    const t = getInitialTheme();
    if (t) {
      setTheme(t);
      document.documentElement.classList.toggle("dark", t === "dark");
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {
      // ignore
    }
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  // Simple icons inline to avoid extra deps
  const SunIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );

  const MoonIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  return (
    <button
      aria-label="Toggle color theme"
      title="Toggle color theme"
      onClick={toggle}
      className="inline-flex items-center justify-center p-2 rounded-full text-gray-800 bg-white/80 hover:bg-white/90 dark:text-gray-100 dark:bg-black/40 dark:hover:bg-black/30 transition-colors duration-200"
    >
      <span className="sr-only">Toggle theme</span>
      <span className="w-5 h-5">{theme === "dark" ? SunIcon : MoonIcon}</span>
    </button>
  );
}
