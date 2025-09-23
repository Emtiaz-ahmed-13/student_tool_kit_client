// Shared types aligned with backend payloads
export type Meta = { page: number; limit: number; total: number; totalPages: number };

export type User = { id: string; name: string; email: string };
export type AuthResponse = { user: User; token: string };

export type ClassItem = {
  id: string;
  subject: string;
  instructor?: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  location?: string;
  color?: string;
  description?: string;
};

export type BudgetEntry = {
  id: string;
  type: 'INCOME' | 'EXPENSE';
  category: string;
  amount: number;
  date: string;
  note?: string;
};
export type BudgetAnalytics = {
  totalIncome: number;
  totalExpense: number;
  byCategory: { category: string; income: number; expense: number }[];
};

export type Subject = { id: string; name: string; code?: string; color?: string };
export type SubjectAnalytics = { subjectId: string; weeklyHours: number; sessions: number };

export type FocusMode = 'POMODORO' | 'DEEP_WORK' | 'MARATHON' | 'CUSTOM';
export type FocusSession = {
  id: string;
  subjectId?: string;
  mode: FocusMode;
  startedAt?: string;
  status: 'IDLE' | 'RUNNING' | 'PAUSED' | 'COMPLETED' | 'CANCELLED';
  durationMinutes?: number;
};

