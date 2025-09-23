import { NextResponse } from 'next/server'
import { AUTH_COOKIE } from '@/lib/auth'

export async function POST() {
  const res = NextResponse.json({ success: true, message: 'Logged out', data: null })
  res.cookies.set({ name: AUTH_COOKIE, value: '', httpOnly: true, path: '/', maxAge: 0, sameSite: 'lax', secure: true })
  return res
}

