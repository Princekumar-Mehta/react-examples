import { forwardRef, useRef } from "react";

export function RefOwnDOM() {
  let refInput = useRef();
  return (
    <>
      <MyInput ref={refInput} />
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

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
