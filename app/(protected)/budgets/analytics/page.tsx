import type { Metadata } from 'next';
import { BudgetsApi } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

export const metadata: Metadata = { title: 'Budget Analytics — Student Life Toolkit' };

async function getData() {
  const res = await BudgetsApi.analytics();
  return res.data;
}

const COLORS = ['#22c55e', '#ef4444', '#a855f7', '#06b6d4', '#f59e0b', '#3b82f6'];

export default async function Page() {
  const data = await getData();
  const pieData = (data?.byCategory ?? []).map((c: any) => ({ name: c.category, value: c.expense }));

  return (
    <div className="container-page py-6 grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Income vs Expense</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">${(data?.totalIncome ?? 0) - (data?.totalExpense ?? 0)}</div>
          <p className="text-sm text-muted-foreground">Net balance</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Expense by Category</CardTitle>
        </CardHeader>
        <CardContent>
          {pieData.length === 0 ? (
            <p className="text-sm text-muted-foreground">No analytics yet.</p>
          ) : (
            <div className="h-64" aria-label="Expense by category chart">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100}>
                    {pieData.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

