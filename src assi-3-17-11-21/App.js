import Form from "./components/Form"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const {token,name} = useContext(AuthContext);
  if(!token){
  return(
    <Form />
    )  
  }else{
  return(
    <>
   <h1>Hello {name}</h1>
   <div style={{textAlign:"center"}}>
   <h3>Your access token : {token}</h3>
   <button onClick={()=>setToken("")}>LogOut</button>
   </div>
   </>
  )
  }
}

export default App;
