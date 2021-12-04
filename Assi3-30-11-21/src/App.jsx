import "./App.css"
import {useState} from "react"
import {useUpdate} from "./util"
export default function App(){
  const {info,getData} = useUpdate();
  const [user,setUser] = useState({
    username:"",
    email:"",
    password:""
  })
  return(
    <>
    <div className="App">
    <label><h3>Username</h3></label>
    <br/>
    <input type="text" name="username" value={user.username} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}  />
    <br/>
    <label><h3>Email</h3></label>
    <br/>
    <input type="text" name="email" value={user.email} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}  />
    <br/>
    <label><h3>Password</h3></label>
    <br/>
    <input type="text" name="password" value={user.password} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}  />
    <br/>
    <br/>
    <button onClick={()=>{getData(user)}}>Change</button>
    <h1>Name:--{info.username}</h1>
    <h1>email:--{info.email}</h1>
    <h1>password:--{info.password}</h1>
    </div>
    </>
  )
}