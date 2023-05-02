import { useState } from "react";
export function Quiz() {
  let [answer, setAnswer] = useState("");
  let [status, setStatus] = useState("typing");
  let [err, setErr] = useState(null);
  function handleOnChange(e) {
    setAnswer(e.target.value);
  }
  async function handleOnSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    await submitAnswer(answer);
  }
  function submitAnswer(answer) {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (answer.toLowerCase() === "agra") {
          resolve("success");
        } else {
          reject(new Error("Good guess but a wrong answer. Try again!"));
        }
      }, 1500);
    })
      .then((value) => {
        {
          setStatus(value);
        }
      })
      .catch((err) => {
        setStatus("typing");
        setErr(err.message);
      });
  }
  return status === "success" ? (
    <h3>That's correct</h3>
  ) : (
    <>
      <h3>City Quiz</h3>
      <h4>In which city Taj Mahal is located ?</h4>
      <form action="submit" onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={answer}
          onChange={handleOnChange}
          disabled={status === "submitting"}
        />
        <input
          type="submit"
          value="submit"
          disabled={answer.length === 0 || status === "submitting"}
        />
      </form>
      <p className="Error" style={{ color: "red" }}>
        {err ? err : ""}
      </p>
    </>
  );
}
