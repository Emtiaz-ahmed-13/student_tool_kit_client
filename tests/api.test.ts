import { describe, it, expect, vi } from 'vitest';
import { fetchFromBackend, ApiError } from '@/lib/api';

describe('lib/api fetchFromBackend', () => {
  it('parses successful response', async () => {
    const mock = {
      success: true,
      message: 'ok',
      data: { hello: 'world' },
    };
    const spy = vi.spyOn(global, 'fetch' as any).mockResolvedValueOnce(
      new Response(JSON.stringify(mock), { status: 200, headers: { 'Content-Type': 'application/json' } }) as any,
    );
    const res = await fetchFromBackend('/test', { skipAuth: true });
    expect(res.data.hello).toBe('world');
    spy.mockRestore();
  });

  it('throws ApiError on non-success', async () => {
    const mock = { success: false, message: 'bad', error: { code: 'E_BAD' } };
    const spy = vi.spyOn(global, 'fetch' as any).mockResolvedValueOnce(
      new Response(JSON.stringify(mock), { status: 400, headers: { 'Content-Type': 'application/json' } }) as any,
    );
    await expect(fetchFromBackend('/test', { skipAuth: true })).rejects.toBeInstanceOf(ApiError);
    spy.mockRestore();
  });
});

