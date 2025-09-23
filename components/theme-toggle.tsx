'use client';

import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      aria-label="Toggle theme"
      className="rounded-md border px-3 py-1 text-sm"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}

