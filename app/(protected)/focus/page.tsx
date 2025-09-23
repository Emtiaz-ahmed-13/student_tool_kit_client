'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

type Mode = 'POMODORO' | 'DEEP_WORK' | 'MARATHON' | 'CUSTOM';

export default function Page() {
  const [mode, setMode] = useState<Mode>('POMODORO');
  const [status, setStatus] = useState<'IDLE' | 'RUNNING' | 'PAUSED'>('IDLE');
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (status === 'RUNNING') {
      timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [status]);

  async function call(action: 'start' | 'pause' | 'resume' | 'complete' | 'cancel') {
    try {
      const res = await fetch(`/api/subjects/focus-sessions/${'current'}/${action}`, { method: 'POST' });
      if (!res.ok) {
        const b = await res.json().catch(() => ({}));
        throw new Error(b?.message || 'Action failed');
      }
      toast.success(`Action: ${action}`);
    } catch (e: any) {
      toast.error(e.message);
    }
  }

  return (
    <div className="container-page py-6">
      <h1 className="text-xl font-semibold mb-4">Focus Session</h1>
      <Tabs value={mode} onValueChange={(v) => setMode(v as Mode)}>
        <TabsList>
          <TabsTrigger value="POMODORO">Pomodoro</TabsTrigger>
          <TabsTrigger value="DEEP_WORK">Deep Work</TabsTrigger>
          <TabsTrigger value="MARATHON">Marathon</TabsTrigger>
          <TabsTrigger value="CUSTOM">Custom</TabsTrigger>
        </TabsList>
        <TabsContent value={mode}>
          <div className="rounded-md border p-6 flex items-center gap-4">
            <div className="text-4xl font-bold tabular-nums" aria-live="polite">
              {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}
            </div>
            <div className="ml-auto flex items-center gap-2">
              {status !== 'RUNNING' ? (
                <Button
                  onClick={() => {
                    setStatus('RUNNING');
                    call('start');
                  }}
                >
                  Start
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  onClick={() => {
                    setStatus('PAUSED');
                    call('pause');
                  }}
                >
                  Pause
                </Button>
              )}
              {status === 'PAUSED' && (
                <Button
                  onClick={() => {
                    setStatus('RUNNING');
                    call('resume');
                  }}
                >
                  Resume
                </Button>
              )}
              <Button
                variant="outline"
                onClick={() => {
                  setStatus('IDLE');
                  setSeconds(0);
                  call('cancel');
                }}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  setStatus('IDLE');
                  call('complete');
                }}
              >
                Complete
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

