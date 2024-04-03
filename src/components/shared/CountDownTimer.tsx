"use client";
import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Props {
  endDate: Date;
}

const CountDownTimer = ({ endDate }: Props) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
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

  return (
    <div className="flex items-center gap-5 my-6">
      {/* {timeLeft.days > 0 && <div>{timeLeft.days} Days </div>}
      {timeLeft.hours > 0 && <div>{timeLeft.hours} Hours </div>}
      {timeLeft.minutes > 0 && <div>{timeLeft.minutes} Minutes </div>}
      {timeLeft.seconds > 0 && <>{timeLeft.seconds} Seconds</>}
      {Object.keys(timeLeft).length === 0 && <span>Discount expired</span>} */}
      <div className="flex flex-col gap-1 items-center p-2 bg-color_2 rounded-2xl ">
        <span className="text-3xl md:text-5xl font-bold text-color_1 ">15</span>
        <span className="text-xl font-bold ">Days</span>
      </div>
      <div className="flex flex-col gap-1 items-center p-2 bg-color_2 rounded-2xl  ">
        <span className="text-3xl md:text-5xl font-bold text-color_1 ">13</span>
        <span className="text-xl font-bold ">Hours</span>
      </div>
      <div className="flex flex-col gap-1 items-center p-2 bg-color_2 rounded-2xl  ">
        <span className="text-3xl md:text-5xl font-bold text-color_1">17</span>
        <span className="text-xl font-bold ">Mins</span>
      </div>
      <div className="flex flex-col gap-1 items-center p-2 bg-color_2 rounded-2xl">
        <span className="text-3xl md:text-5xl font-bold text-color_1">11</span>
        <span className="text-xl font-bold ">Secs</span>
      </div>
    </div>
  );
};

export default CountDownTimer;
