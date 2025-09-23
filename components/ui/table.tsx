'use client';

import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Table({ className, ...props }: HTMLAttributes<HTMLTableElement>) {
  return <table className={cn('w-full caption-bottom text-sm', className)} {...props} />;
}
export function THead({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn('[&_tr]:border-b', className)} {...props} />;
}
export function TBody({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn('[&_tr:last-child]:border-0', className)} {...props} />;
}
export function TR({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cn('border-b transition-colors hover:bg-muted/50', className)} {...props} />;
}
export function TH({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) {
  return <th className={cn('h-10 px-2 text-left align-middle font-medium text-muted-foreground', className)} {...props} />;
}
export function TD({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) {
  return <td className={cn('p-2 align-middle', className)} {...props} />;
}

