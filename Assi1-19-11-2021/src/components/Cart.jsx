import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import "./cart.css"

export default function Cart(){
    const {productList} = useContext(AppContext);
    let num = 0;
    function sum(){
        productList.map((e)=>{
            console.log(productList)
            let sums = Math.round(e.counts * e.pro.price);
            num+=sums
        })
    }
    sum()
    return(
      <>
      {productList.map((e)=>{
          return(
              <div className="div">
              <img className="img" src={e.pro.image} />
              <div style={{width:"20%"}}>
              <p>{e.pro.title}</p>
              </div>
          <h4>Qty: {e.counts}</h4>
          <h4>Price {e.pro.price*e.counts} $$$</h4>
          </div>
          )
      })}
      <div className="gTo">
          <p>Total : {num} $$$</p>
      </div>
      </>
)
    }