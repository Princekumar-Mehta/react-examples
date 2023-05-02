export function taskReducer(oldTaskList, action) {
  switch (action.type) {
    case "added": {
      return [
        ...oldTaskList,
        {
          taskId: action.taskId,
          taskName: action.taskName,
          isDone: false,
        },
      ];
    }
    case "deleted": {
      console.log(action.taskId);
      return oldTaskList.filter((task) => task.taskId !== action.taskId);
    }
    case "updated": {
      return oldTaskList.map((task) => {
        if (task.taskId === action.task.taskId) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    default: {
      new Error("Action type not foundd");
    }
  }
}
