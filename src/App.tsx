import React, { useState } from "react";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<"home" | "login" | "register">(
    "home"
  );

  // Simple login form component
  const LoginForm = () => (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Sign In
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Sign In
        </button>
      </form>
      <div className="mt-4 text-center">
        <button
          onClick={() => setCurrentView("register")}
          className="text-blue-400 hover:text-blue-300 underline"
        >
          Don't have an account? Sign up
        </button>
      </div>
    </div>
  );

  // Simple register form component
  const RegisterForm = () => (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Create Account
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Confirm Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-4 text-center">
        <button
          onClick={() => setCurrentView("login")}
          className="text-blue-400 hover:text-blue-300 underline"
        >
          Already have an account? Sign in
        </button>
      </div>
    </div>
  );

  // Main homepage component
  const HomePage = () => (
    <div className="text-center">
      <div className="mb-8">
        <div className="text-6xl mb-4">🎓</div>
        <h1 className="text-4xl font-bold text-white mb-4">Student Toolkit</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Your ultimate companion for academic excellence
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <button
          onClick={() => setCurrentView("login")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Sign In
        </button>
        <button
          onClick={() => setCurrentView("register")}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Create Account
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          { title: "Physics", icon: "⚛️", color: "bg-blue-600" },
          { title: "Mathematics", icon: "📐", color: "bg-green-600" },
          { title: "Computer Science", icon: "💻", color: "bg-purple-600" },
        ].map((subject, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-3">{subject.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">
              {subject.title}
            </h3>
            <p className="text-gray-400">
              Master {subject.title.toLowerCase()} with our comprehensive
              learning tools
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      {currentView === "home" && <HomePage />}
      {currentView === "login" && <LoginForm />}
      {currentView === "register" && <RegisterForm />}
    </div>
  );
};

export default App;
