'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Success message state
  const [redirect, setRedirect] = useState(false); // Redirect state to control when to navigate

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage(''); // Reset success message on each submit

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage('Login successful!'); // Set the success message here
        
        console.log('User Details:', data.user);

        // Store user details in localStorage or state management
        localStorage.setItem('user', JSON.stringify(data.user));

        // Set redirect state to true
        setRedirect(true);
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  // Use effect to redirect after success message is set
  useEffect(() => {
    if (redirect) {
      setTimeout(() => {
        router.push('/profile'); // Redirect to profile page after a short delay
      }, 2000); // Adjust the time in milliseconds as needed (2000 ms = 2 seconds)
    }
  }, [redirect, router]);

  return (
    <div className="flex items-center justify-center w-full h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/gym.jpg')] blur-sm"></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-900 p-8 rounded-lg shadow-2xl w-full max-w-sm text-white z-10"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        
        {/* Success message */}
        {successMessage && (
          <p className="text-green-500 text-sm mb-4">{successMessage}</p>
        )}

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
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
            value={credentials.password}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
