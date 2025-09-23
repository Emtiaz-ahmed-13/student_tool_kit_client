import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="container-page py-6 grid gap-4 md:grid-cols-2">
      <Skeleton className="h-36" />
      <Skeleton className="h-72" />
    </div>
  );
}

