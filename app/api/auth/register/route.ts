import { NextRequest, NextResponse } from 'next/server'
import { env } from '@/env.mjs'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const res = await fetch(`${env.BACKEND_API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  const data = await res.json()
  return NextResponse.json(data, { status: res.status })
}

