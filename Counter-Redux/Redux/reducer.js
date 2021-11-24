import { ADD_COUNTER,DEL_COUNTER } from "./actionType"
const initState = {
    counter:0
}


export const reducer = (state=initState,{type,payload})=>{
    console.log(type,state,payload)
    switch(type){
        case ADD_COUNTER:
            return{
                ...state,counter:state.counter+payload
            }
        case DEL_COUNTER:
            return{
                ...state,counter:state.counter-payload
            }
        default:
                return state
    }
   
}