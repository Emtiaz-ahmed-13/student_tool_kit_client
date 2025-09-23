import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const isProtected = req.nextUrl.pathname.startsWith('/dashboard') ||
    req.nextUrl.pathname.startsWith('/classes') ||
    req.nextUrl.pathname.startsWith('/budgets') ||
    req.nextUrl.pathname.startsWith('/exams') ||
    req.nextUrl.pathname.startsWith('/study-plans') ||
    req.nextUrl.pathname.startsWith('/notes') ||
    req.nextUrl.pathname.startsWith('/groups') ||
    req.nextUrl.pathname.startsWith('/subjects') ||
    req.nextUrl.pathname.startsWith('/study-sessions') ||
    req.nextUrl.pathname.startsWith('/focus') ||
    req.nextUrl.pathname.startsWith('/analytics') ||
    req.nextUrl.pathname.startsWith('/learning') ||
    req.nextUrl.pathname.startsWith('/settings');

  if (!isProtected) return NextResponse.next();
  const token = req.cookies.get('st_auth')?.value;
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('next', req.nextUrl.pathname + req.nextUrl.search);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|.*\..*).*)'],
};

