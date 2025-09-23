import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '@/app/(protected)/budgets/analytics/page';

vi.mock('@/lib/api', () => ({
  BudgetsApi: {
    analytics: async () => ({
      success: true,
      message: 'ok',
      data: {
        totalIncome: 1000,
        totalExpense: 400,
        byCategory: [
          { category: 'Food', income: 0, expense: 200 },
          { category: 'Books', income: 0, expense: 200 },
        ],
      },
    }),
  },
}));

describe('Budgets Analytics Page', () => {
  it('renders net balance', async () => {
    // @ts-expect-error Async server component rendered as function
    render(await Page());
    expect(await screen.findByText('$600')).toBeInTheDocument();
  });
});

