import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Product from "./components/Product"
import Products from "./components/Products"
import {Routes,Route} from "react-router-dom"
import PageNot from "./components/Pagenotfound"
function App() {
  return (
    <div>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="*" element={<PageNot/>} />
    </Routes>
    </div>
  )
}

export default App
