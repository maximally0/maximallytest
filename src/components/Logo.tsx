
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <span className="text-2xl font-normal text-maximally-black lowercase tracking-tight">maximally</span>
      <div className="ml-2 h-3 w-3 rounded-full bg-maximally-red animate-float"></div>
    </div>
  );
};

export default Logo;
