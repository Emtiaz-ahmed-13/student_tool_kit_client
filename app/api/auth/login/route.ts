import { NextRequest, NextResponse } from 'next/server';
import { env } from '@/env.mjs';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const res = await fetch(`${env.BACKEND_API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data?.success === false) {
    return NextResponse.json(data, { status: res.status });
  }
  const token: string | undefined = data?.data?.token;
  if (token) {
    const response = NextResponse.json(data);
    response.cookies.set('st_auth', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });
    return response;
  }
  return NextResponse.json({ success: false, message: 'Token missing from response' }, { status: 502 });
}

