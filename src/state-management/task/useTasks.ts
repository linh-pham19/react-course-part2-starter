import { useContext } from "react";
import TasksContext from "./tasksContext";

const useTasks = () => useContext(TasksContext);
export default useTasks;