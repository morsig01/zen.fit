'use client';

import React from 'react';
import MembershipCard from '@/components/Membership-card';
import { useRouter } from 'next/navigation';

function MembershipOptions() {
  const router = useRouter();

  const membershipPlans = [
    { title: 'Basic Plan', price: 20, features: ['Access to gym equipment', '1 group class per week'], id: 1 },
    { title: 'Premium Plan', price: 40, features: ['Access to gym equipment', '5 group classes per week', 'Personal trainer sessions'], id: 2 },
    { title: 'Elite Plan', price: 60, features: ['All Premium features', 'VIP locker room access', 'Nutritional guidance'], id: 3 },
  ];

  return (
    <div className="relative w-full min-h-screen bg-cover bg-center bg-[url('/gym.jpg')]">
      <div className="absolute inset-0 bg-neutral-900 bg-opacity-50 backdrop-blur-sm" />
      <div className="relative z-10 pt-40 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-left">Memberships We Offer</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipPlans.map((plan) => (
            <MembershipCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              planId={plan.id}
              onSelect={() => {
                router.push(`/register?planId=${plan.id}`);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MembershipOptions;
