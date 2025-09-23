import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="container-page py-6">
      <Skeleton className="h-40" />
    </div>
  );
}

