import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import BudgetsAnalyticsPage from '@/app/(protected)/budgets/analytics/page'

vi.mock('@tanstack/react-query', () => ({
  useQuery: () => ({
    data: { incomeTotal: 1000, expenseTotal: 400, byCategory: [ { category: 'Food', total: 200 }, { category: 'Books', total: 100 } ] },
    isLoading: false,
    error: null
  })
}))

describe('BudgetsAnalyticsPage', () => {
  it('renders totals and chart', async () => {
    vi.spyOn(global, 'fetch' as any).mockResolvedValue({ ok: true, json: async () => ({ success: true, data: { incomeTotal: 1000, expenseTotal: 400, byCategory: [ { category: 'Food', total: 200 }, { category: 'Books', total: 100 } ] } }) })
    render(<BudgetsAnalyticsPage />)
    expect(await screen.findByText(/Income:/)).toBeInTheDocument()
    expect(screen.getByLabelText('Category breakdown chart')).toBeInTheDocument()
  })
})

