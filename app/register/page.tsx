'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const Register = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const planId = searchParams.get('planId');
  
  const [form, setForm] = useState({ fullName: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, membershipId: planId }), // Include membershipId
    });
  
    const data = await response.json();
    if (response.ok) {
      alert('Registration successful!');
      router.push('/profile');
    } else {
      alert(`Error: ${data.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/gym.jpg')] blur-sm"></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-900 p-8 rounded-lg shadow-2xl w-full max-w-sm text-white z-10"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <div className="mb-6">
          <label htmlFor="fullName" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Register
        </button>

        {/* Link to Login */}
        <p className="text-center text-neutral-500 mt-4">
          Want to change your membership?{' '}
          <button
            type="button"
            onClick={() => router.push(`/login?planId=${planId}`)}
            className="text-blue-400 hover:underline"
          >
            Go to Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
