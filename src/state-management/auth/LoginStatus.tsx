import React, { useContext } from "react";
import LoginContext from "./loginContext";
import { Action } from "./LoginProvider";
import useLogin from "./useLogin";
import useLoginStore from "./store";

interface LoginContextType {
  user: string;
  dispatch: React.Dispatch<Action>;
}
const loginContext = React.createContext({} as LoginContextType);
const LoginStatus = () => {
  // const [user, setUser] = useState('');

  // const [user, dispatch] = useReducer(loginReducer, "");
  // const { user, dispatch } = useContext(LoginContext);
  // const { user, dispatch } = useLogin();

  // use zustand
  const { username, login, logout } = useLoginStore();
  if (username)
    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          {/* <a onClick={() => setUser('')} href="#"> */}
          {/* <a onClick={() => dispatch({ type: "LOGOUT" })} href="#"> */}
          <a onClick={logout} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      {/* <a onClick={() => setUser("mosh.hamedani")} href="#"> */}
      {/* <a
        onClick={() => dispatch({ type: "LOGIN", username: "mosh.hamedani" })}
        href="#"
      > */}
      <a onClick={() => login("mosh.hamedani")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
