import { useState } from "react";
import "./css/counter.css";
export function Counters() {
  let [aboveHR, setAboveHR] = useState(false);
  let [belowHR, setBelowHR] = useState(false);
  return (
    <>
      <>
        {aboveHR && <hr />}
        <DisplayCounter />
        {belowHR && <hr />}
      </>

      <button onClick={() => setAboveHR(!aboveHR)}>Above HR</button>
      <button onClick={() => setBelowHR(!belowHR)}>Below HR</button>
    </>
  );
}

function DisplayCounter() {
  let [count, setCount] = useState(0);
  function handleOnClick() {
    setCount((count) => count + 1);
  }
  return (
    <>
      <div className="container">
        Count is : {count}
        <br />
        <button onClick={handleOnClick}>Increment</button>
      </div>
    </>
  );
}
