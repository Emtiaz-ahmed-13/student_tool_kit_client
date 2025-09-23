"use client"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, type RegisterInput } from '@/lib/zod'
import { Button } from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export default function RegisterPage() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterInput>({ resolver: zodResolver(registerSchema) })
  const [pending, setPending] = useState(false)

  const onSubmit = async (values: RegisterInput) => {
    setPending(true)
    const res = await fetch('/api/auth/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
    const data = await res.json()
    setPending(false)
    if (!res.ok || !data?.success) {
      toast.error(data?.message || 'Registration failed')
      return
    }
    toast.success('Account created. Please sign in.')
    router.replace('/login')
  }

  return (
    <div className="container-app mx-auto max-w-md py-16">
      <h1 className="mb-6 text-2xl font-semibold">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" aria-label="Register form">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm">Name</label>
          <input id="name" type="text" {...register('name')} className="w-full rounded-md border px-3 py-2" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
          {errors.name && <p id="name-error" className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
        </div>
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
        <Button type="submit" disabled={pending || isSubmitting} aria-busy={pending || isSubmitting} className="w-full">{pending || isSubmitting ? 'Creating account...' : 'Create account'}</Button>
      </form>
    </div>
  )
}

