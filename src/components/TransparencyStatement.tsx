
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
    <div className="w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Commitment to Transparency</h2>
      
      <p className="text-lg text-gray-600 mb-8">
        We believe in honest formulations and backed-by-science ingredients. No fillers, no gimmicks—just 
        premium-quality probiotics designed for your gut health.
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
