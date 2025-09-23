"use client"
import { useQuery } from '@tanstack/react-query'
import { qk } from '@/hooks/queries'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

export default function TimeTrackingPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: qk.dashboard(),
    queryFn: async () => {
      const res = await fetch('/api/subjects/analytics/time-tracking')
      const json = await res.json() as { success: boolean; data: { weeks: string[]; hours: number[] } }
      if (!res.ok || !json.success) throw new Error('Failed to load report')
      return json.data
    }
  })

  if (isLoading) return <div>Loading...</div>
  if (error || !data) return <div role="alert" className="text-destructive">Failed to load</div>

  const chartData = data.weeks.map((w, i) => ({ week: w, hours: data.hours[i] }))

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Time Tracking</h1>
      <div style={{ width: '100%', height: 320 }} aria-label="Weekly time tracking chart">
        <ResponsiveContainer>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="hours" stroke="#6366F1" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

