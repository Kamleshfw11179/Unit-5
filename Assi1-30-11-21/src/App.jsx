import "./App.css"
import {useState,useEffect} from "react"

function useDelay(time){
  const [show,setShow] = useState(false);
  useEffect(()=>{
    console.log("useEffect")
    const timer = setTimeout(()=>{
        setShow(true)
      },time*1000);
      return ()=>clearTimeout(timer)
  },[time])
  return show
}
export default function App(){
let toShow = useDelay(2);
console.log(toShow)
if(!toShow){
  return(
     <div className="App">
      <h1>Loading...</h1>
      </div>
  )
  }
    return(
    
      <div className="App">
      <h1>Hello</h1>
    </div>
    )
}


