import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const AUTH_COOKIE = 'st_auth';

export function getToken(): string | null {
  const token = cookies().get(AUTH_COOKIE)?.value;
  return token ?? null;
}

export function requireAuth() {
  const token = getToken();
  if (!token) redirect('/login');
  return token;
}

