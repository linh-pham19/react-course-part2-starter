import { useReducer } from "react";
import "./App.css";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/auth/LoginStatus";
import TaskList from "./state-management/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";
import TasksContext from "./state-management/context/tasksContext";
import NavBar from "./state-management/NavBar";
import loginReducer from "./state-management/auth/LoginReducer";
import LoginContext from "./state-management/auth/loginContext";
import LoginProvider from "./state-management/auth/LoginProvider";
import TaskProvider from "./state-management/TaskProvider";

function App() {
  // lifting state up
  // const [tasks, dispatch] = useReducer(tasksReducer, []);

  // const [user, loginDispatch] = useReducer(loginReducer, "");

  return (
    // <>
    //   <h1>React Starter Project</h1>
    //   <LoginStatus />
    //   <Counter />
    // <LoginContext.Provider value={{ user, dispatch: loginDispatch }}>
    <LoginProvider>
      {/* <TasksContext.Provider value={{ tasks, dispatch }}> */}
      <TaskProvider>
        <TaskList />
        <NavBar />
        {/* </TasksContext.Provider> */}
      </TaskProvider>
    </LoginProvider>
    // </LoginContext.Provider>
    // </>
  );
}

export default App;
