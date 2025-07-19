import React, { useReducer } from "react";
import loginReducer from "./LoginReducer";
import LoginContext from "./loginContext";

type Props = {
  children: React.ReactNode;
};
export default function LoginProvider({ children }: Props) {
  const [user, dispatch] = useReducer(loginReducer, "");
  return (
    <LoginContext.Provider value={{ user, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
}
