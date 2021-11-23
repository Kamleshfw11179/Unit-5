import { createContext,useState } from "react";


export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [value,setValue] = useState("12345");
    const [state,setState] = useState(false);
    const Value = {value,state,setValue,setState}
    return(
    <AppContext.Provider value={Value}>
    {children}
         </AppContext.Provider>
    )
}