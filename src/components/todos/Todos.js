import { useState } from "react";

export function Todos() {
  let [tasks, setTasks] = useState([
    { id: 0, name: "first task", done: false },
    { id: 1, name: "second task", done: false },
    { id: 2, name: "third task", done: false },
    { id: 3, name: "fourth task", done: false },
  ]);
  function toggle(taskID) {
    let copyTask = structuredClone(tasks);
    copyTask[taskID].done = !copyTask[taskID].done;
    setTasks(copyTask);
  }
  return (
    <>
      <h1>Art Bucket List</h1>
      <h3>My list of art to see:</h3>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                  toggle(task.id);
                  return;
                }}
              />
              {task.name}
            </label>
          </div>
        );
      })}
    </>
  );
}
