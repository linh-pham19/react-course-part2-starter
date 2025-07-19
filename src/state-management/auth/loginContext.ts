import React from "react";
import { Action } from "./LoginReducer";

interface LoginContextType {
    user: string;
    dispatch: React.Dispatch<Action>;
}
const loginContext = React.createContext({} as LoginContextType);

export default loginContext;