import React from 'react';

interface MembershipCardProps {
  title: string;
  price: number;
  features: string[];
}

const MembershipCard: React.FC<MembershipCardProps> = ({ title, price, features }) => {
    return (
      <div className="bg-neutral-900 p-12 my-20 rounded-xl shadow-xl w-full max-w-sm text-center flex flex-col justify-between h-full">
        <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
        <p className="text-xl text-neutral-500 mb-12">${price}/month</p>
        <ul className="mb-12 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-neutral-500">
              • {feature}
            </li>
          ))}
        </ul>
        <button className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 focus:outline-none mt-auto">
          Choose Plan
        </button>
      </div>
    );
  };

export default MembershipCard;