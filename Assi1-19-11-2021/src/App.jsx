import Products from "./components/Products"
import Product from "./components/Product"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Nav from "./components/Nav"
import {Routes,Route} from "react-router-dom"

export default function App() {
return (
  <>
  <Nav></Nav>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/products" element={<Products />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    <Route path="/product/:id" element={<Product />}></Route>
  </Routes>
  </>
)
}

