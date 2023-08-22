import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    theme:'',
    setTheme:()=>{}
})