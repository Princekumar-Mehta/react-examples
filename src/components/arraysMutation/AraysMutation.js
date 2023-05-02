import { useState } from "react";

export function ArraysMutaion() {
  let [sculptors, setSculptors] = useState([]);
  let [current, setCurrent] = useState("");

  function handleOnChange(e) {
    setCurrent(e.target.value);
  }
  function handleOnClick() {
    let newSculptors = sculptors.slice();
    newSculptors.push(current);
    setSculptors(newSculptors);
    setCurrent("");
    console.log("clciked");
  }

  return (
    <>
      <input value={current} onChange={handleOnChange} />
      <button onClick={handleOnClick}>add</button>
      <br />
      <ul>
        {sculptors.map((element) => {
          return <li>{element}</li>;
        })}
      </ul>
    </>
  );
}
