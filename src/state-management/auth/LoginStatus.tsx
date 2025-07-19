import React, { useContext } from "react";
import LoginContext from "./loginContext";
import { Action } from "./LoginProvider";
import useLogin from "./useLogin";

interface LoginContextType {
  user: string;
  dispatch: React.Dispatch<Action>;
}
const loginContext = React.createContext({} as LoginContextType);
const LoginStatus = () => {
  // const [user, setUser] = useState('');

  // const [user, dispatch] = useReducer(loginReducer, "");
  // const { user, dispatch } = useContext(LoginContext);
  const { user, dispatch } = useLogin();
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          {/* <a onClick={() => setUser('')} href="#"> */}
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      {/* <a onClick={() => setUser("mosh.hamedani")} href="#"> */}
      <a
        onClick={() => dispatch({ type: "LOGIN", username: "mosh.hamedani" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
