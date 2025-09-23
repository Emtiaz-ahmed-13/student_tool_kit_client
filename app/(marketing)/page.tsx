import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Student Life Toolkit',
  description: 'Manage classes, budgets, exams, study plans, and AI insights.'
}

export default function Page() {
  return (
    <section className="container-app py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">All-in-one Student Life Toolkit</h1>
        <p className="mt-4 text-muted-foreground">Organize your classes, budgets, study sessions, and leverage AI to excel.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

