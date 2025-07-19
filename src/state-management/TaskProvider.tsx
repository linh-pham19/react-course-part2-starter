import React, { useReducer } from "react";
import loginReducer from "./auth/LoginReducer";
import LoginContext from "./auth/loginContext";
import TasksContext from "./context/tasksContext";
import tasksReducer from "./reducers/tasksReducer";

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
