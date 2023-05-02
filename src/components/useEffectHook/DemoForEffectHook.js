import React, { useEffect, useState } from "react";

const DemoForEffectHook = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    alert("hiii");
  }, [count1]);
  return (
    <>
      <button onClick={() => setCount1((count) => count + 1)}>
        B1 Number of click {count1} and a effect
      </button>
      <button onClick={() => setCount2((count) => count + 1)}>
        B2 Number of click {count2} and a effect
      </button>
    </>
  );
};

export default DemoForEffectHook;
