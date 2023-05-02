import { Button } from "/home/troth172/Desktop/prince/react/my-react-app/src/components/eventPropogation/Button.js";
import "/home/troth172/Desktop/prince/react/my-react-app/src/components/eventPropogation/css/EventPropogation.css";
export function EventPropogation() {
  function handleOnClick() {
    console.log("div clicked");
  }
  return (
    <div className="navbar" onClick={handleOnClick}>
      <Button />
    </div>
  );
}
