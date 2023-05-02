import { useState } from "react";
import { initialLetters } from "/home/troth172/Desktop/prince/react/my-react-app/src/components/task_hover_highlight/data/data.js";
import "/home/troth172/Desktop/prince/react/my-react-app/src/components/task_hover_highlight/css/taskHoverHighlight.css";
export function TaskHoverHightlight() {
  let [letters, setLetters] = useState(initialLetters);
  let [highlightLetterId, setHighlightLetterId] = useState(0);
  function handleOnChangeStar(id) {
    console.log("called" + " " + id);
    let newLetters = letters.map((letter) => {
      if (letter.id === id) {
        let newLetter = {
          ...letter,
          isStarred: !letter.isStarred,
        };
        console.log(newLetter);
        return newLetter;
      } else {
        return letter;
      }
    });
    console.log(newLetters);
    setLetters(newLetters);
  }
  function handleOnHover(id) {
    setHighlightLetterId(id);
  }
  function handleOnMoveAway() {
    setHighlightLetterId(-1);
  }
  return (
    <>
      {letters.map((letter) => {
        return (
          <DisplayLetter
            key={letter.id}
            letter={letter}
            highlightLetterId={highlightLetterId}
            handleOnChangeStar={handleOnChangeStar}
            handleOnHover={handleOnHover}
            handleOnMoveAway={handleOnMoveAway}
          />
        );
      })}
    </>
  );
}

function DisplayLetter({
  letter,
  highlightLetterId,
  handleOnChangeStar,
  handleOnHover,
  handleOnMoveAway,
}) {
  return (
    <div
      className={highlightLetterId === letter.id ? "highlighted" : ""}
      onMouseOver={handleOnHover.bind(null, letter.id)}
      onMouseLeave={handleOnMoveAway}
    >
      <button onClick={handleOnChangeStar.bind(null, letter.id)}>
        {letter.isStarred ? "unstar" : "star"}
      </button>
      {letter.subject}
      <br />
    </div>
  );
}
