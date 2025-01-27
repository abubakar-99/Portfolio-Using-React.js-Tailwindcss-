import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ShoppingBasket, Mail, Lock } from "lucide-react" // Import Lucide icons

function Login({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false) // To track loading state
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true) // Show loading spinner

    const loginSuccess = onLogin(email, password)
    if (loginSuccess) {
      navigate("/dashboard")
    } else {
      alert("Login failed. Please check your credentials.")
    }
    setLoading(false) // Hide loading spinner after action
  }

  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col items-center justify-center">
      {/* Logo and Welcome Section */}
      <div className="text-center mb-6">
        <ShoppingBasket className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
        <h1 className="text-2xl font-bold">Welcome back</h1>
      </div>

      {/* Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm w-[400px]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email address</label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3 bottom-2 text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 pl-10 pr-3 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3 bottom-2 text-gray-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 pl-10 pr-3 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white rounded py-2 hover:bg-emerald-700 transition-colors flex justify-center items-center"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 118 8A8 8 0 014 12zm14 0a6 6 0 10-6 6 6 6 0 006-6z"
                />
              </svg>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        {/* Sign-up Link */}
        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-emerald-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login

