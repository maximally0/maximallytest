
import React from 'react';
import { Check } from 'lucide-react';

const TransparencyStatement: React.FC = () => {
  const transparencyPoints = [
    "Science-backed ingredients with clinical studies",
    "No fillers or artificial additives",
    "Full ingredient transparency",
    "Third-party testing for potency and purity"
  ];

  return (
    <div className="w-full relative">
      {/* Geometric shapes */}
      <div className="absolute -top-16 -left-4 w-12 h-12 bg-maximally-yellow rounded-full opacity-60 animate-float"></div>
      <div className="absolute top-20 -right-8 w-16 h-16 bg-maximally-blue opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-0 left-1/4 w-10 h-10 bg-maximally-green rounded-sm opacity-50 animate-rotate-slow"></div>
      
      <h2 className="text-3xl font-bold text-maximally-black lowercase mb-6">our commitment to transparency</h2>
      
      <p className="text-lg text-gray-700 mb-8 max-w-2xl">
        No fillers. No gimmicks. Just science-backed, honest probiotics.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {transparencyPoints.map((point, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="rounded-full bg-maximally-green p-1 mt-0.5">
              <Check className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-700">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransparencyStatement;
