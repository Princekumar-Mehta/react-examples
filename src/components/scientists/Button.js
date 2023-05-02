import { useState } from "react";

export function Button() {
  let [count, setCount] = useState(0);
  function increment() {
    console.log("clciked");
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }
  return <button onClick={increment}>Increment {count}</button>;
}
