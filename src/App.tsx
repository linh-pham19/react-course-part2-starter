import "./App.css";
import LoginProvider from "./state-management/auth/LoginProvider";
import Counter from "./state-management/counter/Counter";
import NavBar from "./state-management/NavBar";
import TaskList from "./state-management/task/TaskList";
import TaskProvider from "./state-management/task/TaskProvider";

function App() {
  // lifting state up
  // const [tasks, dispatch] = useReducer(tasksReducer, []);

  // const [user, loginDispatch] = useReducer(loginReducer, "");

  return (
    <>
      <TaskProvider>
        <TaskList />
        <Counter></Counter>
        <NavBar />
      </TaskProvider>
    </>
  );
}

export default App;

// <>
//   <h1>React Starter Project</h1>
//   <LoginStatus />
//   <Counter />
// <LoginContext.Provider value={{ user, dispatch: loginDispatch }}>
// <LoginProvider>
{
  /* <TasksContext.Provider value={{ tasks, dispatch }}> */
}
// <TaskProvider>
// <>
//   <TaskList />
//   <Counter></Counter>
//   <NavBar />
//   </>
{
  /* </TasksContext.Provider> */
}
{
  /* </TaskProvider>
    </LoginProvider> */
}
// </LoginContext.Provider>
// </>
