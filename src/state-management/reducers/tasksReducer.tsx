export interface Task {
  id: number;
  title: string;
}
interface DeleteAction {
  type: "DELETE";
  taskId: number;
}

interface AddAction {
  type: "ADD";
  task: Task;
}

type TaskAction = AddAction | DeleteAction;

const tasksReducer = (state: Task[], action: TaskAction) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.task];
    case "DELETE":
      return state.filter((task) => task.id !== action.taskId);
    default:
      return state;
  }
};

export default tasksReducer;
