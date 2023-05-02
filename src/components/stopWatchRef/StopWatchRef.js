import { useState, useRef } from "react";
export function StopWatchRef() {
  let [startTime, setStartTime] = useState("00");
  let [currentTime, setCurrentTime] = useState("00");
  let timerId = useRef(null);
  function handleStart() {
    setStartTime(Date.now());
    setCurrentTime(Date.now());
    timerId.current = setInterval(() => {
      setCurrentTime(Date.now());
    }, 10);
  }
  function handleStop() {
    clearInterval(timerId.current);
  }

  return (
    <>
      {((currentTime - startTime) / 1000).toFixed(3)}
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
