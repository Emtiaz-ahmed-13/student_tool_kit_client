import { env } from '@/env.mjs';
import { getToken } from '@/lib/auth';
import { sleep } from '@/lib/utils';

export class ApiError extends Error {
  code?: string | number;
  details?: unknown;
  status?: number;
  constructor(message: string, opts?: { code?: string | number; details?: unknown; status?: number }) {
    super(message);
    this.name = 'ApiError';
    this.code = opts?.code;
    this.details = opts?.details;
    this.status = opts?.status;
  }
}

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
  meta?: { page: number; limit: number; total: number; totalPages: number };
  error?: { code?: string | number; details?: unknown };
};

async function handleResponse<T>(res: Response): Promise<ApiResponse<T>> {
  const text = await res.text();
  const json = text ? (JSON.parse(text) as ApiResponse<T>) : ({ success: res.ok, message: '' } as any);
  if (!res.ok || json.success === false) {
    const retryAfter = res.headers.get('Retry-After');
    const err = new ApiError(json?.message || res.statusText, {
      code: json?.error?.code ?? res.status,
      details: json?.error?.details,
      status: res.status,
    });
    if (res.status === 401) {
      throw err;
    }
    throw err;
  }
  return json;
}

async function withRetries<T>(fn: () => Promise<T>, res?: Response): Promise<T> {
  let attempt = 0;
  const delays = [2000, 4000, 8000];
  while (true) {
    try {
      return await fn();
    } catch (e: any) {
      if (e?.status !== 429 || attempt >= delays.length) throw e;
      const retryAfterHeader = res?.headers?.get?.('Retry-After');
      const delay = retryAfterHeader ? Number(retryAfterHeader) * 1000 : delays[attempt];
      attempt += 1;
      await sleep(delay);
    }
  }
}

export async function fetchFromBackend<T = any>(path: string, init?: RequestInit & { skipAuth?: boolean }) {
  const url = `${env.BACKEND_API_BASE}${path}`;
  const token = init?.skipAuth ? null : getToken();
  const headers: HeadersInit = {
    ...(init?.headers || {}),
    'Content-Type': 'application/json',
  };
  if (token) (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  const doFetch = async () => {
    const res = await fetch(url, { ...init, headers });
    return handleResponse<T>(res);
  };
  return withRetries(doFetch);
}

// Client wrapper that calls our Next.js proxy endpoints
export const client = {
  async get<T>(path: string, init?: RequestInit) {
    const res = await fetch(path, { ...init, method: 'GET' });
    return handleResponse<T>(res);
  },
  async post<T>(path: string, body?: unknown, init?: RequestInit) {
    const res = await fetch(path, { ...init, method: 'POST', headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) }, body: JSON.stringify(body ?? {}) });
    return handleResponse<T>(res);
  },
  async patch<T>(path: string, body?: unknown, init?: RequestInit) {
    const res = await fetch(path, { ...init, method: 'PATCH', headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) }, body: JSON.stringify(body ?? {}) });
    return handleResponse<T>(res);
  },
  async delete<T>(path: string, init?: RequestInit) {
    const res = await fetch(path, { ...init, method: 'DELETE' });
    return handleResponse<T>(res);
  },
};

// Typed helpers (examples)
export const ClassesApi = {
  list: (params?: Record<string, string | number>) => client.get<ApiResponse<any>>(`/api/classes${toQuery(params)}`),
  create: (payload: any) => client.post<ApiResponse<any>>('/api/classes', payload),
  update: (id: string, payload: any) => client.patch<ApiResponse<any>>(`/api/classes/${id}`, payload),
  remove: (id: string) => client.delete<ApiResponse<any>>(`/api/classes/${id}`),
};

export const BudgetsApi = {
  list: (params?: Record<string, string | number>) => client.get<ApiResponse<any>>(`/api/budgets${toQuery(params)}`),
  create: (payload: any) => client.post<ApiResponse<any>>('/api/budgets', payload),
  analytics: (params?: Record<string, string | number>) => client.get<ApiResponse<any>>(`/api/budgets/analytics${toQuery(params)}`),
};

export const SubjectsApi = {
  list: (params?: Record<string, string | number>) => client.get<ApiResponse<any>>(`/api/subjects${toQuery(params)}`),
  analytics: (id: string) => client.get<ApiResponse<any>>(`/api/subjects/${id}/analytics`),
  timeTracking: (params?: Record<string, string | number>) => client.get<ApiResponse<any>>(`/api/subjects/analytics/time-tracking${toQuery(params)}`),
  dashboardOverview: () => client.get<ApiResponse<any>>('/api/subjects/dashboard/overview'),
};

export const NotesApi = {
  list: (params?: Record<string, string | number>) => client.get<ApiResponse<any>>(`/api/notes${toQuery(params)}`),
  create: (payload: any) => client.post<ApiResponse<any>>('/api/notes', payload),
  share: (id: string, payload: any) => client.patch<ApiResponse<any>>(`/api/notes/${id}/share`, payload),
};

function toQuery(params?: Record<string, string | number>) {
  if (!params || Object.keys(params).length === 0) return '';
  const usp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => usp.set(k, String(v)));
  return `?${usp.toString()}`;
}

