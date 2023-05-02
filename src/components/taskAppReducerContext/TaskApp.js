import { useReducer } from "react";
import { initialTaskList } from "./data";
import { DisplayTasks } from "./DisplayTasks";
import { taskReducer } from "./taskReducer";
import { TasksContext, TasksDispatchContext } from "./TaskContext";
import { AddTask } from "./AddTask";
export function TaskAppContextReducer() {
  let [taskList, dispatch] = useReducer(taskReducer, initialTaskList);
  return (
    <>
      <TasksContext.Provider value={taskList}>
        <TasksDispatchContext.Provider value={dispatch}>
          <AddTask />
          <br />
          <br />
          <DisplayTasks />
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </>
  );
}
