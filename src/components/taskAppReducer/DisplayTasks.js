import { Task } from "./Task";
export function DisplayTasks({ taskList, handleOnDelete, handleOnUpdate }) {
  return taskList.map((task) => {
    return (
      <Task
        key={task.taskId}
        task={task}
        handleOnDelete={handleOnDelete}
        handleOnUpdate={handleOnUpdate}
      />
    );
  });
}
