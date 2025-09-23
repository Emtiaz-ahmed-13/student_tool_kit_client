"use client"
export default function Error({ error }: { error: Error }) {
  return <div role="alert" className="text-destructive">{error.message || 'Error loading analytics'}</div>
}

