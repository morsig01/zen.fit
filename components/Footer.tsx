import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white py-20">
      <div className="container mx-auto flex flex-col items-center">
        <p>&copy; {currentYear} ZenFit. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="text-white hover:text-gray-400">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="text-white hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;