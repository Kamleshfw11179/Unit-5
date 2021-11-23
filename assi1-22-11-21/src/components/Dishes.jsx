import "./dishes.css"
import { useEffect,useState } from "react";
import axios from "axios";
export default function Dishes(){
    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/${process.env.REACT_APP_KEY}/search.php?s=Arrabiata`)
        .then((res)=>{
            setMeal(res.data.meals[0]);
            var x = res.data.meals[0];
            var arr = [];
            var arr1 = [];
            console.log(res.data.meals[0])
        for(var j in x){
            if(j.includes("strIngredient")){
                if(x[j]!==null&&x[j]!==""){
                    arr.push(x[j])
                }
            }else if(j.includes("strMeasure")){
                if(x[j]!==""&&x[j]!==null){
                    arr1.push(x[j])
                }
            }
        }
        setIngredient(arr);
        setMeasures(arr1);
        })
    },[])

    const [meal,setMeal] = useState({})
    const [ingredient,setIngredient] = useState([]);
    const [measures,setMeasures] = useState([]);
    const [dish,setDish] = useState("")



    const handleChange = (e) =>{
        const value = e.target.value;
        setDish(value)
       
    }

    function getDish(){
        axios.get(`https://www.themealdb.com/api/json/v1/${process.env.REACT_APP_KEY}/search.php?s=${dish}`)
        .then((res)=>{
            if(res.data.meals!==null){
            console.log(res);
            setMeal(res.data.meals[0]);
            var x = res.data.meals[0];
            var arr = [];
            var arr1 = [];
        for(var j in x){
            if(j.includes("strIngredient")){
                if(x[j]!==null&&x[j]!==""){
                    arr.push(x[j])
                }
            }else if(j.includes("strMeasure")){
                if(x[j]!==""&&x[j]!==null){
                    arr1.push(x[j])
                }
            }
        }
        setIngredient(arr);
        setMeasures(arr1);
    }else{
        alert("No meals available.")
    }
        })
   

    }
return(
    <>
    <h1 style={{textAlign:"center" ,fontFamily:"cursive"}}>The Dishes App</h1>
    <div className="search">
    <input type="text"  placeholder="Enter dish name" onChange={handleChange}/>
    <button onClick={getDish}>Submit</button>
    </div>
    <div className="mD">
    <div className="imgS">
    <img className="disI" src={meal.strMealThumb} alt="food"></img>
    <p>{meal.strMeal}</p>
    </div>
    <div className="ingS">
    <h4>Ingredients</h4>
    <div className="ing">{ingredient.map((e)=>{
        return(<li>{e}</li>)
    })}</div>
    </div>
    <div className="meaS">
    <h4>Measures</h4>
    <div className="mea">{measures.map((e)=>{
        return(<li>{e}</li>)
    })}</div>
    </div>
    </div>
    <div className="procedure">
    <h3>Procedure</h3>
    <p>{meal.strInstructions}</p>
    </div>
    </>
)
}