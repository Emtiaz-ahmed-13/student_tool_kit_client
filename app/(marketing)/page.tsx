import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main className="container-page py-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Student Life Toolkit</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Manage classes, budgets, exams, study plans, notes, groups, subjects, sessions, and AI learning.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

