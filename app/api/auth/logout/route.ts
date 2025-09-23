import { NextResponse } from 'next/server';

export async function POST() {
  const res = NextResponse.json({ success: true, message: 'Logged out' });
  res.cookies.set('st_auth', '', { httpOnly: true, secure: true, sameSite: 'lax', maxAge: 0, path: '/' });
  return res;
}

