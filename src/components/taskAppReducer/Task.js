import { useState } from "react";
export function Task({ task, handleOnDelete, handleOnUpdate }) {
  let [isEdit, setIsEdit] = useState(false);
  let [newTaskName, setNewTaskName] = useState(task.taskName);
  function handleOnEditSave() {
    setIsEdit(!isEdit);
    if (isEdit) {
      handleOnUpdate({ ...task, taskName: newTaskName });
    }
  }
  return (
    <>
      <label key={task.taskId}>
        <input
          type="checkbox"
          value={task.isDone}
          onChange={() => {
            console.log("chnaged");
            let newTask = {
              ...task,
              isDone: !task.isDone,
            };
            handleOnUpdate(newTask);
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
      <button onClick={handleOnDelete.bind(null, task.taskId)}>Delete</button>
      <br />
    </>
  );
}
