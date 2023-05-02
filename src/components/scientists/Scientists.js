import { people } from "./data/data.js";
import { DisplayScientists } from "./DisplayScientists";
import { Button } from "./Button.js";
export function Scientists() {
  return (
    <div>
      <h2>Scientists</h2>
      <Button />
      {people.map((scientist) => {
        return (
          <div key={scientist.id}>
            <DisplayScientists
              id={scientist.id}
              name={scientist.name}
              profession={scientist.profession}
              accomplishment={scientist.accomplishment}
              imageId={scientist.imageId}
            />
          </div>
        );
      })}
    </div>
  );
}
