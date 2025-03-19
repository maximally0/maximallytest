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
  return;
};
export default CountdownTimer;