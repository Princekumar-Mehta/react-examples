import "/home/troth172/Desktop/prince/react/my-react-app/src/components/scientists/css/DisplayScientists.css";
import { getImageUrl } from "./utils.js";
export function DisplayScientists({
  id,
  name,
  profession,
  accomplishment,
  imageId,
}) {
  return (
    <>
      <div className="container">
        <img src={getImageUrl(imageId)} alt={`image of ${name}`} />
        <span className="text">
          <b>{name}</b>: {accomplishment}{" "}
        </span>
      </div>
    </>
  );
}
