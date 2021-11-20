import {Link} from "react-router-dom"
import "./navBar.css"

export default function Nav(){
    return(
        <div className="navBar">
        <h3>Hello</h3>
        <div className="navA">
            <Link to="/"><p>Home</p></Link>
            <Link to="/about"><p>About</p></Link>
            <Link to="/contact"><p>Contact</p></Link>
            <Link to="/services"><p>Services</p></Link>
            <Link to="/login"><p>Login</p></Link>
        </div>
        </div>
    )
}