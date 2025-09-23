# Student Life Toolkit (Frontend)

Production-ready Next.js 15 + TypeScript app (App Router) for the Student Life Toolkit. Connects to an Express + Prisma backend via server-side proxy routes.

## Prerequisites
- Node 20+
- Backend running at `http://localhost:5000/api/v1`

## Setup

1. Install dependencies:
```bash
pnpm install # or npm install / yarn
```

2. Create `.env.local`:
```bash
NEXT_PUBLIC_APP_NAME="Student Life Toolkit"
BACKEND_API_BASE="http://localhost:5000/api/v1"
NODE_ENV="development"
```

3. Run in development:
```bash
pnpm dev
```

## Tech
- Next.js 15 App Router, Server Components by default
- Tailwind CSS + theme (dark mode)
- TanStack Query for client fetching, React Hook Form + Zod for forms
- Recharts for charts
- ESLint + Prettier
- Vitest + Testing Library

## Auth Flow
- Login via `/api/auth/login` which forwards to backend `/auth/login`. On success sets `st_auth` httpOnly cookie.
- Logout via `/api/auth/logout` clears cookie.
- Middleware protects protected routes and redirects unauthenticated users to `/login`.
- Server data fetching attaches `Authorization: Bearer <token>` using cookie.

## Testing
```bash
pnpm test
```

## Notes
- Client code should call only `/api/*` routes.
- Adjust UI and add more pages following the established patterns.
