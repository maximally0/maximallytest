
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="relative">
        <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-maximally-green via-maximally-purple to-maximally-pink bg-clip-text text-transparent">
          Maximally
        </span>
        <div className="absolute -bottom-1 left-0 h-1 w-full bg-gradient-to-r from-maximally-green via-maximally-blue to-maximally-purple rounded-full animate-pulse-glow"></div>
      </div>
    </div>
  );
};

export default Logo;
