import {useState} from "react"
export default function Slider(){
    const [data,setData] = useState([{
        id:"" ,
        question:"Which of the following is the richest source of vitamin B1 ?" ,
        answer:" Cereal grains" ,
      },{
        id:"" ,
        question:"How many times does the kidney filter blood in a day ?" ,
        answer:"400" ,
      },{
        id:"" ,
        question:"Which of the following is the correct number violin string ?" ,
        answer:"Four" ,
      },{
        id:"" ,
        question:"What sport is played at Wimbledon ?" ,
        answer:"Tennis" ,
      }]);
    const [count,setCount] = useState(0);
    function handleAdd(){
        if(count+1<data.length){
            setCount(count+1)
        }
    }
    function handlePrev(){
        if(count-1>=0){
            setCount(count-1)
        }
    }
      return(
        <div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",fontWeight:"100"}}>
            <h2 data-testid="qes" style={{fontWeight:"300"}}>Qes <span data-testid="span">{count+1}</span>. {data[count].question}</h2>
            <h3 style={{fontWeight:"300"}}>Ans. {data[count].answer}</h3>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <button data-testid="next" onClick={handleAdd}>Next</button>
            <button data-testid="prev" onClick={handlePrev}>Prev</button>
        </div>
        </div>
    )
}

