"use client"
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/Button'

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <div className="rounded-lg border p-4">
        <div className="mb-2 text-sm text-muted-foreground">Theme</div>
        <div className="flex items-center gap-2">
          <Button variant={theme === 'light' ? 'default' : 'outline'} onClick={() => setTheme('light')}>Light</Button>
          <Button variant={theme === 'dark' ? 'default' : 'outline'} onClick={() => setTheme('dark')}>Dark</Button>
          <Button variant={theme === 'system' ? 'default' : 'outline'} onClick={() => setTheme('system')}>System</Button>
        </div>
      </div>
    </div>
  )
}

