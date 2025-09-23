import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { AUTH_COOKIE } from '@/lib/constants'

export function getToken(): string | null {
  const token = cookies().get(AUTH_COOKIE)?.value
  return token ?? null
}

export function requireAuth(): string {
  const token = getToken()
  if (!token) {
    redirect('/login')
  }
  return token
}

