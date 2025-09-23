"use client"
import { useEffect } from 'react'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <html>
      <body>
        <div className="container-app py-16">
          <h2 className="text-xl font-semibold">Something went wrong!</h2>
          <button className="mt-4 rounded-md border px-3 py-2" onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  )
}

