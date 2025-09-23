import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchFromBackend } from '@/lib/api';

export const metadata: Metadata = { title: 'Dashboard — Student Life Toolkit' };

async function getOverview() {
  const [subjectsOverview, learningDashboard] = await Promise.all([
    fetchFromBackend('/subjects/dashboard/overview'),
    fetchFromBackend('/learning/dashboard'),
  ]);
  return { subjectsOverview, learningDashboard };
}

export default async function Page() {
  const { subjectsOverview, learningDashboard } = await getOverview();
  return (
    <div className="container-page py-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Weekly Study Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{subjectsOverview?.data?.weeklyHours ?? 0}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Active Focus Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{learningDashboard?.data?.activeFocus ?? 0}</p>
        </CardContent>
      </Card>
      <Card className="md:col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle>AI Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 text-sm text-muted-foreground">
            {(learningDashboard?.data?.insights ?? []).map((it: string, idx: number) => (
              <li key={idx}>{it}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

