import "/home/troth172/Desktop/prince/react/my-react-app/src/components/chat/css/chat.css";
import { useState } from "react";
export function Chat() {
  let [to, setTo] = useState("Alice");
  function send() {
    setTimeout(() => {
      alert(`Send Message to ${to === "Alice" ? "Alice" : "Bob"}`);
    }, 5000);
  }
  return (
    <>
      <label htmlFor="to">To:</label>
      <select
        name="to"
        id="to"
        value={to}
        onChange={(e) => {
          setTo(e.target.value);
        }}
      >
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
      </select>
      <br />
      <textarea name="message" id="" cols="30" rows="10"></textarea>
      <br />
      <button onClick={send}>Send</button>
    </>
  );
}
