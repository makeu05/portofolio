"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

// The theme lives on <html data-theme>. The inline script in the layout sets it
// before first paint (saved choice, else the system preference).
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

const getTheme = (): Theme | null =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";
const getServerTheme = (): Theme | null => null;

export function ThemeToggle({ label }: { label: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked. The choice then lasts for this visit only.
    }
  }

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={theme === null ? undefined : theme === "light"}
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-sm text-steel transition-colors hover:text-ink"
    >
      {/* Icons are switched by CSS, so the server markup matches the first paint. */}
      <Sun size={18} aria-hidden="true" className="theme-icon-sun" />
      <Moon size={18} aria-hidden="true" className="theme-icon-moon" />
    </button>
  );
}
