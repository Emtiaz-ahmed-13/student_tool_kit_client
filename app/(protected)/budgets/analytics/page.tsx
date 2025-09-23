"use client"
import { useQuery } from '@tanstack/react-query'
import { type BudgetAnalytics } from '@/lib/api'
import { qk } from '@/hooks/queries'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { Skeleton } from '@/components/ui/Skeleton'

const COLORS = ['#6366F1', '#22C55E', '#EF4444', '#F59E0B', '#06B6D4', '#8B5CF6']

export default function BudgetsAnalyticsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: qk.budgetsAnalytics(),
    queryFn: async () => {
      const res = await fetch('/api/budgets/analytics')
      const json = await res.json() as { success: boolean; data: BudgetAnalytics }
      if (!res.ok || !json.success) throw new Error('Failed to load analytics')
      return json.data
    }
  })

  if (isLoading) return <Skeleton className="h-64 w-full" />
  if (error) return <div role="alert" className="text-destructive">Failed to load analytics.</div>
  if (!data) return <div className="text-muted-foreground">No analytics available.</div>

  const pieData = data.byCategory.map((c) => ({ name: c.category, value: c.total }))

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Budget Analytics</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border p-4">
          <div className="mb-2 text-sm text-muted-foreground" aria-hidden>
            Income vs Expense
          </div>
          <div className="text-lg">
            Income: ${data.incomeTotal.toFixed(2)} | Expense: ${data.expenseTotal.toFixed(2)}
          </div>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="mb-2 text-sm text-muted-foreground">Category Breakdown</h2>
          <div style={{ width: '100%', height: 320 }} aria-label="Category breakdown chart">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

