
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="relative">
        <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-maximally-neon-green via-maximally-neon-purple to-maximally-neon-pink bg-clip-text text-transparent">
          Maximally
        </span>
        <div className="absolute -bottom-1 left-0 h-1.5 w-full bg-gradient-to-r from-maximally-neon-green via-maximally-neon-blue to-maximally-neon-purple rounded-full animate-pulse-slow"></div>
      </div>
    </div>
  );
};

export default Logo;
