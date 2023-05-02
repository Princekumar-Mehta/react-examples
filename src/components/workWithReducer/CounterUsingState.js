import { useState } from "react";

export function CounterUsingState() {
  let [balance, setBalance] = useState({ value: 0, operations: 0 });
  let [number, setNumber] = useState(0);
  function handleOnIncrement() {
    setBalance({
      value: balance.value + number,
      operations: balance.operations + 1,
    });
  }
  function handleOnDecrement() {
    setBalance({
      value: balance.value - number,
      operations: balance.operations + 1,
    });
  }

  return (
    <>
      <h4>{`Current Balance is ${balance.value} and total operations ${balance.operations}`}</h4>
      <br />
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <br />
      <button onClick={handleOnIncrement}>Increment</button>
      <br />
      <button onClick={handleOnDecrement}>Decrement</button>
    </>
  );
}
