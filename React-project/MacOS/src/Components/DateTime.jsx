import React, { useState, useEffect } from 'react';
import './DateTime.scss';

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    // second: '2-digit',
    hour12: true,
  });

  const dateString = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="datetime">
      <div className="date">{dateString}</div>
      <div className="time">{timeString}</div>
    </div>
  );
};

export default DateTime;
