import { NextRequest, NextResponse } from 'next/server'
import { env } from '@/env.mjs'
import { getToken } from '@/lib/auth'

const METHODS = ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'] as const

async function handler(req: NextRequest, { params }: { params: { path: string[] } }) {
  const { searchParams } = new URL(req.url)
  const suffix = params.path.join('/')
  const url = `${env.BACKEND_API_BASE}/${suffix}${searchParams.size ? `?${searchParams.toString()}` : ''}`
  const token = getToken()
  const headers: Record<string, string> = {}
  req.headers.forEach((v, k) => {
    if (k.toLowerCase() === 'content-type') headers['Content-Type'] = v
  })
  if (token) headers['Authorization'] = `Bearer ${token}`
  const body = req.method === 'GET' || req.method === 'HEAD' ? undefined : req.body
  const res = await fetch(url, { method: req.method, headers, body })
  const text = await res.text()
  const response = new NextResponse(text, { status: res.status })
  res.headers.forEach((v, k) => {
    if (k.toLowerCase() === 'content-type') response.headers.set(k, v)
  })
  return response
}

export const GET = handler
export const POST = handler
export const PATCH = handler
export const DELETE = handler
export const PUT = handler

