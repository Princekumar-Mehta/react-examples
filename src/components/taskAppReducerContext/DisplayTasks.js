import { Task } from "./Task";
import { useContext } from "react";
import { TasksContext } from "./TaskContext";
export function DisplayTasks() {
  const taskList = useContext(TasksContext);
  return taskList.map((task) => {
    return <Task key={task.taskId} task={task} />;
  });
}
