import { createContext } from "react";
import {useState,useEffect} from "react"

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [productList,setproductList] = useState([]);


    return(
        <AppContext.Provider value={{productList,setproductList}}>
        {children}
        </AppContext.Provider>
    )
};
