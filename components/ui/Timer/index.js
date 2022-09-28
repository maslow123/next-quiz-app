import React from 'react';
import { useStopwatch } from 'react-timer-hook';

export default function Timer({ offsetTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    start,
    pause,
    reset,
  } = useStopwatch({ 
    autoStart: true,
    offsetTimestamp: offsetTimestamp
});
    return (
        <div style={{ width: 100}} className="badge bg-danger">
            <label id="timer">{hours}:{minutes}:{seconds} </label>
        </div>
    );
}