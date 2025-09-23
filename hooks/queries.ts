export const qk = {
  budgets: (params?: unknown) => ['budgets', params] as const,
  budgetsAnalytics: (params?: unknown) => ['budgets', 'analytics', params] as const,
  classes: () => ['classes'] as const,
  subjectAnalytics: (id: string) => ['subjects', id, 'analytics'] as const,
  focusSessions: () => ['focus-sessions'] as const,
  dashboard: () => ['dashboard'] as const
}

