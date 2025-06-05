import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input className="w-full p-3 border border-gray-300 rounded" type="email" placeholder="Email" />
        <input className="w-full p-3 border border-gray-300 rounded" type="password" placeholder="Password" />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded transition">
          Login
        </button>
      </form>
      <p className="text-sm mt-4 text-center">
        Don't have an account?{' '}
        <Link to="/register" className="text-blue-600 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
}
