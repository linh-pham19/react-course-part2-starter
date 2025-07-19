import React, { useReducer } from "react";
import TasksContext from "./tasksContext";

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

export { tasksReducer };

type Props = {
  children: React.ReactNode;
};
export default function TaskProvider({ children }: Props) {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}
