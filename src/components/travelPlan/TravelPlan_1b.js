import { useState } from "react";
import { initialTravelPlan } from "./data/data";
export function TravelPlan_1b() {
  let [plan, setPlan] = useState(initialTravelPlan);
  console.log(plan);
  function deleteId(place, id) {
    let isDeleted = false;
    let places = place.childPlaces;
    for (let i = 0; i < places.length; i++) {
      console.log(places[i].id + " " + id);
      if (places[i].id === id) {
        places.splice(i, 1);
        return true;
      } else {
        isDeleted = deleteId(places[i], id);
        if (isDeleted) {
          return true;
        }
      }
    }
  }
  function handleOnClick(id) {
    let newPlan = structuredClone(plan);
    console.log(newPlan);
    let places = newPlan.childPlaces;
    console.log(places);
    let isDeleted = false;
    for (let i = 0; i < places.length; i++) {
      if (places[i].id === id) {
        console.log(places[i].id + " " + id);
        places.splice(i, 1);
      } else {
        isDeleted = deleteId(places[i], id);
        if (isDeleted) break;
      }
    }
    setPlan(newPlan);
    console.log("deleted");
    console.log(newPlan);
  }

  return (
    <>
      <ol>
        <TraversePlan
          plan={plan.childPlaces}
          handleOnComplete={handleOnClick}
        />
      </ol>
    </>
  );
}
function TraversePlan({ plan, handleOnComplete }) {
  console.log(handleOnComplete);
  return plan.map((element) => {
    return (
      <li key={element.id}>
        {element.title}
        <button onClick={() => handleOnComplete(element.id)}>Visited</button>
        <ol>
          <TraversePlan
            plan={element.childPlaces}
            handleOnComplete={handleOnComplete}
          />
        </ol>
      </li>
    );
  });
}
