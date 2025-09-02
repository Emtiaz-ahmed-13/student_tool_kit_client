import Login from "@/components/ui/login";
import RegisterForm from "@/components/ui/RegisterForm";
import React, { useState } from "react";

const AuthPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-800 rounded-lg border border-gray-700">
            <button
              onClick={() => setActiveTab("login")}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === "login"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === "register"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-gray-700 p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left Side - Illustration */}
            <div className="flex-1 hidden md:flex flex-col items-center justify-center">
              <div className="text-6xl mb-4 animate-bounce">🎓</div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Student Toolkit
              </h2>
              <p className="text-gray-300 text-center">
                Your ultimate companion for academic excellence
              </p>
              <div className="mt-6 w-full max-w-xs">
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-400">
                    <div className="mb-1">Welcome to Student Toolkit</div>
                    <div>Organize your studies, track progress, excel!</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Auth Form */}
            <div className="flex-1 w-full">
              <div className="flex justify-center mb-6">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {activeTab === "login" ? "Welcome Back" : "Join Us"}
                </div>
              </div>

              {/* Login Component */}
              {activeTab === "login" && (
                <div className="animate-fade-in">
                  <Login />
                </div>
              )}

              {/* Register Component */}
              {activeTab === "register" && (
                <div className="animate-fade-in">
                  <RegisterForm />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>© 2025 Student Toolkit. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
