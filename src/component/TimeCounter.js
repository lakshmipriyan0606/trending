import React, { useState, useEffect } from 'react';

const SixMonthsTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setMonth(currentDate.getMonth() + 1); 

    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = futureDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeRemaining('Time is up!');
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeRemaining(`${days}  Days :  ${hours} Hrs : ${minutes} Min : ${seconds}s`);
      }
    };

    calculateTimeRemaining();

    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p className='text-2xl mt-3'>{timeRemaining}</p>
    </div>
  );
};

export default SixMonthsTimer;
