export function Button() {
  function hnadleOnClick(e) {
    console.log("Button clciked");
    e.stopPropagation();
  }
  return <button onClick={hnadleOnClick}>Click me</button>;
}
