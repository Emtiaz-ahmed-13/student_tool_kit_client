import Link from 'next/link';

export default function Page() {
  return (
    <div className="container-page py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Budgets</h1>
        <Link className="underline" href="/budgets/analytics">Analytics</Link>
      </div>
      <p className="text-sm text-muted-foreground mt-2">List and create entries here (stub).</p>
    </div>
  );
}

