import { useRef } from "react";

export function RefBuiltinDOM() {
  let refInput = useRef();
  return (
    <>
      <input type="text" ref={refInput} />
      <button
        onClick={() => {
          refInput.current.focus();
        }}
      >
        Focus
      </button>
    </>
  );
}
