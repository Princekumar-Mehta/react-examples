import { useState } from "react";
import { initialTravelPlan } from "./data/data_2";
export function TravelPlan2() {
  let [plan, setPlan] = useState(initialTravelPlan);
  console.log(plan);
  function handleOnClick(parent, id) {
    let newPlan = structuredClone(plan);
    console.log(newPlan[id]);
    delete newPlan[id];
    const index = newPlan[parent].childIds.indexOf(id);
    if (index > -1) {
      newPlan[parent].childIds.splice(index, 1);
    }
    console.log(newPlan[id]);
    setPlan(newPlan);
  }
  function traversePlan(parent, key) {
    console.log(key);
    return (
      <li>
        {plan[key].title}
        <button onClick={handleOnClick.bind(null, parent, key)}>
          completed
        </button>
        <ol>
          {plan[key].childIds.map((id) => {
            return <span key={id}>{traversePlan(key, id)}</span>;
          })}
        </ol>
      </li>
    );
  }
  return (
    <ol>
      {plan[0].childIds.map((id) => {
        return <span key={id}>{traversePlan(0, id)}</span>;
      })}
    </ol>
  );
}
