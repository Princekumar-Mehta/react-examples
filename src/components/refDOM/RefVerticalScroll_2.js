import "/home/troth172/Desktop/prince/react/my-react-app/src/components/refDOM/refVerticleScroll_2.css";
import { useRef } from "react";
export function RefVerticalScroll_2() {
  let firstCat = useRef(null);
  let secondCat = useRef(null);
  let thirdCat = useRef(null);
  function firstCatScroll() {
    firstCat.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  }
  function secondCatScroll() {
    secondCat.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  }
  function thirdCatScroll() {
    thirdCat.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  }
  return (
    <>
      <button onClick={firstCatScroll}>cat 1</button>
      <button onClick={secondCatScroll}>cat 2</button>
      <button onClick={thirdCatScroll}>cat 3</button>
      <div>
        <ul>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt=""
              ref={firstCat}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt=""
              ref={secondCat}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/250/200"
              alt=""
              ref={thirdCat}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
