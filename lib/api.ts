import { env } from '@/env.mjs'
import { getToken } from '@/lib/auth'

export type Meta = { page?: number; limit?: number; total?: number; totalPages?: number }
export type ApiSuccess<T> = { success: true; message: string; data: T; meta?: Meta }
export type ApiFailure = { success: false; message: string; error?: { code?: string; details?: unknown } }
export type ApiResponse<T> = ApiSuccess<T> | ApiFailure

export class ApiError extends Error {
  status: number
  code?: string
  details?: unknown
  constructor(message: string, status: number, code?: string, details?: unknown) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.code = code
    this.details = details
  }
}

async function backoff(attempt: number, retryAfter?: string | null) {
  if (retryAfter) {
    const seconds = Number(retryAfter)
    if (!Number.isNaN(seconds)) {
      await new Promise((r) => setTimeout(r, seconds * 1000))
      return
    }
  }
  const delay = Math.pow(2, attempt) * 1000 // 2s, 4s, 8s
  await new Promise((r) => setTimeout(r, delay))
}

export async function fetchFromBackend<T>(path: string, init?: RequestInit): Promise<ApiSuccess<T>> {
  const token = getToken()
  const url = new URL(path, env.BACKEND_API_BASE)
  let lastError: unknown
  for (let attempt = 1; attempt <= 4; attempt++) {
    const res = await fetch(url.toString(), {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers || {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      }
    })
    if (res.status === 429 && attempt < 4) {
      await backoff(attempt, res.headers.get('Retry-After'))
      continue
    }
    const json = (await res.json()) as ApiResponse<T>
    if (res.ok && json.success) {
      return json
    }
    lastError = json
    if (res.status >= 500 && attempt < 4) {
      await backoff(attempt, res.headers.get('Retry-After'))
      continue
    }
    throw new ApiError(json.message || 'Request failed', res.status, json.success ? undefined : json.error?.code, json.success ? undefined : json.error?.details)
  }
  throw lastError instanceof Error ? lastError : new Error('Request failed after retries')
}

// Client-side wrapper that calls our Next.js API routes
export const client = {
  async get(path: string, init?: RequestInit) {
    return fetch(`/api${path}`, { ...init, method: 'GET' })
  },
  async post(path: string, body?: unknown, init?: RequestInit) {
    return fetch(`/api${path}`, { method: 'POST', body: body instanceof FormData ? body : JSON.stringify(body), headers: body instanceof FormData ? undefined : { 'Content-Type': 'application/json' }, ...init })
  },
  async patch(path: string, body?: unknown, init?: RequestInit) {
    return fetch(`/api${path}`, { method: 'PATCH', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' }, ...init })
  },
  async delete(path: string, init?: RequestInit) {
    return fetch(`/api${path}`, { method: 'DELETE', ...init })
  }
}

// Example Types (minimal for illustration)
export type User = { id: string; name: string; email: string }
export type AuthResponse = { user: User; token: string }

export type ClassItem = {
  id: string
  subject: string
  instructor?: string
  dayOfWeek: string
  startTime: string
  endTime: string
  location?: string
  color?: string
  description?: string
}

export type BudgetEntry = {
  id: string
  amount: number
  type: 'INCOME' | 'EXPENSE'
  category?: string
  date: string
  note?: string
}
export type BudgetAnalytics = {
  incomeTotal: number
  expenseTotal: number
  byCategory: { category: string; total: number }[]
}

export type SubjectAnalytics = {
  subjectId: string
  weeklyHours: number[]
  totalHours: number
}

export type FocusSession = {
  id: string
  subjectId?: string
  mode: 'POMODORO' | 'DEEP_WORK' | 'MARATHON' | 'CUSTOM'
  status: 'ACTIVE' | 'PAUSED' | 'COMPLETED' | 'CANCELLED'
  startedAt: string
  updatedAt: string
}

// Resource helpers (illustrative selection)
export const ClassesApi = {
  async list(params?: Record<string, string | number | boolean>) {
    const qs = params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : ''
    return fetchFromBackend<ClassItem[]>(`/classes${qs}`)
  },
  async create(payload: Partial<ClassItem>) {
    return fetchFromBackend<ClassItem>(`/classes`, { method: 'POST', body: JSON.stringify(payload) })
  },
  async update(id: string, payload: Partial<ClassItem>) {
    return fetchFromBackend<ClassItem>(`/classes/${id}`, { method: 'PATCH', body: JSON.stringify(payload) })
  },
  async remove(id: string) {
    return fetchFromBackend<{ id: string }>(`/classes/${id}`, { method: 'DELETE' })
  }
}

export const BudgetsApi = {
  async list(params?: Record<string, string | number | boolean>) {
    const qs = params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : ''
    return fetchFromBackend<BudgetEntry[]>(`/budgets${qs}`)
  },
  async create(payload: Omit<BudgetEntry, 'id'>) {
    return fetchFromBackend<BudgetEntry>(`/budgets`, { method: 'POST', body: JSON.stringify(payload) })
  },
  async analytics(params?: Record<string, string | number | boolean>) {
    const qs = params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : ''
    return fetchFromBackend<BudgetAnalytics>(`/budgets/analytics${qs}`)
  }
}

export const SubjectsApi = {
  async analytics(id: string) {
    return fetchFromBackend<SubjectAnalytics>(`/subjects/${id}/analytics`)
  },
  async timeTracking(params?: Record<string, string | number | boolean>) {
    const qs = params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : ''
    return fetchFromBackend<{ weeks: string[]; hours: number[] }>(`/subjects/analytics/time-tracking${qs}`)
  },
  async dashboardOverview() {
    return fetchFromBackend<{ cards: Record<string, unknown> }>(`/subjects/dashboard/overview`)
  }
}

export const NotesApi = {
  async list(params?: Record<string, string | number | boolean>) {
    const qs = params ? `?${new URLSearchParams(params as Record<string, string>).toString()}` : ''
    return fetchFromBackend<{ id: string; title: string; content: string }[]>(`/notes${qs}`)
  }
}

export function handleApiError(error: unknown): ApiError {
  if (error instanceof ApiError) return error
  return new ApiError('Unexpected error', 500)
}

