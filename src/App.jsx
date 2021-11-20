import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Login from "./components/Login"
import Contact from "./components/Contact"
import {Routes,Route} from "react-router-dom"
import Nav from "./components/Navbar"
function App() {

  return (
  <>
  <Nav />
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
  </Routes>
  </>
  )
}

export default App
