import { useContext } from "react";
import { FirstName, LastName } from "./PassUsingContext";

export function ComC() {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <h1>
      I am {fname} {lname}
    </h1>
  );
}
