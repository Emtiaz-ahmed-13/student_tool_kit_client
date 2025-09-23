import { NextRequest, NextResponse } from 'next/server'
import { env } from '@/env.mjs'
import { AUTH_COOKIE, AUTH_MAX_AGE_SECONDS } from '@/lib/constants'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const res = await fetch(`${env.BACKEND_API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  const data = await res.json()
  if (!res.ok || !data?.success) {
    return NextResponse.json(data, { status: res.status })
  }
  const token: string | undefined = data?.data?.token
  if (!token) {
    return NextResponse.json({ success: false, message: 'Missing token from backend' }, { status: 500 })
  }
  const response = NextResponse.json(data)
  response.cookies.set({
    name: AUTH_COOKIE,
    value: token,
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
    path: '/',
    maxAge: AUTH_MAX_AGE_SECONDS
  })
  return response
}

