import { useState } from "react";
import { letters } from "./data.js";
import { Letter } from "./Letter.js";

export function Task4() {
  const [selectedIds, setSelectedIds] = useState([]);

  function handleToggle(toggledId) {
    let newselectedIds = selectedIds.slice();
    const index = newselectedIds.indexOf(toggledId);
    if (index > -1) {
      newselectedIds.splice(index, 1);
    } else {
      newselectedIds.push(toggledId);
    }
    setSelectedIds(newselectedIds);
  }
  console.log(selectedIds);
  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.includes(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedIds.length} letters</b>
        </p>
      </ul>
    </>
  );
}
