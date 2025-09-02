import React from "react";

interface AuthButtonProps {
  onClick: () => void;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
  onClick,
  variant = "primary",
  children,
}) => {
  const baseClasses =
    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";

  const variantClasses =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
      : "bg-gray-700 text-gray-300 hover:bg-gray-600 focus:ring-gray-500";

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
};

export default AuthButton;
