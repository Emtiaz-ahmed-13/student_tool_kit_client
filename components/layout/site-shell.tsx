'use client';

import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', public: true },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/classes', label: 'Classes' },
  { href: '/budgets', label: 'Budgets' },
  { href: '/exams', label: 'Exams' },
  { href: '/study-plans', label: 'Study Plans' },
  { href: '/notes', label: 'Notes' },
  { href: '/groups', label: 'Groups' },
  { href: '/subjects', label: 'Subjects' },
  { href: '/study-sessions', label: 'Study Sessions' },
  { href: '/focus', label: 'Focus' },
  { href: '/analytics/time-tracking', label: 'Time Analytics' },
  { href: '/learning/dashboard', label: 'Learning' },
  { href: '/settings', label: 'Settings' },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  useEffect(() => {
    const stored = localStorage.getItem('st_sidebar_collapsed');
    if (stored) setCollapsed(stored === '1');
  }, []);

  useEffect(() => {
    localStorage.setItem('st_sidebar_collapsed', collapsed ? '1' : '0');
  }, [collapsed]);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[240px_1fr]">
      <aside className={cn('border-r bg-card/30', collapsed ? 'hidden lg:block lg:w-[72px]' : '')}>
        <div className="p-4 flex items-center justify-between">
          <Link href="/" className="font-bold">SLT</Link>
          <button className="text-sm underline lg:block hidden" onClick={() => setCollapsed((c) => !c)}>
            {collapsed ? '>' : '<'}
          </button>
        </div>
        <nav className="px-2 py-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'block rounded-md px-3 py-2 text-sm hover:bg-accent',
                pathname === item.href && 'bg-accent'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex flex-col min-h-screen">
        <header className="border-b">
          <div className="container-page h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="lg:hidden text-sm underline" onClick={() => setCollapsed((c) => !c)}>
                Menu
              </button>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link href="/settings" className="text-sm underline">Account</Link>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

