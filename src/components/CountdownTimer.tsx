
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  // Setting launch date to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +launchDate - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [
    { label: 'Days', value: timeLeft.days, color: 'from-maximally-green to-maximally-blue' },
    { label: 'Hours', value: timeLeft.hours, color: 'from-maximally-blue to-maximally-purple' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'from-maximally-purple to-maximally-pink' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'from-maximally-pink to-maximally-orange' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto my-12 px-4">
      <div className="flex flex-col items-center gap-3 mb-8">
        <Clock className="h-8 w-8 text-maximally-purple animate-pulse" />
        <h3 className="text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-maximally-purple to-maximally-pink bg-clip-text text-transparent">
          Launching In
        </h3>
      </div>
      
      <div className="flex justify-center flex-wrap gap-6">
        {timerComponents.map(({ label, value, color }) => (
          <div key={label} className="flex flex-col items-center">
            <div className={`glass-card bg-gradient-to-br ${color} bg-opacity-10 p-6 w-24 h-24 flex items-center justify-center animate-float`}>
              <span className="text-4xl font-bold text-gray-800">{value}</span>
            </div>
            <span className="mt-2 text-sm font-semibold text-gray-700 uppercase tracking-wider">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
