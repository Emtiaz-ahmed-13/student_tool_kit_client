import { z } from 'zod';

export const classItemSchema = z.object({
  id: z.string().optional(),
  subject: z.string().min(1),
  instructor: z.string().optional(),
  dayOfWeek: z.string().min(1),
  startTime: z.string().min(1),
  endTime: z.string().min(1),
  location: z.string().optional(),
  color: z.string().optional(),
  description: z.string().optional(),
});

export const budgetEntrySchema = z.object({
  id: z.string().optional(),
  type: z.enum(['INCOME', 'EXPENSE']),
  category: z.string().min(1),
  amount: z.number().positive(),
  date: z.string(),
  note: z.string().optional(),
});

export const focusSessionSchema = z.object({
  id: z.string().optional(),
  subjectId: z.string().optional(),
  mode: z.enum(['POMODORO', 'DEEP_WORK', 'MARATHON', 'CUSTOM']),
  startedAt: z.string().optional(),
  status: z.enum(['IDLE', 'RUNNING', 'PAUSED', 'COMPLETED', 'CANCELLED']),
  durationMinutes: z.number().optional(),
});

