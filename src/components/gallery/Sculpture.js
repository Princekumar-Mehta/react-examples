import { useState } from "react";
import "/home/troth172/Desktop/prince/react/my-react-app/src/components/gallery/css/gallery.css";
export function Sculpture({ data, current, total }) {
  let [hide, setHide] = useState(true);
  function showHide() {
    setHide(!hide);
  }
  return current >= total ? (
    <h3>Completed</h3>
  ) : (
    <>
      <br />
      <i>
        {data.name} by {data.artist}
      </i>
      <h5>
        {current + 1} of {total}
      </h5>
      <button onClick={showHide}>
        {hide ? "Show Details" : "Hide Details"}
      </button>
      <h4>{hide ? `` : data.description}</h4>
      <img src={data.url} alt={data.alt} />
    </>
  );
}
