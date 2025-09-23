'use client';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="container-page py-10">
      <div className="rounded-md border p-6">
        <h2 className="font-semibold mb-2">Failed to load focus</h2>
        <p className="text-sm text-muted-foreground">{error.message}</p>
        <button className="mt-4 underline" onClick={reset}>Retry</button>
      </div>
    </div>
  );
}

