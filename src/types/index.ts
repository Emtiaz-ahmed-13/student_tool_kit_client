// Global type definitions for Student Toolkit

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "student" | "teacher" | "admin";
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: "light" | "dark" | "system";
  language: string;
  notifications: boolean;
  subjects: Subject[];
}

export interface Subject {
  id: string;
  name: string;
  category: "physics" | "mathematics" | "computer-science" | "chess" | "other";
  color: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Navigation types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  badge?: number;
  children?: NavigationItem[];
}

// Common utility types
export type Status = "idle" | "loading" | "success" | "error";

export interface LoadingState {
  status: Status;
  error?: string;
}
