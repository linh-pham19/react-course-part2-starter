import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TasksContext from "./task/tasksContext";
import LoginContext from "./auth/loginContext";
import useTasks from "./task/useTasks";
import useLogin from "./auth/useLogin";

const NavBar = () => {
  // THESE ARE FOR USING CONTEXT
  // const { tasks } = useContext(TasksContext);
  // const { user } = useContext(LoginContext);

  // THESE ARE FOR USING CUSTOM HOOKS
  const { tasks } = useTasks();
  const { user } = useLogin();
  return (
    <>
      <p>{user}</p>
      <nav className="navbar d-flex justify-content-between">
        <span className="badge text-bg-secondary">{tasks.length}</span>
        <LoginStatus />
      </nav>
    </>
  );
};

export default NavBar;
