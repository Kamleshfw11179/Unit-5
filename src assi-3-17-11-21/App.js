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
   </>
  )
  }
}

export default App;
