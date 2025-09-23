'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { BudgetsApi } from '@/lib/api';

export function useBudgetAnalytics() {
  return useQuery({ queryKey: ['budgets', 'analytics'], queryFn: () => BudgetsApi.analytics().then((r) => r.data) });
}

export function useCreateBudget() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: any) => BudgetsApi.create(payload).then((r) => r.data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['budgets'] });
      qc.invalidateQueries({ queryKey: ['budgets', 'analytics'] });
    },
  });
}

