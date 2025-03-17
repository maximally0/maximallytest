
import React from 'react';
import { Check, Sparkles } from 'lucide-react';

const TransparencyStatement: React.FC = () => {
  const transparencyPoints = [
    "Science-backed ingredients with clinical studies",
    "No fillers or artificial additives",
    "Full ingredient transparency",
    "Third-party testing for potency and purity"
  ];

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="h-8 w-8 text-maximally-neon-purple animate-ping-slow" />
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-maximally-neon-purple to-maximally-neon-pink bg-clip-text text-transparent">
          Our Transparency Pledge
        </h2>
      </div>
      
      <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
        We believe in honest formulations and backed-by-science ingredients. No fillers, no gimmicks—just 
        premium-quality probiotics designed for your gut health.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {transparencyPoints.map((point, index) => (
          <div key={index} className="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300">
            <div className="rounded-full bg-gradient-to-r from-maximally-neon-green to-maximally-neon-blue p-1.5 mt-0.5 group-hover:animate-ping-slow transition-all duration-300">
              <Check className="h-5 w-5 text-white" />
            </div>
            <span className="text-gray-800 font-medium text-lg group-hover:text-maximally-neon-purple transition-colors duration-300">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransparencyStatement;
