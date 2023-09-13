import { createContext } from "react";

export const AuthContext = createContext({
    profile:{},
    handleLogin:()=>{},
    handleLogout:()=>{}
})