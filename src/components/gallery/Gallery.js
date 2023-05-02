import { sculptureList } from "/home/troth172/Desktop/prince/react/my-react-app/src/components/gallery/data/data.js";
import { Sculpture } from "/home/troth172/Desktop/prince/react/my-react-app/src/components/gallery/Sculpture.js";
import { useState } from "react";
export function Gallery() {
  let [count, setCount] = useState(0);
  function handleNextClick() {
    setCount(count + 1);
  }
  function handlePreviousClick() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <>
      <button onClick={handleNextClick}>next</button>
      <button onClick={handlePreviousClick}>Previous</button>
      <Sculpture
        data={sculptureList[count]}
        current={count}
        total={sculptureList.length}
      />
      <Sculpture
        data={sculptureList[count]}
        current={count}
        total={sculptureList.length}
      />
    </>
  );
}
