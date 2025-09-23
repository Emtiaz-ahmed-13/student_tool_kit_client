"use client"
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { client } from '@/lib/api'
import { toast } from 'sonner'

type Mode = 'POMODORO' | 'DEEP_WORK' | 'MARATHON' | 'CUSTOM'

export default function FocusPage() {
  const [mode, setMode] = useState<Mode>('POMODORO')
  const [activeId, setActiveId] = useState<string | null>(null)
  const [seconds, setSeconds] = useState(0)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    return () => { if (intervalRef.current) window.clearInterval(intervalRef.current) }
  }, [])

  function startTimer() {
    if (intervalRef.current) return
    intervalRef.current = window.setInterval(() => setSeconds((s) => s + 1), 1000)
  }
  function pauseTimer() {
    if (intervalRef.current) { window.clearInterval(intervalRef.current); intervalRef.current = null }
  }
  function resetTimer() {
    pauseTimer()
    setSeconds(0)
  }

  async function handleStart() {
    const res = await client.post('/subjects/focus-sessions', { mode })
    const data = await res.json()
    if (!res.ok || !data?.success) { toast.error(data?.message || 'Failed to start'); return }
    setActiveId(data.data.id)
    toast.success('Focus session started')
    startTimer()
  }
  async function action(name: 'start' | 'pause' | 'resume' | 'complete' | 'cancel') {
    if (!activeId) return
    const res = await client.post(`/subjects/focus-sessions/${activeId}/${name}`)
    const data = await res.json()
    if (!res.ok || !data?.success) { toast.error(data?.message || 'Action failed'); return }
    if (name === 'pause') pauseTimer()
    if (name === 'resume') startTimer()
    if (name === 'complete' || name === 'cancel') { resetTimer(); setActiveId(null) }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Focus</h1>
      <div className="rounded-lg border p-4">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <label htmlFor="mode" className="text-sm">Mode</label>
          <select id="mode" className="rounded-md border px-3 py-2" value={mode} onChange={(e) => setMode(e.target.value as Mode)} disabled={!!activeId}>
            <option value="POMODORO">Pomodoro</option>
            <option value="DEEP_WORK">Deep Work</option>
            <option value="MARATHON">Marathon</option>
            <option value="CUSTOM">Custom</option>
          </select>
          {!activeId ? (
            <Button onClick={handleStart}>Start</Button>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="secondary" onClick={() => action('pause')}>Pause</Button>
              <Button variant="secondary" onClick={() => action('resume')}>Resume</Button>
              <Button variant="destructive" onClick={() => action('cancel')}>Cancel</Button>
              <Button onClick={() => action('complete')}>Complete</Button>
            </div>
          )}
        </div>
        <div className="text-5xl tabular-nums" aria-live="polite" aria-atomic>{new Date(seconds * 1000).toISOString().substring(11, 19)}</div>
      </div>
    </div>
  )
}

