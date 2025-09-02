import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add dark mode support
if (typeof window !== "undefined") {
  // Check system preference
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // Set initial class based on system preference
  if (darkModeMediaQuery.matches) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Listen for changes in system preference
  darkModeMediaQuery.addEventListener("change", (e) => {
    if (e.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
