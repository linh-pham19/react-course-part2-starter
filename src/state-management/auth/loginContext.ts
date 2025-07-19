import React from "react";
import { Action } from "./LoginProvider";

interface LoginContextType {
    user: string;
    dispatch: React.Dispatch<Action>;
}
const loginContext = React.createContext({} as LoginContextType);

export default loginContext;