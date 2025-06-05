import React from 'react';

export default function Register() {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="w-full p-2 border rounded"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full p-2 border rounded"
          type="password"
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
