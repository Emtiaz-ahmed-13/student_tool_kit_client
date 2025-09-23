import { SubjectsApi } from '@/lib/api'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const [overviewRes] = await Promise.all([
    SubjectsApi.dashboardOverview()
  ])
  const cards = overviewRes.data.cards || {}
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(cards).map(([key, value]) => (
          <div key={key} className="rounded-lg border p-4">
            <div className="text-sm text-muted-foreground">{key}</div>
            <div className="mt-2 text-2xl font-bold">{String(value)}</div>
          </div>
        ))}
        {Object.keys(cards).length === 0 && (
          <div className="rounded-lg border p-6 text-center text-muted-foreground">No data available.</div>
        )}
      </div>
    </div>
  )
}

