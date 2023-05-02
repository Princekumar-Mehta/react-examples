import { useState } from "react";
import { useContext } from "react";
import { TasksDispatchContext } from "./TaskContext";
export function Task({ task }) {
  let [isEdit, setIsEdit] = useState(false);
  const dispatch = useContext(TasksDispatchContext);
  let [newTaskName, setNewTaskName] = useState(task.taskName);
  function handleOnEditSave() {
    if (isEdit) {
      dispatch({
        type: "updated",
        task: { ...task, taskName: newTaskName },
      });
    }
    setIsEdit(!isEdit);
  }
  return (
    <>
      <label>
        <input
          type="checkbox"
          value={task.isDone}
          onChange={() => {
            console.log("chnaged");
            let newTask = {
              ...task,
              isDone: !task.isDone,
            };
            dispatch({
              type: "updated",
              task: { newTask },
            });
          }}
        />
        {isEdit ? (
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => {
              setNewTaskName(e.target.value);
            }}
          />
        ) : (
          task.taskName
        )}
      </label>
      <button onClick={handleOnEditSave}>{isEdit ? "Save" : "Edit"}</button>
      <button
        onClick={() => {
          dispatch({
            type: "deleted",
            taskId: task.taskId,
          });
        }}
      >
        Delete
      </button>
      <br />
    </>
  );
}
