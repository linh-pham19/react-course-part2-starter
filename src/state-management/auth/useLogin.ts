import { useContext } from "react";
import LoginContext from "./loginContext";

const useLogin = () => useContext(LoginContext);
export default useLogin;