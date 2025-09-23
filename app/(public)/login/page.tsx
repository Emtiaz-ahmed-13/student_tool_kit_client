"use client"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginInput } from '@/lib/zod'
import { Button } from '@/components/ui/Button'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export default function LoginPage() {
  const router = useRouter()
  const sp = useSearchParams()
  const redirect = sp.get('redirect') || '/dashboard'
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) })
  const [pending, setPending] = useState(false)

  const onSubmit = async (values: LoginInput) => {
    setPending(true)
    const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
    const data = await res.json()
    setPending(false)
    if (!res.ok || !data?.success) {
      toast.error(data?.message || 'Login failed')
      return
    }
    toast.success('Welcome back!')
    router.replace(redirect)
  }

  return (
    <div className="container-app mx-auto max-w-md py-16">
      <h1 className="mb-6 text-2xl font-semibold">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" aria-label="Login form">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm">Email</label>
          <input id="email" type="email" {...register('email')} className="w-full rounded-md border px-3 py-2" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <p id="email-error" className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password" className="mb-1 block text-sm">Password</label>
          <input id="password" type="password" {...register('password')} className="w-full rounded-md border px-3 py-2" aria-invalid={!!errors.password} aria-describedby={errors.password ? 'password-error' : undefined} />
          {errors.password && <p id="password-error" className="mt-1 text-sm text-destructive">{errors.password.message}</p>}
        </div>
        <Button type="submit" disabled={pending || isSubmitting} aria-busy={pending || isSubmitting} className="w-full">{pending || isSubmitting ? 'Signing in...' : 'Sign in'}</Button>
      </form>
    </div>
  )
}

