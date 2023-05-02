import { useReducer, useState } from "react";
import { initialTaskList } from "./data";
import { DisplayTasks } from "./DisplayTasks";
import { taskReducer } from "./taskReducer";
export function TaskApp() {
  let [taskList, dispatch] = useReducer(taskReducer, initialTaskList);
  let [newTask, setNewTask] = useState("");
  let nextId = initialTaskList.length;
  function handleOnAdd() {
    console.log(nextId);
    dispatch({
      type: "added",
      taskId: nextId,
      taskName: newTask,
    });
  }
  function handleOnDelete(taskId) {
    dispatch({
      type: "deleted",
      taskId: taskId,
    });
  }
  function handleOnUpdate(task) {
    dispatch({
      type: "updated",
      task: task,
    });
  }
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
          handleOnAdd(newTask);
          nextId++;
          setNewTask("");
        }}
      >
        Add
      </button>
      <br />
      <br />
      <DisplayTasks
        taskList={taskList}
        handleOnDelete={handleOnDelete}
        handleOnUpdate={handleOnUpdate}
      />
    </>
  );
}
