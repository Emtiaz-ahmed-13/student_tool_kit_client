import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchFromBackend, ApiError } from '@/lib/api'

const originalEnv = process.env

describe('fetchFromBackend', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    process.env = { ...originalEnv, BACKEND_API_BASE: 'http://localhost:5000/api/v1' } as any
  })

  it('returns data on success', async () => {
    const payload = { success: true, message: 'ok', data: { hello: 'world' } }
    // @ts-expect-error
    global.fetch = vi.fn().mockResolvedValue({ ok: true, status: 200, json: () => Promise.resolve(payload), headers: new Headers() })
    const res = await fetchFromBackend<{ hello: string }>('/ping')
    expect(res.data.hello).toBe('world')
  })

  it('throws ApiError on failure', async () => {
    const payload = { success: false, message: 'bad', error: { code: 'BAD', details: {} } }
    // @ts-expect-error
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 400, json: () => Promise.resolve(payload), headers: new Headers() })
    await expect(fetchFromBackend('/bad')).rejects.toBeInstanceOf(ApiError)
  })
})

