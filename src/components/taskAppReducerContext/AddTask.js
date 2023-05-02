import { useState } from "react";
import { useContext } from "react";
import { TasksDispatchContext } from "./TaskContext";
import { initialTaskList } from "./data";
export function AddTask() {
  let nextId = initialTaskList.length;
  let [newTask, setNewTask] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  return (
    <>
      <input
        type="text"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "added",
            taskId: nextId,
            taskName: newTask,
          });
          nextId++;
          setNewTask("");
        }}
      >
        Add
      </button>
    </>
  );
}
