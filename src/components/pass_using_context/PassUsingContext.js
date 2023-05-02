// import { ComA } from "./ComA";
// export function PassUsingContext() {
//   return <ComA firstName={"Prnice"} lastName={"Mehta"} />;
// }

import { createContext } from "react";
import { ComA } from "./ComA";

const FirstName = createContext();
const LastName = createContext();

export function PassUsingContext() {
  return (
    <>
      <FirstName.Provider value={"Prince"}>
        <LastName.Provider value={"Mehta"}>
          <ComA firstName={"Prince"} lastName={"Mehta"} />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}
export { FirstName };
export { LastName };
