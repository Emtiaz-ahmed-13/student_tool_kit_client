'use client';

import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';

export function Form({ form, onSubmit, children }: { form: UseFormReturn<any>; onSubmit: (data: any) => void; children: ReactNode }) {
  return <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>;
}

