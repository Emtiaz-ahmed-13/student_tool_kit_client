// Application constants

export const APP_CONFIG = {
  name: "Student Toolkit",
  version: "1.0.0",
  description: "Your Ultimate Student Companion",
  author: "EMTIAZ",
} as const;

export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  COURSES: "/courses",
  ASSIGNMENTS: "/assignments",
  GRADES: "/grades",
  PROFILE: "/profile",
  ANALYTICS: "/analytics",
  PHYSICS: "/physics",
  MATHEMATICS: "/mathematics",
  CHESS: "/chess",
  COMPUTER_SCIENCE: "/computer-science",
} as const;

export const SUBJECTS = {
  PHYSICS: {
    id: "physics",
    name: "Physics",
    color: "#3B82F6",
    icon: "⚛️",
  },
  MATHEMATICS: {
    id: "mathematics",
    name: "Mathematics",
    color: "#10B981",
    icon: "📐",
  },
  COMPUTER_SCIENCE: {
    id: "computer-science",
    name: "Computer Science",
    color: "#8B5CF6",
    icon: "💻",
  },
  CHESS: {
    id: "chess",
    name: "Chess",
    color: "#F59E0B",
    icon: "♟️",
  },
} as const;

export const THEME_CONFIG = {
  COLORS: {
    PRIMARY: "#3B82F6",
    SECONDARY: "#10B981",
    SUCCESS: "#059669",
    WARNING: "#F59E0B",
    ERROR: "#EF4444",
    INFO: "#3B82F6",
  },
  BREAKPOINTS: {
    SM: "640px",
    MD: "768px",
    LG: "1024px",
    XL: "1280px",
    "2XL": "1536px",
  },
} as const;

export const STORAGE_KEYS = {
  USER_PREFERENCES: "user_preferences",
  THEME: "theme",
  LANGUAGE: "language",
} as const;
