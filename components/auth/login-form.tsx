'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/form/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type Values = z.infer<typeof schema>;

export function LoginForm() {
  const form = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { email: '', password: '' } });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(values: Values) {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || 'Login failed');
      }
      toast.success('Logged in');
      router.replace('/dashboard');
    } catch (err: any) {
      toast.error(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-md border p-6">
      <h1 className="text-xl font-semibold mb-4">Login</h1>
      <Form form={form} onSubmit={onSubmit}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1" htmlFor="email">Email</label>
            <Input id="email" type="email" {...form.register('email')} aria-invalid={!!form.formState.errors.email} />
            {form.formState.errors.email && (
              <p className="text-xs text-destructive mt-1">{form.formState.errors.email.message as string}</p>
            )}
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="password">Password</label>
            <Input id="password" type="password" {...form.register('password')} aria-invalid={!!form.formState.errors.password} />
            {form.formState.errors.password && (
              <p className="text-xs text-destructive mt-1">{form.formState.errors.password.message as string}</p>
            )}
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? 'Signing in…' : 'Login'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

