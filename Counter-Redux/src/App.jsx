import "./app.css"
import { addCounter, reduceCounter } from "../Redux/action";
import {useContext } from "react";
import { AppContext } from "../Redux/AppContextProvider";
import { useState } from "react";
export default function App(){
  const {dispatch,getState} = useContext(AppContext)
  const {counter} = getState();
  const [state,setState] = useState(0);
  const handleAdd = () =>{
    dispatch(addCounter(1))
    setState(prev=>prev+1)
  }
  const handleReduce = () =>{
    dispatch(reduceCounter(1))
    setState(prev=>prev-1)
  }
  return(
    <div className="App">
    <h1>COUNTER APP</h1>
      <h3>{counter}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  )
}