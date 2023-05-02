import { useReducer } from "react";

export function CounterUsingReducer() {
  let [balance, dispatch] = useReducer(taskReducer, {
    value: 0,
    operations: 0,
  });
  function handleOnIncrement() {
    dispatch({
      type: "increment",
    });
  }
  function handleOnDecrement() {
    dispatch({
      type: "decrement",
    });
  }
  return (
    <>
      <h4>{`Current Balance is ${balance.value} and total operations ${balance.operations}`}</h4>
      <br />
      <button onClick={handleOnIncrement}>Increment</button>
      <br />
      <button onClick={handleOnDecrement}>Decrement</button>
    </>
  );
}

function taskReducer(oldBalance, action) {
  switch (action.type) {
    case "increment": {
      return {
        value: oldBalance.value + 100,
        operations: oldBalance.operations + 1,
      };
    }
    case "decrement": {
      return {
        value: oldBalance.value - 100,
        operations: oldBalance.operations + 1,
      };
    }
    default: {
      throw Error("Action not found");
    }
  }
}
