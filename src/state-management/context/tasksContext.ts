import { Task } from "../reducers/tasksReducer";

// this is the type of tyhe context (the truck that carries the state and dispatch function)
interface TasksContextType {
    tasks: Task[];
    dispatch: React.Dispatch<any>;
}


// create the context with a default value
import { createContext } from "react";
const TasksContext = createContext<TasksContextType>({} as TasksContextType);

export default TasksContext;