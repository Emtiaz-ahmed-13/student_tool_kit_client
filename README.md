# Student Life Toolkit (Next.js 15)

Production-ready Next.js 15 + TypeScript frontend for the Student Life Toolkit. Connects to an existing Express + Prisma REST API.

## Tech
- Next.js 15 (App Router, RSC)
- TypeScript, Tailwind CSS, shadcn-style UI primitives
- TanStack Query, RHF + Zod
- Recharts
- Vitest + Testing Library

## Getting Started

1. Install dependencies:
```bash
pnpm install # or npm install / yarn
```

2. Create `.env.local`:
```env
NEXT_PUBLIC_APP_NAME="Student Life Toolkit"
BACKEND_API_BASE="http://localhost:5000/api/v1"
NODE_ENV="development"
```

3. Run dev server:
```bash
pnpm dev
```

Open http://localhost:3000

## Auth
- Login via `/api/auth/login` which forwards to backend and sets `st_auth` httpOnly cookie.
- Logout via `/api/auth/logout` which clears cookie.
- Middleware protects protected routes.

## Testing
```bash
pnpm test
```

## Notes
- Client calls only `/api/*`. Server RSC uses `fetchFromBackend` with cookie token.
- Rate-limit aware with simple exponential backoff.
