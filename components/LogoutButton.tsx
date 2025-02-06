'use client';

import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
      });

      if (response.ok) {
        alert('You have been logged out!');
        // Redirect to login page
        router.push('/login');
      } else {
        const data = await response.json();
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert('An error occurred during logout. Please try again.');
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
