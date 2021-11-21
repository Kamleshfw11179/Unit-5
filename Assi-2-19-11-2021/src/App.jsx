import Home from "./components/Home"
import Login from "./components/Login"
import Setting from "./components/Settings"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import {Routes,Route} from "react-router-dom"
import Protectedroute from "./components/Protectedroute"


export default function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/setting" element={<Protectedroute><Setting/></Protectedroute>}></Route>
      <Route path="/dashboard" element={<Protectedroute><Dashboard /></Protectedroute>}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
    </>
  )
}

