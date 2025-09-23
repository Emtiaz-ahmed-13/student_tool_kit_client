"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, LogOut, LayoutDashboard, BookOpen, Wallet, PenTool, Group, Layers, Timer, BarChart2, Cog, Brain } from 'lucide-react'
import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { client } from '@/lib/api'
import { toast } from 'sonner'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/classes', label: 'Classes', icon: BookOpen },
  { href: '/budgets', label: 'Budgets', icon: Wallet },
  { href: '/exams', label: 'Exams', icon: PenTool },
  { href: '/study-plans', label: 'Study Plans', icon: Layers },
  { href: '/notes', label: 'Notes', icon: PenTool },
  { href: '/groups', label: 'Groups', icon: Group },
  { href: '/subjects', label: 'Subjects', icon: BookOpen },
  { href: '/study-sessions', label: 'Study Sessions', icon: Timer },
  { href: '/focus', label: 'Focus', icon: Timer },
  { href: '/analytics/time-tracking', label: 'Analytics', icon: BarChart2 },
  { href: '/learning/dashboard', label: 'Learning', icon: Brain },
  { href: '/settings', label: 'Settings', icon: Cog }
]

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  useEffect(() => {
    const stored = localStorage.getItem('sidebar-collapsed')
    if (stored) setSidebarOpen(stored === 'true')
  }, [])

  useEffect(() => {
    localStorage.setItem('sidebar-collapsed', String(sidebarOpen))
  }, [sidebarOpen])

  async function handleLogout() {
    const res = await client.post('/auth/logout')
    if (res.ok) {
      toast.success('Signed out')
      router.push('/login')
    } else {
      toast.error('Failed to sign out')
    }
  }

  const inProtected = pathname?.startsWith('/dashboard') || pathname?.startsWith('/classes') || pathname?.startsWith('/budgets') || pathname?.startsWith('/exams') || pathname?.startsWith('/study-plans') || pathname?.startsWith('/notes') || pathname?.startsWith('/groups') || pathname?.startsWith('/subjects') || pathname?.startsWith('/study-sessions') || pathname?.startsWith('/focus') || pathname?.startsWith('/analytics') || pathname?.startsWith('/learning') || pathname?.startsWith('/settings')

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container-app flex h-14 items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {inProtected && (
              <Button variant="ghost" size="icon" aria-label="Toggle sidebar" onClick={() => setSidebarOpen((v) => !v)}>
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <Link href="/" className="font-semibold">Student Life Toolkit</Link>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {inProtected && (
              <Button variant="outline" onClick={handleLogout} aria-label="Sign out">
                <LogOut className="mr-2 h-4 w-4" /> Sign out
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container-app grid grid-cols-1 gap-6 py-6 md:grid-cols-[240px_1fr]">
        {inProtected && (
          <aside className={cn('hidden md:block', sidebarOpen ? 'md:w-16' : 'md:w-60')}>
            <nav className="sticky top-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const active = pathname === item.href || pathname?.startsWith(item.href + '/')
                return (
                  <Link key={item.href} href={item.href} className={cn('flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent', active && 'bg-accent font-medium')} aria-current={active ? 'page' : undefined}>
                    <Icon className="h-4 w-4" />
                    {!sidebarOpen && <span>{item.label}</span>}
                  </Link>
                )
              })}
            </nav>
          </aside>
        )}
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  )
}

