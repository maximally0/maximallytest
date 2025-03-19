
import React, { useState, useEffect } from 'react';
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
        hours: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor(difference / 1000 / 60 % 60),
        seconds: Math.floor(difference / 1000 % 60)
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
  const timerComponents = [{
    label: 'days',
    value: timeLeft.days
  }, {
    label: 'hours',
    value: timeLeft.hours
  }, {
    label: 'minutes',
    value: timeLeft.minutes
  }, {
    label: 'seconds',
    value: timeLeft.seconds
  }];
  
  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-4">
      <h3 className="text-center text-2xl font-normal tracking-tight text-maximally-black mb-8 lowercase">launching in</h3>
      <div className="flex justify-center flex-wrap gap-6">
        {timerComponents.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="bg-white rounded-sm shadow-md p-6 w-24 h-24 flex items-center justify-center animate-count-down">
              <span className="text-4xl font-mono text-maximally-black">{value}</span>
            </div>
            <span className="mt-2 text-sm font-mono text-gray-600">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CountdownTimer;
