import { NextRequest, NextResponse } from 'next/server';
import { env } from '@/env.mjs';
import { cookies } from 'next/headers';

async function handler(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const path = pathname.replace(/^\/api/, '');
  const url = `${env.BACKEND_API_BASE}${path}${search}`;
  const token = cookies().get('st_auth')?.value;

  const headers: HeadersInit = new Headers(req.headers);
  (headers as any).set('host', new URL(env.BACKEND_API_BASE).host);
  headers.delete('cookie');
  if (token) (headers as any).set('Authorization', `Bearer ${token}`);

  const init: RequestInit = {
    method: req.method,
    headers,
    body: req.method === 'GET' || req.method === 'HEAD' ? undefined : await req.text(),
    redirect: 'manual',
  };
  const res = await fetch(url, init);
  const body = await res.text();
  const response = new NextResponse(body, { status: res.status });
  res.headers.forEach((v, k) => {
    if (!['content-encoding', 'transfer-encoding', 'connection'].includes(k.toLowerCase())) {
      response.headers.set(k, v);
    }
  });
  return response;
}

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const DELETE = handler;

