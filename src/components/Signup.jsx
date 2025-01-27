import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShoppingBasket, User, Mail, Lock } from 'lucide-react'; // Import Lock icon

function Signup({ onSignup }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    const signupSuccess = onSignup(fullName, email, password);
    if (signupSuccess) {
      navigate('/login');
    } else {
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col items-center justify-center">
      {/* Logo and Welcome Section */}
      <div className="text-center mb-6">
        <ShoppingBasket className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
        <h1 className="text-2xl font-bold">Create an account</h1>
      </div>

      {/* Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-sm w-[400px]">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <div className="relative flex items-center">
              <User className="absolute left-3 text-gray-500" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-2 pl-10 pr-3 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email address</label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3 text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 pl-10 pr-3 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <div className="relative">
              <div className="absolute left-3 top-2 text-gray-500">
                <Lock size={20} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 pl-10 pr-3 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
            <div className="relative">
              <div className="absolute left-3 top-2 text-gray-500">
                <Lock size={20} />
              </div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 pl-10 pr-3 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white rounded py-2 hover:bg-emerald-700 transition-colors"
          >
            Sign up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-emerald-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
