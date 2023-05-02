import { useState } from "react";
import "/home/troth172/Desktop/prince/react/my-react-app/src/components/counter/css/counter.css";
export function Game() {
  let [playerX, setPlayerX] = useState(true);
  return (
    <>
      <>
        <DisplayCounter key={playerX} isX={playerX} />
      </>

      <button onClick={() => setPlayerX(!playerX)}>Change Player</button>
    </>
  );
}

function DisplayCounter({ isX }) {
  let [count, setcount] = useState(0);
  function handleOnClick() {
    isX ? setcount((count) => count + 1) : setcount((count) => count + 1);
  }
  return (
    <>
      <div className="container">
        Player Name: {isX ? "X" : "Y"}
        <br />
        Count is : {isX ? count : count}
        <br />
        <button onClick={handleOnClick}>Increment</button>
      </div>
    </>
  );
}
