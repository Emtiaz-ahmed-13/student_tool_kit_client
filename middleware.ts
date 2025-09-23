import { NextRequest, NextResponse } from 'next/server'
import { AUTH_COOKIE } from '@/lib/constants'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const isProtected = pathname.startsWith('/dashboard') || pathname.startsWith('/classes') || pathname.startsWith('/budgets') || pathname.startsWith('/exams') || pathname.startsWith('/study-plans') || pathname.startsWith('/notes') || pathname.startsWith('/groups') || pathname.startsWith('/subjects') || pathname.startsWith('/study-sessions') || pathname.startsWith('/focus') || pathname.startsWith('/analytics') || pathname.startsWith('/learning') || pathname.startsWith('/settings')
  if (isProtected) {
    const token = req.cookies.get(AUTH_COOKIE)?.value
    if (!token) {
      const url = req.nextUrl.clone()
      url.pathname = '/login'
      url.searchParams.set('redirect', pathname)
      return NextResponse.redirect(url)
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/classes/:path*',
    '/budgets/:path*',
    '/exams/:path*',
    '/study-plans/:path*',
    '/notes/:path*',
    '/groups/:path*',
    '/subjects/:path*',
    '/study-sessions/:path*',
    '/focus/:path*',
    '/analytics/:path*',
    '/learning/:path*',
    '/settings/:path*'
  ]
}

