import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import { cn } from '@/lib/utils'
import { AppShell } from '@/components/layout/AppShell'
import Providers from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Student Life Toolkit',
  description: 'Organize your student life with classes, budgets, study plans, and AI insights.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'min-h-screen')}> 
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <AppShell>
              {children}
            </AppShell>
          </Providers>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}

