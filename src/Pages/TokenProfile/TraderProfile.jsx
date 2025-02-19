import React from 'react';
import { ArrowUpRight, ArrowDownRight, Share2 } from 'lucide-react';

const BoxWrapper = ({ children }) => (
  <div className="bg-secondary p-4">
    {children}
  </div>
);

const TraderProfile = () => {
  return (
    <div className="text-white flex flex-row items-center justify-between w-1/3">
      <div>
        <img className='w-72 h-72' src={'./assets/images/profile.png'} alt="Profile" />

          <div className='mt-16'>
            <div className='bg-secondary p-4 '></div>
            <div className='bg-secondary p-4 '></div>
          </div>
      </div>
    </div>
  );
};

export default TraderProfile;