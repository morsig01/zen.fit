'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const [user, setUser] = useState({
    full_name: '',
    email: '',
    membership: '',
    trainer: '',
    phone: '',
  });
  const router = useRouter();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Remove localStorage token check. Instead, send credentials.
        const response = await fetch('/api/profile', {
          credentials: 'include', // This tells fetch to include cookies.
        });

        if (!response.ok) {
          router.push('/login');
          return;
        }

        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error('Error fetching profile:', error);
        router.push('/login');
      }
    };

    fetchUserProfile();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-300 w-full max-w-lg rounded-xl p-6 shadow-md text-center">
        <div className="bg-gray-400 w-24 h-24 rounded-full mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold mb-4">{user.full_name}</h1>
        <div className="bg-gray-200 p-4 rounded-md grid grid-cols-2 gap-4">
          <div>
            <h2 className="font-semibold">Membership</h2>
            <p>{user.membership}</p>
          </div>
          <div>
            <h2 className="font-semibold">Email</h2>
            <p>{user.email}</p>
          </div>
          <div>
            <h2 className="font-semibold">Trainer</h2>
            <p>{user.trainer}</p>
          </div>
          <div>
            <h2 className="font-semibold">Phone</h2>
            <p>{user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
