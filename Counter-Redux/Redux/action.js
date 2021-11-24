import { ADD_COUNTER,DEL_COUNTER } from "./actionType"
const addCounter = (payload) =>{
    return{
        type:ADD_COUNTER,
        payload,
    }

}

const reduceCounter =(payload)=>{
    return{
        type:DEL_COUNTER,
        payload
    }
}

export {addCounter,reduceCounter}