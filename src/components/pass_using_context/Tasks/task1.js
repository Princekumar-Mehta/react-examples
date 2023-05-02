import { ImageSize } from "./Context.js";
import { useContext } from "react";

App() 
<ImageSize.Provider value={isLarge ? 150 : 100}>
  <List />
</ImageSize.Provider>;

PlaceImage({ place })
const imageS = useContext(ImageSize);
width = { imageS };
height = { imageS };

context.js 
import { createContext } from "react";
export const ImageSize = createContext(150);
