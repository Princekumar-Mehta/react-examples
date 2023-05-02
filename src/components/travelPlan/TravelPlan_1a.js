import { useState } from "react";
import { initialTravelPlan } from "./data/data";
export function TravelPlan_1a() {
  let [plan, setPlan] = useState(initialTravelPlan);
  // console.log(plan);
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
  function traversePlan(plan) {
    return plan.map((element) => {
      return (
        <li key={element.id}>
          {element.title}
          <button onClick={handleOnClick.bind(null, element.id)}>
            Visited
          </button>
          <ol>{traversePlan(element.childPlaces)}</ol>
        </li>
      );
    });
  }
  return (
    <>
      <ol>{traversePlan(plan.childPlaces)}</ol>
    </>
  );
}
