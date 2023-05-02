import { useState } from "react";
export function FollowCursor() {
  let [pos, setPos] = useState({ x: 0, y: 0 });

  function followCursor(e) {
    setPos({ x: e.clientX, y: e.clientY });
    // console.log(e.clientX + " " + e.clientY);
  }
  return (
    <div
      onMouseMove={followCursor}
      style={{ height: "100vh", width: "100wh", backgroundColor: "cyan" }}
    >
      <div
        style={{
          position: "absolute",
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          borderRadius: "50%",
          height: "30px",
          width: "30px",
          backgroundColor: "lime",
        }}
      ></div>
    </div>
  );
}
