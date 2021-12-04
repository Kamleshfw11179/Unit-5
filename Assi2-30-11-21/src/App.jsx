import "./App.css"
import { useFetch } from "../util/fetch"
export default function App(){
  const {loading,data,err} = useFetch("https://reqres.in/api/users/5");
  console.log(data,loading)
  if(loading){
    return(
    <div className="App"><h1>Loading...</h1></div>)
  }
    return(
    <div className="App">
    <h1>Fetching data using Api</h1>
    <img src={data.data.avatar}/>
    <h1>{data.data.first_name}</h1></div>)
}