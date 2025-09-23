"use client"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { qk } from '@/hooks/queries'
import { type BudgetEntry } from '@/lib/api'
import { budgetEntrySchema } from '@/lib/zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/Button'
import { toast } from 'sonner'

export default function BudgetsPage() {
  const qc = useQueryClient()
  const { data, isLoading } = useQuery({
    queryKey: qk.budgets(),
    queryFn: async () => {
      const res = await fetch('/api/budgets')
      const json = await res.json() as { success: boolean; data: BudgetEntry[] }
      if (!res.ok || !json.success) throw new Error('Failed to load budgets')
      return json.data
    }
  })

  const form = useForm({
    resolver: zodResolver(budgetEntrySchema),
    defaultValues: { amount: 0, type: 'EXPENSE' as const, category: '', date: new Date().toISOString().slice(0,10), note: '' }
  })

  const mutation = useMutation({
    mutationFn: async (values: any) => {
      const res = await fetch('/api/budgets', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json?.message || 'Create failed')
      return json.data as BudgetEntry
    },
    onMutate: async (values) => {
      await qc.cancelQueries({ queryKey: qk.budgets() })
      const prev = qc.getQueryData<BudgetEntry[]>(qk.budgets())
      const optimistic: BudgetEntry = { id: 'temp-' + Math.random().toString(36).slice(2), ...values }
      qc.setQueryData(qk.budgets(), (old: any) => [optimistic, ...(old || [])])
      return { prev }
    },
    onError: (_err, _vars, ctx) => {
      if (ctx?.prev) qc.setQueryData(qk.budgets(), ctx.prev)
      toast.error('Failed to add entry')
    },
    onSuccess: () => { toast.success('Entry added') },
    onSettled: () => { qc.invalidateQueries({ queryKey: qk.budgets() }) }
  })

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Budgets</h1>
      <form onSubmit={form.handleSubmit((v) => mutation.mutate(v))} className="grid grid-cols-1 gap-3 md:grid-cols-5">
        <input type="number" step="0.01" className="rounded-md border px-3 py-2" placeholder="Amount" {...form.register('amount', { valueAsNumber: true })} />
        <select className="rounded-md border px-3 py-2" {...form.register('type')}>
          <option value="INCOME">Income</option>
          <option value="EXPENSE">Expense</option>
        </select>
        <input className="rounded-md border px-3 py-2" placeholder="Category" {...form.register('category')} />
        <input type="date" className="rounded-md border px-3 py-2" {...form.register('date')} />
        <Button type="submit" disabled={mutation.isPending}>Add</Button>
      </form>
      <div className="rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="p-2">Date</th><th className="p-2">Type</th><th className="p-2">Category</th><th className="p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <tr><td className="p-2" colSpan={4}>Loading...</td></tr>}
            {data?.map((e) => (
              <tr key={e.id} className="border-b">
                <td className="p-2">{e.date?.slice(0,10)}</td>
                <td className="p-2">{e.type}</td>
                <td className="p-2">{e.category || '-'}</td>
                <td className="p-2">{e.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

